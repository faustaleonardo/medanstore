import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { CartContext } from '../../context/carts/cartState';
import formatCurrency from '../../utils/formatCurrency';
import renderWarningAlert from '../../utils/renderWarningAlert.js';

const Checkout = () => {
  const { carts, updateCart, countTotalPrice, setError, error } = useContext(
    CartContext
  );
  const [voucher, setVoucher] = useState('');
  const [discount, setDiscount] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    const discountPriceValue = countTotalPrice() * (discount / 100);
    setDiscountPrice(discountPriceValue);

    setFinalPrice(countTotalPrice() - discountPriceValue);
  }, [carts, discount]);

  const handleVoucherSubmit = async event => {
    event.preventDefault();
    if (!voucher) setError('Voucher code must not be empty!');

    try {
      const response = await axios.get(`/api/v1/vouchers/${voucher}`);
      const result = response.data.data.data;

      if (error) setError(null);
      setDiscount(result.discount);
    } catch (err) {
      setError(err.response.data);
    }
    setVoucher('');
  };

  const handleUpdateCart = (id, operator) => {
    const cart = carts.find(cart => cart.id === id);
    if (operator === 'subtract' && cart.quantity <= 1) return;

    return updateCart({
      id,
      operator
    });
  };

  const renderContent = () => {
    return carts.map(cart => {
      return (
        <tr key={cart.id}>
          <th>{cart.name}</th>
          <td>
            <div
              className="btn-pointer text-danger"
              onClick={() => handleUpdateCart(cart.id, 'subtract')}
            >
              <i className="fas fa-minus"></i>
            </div>
            <input
              className="input-quantity ml-2 mr-2"
              name="quantity"
              disabled
              value={cart.quantity}
            />
            <div
              className="btn-pointer text-success"
              onClick={() => handleUpdateCart(cart.id, 'add')}
            >
              <i className="fas fa-plus"></i>
            </div>
          </td>
          <td>{formatCurrency(cart.price)}</td>
          <td>{formatCurrency(cart.price * cart.quantity)}</td>
        </tr>
      );
    });
  };

  if (!carts.length) return <Redirect to="/items" />;

  return (
    <div className="mt-5">
      <h1 className="mb-5">My Shopping Cart</h1>
      <form
        className="form-inline float-right mb-5"
        onSubmit={handleVoucherSubmit}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Voucher Code"
          aria-label="Voucher Code"
          value={voucher}
          onChange={event => setVoucher(event.target.value)}
        />
        <button className="btn btn-success my-2 my-sm-0" type="submit">
          Apply
        </button>
      </form>
      <div className="clearfix"></div>
      {renderWarningAlert(error)}
      {discount ? (
        <div className="alert alert-success" role="alert">
          Congratulations! You have got {discount}% discount :)
        </div>
      ) : (
        ''
      )}
      <table className="table mb-5">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {renderContent()}
          <tr>
            <th>Subtotal</th>
            <td></td>
            <td></td>
            <th>{formatCurrency(countTotalPrice())}</th>
          </tr>
          {discount ? (
            <tr className="text-danger">
              <th>Voucher Code Discount {discount}%</th>
              <td></td>
              <td></td>
              <th>- {formatCurrency(discountPrice)}</th>
            </tr>
          ) : null}
          <tr className="text-success">
            <th>Total</th>
            <td></td>
            <td></td>
            <th>{formatCurrency(finalPrice)}</th>
          </tr>
        </tbody>
      </table>
      <div className="text-right mb-5">
        <button className="btn btn-success">Finish Order</button>
      </div>
    </div>
  );
};

export default Checkout;

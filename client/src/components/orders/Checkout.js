import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import { CartContext } from '../../context/carts/cartState';
import formatCurrency from '../../utils/formatCurrency';
import renderWarningAlert from '../../utils/renderWarningAlert.js';

const Checkout = () => {
  // if (!carts.length) return <Redirect to="/items" />;

  const { carts, setError, error } = useContext(CartContext);
  const [voucher, setVoucher] = useState('');
  const [discount, setDiscount] = useState(0);

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
          <tr>
            <th>1. Samsung S10 Plus</th>
            <td>
              <div className="btn-pointer">
                <i className="fas fa-minus"></i>
              </div>
              <input className="input-quantity ml-2 mr-2" name="quantity" />
              <div className="btn-pointer">
                <i className="fas fa-plus"></i>
              </div>
            </td>
            <td>Rp. 11.000.000</td>
            <td>Rp. 11.000.000</td>
          </tr>
          <tr>
            <th>2. Samsung S10 Plus</th>
            <td>
              <div className="btn-pointer">
                <i className="fas fa-minus"></i>
              </div>
              <input className="input-quantity ml-2 mr-2" name="quantity" />
              <div className="btn-pointer">
                <i className="fas fa-plus"></i>
              </div>
            </td>
            <td>Rp. 11.000.000</td>
            <td>Rp. 11.000.000</td>
          </tr>
          <tr>
            <th>Subtotal</th>
            <td></td>
            <td></td>
            <th>Rp. 22.000.000</th>
          </tr>
          <tr className="text-danger">
            <th>Voucher Code Discount 10%</th>
            <td></td>
            <td></td>
            <th>- Rp. 220.000</th>
          </tr>
          <tr className="text-success">
            <th>Total</th>
            <td></td>
            <td></td>
            <th>Rp. 20.980.000</th>
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

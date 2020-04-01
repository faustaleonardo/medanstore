import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

import { CartContext } from '../../context/carts/cartState';
import formatCurrency from '../../utils/formatCurrency';
import renderWarningAlert from '../../utils/renderWarningAlert.js';
import CourierModal from '../partials/CourierModal';

const Checkout = () => {
  const {
    carts,
    courier,
    error,
    updateCart,
    countTotalPrice,
    countQuantity,
    setCourier,
    setError
  } = useContext(CartContext);

  const [voucher, setVoucher] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [discount, setDiscount] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await axios.get('/api/v1/raja-ongkir/cities');
      const cities = response.data.data.data.rajaongkir.results;
      const filteredCities = cities.map(city => ({
        value: city.city_id,
        label: city.city_name
      }));
      setCities(filteredCities);
    };
    fetchCities();
  }, []);

  useEffect(() => {
    const discountPriceValue = countTotalPrice() * (discount / 100);
    setDiscountPrice(discountPriceValue);

    setFinalPrice(countTotalPrice() - discountPriceValue);
  }, [carts, discount, courier]);

  const handleVoucherSubmit = async event => {
    event.preventDefault();
    if (!voucher) return setError('Voucher code must not be empty!');

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

  // if (!carts.length) return <Redirect to="/items" />;

  return (
    <Fragment>
      <CourierModal city={city} quantity={countQuantity()} />

      <div className="mt-5">
        <h1 className="mb-5">My Shopping Cart</h1>
        <div className="clearfix mb-5">
          <form className="form-inline float-left">
            <Select
              value={city}
              onChange={selectedOption => setCity(selectedOption)}
              options={cities}
              placeholder={'City'}
            />
            <input
              id="destination-address-input"
              className="form-control mr-sm-2"
              type="text"
              placeholder="Address"
              aria-label="Address"
              value={address}
              onChange={event => setAddress(event.target.value)}
            />
            {city && address ? (
              <button
                type="button"
                className="btn btn-success"
                data-toggle="modal"
                data-target="#courierModal"
              >
                Check
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-success"
                data-toggle="modal"
                data-target="#courierModal"
                disabled
              >
                Check
              </button>
            )}
          </form>
          <form
            className="form-inline float-right"
            onSubmit={handleVoucherSubmit}
          >
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Voucher Code"
              aria-label="Voucher Code"
              value={voucher}
              onChange={event => setVoucher(event.target.value)}
            />
            <button className="btn btn-success my-2 my-sm-0" type="submit">
              Apply
            </button>
          </form>
        </div>
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
    </Fragment>
  );
};

export default Checkout;

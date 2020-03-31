import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/carts/cartState';

const CartModal = () => {
  const { carts, updateCart, deleteCart } = useContext(CartContext);

  const countQuantity = () => {
    return carts.reduce((acc, cart) => acc + cart.quantity, 0);
  };

  const renderContent = () => {
    return carts.map(cart => {
      return (
        <div className="row mb-4">
          <div className="col-md-2">
            <img
              src={cart.picturePath}
              className="d-block w-100"
              alt={cart.name}
            />
          </div>
          <div className="col-md-10">
            <div className="clearfix">
              <div className="float-left">
                <p>{cart.name}</p>
              </div>
              <div className="float-right">
                <div className="text-danger btn-pointer">
                  <i className="fas fa-trash"></i>
                </div>
              </div>
            </div>
            <div className="clearfix">
              <div className="float-left">
                <span className="font-weight-bold">Quantity</span>
              </div>
              <div className="float-right">
                <span className="font-weight-bold">Price</span>
              </div>
            </div>
            <div className="clearfix">
              <div className="float-left">
                <div className="btn-pointer">
                  <i className="fas fa-minus"></i>
                </div>
                <input className="input-quantity ml-2 mr-2" name="quantity" />
                <div className="btn-pointer">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="float-right">
                <span>{cart.price}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  if (!carts.length) return null;

  return (
    <div
      className="modal fade"
      id="cartModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="cartTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title" id="cartTitle">
              You have {countQuantity()} item in your cart
            </p>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">{renderContent()}</div>
            <div className="clearfix">
              <div className="border-top mb-3"></div>
              <h4 className="float-left text-uppercase">Total</h4>
              <h5 className="float-right">Rp. 22.000.000,-</h5>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-success">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

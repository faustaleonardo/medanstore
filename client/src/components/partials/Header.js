import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import CartModal from './CartModal';

const Header = () => {
  return (
    <Fragment>
      <CartModal />
      <nav className="navbar navbar-expand-lg navbar-light mb-4 pl-0 pr-0">
        <Link to="/" className="navbar-brand">
          medanstore
        </Link>
        <ul className="navbar-nav mr-auto"></ul>
        <ul className="navbar-nav">
          <li className="nav-item ml-2">
            <Link to="/signup" className="btn btn-outline-success my-2 my-sm-0">
              Signup <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item ml-2">
            <Link to="/login" className="btn btn-success my-2 my-sm-0">
              Login <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/orders" className="nav-link">
              Orders <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item ml-2">
            <button
              type="button"
              className="btn btn-light"
              data-toggle="modal"
              data-target="#cartModal"
            >
              <i className="fas fa-cart-arrow-down"></i> Cart
            </button>
          </li>
          {/* admin only */}
          <li className="nav-item">
            <Link to="/admin/categories" className="nav-link">
              Category <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/items" className="nav-link">
              Item <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/vouchers" className="nav-link">
              Voucher <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-link">
              Logout <span className="sr-only"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Header;

import React, { Fragment, useContext } from 'react';
import { AuthContext } from '../../../context/auth/authState';
import { Link } from 'react-router-dom';

const GuestAndUserNavbar = () => {
  const { auth } = useContext(AuthContext);
  if (auth === false || (auth && auth.roleId === 2)) {
    return (
      <Fragment>
        <li className="nav-item">
          <button
            type="button"
            className="btn btn-light"
            data-toggle="modal"
            data-target="#cartModal"
          >
            <i className="fas fa-cart-arrow-down"></i> Cart
          </button>
        </li>
        <li className="nav-item">
          <Link to="/items" className="nav-link">
            Items <span className="sr-only"></span>
          </Link>
        </li>
      </Fragment>
    );
  }
  return null;
};

export default GuestAndUserNavbar;

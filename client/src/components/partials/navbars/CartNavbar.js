import React, { Fragment, useContext } from 'react';
import { AuthContext } from '../../../context/auth/authState';

const CartNavbar = () => {
  const { auth } = useContext(AuthContext);
  if (auth === false || (auth && auth.roleId === 2)) {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
  return null;
};

export default CartNavbar;

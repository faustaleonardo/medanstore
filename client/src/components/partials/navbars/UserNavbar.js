import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import LogoutNavbar from './LogoutNavbar';

const UserNavbar = () => {
  return (
    <Fragment>
      <li className="nav-item">
        <Link to="/orders" className="nav-link">
          Orders <span className="sr-only"></span>
        </Link>
      </li>
      <LogoutNavbar />
    </Fragment>
  );
};

export default UserNavbar;

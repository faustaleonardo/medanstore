import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 pl-0 pr-0">
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
      </ul>
    </nav>
  );
};

export default Header;

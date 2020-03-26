import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 pl-0 pr-0">
      <a className="navbar-brand" href="#">
        medanstore
      </a>
      <ul className="navbar-nav mr-auto"></ul>
      <ul className="navbar-nav">
        <li className="nav-item ml-2">
          <a className="btn btn-outline-success my-2 my-sm-0" href="#">
            Signup <span className="sr-only"></span>
          </a>
        </li>
        <li className="nav-item ml-2">
          <a className="btn btn-success my-2 my-sm-0" href="#">
            Login <span className="sr-only"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

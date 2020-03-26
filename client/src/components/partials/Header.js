import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        medanstore
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto"></ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
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
      </div>
    </nav>
  );
};

export default Header;

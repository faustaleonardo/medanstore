import React from 'react';
import { Link } from 'react-router-dom';

const item = () => {
  return [...new Array(9)].map(_ => {
    return (
      <div className="col mb-5 text-center">
        <div className="card item-card">
          <Link to="/items/1">
            <img
              src="https://images.mobileshop.eu/1554287985/product-large/samsung-galaxy-s10-plus-dual-sim-1tb-12gb-ram-sm-g975f-ds-ceramic-black.jpg"
              className="card-img-top item-img"
              alt="samsung-10-plus"
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">Samsung S10 Plus</h5>
            <p className="card-text item-price">Rp. 11.000.000,-</p>
            <button className="btn btn-success">Add to cart</button>
          </div>
        </div>
      </div>
    );
  });
};

const ItemList = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 mt-5">
      {item()}
      <nav aria-label="Page navigation" className="item-pagination">
        <ul className="pagination">
          <li className="page-item disabled">
            <Link
              to="/"
              className="page-link"
              tabIndex={-1}
              aria-disabled="true"
            >
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link to="/" className="page-link">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link to="/" className="page-link">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link to="/" className="page-link">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link to="/" className="page-link">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ItemList;

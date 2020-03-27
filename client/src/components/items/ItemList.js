import React from 'react';
import { Link } from 'react-router-dom';

import ConditionCheckbox from './ConditionCheckbox';
import CategoryCheckbox from './CategoryCheckbox';
import SortDropdown from './SortDropdown';
import Pagination from '../partials/Pagination';

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
    <div className="mt-5">
      <div className="clearfix">
        <ConditionCheckbox />
        <SortDropdown />
      </div>
      <div>
        <CategoryCheckbox />
      </div>
      <div className="row row-cols-1 row-cols-md-3 mt-3">
        {item()}
        <Pagination />
      </div>
    </div>
  );
};

export default ItemList;

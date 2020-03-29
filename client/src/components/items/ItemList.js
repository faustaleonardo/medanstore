import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ItemContext } from '../../context/items/itemState';
import formatCurrency from '../../utils/formatCurrency';

import ConditionCheckbox from './ConditionCheckbox';
import CategoryCheckbox from './CategoryCheckbox';
import SortDropdown from './SortDropdown';

const ItemList = () => {
  const { items, getItems, isLoading } = useContext(ItemContext);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(true);

  useEffect(() => {
    getItems(page);

    const hasNextPage = async () => {
      const response = await axios.get(`/api/v1/items/?page=${page + 1}`);
      const data = response.data.data.data;
      if (data.length === 0) setNextPage(false);
      else setNextPage(true);
    };
    hasNextPage();
  }, [page]);

  const renderContent = () => {
    return items.map(item => {
      return (
        <div className="col mb-5 text-center">
          <div className="card item-card">
            <Link to={'/items/' + item.id}>
              <img
                src="https://images.mobileshop.eu/1554287985/product-large/samsung-galaxy-s10-plus-dual-sim-1tb-12gb-ram-sm-g975f-ds-ceramic-black.jpg"
                className="card-img-top item-img"
                alt={item.name}
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text item-price">
                {formatCurrency(item.price)}
              </p>
              <button className="btn btn-success">Add to cart</button>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderPaginate = () => {
    return (
      <nav aria-label="Page navigation" className="item-pagination">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <button
              type="button"
              className="page-link"
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
          </li>
          <li className={`page-item ${nextPage === false ? 'disabled' : ''}`}>
            <button
              type="button"
              className="page-link"
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  if (isLoading) return null;

  return (
    <div className="mt-5">
      <div className="clearfix">
        <ConditionCheckbox />
        <SortDropdown />
      </div>
      <div>
        <CategoryCheckbox />
      </div>
      <div className="row row-cols-1 row-cols-md-3 mt-3">{renderContent()}</div>
      {renderPaginate()}
    </div>
  );
};

export default ItemList;

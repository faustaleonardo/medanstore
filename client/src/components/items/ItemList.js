import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ItemContext } from '../../context/items/itemState';
import formatCurrency from '../../utils/formatCurrency';

import ConditionCheckbox from './ConditionCheckbox';
import CategoryCheckbox from './CategoryCheckbox';
import SortDropdown from './SortDropdown';

const ItemList = () => {
  const { items, setItems } = useContext(ItemContext);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);

  const query = window.location.search;

  useEffect(() => {
    let queryStr = query ? query.replace(/[?]/, '') + '&' : '';
    const fetchItem = async () => {
      const response = await axios.get(
        `/api/v1/items/pictures?${queryStr}page=${page}`
      );
      const result = response.data.data.data;
      setItems(result);
    };

    const hasNextPage = async () => {
      const response = await axios.get(
        `/api/v1/items/pictures?${queryStr}page=${page + 1}`
      );
      const result = response.data.data.data;
      if (result.length === 0) setNextPage(false);
      else setNextPage(true);
    };

    fetchItem();
    hasNextPage();
  }, [page]);

  const renderContent = () => {
    return items.map(item => {
      return (
        <div className="col mb-5 text-center" key={item.id}>
          <div className="card item-card">
            <Link to={'/items/' + item.id}>
              <img
                src={item.pictures[0].path}
                className="card-img-top item-img"
                alt={item.name}
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text text-success item-price">
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

  if (!items.length || nextPage === null) return null;

  return (
    <div className="mt-5">
      <div className="clearfix">
        <ConditionCheckbox />
        <SortDropdown setPage={setPage} />
      </div>
      <div>
        <CategoryCheckbox />
      </div>
      <div className="row row-cols-1 row-cols-md-3 mt-5">{renderContent()}</div>
      {renderPaginate()}
    </div>
  );
};

export default ItemList;

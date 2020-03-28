import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ItemContext } from '../../../context/items/itemState';
import WarningModal from '../../partials/WarningModal';
import formatCurrency from '../../../utils/formatCurrency';

const Item = () => {
  const { items, getItems, deleteItem, isLoading } = useContext(ItemContext);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(true);
  const [id, setId] = useState(null);

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
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{formatCurrency(item.price)}</td>
          <td>{item.stock}</td>
          <td>{item.condition}</td>
          <td>{item.ram}</td>
          <td>{item.storage}</td>
          <td className="text-center">
            <Link
              to={'/admin/items/' + item.id + '/update'}
              className="btn btn-outline-success"
            >
              Update
            </Link>
          </td>
          <td className="text-center">
            <button
              className="btn btn-outline-danger"
              data-toggle="modal"
              data-target="#warningModal"
            >
              Delete
            </button>
          </td>
        </tr>
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

  return (
    <Fragment>
      <WarningModal title="Delete an Item" />
      <div className="clearfix mt-5 mb-3">
        <div className="float-left">
          <h4>Item</h4>
        </div>
        <div className="float-right">
          <Link to="/admin/items/create" className="btn btn-success">
            New Item
          </Link>
        </div>
      </div>
      <table className="table table-bordered table-hover mb-5">
        <thead>
          <tr className="text-uppercase">
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Condition</th>
            <th>RAM</th>
            <th>Storage</th>
            <th className="text-center">Update</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>{renderContent()}</tbody>
      </table>
      {renderPaginate()}
      {/* <Pagination page={page} /> */}
    </Fragment>
  );
};

export default Item;

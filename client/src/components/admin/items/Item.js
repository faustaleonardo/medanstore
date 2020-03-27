import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Pagination from '../../partials/Pagination';
import WarningModal from '../../partials/WarningModal';

const renderContent = () => {
  return [...new Array(10)].map(_ => {
    return (
      <tr>
        <td>1</td>
        <td>Samsung</td>
        <td>Rp. 9.000.000</td>
        <td>100</td>
        <td>New</td>
        <td>8GB</td>
        <td>128GB</td>
        <td>Samsung</td>
        <td className="text-center">
          <Link to="/admin/items/1/update" className="btn btn-outline-success">
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

const Item = () => {
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
            <th>Category</th>
            <th className="text-center">Update</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>{renderContent()}</tbody>
      </table>
      <Pagination />
    </Fragment>
  );
};

export default Item;

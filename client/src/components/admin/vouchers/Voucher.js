import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import WarningModal from '../../partials/WarningModal';

const Voucher = () => {
  return (
    <Fragment>
      <WarningModal title="Delete a Voucher" />

      <div className="clearfix mt-5 mb-3">
        <div className="float-left">
          <h4>Voucher</h4>
        </div>
        <div className="float-right">
          <Link to="/admin/vouchers/create" className="btn btn-success">
            New Voucher
          </Link>
        </div>
      </div>
      <table className="table table-bordered table-hover">
        <thead>
          <tr className="text-uppercase">
            <th>Id</th>
            <th>Code</th>
            <th>Discount</th>
            <th>Valid Until</th>
            <th className="text-center">Update</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Happy 20</td>
            <td>20%</td>
            <td>2 April 2020</td>
            <td className="text-center">
              <Link
                to="/admin/vouchers/1/update"
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
          <tr>
            <td>2</td>
            <td>Nice 30</td>
            <td>30%</td>
            <td>4 April 2020</td>
            <td className="text-center">
              <Link
                to="/admin/vouchers/1/update"
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
        </tbody>
      </table>
    </Fragment>
  );
};

export default Voucher;

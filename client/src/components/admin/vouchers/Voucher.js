import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { VoucherContext } from '../../../context/vouchers/voucherState';
import WarningModal from '../../partials/WarningModal';

const Voucher = () => {
  const { vouchers, getVouchers, deleteVoucher, isLoading } = useContext(
    VoucherContext
  );
  const [id, setId] = useState(null);

  useEffect(() => {
    getVouchers();
  }, []);

  const renderContent = () => {
    return vouchers.map(voucher => {
      return (
        <tr>
          <td>{voucher.id}</td>
          <td>{voucher.code}</td>
          <td className="text-center">{voucher.discount}%</td>
          <td>{voucher.expiredTime}</td>
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
      );
    });
  };

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
            <th className="text-center">Discount</th>
            <th>Valid Until</th>
            <th className="text-center">Update</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>{renderContent()}</tbody>
      </table>
    </Fragment>
  );
};

export default Voucher;

import React, { Fragment } from 'react';

import WarningModal from '../partials/WarningModal';
import Pagination from '../partials/Pagination';

const Order = () => {
  return (
    <Fragment>
      <WarningModal title="Cancel the Order" />

      <div className="mt-5">
        <h1 className="mb-5">My Orders</h1>
        <div className="order-section">
          <div className="alert alert-info">
            Please pay the following order before 3 Apr 2020 13:50
          </div>
          <div className="clearfix">
            <div className="float-left">
              <h4>
                Status:{' '}
                <span className="text-secondary">Waiting for payment</span>
              </h4>
            </div>
            <div className="float-right">
              <button
                type="button"
                className="btn btn-danger"
                data-toggle="modal"
                data-target="#warningModal"
              >
                Cancel the order
              </button>
            </div>
          </div>
          <p className="text-secondary mb-1">
            Order was made on 28 Mar 2020 12:15
          </p>
          <table className="table mb-5">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col" className="text-center">
                  Quantity
                </th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1. Samsung S10 Plus</th>
                <td className="text-center">2</td>
                <td>Rp. 11.000.000</td>
                <td>Rp. 11.000.000</td>
              </tr>
              <tr>
                <th>2. Samsung S10 Plus</th>
                <td className="text-center">1</td>
                <td>Rp. 11.000.000</td>
                <td>Rp. 11.000.000</td>
              </tr>
              <tr>
                <th>Subtotal</th>
                <td></td>
                <td></td>
                <th>Rp. 22.000.000</th>
              </tr>
              <tr className="text-danger">
                <th>Voucher Code Discount 10%</th>
                <td></td>
                <td></td>
                <th>- Rp. 220.000</th>
              </tr>
              <tr className="text-success">
                <th>Delivery Cost</th>
                <td></td>
                <td></td>
                <th>+ Rp. 50.000</th>
              </tr>
              <tr className="text-success">
                <th>Total</th>
                <td></td>
                <td></td>
                <th>Rp. 20.980.000</th>
              </tr>
            </tbody>
          </table>
          <div className="border-bottom mb-5 border-success"></div>

          <h4>
            Status: <span className="text-success">Paid</span>
          </h4>
          <p className="text-secondary mb-1">
            Order was made on 28 Mar 2020 12:15
          </p>
          <table className="table mb-5">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col" className="text-center">
                  Quantity
                </th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1. Samsung S10 Plus</th>
                <td className="text-center">2</td>
                <td>Rp. 11.000.000</td>
                <td>Rp. 11.000.000</td>
              </tr>
              <tr>
                <th>2. Samsung S10 Plus</th>
                <td className="text-center">1</td>
                <td>Rp. 11.000.000</td>
                <td>Rp. 11.000.000</td>
              </tr>
              <tr>
                <th>Subtotal</th>
                <td></td>
                <td></td>
                <th>Rp. 22.000.000</th>
              </tr>
              <tr className="text-danger">
                <th>Voucher Code Discount 10%</th>
                <td></td>
                <td></td>
                <th>- Rp. 220.000</th>
              </tr>
              <tr className="text-success">
                <th>Delivery Cost</th>
                <td></td>
                <td></td>
                <th>+ Rp. 50.000</th>
              </tr>
              <tr className="text-success">
                <th>Total</th>
                <td></td>
                <td></td>
                <th>Rp. 20.980.000</th>
              </tr>
            </tbody>
          </table>

          <div className="border-bottom mb-5 border-success"></div>
          <h4>
            Status: <span className="text-danger">Cancelled</span>
          </h4>
          <p className="text-secondary mb-1">
            Order was made on 28 Mar 2020 12:15
          </p>
          <table className="table mb-5">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col" className="text-center">
                  Quantity
                </th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1. Samsung S10 Plus</th>
                <td className="text-center">2</td>
                <td>Rp. 11.000.000</td>
                <td>Rp. 11.000.000</td>
              </tr>
              <tr>
                <th>2. Samsung S10 Plus</th>
                <td className="text-center">1</td>
                <td>Rp. 11.000.000</td>
                <td>Rp. 11.000.000</td>
              </tr>
              <tr>
                <th>Subtotal</th>
                <td></td>
                <td></td>
                <th>Rp. 22.000.000</th>
              </tr>
              <tr className="text-danger">
                <th>Voucher Code Discount 10%</th>
                <td></td>
                <td></td>
                <th>- Rp. 220.000</th>
              </tr>
              <tr className="text-success">
                <th>Delivery Cost</th>
                <td></td>
                <td></td>
                <th>+ Rp. 50.000</th>
              </tr>
              <tr className="text-success">
                <th>Total</th>
                <td></td>
                <td></td>
                <th>Rp. 20.980.000</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </Fragment>
  );
};

export default Order;

import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import formatDate from '../../utils/formatDate';
import formatCurrency from '../../utils/formatCurrency';

import WarningModal from '../partials/WarningModal';
import Pagination from '../partials/Pagination';

const Order = () => {
  const [payments, setPayments] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/payments?page=${page}`);
        const payments = response.data.data.data;
        for (const payment of payments) {
          const response = await axios.get(
            `api/v1/orders/${payment.orderId}/items`
          );
          payment.orders = response.data.data.data;
        }

        setPayments(payments);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    const hasNextPage = async () => {
      const response = await axios.get(`/api/v1/payments?page=${page + 1}`);
      const result = response.data.data.data;
      if (result.length === 0) setNextPage(false);
      else setNextPage(true);
    };

    fetchData();
    hasNextPage();
  }, [page]);

  const renderContent = () => {
    return payments.map(payment => {
      return (
        <div className="order-section">
          {payment.active ? (
            <div className="alert alert-info">
              Please pay your order before {formatDate(payment.expiredTime)}
            </div>
          ) : null}
          <div className="clearfix">
            <div className="float-left">
              <h4>
                Status:
                {!payment.active && payment.statusPayment ? (
                  <span className="text-succes">Paid</span>
                ) : null}
                {payment.active && !payment.statusPayment ? (
                  <span className="text-secondary">Waiting for Payment</span>
                ) : null}
                {!payment.active && !payment.statusPayment ? (
                  <span className="text-danger">Cancelled</span>
                ) : null}
              </h4>
            </div>

            {payment.active ? (
              <div className="float-right">
                <button type="button" className="btn btn-success">
                  Pay Now
                </button>
                <button
                  type="button"
                  className="btn btn-danger ml-2"
                  data-toggle="modal"
                  data-target="#warningModal"
                >
                  Cancel the order
                </button>
              </div>
            ) : null}
          </div>

          <p className="text-secondary mb-1">
            Ordered on {formatDate(payment.createdAt)} delivered by{' '}
            {payment.courier}
          </p>
          <table className="table mb-5">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col" className="text-center">
                  Quantity
                </th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1. Samsung S10 Plus</th>
                <td className="text-center">2</td>
                <td>Rp. 11.000.000</td>
              </tr>
              <tr>
                <th>Subtotal</th>
                <td></td>
                <th>Rp. 22.000.000</th>
              </tr>
              <tr className="text-success">
                <th>Delivery Cost</th>
                <td></td>
                <th>+ Rp. 50.000</th>
              </tr>
              <tr className="text-danger">
                <th>Voucher Code Discount 10%</th>
                <td></td>
                <th>- Rp. 220.000</th>
              </tr>
              <tr className="text-success">
                <th>Total</th>
                <td></td>
                <th>Rp. 20.980.000</th>
              </tr>
            </tbody>
          </table>
          <div className="border-bottom mb-5 border-success"></div>
        </div>
      );
    });
  };

  if (!payments.length) return null;

  return (
    <Fragment>
      <WarningModal title="Cancel the Order" />

      <div className="mt-5">
        <h1 className="mb-5">My Orders</h1>
        <div className="orders-contaienr">{renderContent()}</div>
      </div>
      <Pagination />
    </Fragment>
  );
};

export default Order;

import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/carts/cartState';
import axios from 'axios';

import formatCurrency from '../../utils/formatCurrency';

const CourierModal = ({ city, quantity }) => {
  const { courier, setCourier, error, setError } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          `/api/v1/raja-ongkir/${city.value}/costs/jne?quantity=${quantity}`,
          {
            quantity
          }
        );
        const jne = response.data.data.data.rajaongkir.results;

        if (error) setError(null);
      } catch (err) {
        setError(err.response.data);
      }
    };
    if (city) fetchData();
  }, [city]);

  if (!city) return null;

  return (
    <div
      className="modal fade"
      id="courierModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="courierTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title" id="cartTitle">
              Choose a courier
            </p>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="text-uppercase">
                    Service
                  </th>
                  <th scope="col" className="text-uppercase">
                    Weight
                  </th>
                  <th scope="col" className="text-uppercase">
                    Cost
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Est. Days
                  </th>
                  <th scope="col" className="text-uppercase text-center">
                    Choose
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">tiki-REG</th>
                  <td>170g x 5 items = 850g</td>
                  <td>{formatCurrency(112000)}</td>
                  <td className="text-center">3</td>
                  <td className="text-center">
                    <button className="btn btn-outline-success btn-sm">
                      Choose
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourierModal;

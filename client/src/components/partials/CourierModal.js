import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/carts/cartState';
import axios from 'axios';

import formatCurrency from '../../utils/formatCurrency';

const CourierModal = ({ city }) => {
  const { courier, setCourier, error, setError } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`/api/v1/raja-ongkir/${city}/costs/jne`);
        const jne = response.data.data.rajaongkir.results;

        response = await axios.get(`/api/v1/raja-ongkir/${city}/costs/pos`);
        const pos = response.data.data.rajaongkir.results;

        response = await axios.get(`/api/v1/raja-ongkir/${city}/costs/tiki`);
        const tiki = response.data.data.rajaongkir.results;

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
      id="cartModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="courierTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title" id="cartTitle">
              Choose your courier
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

          <div className="modal-body">body</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-success"></button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourierModal;

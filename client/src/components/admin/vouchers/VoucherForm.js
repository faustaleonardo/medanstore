import React from 'react';
import { Link } from 'react-router-dom';

const VoucherForm = ({ title, buttonName }) => {
  return (
    <div className="row mt-5">
      <div className="col-sm-8 offset-sm-2">
        <div className="card">
          <div className="card-header">{title}</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="code">Code</label>
                <input type="text" className="form-control" id="code" />
              </div>
              <div className="form-group">
                <label htmlFor="discount">Discount (%)</label>
                <input type="text" className="form-control" id="discount" />
              </div>
              <Link to="/admin/vouchers" className="btn btn-secondary">
                Back
              </Link>
              <button type="submit" className="btn btn-success ml-2">
                {buttonName}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherForm;

import React from 'react';

const ConditionCheckbox = () => {
  return (
    <div>
      <div className="float-left">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="samsungCheckbox"
            value="New"
          />
          <label className="form-check-label" htmlFor="samsungCheckbox">
            New
          </label>
        </div>
      </div>
      <div className="float-left">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="samsungCheckbox"
            value="Used"
          />
          <label className="form-check-label" htmlFor="samsungCheckbox">
            Used
          </label>
        </div>
      </div>
    </div>
  );
};

export default ConditionCheckbox;

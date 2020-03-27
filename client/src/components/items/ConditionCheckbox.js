import React from 'react';

const ConditionCheckbox = () => {
  return [...new Array(2)].map(_ => {
    return (
      <div className="float-left">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="samsungCheckbox"
            defaultValue="1"
          />
          <label className="form-check-label" htmlFor="samsungCheckbox">
            New
          </label>
        </div>
      </div>
    );
  });
};

export default ConditionCheckbox;

import React from 'react';

const CategoryCheckbox = () => {
  return [...new Array(4)].map(_ => {
    return (
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="category"
          defaultValue="1"
        />
        <label className="form-check-label" htmlFor="Category">
          Samsung
        </label>
      </div>
    );
  });
};

export default CategoryCheckbox;

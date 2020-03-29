import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryCheckbox = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('/api/v1/categories');
      const result = response.data.data.data;
      setCategories(result);
    };
    fetchCategories();
  }, []);

  return categories.map(category => {
    return (
      <div className="form-check form-check-inline" key={category.id}>
        <input
          className="form-check-input"
          type="checkbox"
          id="category"
          value={category.id}
        />
        <label className="form-check-label" htmlFor="Category">
          {category.value}
        </label>
      </div>
    );
  });
};

export default CategoryCheckbox;

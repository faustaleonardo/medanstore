import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import { CategoryContext } from '../../../context/categories/categoryState';
import renderWarningAlert from '../../../utils/renderWarningAlert';

const CategoryForm = ({ title, buttonName }) => {
  const [value, setValue] = useState('');
  const { addCategory, updateCategory, setError, error } = useContext(
    CategoryContext
  );
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    setError(null);

    // update category
    const fetchCategory = async () => {
      const response = await axios.get(`/api/v1/categories/${id}`);
      const category = response.data.data.data;
      setValue(category.value);
    };
    if (id) fetchCategory();
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    if (!value) return setError('Value must be filled');

    try {
      if (!id) await addCategory({ value });
      else await updateCategory(id, { value });
      history.push('/admin/categories');
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-sm-8 offset-sm-2">
        {renderWarningAlert(error)}
        <div className="card">
          <div className="card-header">{title}</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="value">Value</label>
                <input
                  type="text"
                  className="form-control"
                  id="value"
                  value={value}
                  onChange={event => setValue(event.target.value)}
                />
              </div>
              <Link to="/admin/categories" className="btn btn-secondary">
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

export default CategoryForm;

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import WarningModal from '../../partials/WarningModal';

const Category = () => {
  return (
    <Fragment>
      <WarningModal title="Delete a Category" />

      <div className="clearfix mt-5 mb-3">
        <div className="float-left">
          <h4>Category</h4>
        </div>
        <div className="float-right">
          <Link to="/admin/categories/create" className="btn btn-success">
            New Category
          </Link>
        </div>
      </div>
      <table className="table table-bordered table-hover">
        <thead>
          <tr className="text-uppercase">
            <th>Id</th>
            <th>Value</th>
            <th className="text-center">Update</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Samsung</td>
            <td className="text-center">
              <Link
                to="/admin/categories/1/update"
                className="btn btn-outline-success"
              >
                Update
              </Link>
            </td>
            <td className="text-center">
              <button
                className="btn btn-outline-danger"
                data-toggle="modal"
                data-target="#warningModal"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Huawei</td>
            <td className="text-center">
              <Link
                to="/admin/categories/1/update"
                className="btn btn-outline-success"
              >
                Update
              </Link>
            </td>
            <td className="text-center">
              <button
                className="btn btn-outline-danger"
                data-toggle="modal"
                data-target="#warningModal"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Apple</td>
            <td className="text-center">
              <Link
                to="/admin/categories/1/update"
                className="btn btn-outline-success"
              >
                Update
              </Link>
            </td>
            <td className="text-center">
              <button
                className="btn btn-outline-danger"
                data-toggle="modal"
                data-target="#warningModal"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Xiaomi</td>
            <td className="text-center">
              <Link
                to="/admin/categories/1/update"
                className="btn btn-outline-success"
              >
                Update
              </Link>
            </td>
            <td className="text-center">
              <button
                className="btn btn-outline-danger"
                data-toggle="modal"
                data-target="#warningModal"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Oppo</td>
            <td className="text-center">
              <Link
                to="/admin/categories/1/update"
                className="btn btn-outline-success"
              >
                Update
              </Link>
            </td>
            <td className="text-center">
              <button
                className="btn btn-outline-danger"
                data-toggle="modal"
                data-target="#warningModal"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default Category;

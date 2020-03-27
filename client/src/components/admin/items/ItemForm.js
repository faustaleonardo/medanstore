import React from 'react';
import { Link } from 'react-router-dom';

const ItemForm = ({ title, buttonName }) => {
  return (
    <div className="row mt-5">
      <div className="col-sm-8 offset-sm-2">
        <div className="card">
          <div className="card-header">{title}</div>
          <div className="card-body">
            <form>
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="price">Price</label>
                  <input type="number" className="form-control" id="price" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="Description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="5"
                ></textarea>
              </div>
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <label htmlFor="stock">Stock</label>
                  <input type="number" className="form-control" id="stock" />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="condition">Condition</label>
                  <select className="form-control" id="condition">
                    <option>New</option>
                    <option>Used</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <label htmlFor="cpu">CPU</label>
                  <textarea
                    className="form-control"
                    id="cpu"
                    rows="2"
                  ></textarea>
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="display">Display</label>
                  <textarea
                    className="form-control"
                    id="display"
                    rows="2"
                  ></textarea>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <label htmlFor="ram">RAM</label>
                  <input type="text" className="form-control" id="ram" />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="storage">Storage</label>
                  <input type="text" className="form-control" id="storage" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="battery">Battery</label>
                <input type="text" className="form-control" id="battery" />
              </div>
              <div className="form-group">
                <label htmlFor="rearCamera">Rear Camera</label>
                <textarea
                  className="form-control"
                  id="rearCamera"
                  rows="2"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="frontCamera">Front Camera</label>
                <input type="text" className="form-control" id="frontCamera" />
              </div>
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <label htmlFor="os">OS</label>
                  <input type="text" className="form-control" id="os" />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="network">Network</label>
                  <input type="text" className="form-control" id="network" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select className="form-control" id="category">
                  <option>Samsung</option>
                  <option>Huawei</option>
                  <option>Apple</option>
                  <option>Xiaomi</option>
                  <option>Oppo</option>
                </select>
              </div>
              <Link to="/admin/items" className="btn btn-secondary">
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

export default ItemForm;

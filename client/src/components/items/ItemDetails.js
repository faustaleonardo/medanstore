import React from 'react';
import { Link } from 'react-router-dom';

import ItemCarousel from './ItemCarousel';

const ItemDetails = () => {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-sm-5 offset-sm-1">
          <ItemCarousel />
        </div>
        <div className="col-sm-5 text-center">
          <h2 className="mt-5 mb-4">Samsung S10 Plus</h2>
          <h1 className="text-success mb-5">Rp. 11.000.000,-</h1>
          <button className="btn btn-success">Add to basket</button>
        </div>
      </div>
      <div className="card mt-5">
        <div className="card-header">Specifications</div>
        <div className="card-body">
          <table className="table table-hover">
            <tbody>
              <tr>
                <th>Category</th>
                <td>Samsung</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>
                  1 New Samsung S10 Plus 128 GB / 256 GB / 1 TB. Phone comes in
                  box Charging Adapter, headphones and charging cable. Also
                  included is remaining warranty from Samsung.
                </td>
              </tr>
              <tr>
                <th>Stock</th>
                <td>100</td>
              </tr>
              <tr>
                <th>Condition</th>
                <td>New</td>
              </tr>
              <tr>
                <th>CPU</th>
                <td>
                  Exynos: Octa-core (2x2.73 GHz Mongoose-M4, 2x2.31 GHz
                  Cortex-A75 and 4x1.95 GHz Cortex-A55)
                </td>
              </tr>
              <tr>
                <th>Display</th>
                <td>
                  3040×1440 (2280×1080 for S10e) 1440p Dynamic AMOLED capacitive
                  touchscreen Gorilla Glass 6
                </td>
              </tr>
              <tr>
                <th>RAM</th>
                <td>8GB</td>
              </tr>
              <tr>
                <th>Storage</th>
                <td>128GB</td>
              </tr>
              <tr>
                <th>Battery</th>
                <td>4100 mAh</td>
              </tr>
              <tr>
                <th>Rear Camera</th>
                <td>
                  12MP Telephoto Camera OIS + 12MP Wide-angle Camera OIS + 16MP
                  Ultra Wide Camera
                </td>
              </tr>
              <tr>
                <th>Front Camera</th>
                <td>10MP Front + 8MP Depth Camera</td>
              </tr>
              <tr>
                <th>Operating System</th>
                <td>Android 10.0 with One UI 2</td>
              </tr>
              <tr>
                <th>Network</th>
                <td>2G, 3G, 4G, 4G LTE, 5G</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

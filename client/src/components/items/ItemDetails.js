import React from 'react';
import { Link } from 'react-router-dom';

import ItemCarousel from './ItemCarousel';

const ItemDetails = () => {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col">
          <ItemCarousel />
        </div>
        <div className="col">
          <h1>Samsung S10 Plus</h1>
          <h1>Rp. 11.000.000,-</h1>
          <button className="btn btn-success">Add to basket</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

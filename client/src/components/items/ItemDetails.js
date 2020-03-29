import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';

import axios from 'axios';

import ItemCarousel from './ItemCarousel';

const ItemDetails = () => {
  const [item, setItem] = useState(null);
  const [category, setCategory] = useState('');
  const [pictures, setPictures] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      // fetch item
      let response = await axios.get(`/api/v1/items/${id}`);
      const fetchedItem = response.data.data.data;
      setItem(fetchedItem);

      // fetch category
      response = await axios.get(
        `/api/v1/categories/${fetchedItem.categoryId}`
      );
      const fetchedCategory = response.data.data.data;
      setCategory(fetchedCategory.value);

      // fetch pictures
      response = await axios.get(`/api/v1/pictures/items/${fetchedItem.id}`);
      const fetchedPictures = response.data.data.data;
      setPictures(fetchedPictures);
    };
    fetchData();
  }, []);

  if (!item || !category || !pictures.length) return null;

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-sm-5 offset-sm-1">
          <ItemCarousel pictures={pictures} />
        </div>
        <div className="col-sm-5 text-center">
          <h2 className="mt-5 mb-4">{item.name}</h2>
          <h1 className="text-success mb-5">{formatCurrency(item.price)}</h1>
          <button className="btn btn-success">Add to cart</button>
        </div>
      </div>
      <div className="card mt-5">
        <div className="card-header">Specifications</div>
        <div className="card-body">
          <table className="table table-hover">
            <tbody>
              <tr>
                <th>Category</th>
                <td>{category}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{item.description}</td>
              </tr>
              <tr>
                <th>Stock</th>
                <td>{item.stock}</td>
              </tr>
              <tr>
                <th>Condition</th>
                <td>New</td>
              </tr>
              <tr>
                <th>CPU</th>
                <td>{item.cpu}</td>
              </tr>
              <tr>
                <th>Display</th>
                <td>{item.display}</td>
              </tr>
              <tr>
                <th>RAM</th>
                <td>{item.ram}</td>
              </tr>
              <tr>
                <th>Storage</th>
                <td>{item.storage}</td>
              </tr>
              <tr>
                <th>Battery</th>
                <td>{item.battery}</td>
              </tr>
              <tr>
                <th>Rear Camera</th>
                <td>{item.rearCamera}</td>
              </tr>
              <tr>
                <th>Front Camera</th>
                <td>{item.frontCamera}</td>
              </tr>
              <tr>
                <th>Operating System</th>
                <td>{item.os}</td>
              </tr>
              <tr>
                <th>Network</th>
                <td>{item.network}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

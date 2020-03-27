import React from 'react';

const Checkout = () => {
  return (
    <div className="mt-5">
      <h1 className="mb-5">My Shopping Cart</h1>
      <form className="form-inline float-right mb-5">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Coupon Code"
          aria-label="Coupon Code"
        />
        <button className="btn btn-success my-2 my-sm-0" type="submit">
          Apply
        </button>
      </form>
      <div className="clearfix"></div>
      <table className="table mb-5">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1. Samsung S10 Plus</th>
            <td>
              <div className="btn-pointer">
                <i class="fas fa-minus"></i>
              </div>
              <input className="input-quantity ml-2 mr-2" name="quantity" />
              <div className="btn-pointer">
                <i class="fas fa-plus"></i>
              </div>
            </td>
            <td>Rp. 11.000.000</td>
            <td>Rp. 11.000.000</td>
          </tr>
          <tr>
            <th>2. Samsung S10 Plus</th>
            <td>
              <div className="btn-pointer">
                <i class="fas fa-minus"></i>
              </div>
              <input className="input-quantity ml-2 mr-2" name="quantity" />
              <div className="btn-pointer">
                <i class="fas fa-plus"></i>
              </div>
            </td>
            <td>Rp. 11.000.000</td>
            <td>Rp. 11.000.000</td>
          </tr>
          <tr>
            <th>Subtotal</th>
            <td></td>
            <td></td>
            <th>Rp. 22.000.000</th>
          </tr>
          <tr className="text-danger">
            <th>Coupon Code Discount</th>
            <td></td>
            <td></td>
            <th>- Rp. 200.000</th>
          </tr>
          <tr className="text-success">
            <th>Total</th>
            <td></td>
            <td></td>
            <th>Rp. 21.800.000</th>
          </tr>
        </tbody>
      </table>
      <div className="text-right mb-5">
        <button className="btn btn-success">
          Continue to payment <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Checkout;

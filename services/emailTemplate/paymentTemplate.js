module.exports = () => {
  return `
    <html>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    />
    <style type="text/css"></style>
    <div class="container">
      <div class="card">
        <div class="card-header text-center">
          Your MEDANSTORE CO. Order
        </div>
        <div class="card-body">
          <h5 class="card-title text-center text-succes">Hello!</h5>
          <p class="cart-text text-center">
            Thank you for shopping with us. Click the following button to complete
            your payment
          </p>
          <div class="text-center mb-5">
            <a href="http:localhost:3000/orders" class="btn btn-success"
              >Pay my orders</a
            >
          </div>
          <div class="border-bottom"></div>
          <p class="text-success mb-2 mt-5">Order Details</p>
          <table class="table">
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
                <td>Samsung</td>
                <td>2</td>
                <td>200000</td>
                <td>Total</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </html>
  `;
};

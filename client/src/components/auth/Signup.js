import React from 'react';

const Signup = () => {
  return (
    <div className="center-vh auth-section">
      <div className="card">
        <div className="card-header">Excellent choice!</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirmation">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="passwordConfirmation"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

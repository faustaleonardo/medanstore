import React from 'react';

const Login = () => {
  return (
    <div className="center-vh login-section">
      <div className="card">
        <div className="card-header">Login</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import WarningAlert from '../partials/WarningAlert';
import { AuthContext } from '../../context/auth/authState';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { login, setError, error } = useContext(AuthContext);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!username && !password) {
      return setError('Username and password must be filled!');
    }

    await login({ username, password });
    setUsername('');
    setPassword('');

    // if (error === null) history.push('/');
  };

  const renderWarning = () => {
    if (error) {
      return <WarningAlert content={error} />;
    }
    return null;
  };

  return (
    <div className="center-vh auth-section">
      {renderWarning()}
      <div className="card">
        <div className="card-header">Welcome back!</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={event => setUsername(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
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

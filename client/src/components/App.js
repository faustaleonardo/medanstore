import React, { useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// partials
import Header from './partials/Header';
import SearchBar from './partials/SearchBar';
import Jumbotron from './partials/Jumbotron';

// auth
import Login from './auth/Login';
import Signup from './auth/Signup';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={SearchBar} />
          <Route exact path="/" component={Jumbotron} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

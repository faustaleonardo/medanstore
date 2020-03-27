import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// partials
import Header from './partials/Header';
import SearchBar from './partials/SearchBar';
import Jumbotron from './partials/Jumbotron';

// auth
import Login from './auth/Login';
import Signup from './auth/Signup';

// items
import ItemList from './items/ItemList';
import ItemDetails from './items/ItemDetails';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <SearchBar />
          <Route exact path="/" component={Jumbotron} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route exact path="/items" component={ItemList} />
          <Route exact path="/items/1" component={ItemDetails} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

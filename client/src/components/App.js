import React, { useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './partials/Header';
import SearchBar from './partials/SearchBar';
import Jumbotron from './partials/Jumbotron';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Header />
          <SearchBar />
          <Jumbotron />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

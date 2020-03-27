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
import ItemList from './item/ItemList';
import ItemDetails from './item/ItemDetails';

// order
import Checkout from './order/Checkout';

// admin manage
import Category from './admin/categories/Category';
import ManageCategory from './admin/categories/ManageCategory';
import Create from './admin/items/Create';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          {true === false ? <SearchBar /> : ''}
          <Route exact path="/" component={Jumbotron} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route exact path="/items" component={ItemList} />
          <Route exact path="/items/1" component={ItemDetails} />

          <Route exact path="/checkout" component={Checkout} />

          {/* admin only */}
          <Route exact path="/admin/categories" component={Category} />
          <Route
            exact
            path="/admin/categories/create"
            render={props => (
              <ManageCategory
                {...props}
                title="Create a Category"
                buttonName="Create"
              />
            )}
          />
          <Route
            exact
            path="/admin/categories/1/update"
            render={props => (
              <ManageCategory
                {...props}
                title="Update the Category"
                buttonName="Update"
              />
            )}
          />

          <Route exact path="/admin/items/create" component={Create} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

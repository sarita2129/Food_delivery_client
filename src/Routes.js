import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import RestaurantInfo from './components/RestaurantInfo';
import ConfirmOrder from './components/ConfirmOrder';


const Routes = (
  <Router>
    <div>
    <Nav />

      <Route exact path="/home" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/signup" component={ Signup } />
      <Route path="/restaurantinfo/:restaurant" component={ RestaurantInfo } />
      <Route path="/confirmorder/:order" component={ ConfirmOrder } />


    </div>
  </Router>
);

export default Routes;

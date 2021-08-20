import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from '../screens/PrivateRoute';
import Home from '../screens/Home.js';
import LoginScreen from '../screens/LoginScreen.js';
import PokedexScreen from '../screens/PokedexScreen';

export default function NavigationApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <PrivateRoute path="/protected" >
          <PokedexScreen />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

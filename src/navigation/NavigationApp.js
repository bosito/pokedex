import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../screens/Home.js';

export default function NavigationApp() {
    return (
        <BrowserRouter>
        {/*navigation */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </BrowserRouter>
    )
}

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Nav from './Nav';
import Home from './Home';
import App from './App';
import Quote from './Quote';

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/App" component={App} />
      <Route exact path="/Quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

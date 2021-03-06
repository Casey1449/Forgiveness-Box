import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import AddGrudge from './components/AddGrudge';
import NotFound from './components/NotFound';
import List from './components/List';
import Detail from './components/Detail';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
      <Route path="/add" component={AddGrudge} />
      <Route path="/:id" component={Detail} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;

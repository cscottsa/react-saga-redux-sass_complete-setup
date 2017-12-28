import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import NotFound from './containers/NotFound';

export default () => (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={Dashboard} />
      <Route path="/404" component={NotFound} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
);

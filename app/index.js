require('es6-promise').polyfill();
require('isomorphic-fetch');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Root } from 'baobab-react/wrappers';

import { createRoutes } from './config/routes';
import tree from './config/state';

const routes = createRoutes(tree);

// For debugging
global.tree = tree;

ReactDOM.render(
  <Root tree={tree}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Root>,
  document.getElementById('mount')
);
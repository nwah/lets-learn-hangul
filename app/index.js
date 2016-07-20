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

// Temporary hack to make [Enter] work
let down = false;
window.addEventListener('keydown', ({keyCode, target}) => {
  if (keyCode !== 13) return;
  if (down) return;
  down = true;
  let elem = document.querySelector('[data-autofocus]');
  let hasActive = document.activeElement && document.activeElement.tagName !== 'BODY';
  if (!hasActive && elem) elem.click();
});

window.addEventListener('keyup', ({keyCode, target}) => {
  down = false;
});
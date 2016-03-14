import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, DefaultRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import reducers from './reducers';
import { createRoutes } from './routes';
import { courseLoaded } from './actions';

import course from './data/course';

console.log('reducers:', reducers);

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

// TODO: this is kinda dumb
const routes = createRoutes(store);

global.store = store;

const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(courseLoaded(course));


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('mount')
);
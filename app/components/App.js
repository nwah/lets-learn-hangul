import React from 'react';
import { IndexLink } from 'react-router';
import Constellation from './Constellation';

const App = ({children, location}) => (
  <div className="app">
    { location.pathname === '/' && <Constellation />}
    <div className="app__main">
      {children}
    </div>
  </div>
);

export default App;
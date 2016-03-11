import React from 'react';
import { IndexLink } from 'react-router';

const App = ({children}) => (
  <div className="app">
    <div className="app__main">
      {children}
    </div>
  </div>
);

export default App;
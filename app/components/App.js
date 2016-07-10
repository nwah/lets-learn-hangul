import React from 'react';
import { IndexLink } from 'react-router';
import Constellation from './Constellation';
import CourseIndex from './CourseIndex';

const App = ({children, location}) => (
  <div className="app">
    { location.pathname === '/' && <Constellation />}
    <div className="app__main">
      {children}
    </div>
    <CourseIndex location={location} />
  </div>
);

export default App;
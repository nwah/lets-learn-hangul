import React from 'react';
import { IndexLink } from 'react-router';
import Constellation from './Constellation';
import CourseIndex from './CourseIndex';
import TransitionGroup from 'react-addons-transition-group';

const App = ({children, location}) => (
  <div className="app">
    { /^\/(?:nowwhat)?$/.test(location.pathname) &&
      <Constellation location={location} />
    }
    <div className="app__main">
      <TransitionGroup>
        {React.cloneElement(children, {
          key: /^(\/[^\/\?]*)/.exec(location.pathname || '/')[1]
        })}
      </TransitionGroup>
    </div>
    <CourseIndex location={location} />
    <div className="app__footer">
      Written, designed, and built by <a href="http://noahburney.net" target="_blank">Noah Burney</a>.
      See <a href="/credits">audio and photo credits</a>.
    </div>
  </div>
);

export default App;
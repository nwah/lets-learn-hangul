import React from 'react';
import {Link} from 'react-router';

const LevelIntro = ({children}) => (
  <div className="level__intro">
    <p>Blah blah blah intro</p>
    <Link to="/level/1/round/1">Start Round 1</Link>
  </div>
);

export default LevelIntro;
import React from 'react';
import {Link} from 'react-router';

const LevelIntro = ({children, params}) => (
  <div className="level__intro">
    <p>Blah blah blah intro {JSON.stringify(params)}</p>
    <Link to="round/1">Start Round 1</Link>
  </div>
);

export default LevelIntro;
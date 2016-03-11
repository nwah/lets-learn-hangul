import React from 'react';
import {Link} from 'react-router';

const RoundLearn = ({children}) => (
  <div className="round__learn">
    <p>Learnin learnin learnin</p>
    <Link to="/level/1/round/1/complete">I've learned it</Link>
  </div>
);

export default RoundLearn;
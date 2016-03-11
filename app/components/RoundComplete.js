import React from 'react';
import {Link} from 'react-router';

const RoundComplete = ({children}) => (
  <div className="round__complete">
    <p>Round Complete!</p>
    <Link to="/level/1/complete">Complete level</Link>
  </div>
);

export default RoundComplete;
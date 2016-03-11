import React from 'react';
import {Link} from 'react-router';

const Complete = ({children}) => (
  <div className="level__complete">
    <p>Level Complete!</p>
    <Link to="/level/2">Go to Level 2</Link>
  </div>
);

export default Complete;
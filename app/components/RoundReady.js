import React from 'react';
import {Link} from 'react-router';

const RoundReady = ({children}) => (
  <div className="round__ready">
    <p>R U READY!?!?</p>
    <Link to="/level/1/round/1/learn/blah">YEAH!</Link>
  </div>
);

export default RoundReady;
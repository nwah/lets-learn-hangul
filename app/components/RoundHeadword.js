import React from 'react';
import {Link} from 'react-router';

const RoundHeadword = ({children}) => (
  <div className="round__headword">
    <p>And here's the headword</p>
    <h4>한강</h4>
    <Link to="/level/1/round/1/ready">Alrighty</Link>
  </div>
);

export default RoundHeadword;
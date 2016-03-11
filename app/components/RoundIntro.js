import React from 'react';
import {Link} from 'react-router';

const RoundIntro = ({children}) => (
  <div className="round__intro">
    <p>Blah blah blah intro</p>
    <Link to="/level/1/round/1/letters">See new letters</Link>
  </div>
);

export default RoundIntro;
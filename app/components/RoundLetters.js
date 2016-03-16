import React from 'react';
import {Link} from 'react-router';

const RoundLetters = ({params, round}) => (
  <div className="round__letters">
    <p>Here's the new letters</p>
    <h4>{round.jamo.join(' ')}</h4>
    <Link to={`/level/${params.level}/round/${params.round}/headword`}>
      See the word
    </Link>
  </div>
);

export default RoundLetters;
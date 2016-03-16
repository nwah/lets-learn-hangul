import React from 'react';
import {Link} from 'react-router';

const RoundHeadword = ({params, round}) => (
  <div className="round__headword">
    <p>And here's the headword</p>
    <h4>{round.headword}</h4>
    <Link to={`/level/${params.level}/round/${params.round}/ready`}>
      Alrighty
    </Link>
  </div>
);

export default RoundHeadword;
import React from 'react';
import {Link} from 'react-router';

const RoundIntro = ({round, params}) => (
  <div className="round__intro">
    <p>{round.text.intro}</p>
    <Link to={`/level/${params.level}/round/${params.round}/letters`}>
      See new letters
    </Link>
  </div>
);

export default RoundIntro;
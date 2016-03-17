import React from 'react';
import {Link} from 'react-router';

const RoundIntro = ({round, params}) => {
  let slides = round.text.intro;
  let text = slides[params.roundIntro] || slides[0];
  let next = (parseFloat(params.roundIntro) || 0) + 1;
  let hasMoreText = next < slides.length;

  return (
    <div className="round__intro">
      <p>{text}</p>

      {hasMoreText ? (
        <Link to={`/level/${params.level}/round/${params.round}/intro/${next}`}>
          Continue
        </Link>
      ) : (
        <Link to={`/level/${params.level}/round/${params.round}/letters`}>
          Continue
        </Link>
      )}
    </div>
  );
}

export default RoundIntro;
import React from 'react';
import {Link} from 'react-router';

const RoundHeadword = ({params, round}) => {
  let slides = round.text.word;
  let text = slides[params.headword] || slides[0];
  let next = (parseFloat(params.headword) || 0) + 1;
  let hasMoreText = next < slides.length;

  return (
    <div className="round__headword">
      <p>The key word for this round is</p>
      <h4>{round.headword}</h4>
      <p>{text}</p>

      {hasMoreText ? (
        <Link to={`/level/${params.level}/round/${params.round}/headword/${next}`}>
          Continue
        </Link>
      ) : (
        <Link to={`/level/${params.level}/round/${params.round}/ready`}>
          Continue
        </Link>
      )}
    </div>
  );
};

export default RoundHeadword;
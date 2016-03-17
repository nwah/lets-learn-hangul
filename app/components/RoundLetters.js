import React from 'react';
import {Link} from 'react-router';

const RoundLetters = ({params, round}) => {
  let slides = round.text.letters;
  let text = slides[params.letters] || slides[0];
  let next = (parseFloat(params.letters) || 0) + 1;
  let hasMoreText = next < slides.length;

  return (
    <div className="round__letters">
      <h4>{round.jamo.join(' ')}</h4>
      <p>{text}</p>

      {hasMoreText ? (
        <Link to={`/level/${params.level}/round/${params.round}/letters/${next}`}>
          Continue
        </Link>
      ) : (
        <Link to={`/level/${params.level}/round/${params.round}/headword`}>
          Continue
        </Link>
      )}
    </div>
  );
};

export default RoundLetters;
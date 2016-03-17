import React from 'react';
import {Link} from 'react-router';

const LevelIntro = ({level, params}) => {
  let slides = level.text.intro;
  let text = slides[params.levelIntro] || slides[0];
  let next = (parseFloat(params.levelIntro) || 0) + 1;
  let hasMoreText = next < slides.length;

  return (
    <div className="level__intro">
      <p>{text}</p>

      {hasMoreText ? (
        <Link to={`/level/${params.level}/intro/${next}`}>
          Continue
        </Link>
      ) : (
        <Link to={`/level/${params.level}/round/1`}>
          Start Round 1
        </Link>
      )}
    </div>
  );
}

export default LevelIntro;
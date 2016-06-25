import React from 'react';
import Markdown from './Markdown';
import { Link } from 'react-router';
import Circle from './Circle';

const LevelIntro = ({level, params}) => {
  let slides = level.text.intro;
  let text = slides[params.levelIntro] || slides[0];
  let next = (parseFloat(params.levelIntro) || 0) + 1;
  let hasMoreText = next < slides.length;

  return (
    <div className="level__intro">
      <Calligraphy />

      <Circle className="level__intro__circle" />

      <div className="bubble level__intro__level">
        {level.level}
      </div>
      <label className="level__intro__level-label">
        Level
      </label>

      <div className="level__intro__inner">
        <Markdown source={text} />
      </div>

      {hasMoreText ? (
        <Link to={`/level/${params.level}/intro/${next}`} className="button button--forward" autoFocus data-autofocus="true">
          Continue
        </Link>
      ) : (
        <Link to={`/level/${params.level}/round/1`} className="button button--forward" autoFocus data-autofocus="true">
          Start Round 1
        </Link>
      )}
    </div>
  );
}

const Calligraphy = ({level}) => (
  <div className="level__intro__calligraphy">
    <Circle r="186px" />
    <img src="/images/calligraphy/whet-your-appetite.svg" width="260" height="260" />
  </div>
);

export default LevelIntro;
import React from 'react';
import Markdown from 'react-remarkable';
import {Link} from 'react-router';
import Circle from './Circle';

const RoundIntro = ({round, params}) => {
  let slides = round.text.intro;
  let text = slides[params.roundIntro] || slides[0];
  let next = (parseFloat(params.roundIntro) || 0) + 1;
  let hasMoreText = next < slides.length;
  let path = (
    hasMoreText ? `/level/${params.level}/round/${params.round}/intro/${next}`
    : `/level/${params.level}/round/${params.round}/letters`
  );

  return (
    <div className="round__intro">
      <Circle className="round__intro__circle" r="128" />

      <div className="bubble bubble--blue round__intro__round">
        {round.round}
      </div>
      <label className="round__intro__round-label">
        Round
      </label>

      <div className="round__intro__inner">
        <Markdown source={text} />
      </div>

      <Link
        className="button button--forward"
        to={path}
        autoFocus>
        Continue
      </Link>
    </div>
  );
}

export default RoundIntro;
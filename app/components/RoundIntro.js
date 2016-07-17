import React from 'react';
import Markdown from 'react-remarkable';
import {Link} from 'react-router';
import Circle from './Circle';

const RoundIntro = ({round, params}) => {
  let slides = round.text.intro;
  let text = slides[params.roundIntro] || slides[0];
  let next = (parseFloat(params.roundIntro) || 0) + 1;
  let prev = (parseFloat(params.roundIntro) || 0) - 1;
  let hasMoreText = next < slides.length;
  let hasLetters = round.jamo && round.jamo.length;
  let hasHeadword = !!round.headword;
  let path = (
    hasMoreText ? `/level/${params.level}/round/${params.round}/intro/${next}`
    : hasLetters ? `/level/${params.level}/round/${params.round}/letters`
    : hasHeadword ? `/level/${params.level}/round/${params.round}/headword`
    : `/level/${params.level}/round/${params.round}/ready`
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

      {prev >= 0 &&
        <Link to={`/level/${params.level}/round/${params.round}${prev > 0 ? `/intro/${prev}` : ''}`} className="button button--link button--back">
          Back
        </Link>
      }

      <Link
        className="button button--forward"
        to={path}
        autoFocus data-autofocus="true">
        Continue
      </Link>
    </div>
  );
}

export default RoundIntro;
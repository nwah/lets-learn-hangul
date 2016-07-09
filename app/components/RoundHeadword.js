import React from 'react';
import Markdown from 'react-remarkable';
import { Link } from 'react-router';
import classNames from 'classnames';
import { getRomanizations } from '../utils';
import Circle from './Circle';
import BigSyllable from './BigSyllable';

const RoundHeadword = ({params, round, shapes}) => {
  let syllables = round.headword.split('');
  let slides = round.text.word;
  let text = slides[params.headword] || slides[0];
  let next = (parseFloat(params.headword) || 0) + 1;
  let hasMoreText = next < slides.length;
  let continuePath = (
    hasMoreText ? `/level/${params.level}/round/${params.round}/headword/${next}`
    : `/level/${params.level}/round/${params.round}/ready`
  );

  return (
    <div className={classNames("round__headword", {
      'one-syllable': syllables.length === 1,
    })}>
      <div className="round__headword__word">
        <Circle />
        <label>Round Keyword</label>
        <div className="round__headword__syllables">
          {syllables.map(syllable => 
            <div className="round__headword__syllable" key={syllable}>
              <BigSyllable syllable={syllable} shapes={shapes} />
              <p className="round__headword__syllable__phonetics">
                {getRomanizations(syllable).ideal}
              </p> 
            </div>
          )}
        </div>
      </div>

      <div className="round__headword__content">
        <Circle />
        <div className="round__headword__content__inner">
          <Markdown source={text} />
        </div>
        <Link className="button button--forward" to={continuePath} autoFocus data-autofocus="true">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default RoundHeadword;
import React from 'react';
import Markdown from 'react-remarkable';
import { Link } from 'react-router';
import classNames from 'classnames';
import { getRomanizations } from '../utils';
import Circle from './Circle';
import BigSyllable from './BigSyllable';

class RoundHeadword extends React.Component {
  render() {
    let {params, round, shapes} = this.props;
    let syllables = round.headword.split('');
    let slides = round.text.word;
    let text = slides[params.headword] || slides[0];
    let next = (parseFloat(params.headword) || 0) + 1;
    let prev = (parseFloat(params.headword) || 0) - 1;
    let lastLetter = (round.jamo || []).length - 1;
    let hasMoreText = next < slides.length;
    let continuePath = (
      hasMoreText ? `/level/${params.level}/round/${params.round}/headword/${next}`
      : `/level/${params.level}/round/${params.round}/ready`
    );
    let backPath = (
      prev >= 0 ? `/level/${params.level}/round/${params.round}/headword${prev > 0 ? `/${prev}` : ''}`
      : round.jamo ? `/level/${params.level}/round/${params.round}/letter${lastLetter > 0 ? `/${lastLetter}` : ''}`
      : `/level/${params.level}/round/${params.round}/intro${round.text.intro.length ? `/${round.text.intro.length - 1}` : ''}`
    );
    let phonetics = getRomanizations(round.headword, true);
    return (
      <div className={classNames("round__headword", {
        'one-syllable': syllables.length === 1,
      })}>
        <div className="round__headword__word">
          <Circle />
          <label>Round Keyword</label>
          <div className="round__headword__syllables">
            {syllables.map((syllable, i) => 
              <div className="round__headword__syllable" key={syllable}>
                <BigSyllable syllable={syllable} shapes={shapes} />
                <p className="round__headword__syllable__phonetics">
                  {phonetics.syllables[i].ideal}
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

          <div className="round__headword__content__buttons back-forward-buttons">
            <Link className="button button--back button--link" to={backPath}>
              Back
            </Link>
            <Link className="button button--forward" to={continuePath} data-autofocus="true">
              Continue
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default RoundHeadword;
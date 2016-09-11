import React from 'react';
import Markdown from 'react-remarkable';
import { findDOMNode } from 'react-dom';
import {Link} from 'react-router';
import Circle from './Circle';

class RoundIntro extends React.Component {
  componentWillEnter(cb) {
    const circle = findDOMNode(this).querySelector('.round__intro__circle');
    TweenLite.from(circle, 0.3,
      {width: '7rem', height: '7rem', onComplete: cb, ease: Back.easeOut},
    );
  }

  componentWillAppear(cb) {
    const circle = findDOMNode(this).querySelector('.round__intro__circle');
    TweenLite.from(circle, 0.6,
      {width: '7rem', height: '7rem', onComplete: cb, ease: Back.easeOut},
    );
  }

  // componentWillLeave(cb) {
  //   const circle = findDOMNode(this).querySelector('.round__intro__circle');
  //   TweenLite.to(circle, 0.3,
  //     {width: '4rem', height: '4rem', onComplete: cb, ease: Back.easeIn},
  //   );
  // }

  render() {
    let {round, params} = this.props;
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

        <div className="round__intro__buttons back-forward-buttons">
          {prev >= 0 &&
            <Link to={`/level/${params.level}/round/${params.round}${prev > 0 ? `/intro/${prev}` : ''}`} className="button button--link button--back">
              Back
            </Link>
          }

          <Link
            className="button button--forward"
            to={path}
            data-autofocus="true">
            Continue
          </Link>
        </div>
      </div>
    );
  }
}

export default RoundIntro;
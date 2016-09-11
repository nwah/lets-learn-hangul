import React from 'react';
import { each } from 'lodash';
import { Link } from 'react-router';
import { isMedial } from '../utils/hangul';
import { getJamoHint } from '../utils/display';
import { findDOMNode } from 'react-dom';
import Circle from './Circle';
import Markdown from './Markdown';
import BigJamo from './BigJamo';

const defaultText = 'New letters for this round…';

function animateIn(cb) {
  const letters = findDOMNode(this).querySelectorAll('.round__letters__jamo');
  const tl = new TimelineLite({onComplete: cb});
  each(letters, (letter, i) => {
    const circle = letter.querySelector('.circle');
    const jamo = letter.querySelector('.big-jamo');
    tl.fromTo(circle, 0.4,
      {scale: 0},
      {scale: 1, ease: Back.easeOut},
      i * 0.1
    );
    tl.fromTo(jamo, 0.4,
      {scale: 0},
      {scale: 1, ease: Back.easeOut},
      i * 0.15
    );
  });
  tl.play(0);
}

class RoundLetters extends React.Component {
  componentWillEnter(cb) {
    return animateIn.call(this, cb);
  }

  componentWillAppear(cb) {
    return animateIn.call(this, cb);
  }

  render() {
    let {params, round, shapes} = this.props;
    // let text = round.text.letters[0] || defaultText;
    let text = defaultText;
    let slide = round.text.intro.length - 1;

    return (
      <div className="round__letters">
        <div className="round__letters__text">
          <Markdown source={text} />
        </div>

        <div className="round__letters__container">
          {round.jamo.map((jamo, i) => (
            <div className="round__letters__jamo" key={jamo}>
              <Circle r="137" />
              <BigJamo jamo={jamo} shapes={shapes} />
              <div className={`bubble ${isMedial(jamo) ? 'bubble--blue' : ''}`}>
                {getJamoHint(jamo)}
              </div>
            </div>
          ))}
        </div>

        <div className="round__letters__buttons back-forward-buttons">
          <Link
            className="button button--back button--link"
            to={`/level/${params.level}/round/${params.round}${slide > 0 ? `/intro/${slide}` : ''}`}>
            Back
          </Link>
          
          <Link
            className="button button--forward"
            to={`/level/${params.level}/round/${params.round}/letter`}
            data-autofocus="true">
            Continue
          </Link>
        </div>
      </div>
    );
  }
}

export default RoundLetters;
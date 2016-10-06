import React from 'react';
import { findDOMNode } from 'react-dom';
import { each } from 'lodash';
import Markdown from 'react-remarkable';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import Circle from './Circle';
import Confetti from './Confetti';
import Congratulations from './Congratulations';

function animateIn(cb) {
  const circles = findDOMNode(this).querySelectorAll('.learned-em-all .circle');
  const tl = new TimelineLite({onComplete: cb});
  each(circles, (circle, i) => {
    tl.fromTo(circle, 0.4,
      {scale: 0},
      {scale: 1, ease: Back.easeOut},
      i * 0.1
    );
  });
  tl.play(0);
}

class LearnedEmAll extends React.Component {
  componentWillEnter(cb) {
    return animateIn.call(this, cb);
  }

  componentWillAppear(cb) {
    return animateIn.call(this, cb);
  }

  render() {
    let {params} = this.props;
    return (
      <div className="learned-em-all">
        <Confetti />

        <div className="learned-em-all__title">
          <Circle r="474" />
          <Congratulations className="learned-em-all__title__calligraphy" />
          <h1>Congratulations!</h1>
          <p>You’ve learned all 40 Hangul letters!</p>
        </div>

        <div className="learned-em-all__more">
          <Circle r="252" />
          <h3>But wait, there’s more!</h3>
          <p>Learn a few special pronunciation rules and you’ll really be able to read Korean like a pro.</p>
          <Link to={'/level/5'} className="button button--forward" data-autofocus="true">
            Go to final level
          </Link>
        </div>
      </div>
    );
  }
}

export default LearnedEmAll;
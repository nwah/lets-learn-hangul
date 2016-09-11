import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import { transitionableBranch } from '../utils/animation';
import { startHistory } from '../actions/user';
import LandingBrushTitle from './LandingBrushTitle';

class Landing extends React.Component {
  componentWillEnter(cb) {
    const circle = findDOMNode(this).querySelector('.landing__circle');
    TweenLite.from(circle, 0.6,
      {width: '7rem', height: '7rem', onComplete: cb, ease: Back.easeOut},
    );
  }

  componentWillAppear(cb) {
    const circle = findDOMNode(this).querySelector('.landing__circle');
    TweenLite.from(circle, 0.6,
      {width: '7rem', height: '7rem', onComplete: cb, ease: Back.easeOut},
    );
  }

  render() {
    let {actions, latest} = this.props;

    return (
      <div className="landing">
        <div className="landing__circle" ref="circle" />
        <LandingBrushTitle className="landing__brush-title" />

        <div className="landing__inner">
          <h1>Let’s Learn <b>Hangul!</b></h1>
          <p>Learn to read Hangul, the simple, beautiful Korean alphabet.</p>
          <p><i>It only takes about an hour. Really.</i> </p>
        </div>

        <Link className="button button--forward"
          to={latest ? '/return' : '/level/1'}
          onMouseDown={actions.startHistory}
          data-autofocus="true">
          Let’s go!
        </Link>
      </div>
    );
  }
}

export default transitionableBranch(Landing, {
  cursors: {
    latest: ['user', 'latest'],
  },
  actions: {
    startHistory,
  }
});
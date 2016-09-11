import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import { transitionableBranch } from '../utils/animation';
import Markdown from 'react-remarkable';
import Circle from './Circle';
import { startSession } from '../actions/session';

class RoundReady extends React.Component {
  componentWillEnter(cb) {
    const circle = findDOMNode(this).querySelector('.round__ready__circle');
    TweenLite.from(circle, 0.3,
      {width: '7rem', height: '7rem', onComplete: cb, ease: Back.easeOut},
    );
  }

  componentWillAppear(cb) {
    const circle = findDOMNode(this).querySelector('.round__ready__circle');
    TweenLite.from(circle, 0.6,
      {width: '7rem', height: '7rem', onComplete: cb, ease: Back.easeOut},
    );
  }

  render() {
    let {params, actions, level, round} = this.props;
    let headword = (round.text.word || []).length - 1;

    return (
      <div className="round__ready">
        <Circle className="round__ready__circle" r="128" />

        <div className="bubble bubble--blue round__ready__round">
          {round.round}
        </div>
        <label className="round__ready__round-label">
          Round
        </label>

        <div className="round__ready__inner">
          <h3>Ready?</h3>
          { round.text.start ? (
            <Markdown source={round.text.start[0]} />
          ) : (
            <p>Ready to learn this round's words?</p>
          )}
        </div>

        <div className="round__ready__buttons back-forward-buttons">
          <Link
            className="button button--back button--link"
            to={`/level/${params.level}/round/${params.round}/headword${headword > 0 ? `/${headword}` : ''}`}>
            Back
          </Link>

          <button
            className="button button--forward"
            onClick={() => actions.startSession(level, round)}
            data-autofocus="true">
            Start!
          </button>
        </div>
      </div>
    );
  }
}

export default transitionableBranch(RoundReady, {
  actions: { startSession }
});
import React from 'react';
import { findDOMNode } from 'react-dom';
import { map, each, flatten, fromPairs, filter } from 'lodash';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import { isMedial } from '../utils/hangul';
import { getJamoHint, formatSeconds } from '../utils/display';
import TransitionGroup from 'react-addons-transition-group';
import BigJamo from './BigJamo';
import JamoTable from './JamoTable';
import Circle from './Circle';

const RoundComplete = ({level, round, rounds, nextRound, newJamos = [], params, shapes, session}) => {
  let showingLetters = params.roundComplete === 'letters';
  let showingReview = params.roundComplete === 'review';

  let path = `/level/${params.level}`;
  path += (
    newJamos.length && !showingLetters && !showingReview ? `/round/${round.round}/complete/review`
    : newJamos.length && showingReview? `/round/${round.round}/complete/letters`
    : nextRound ? `/round/${nextRound.round}`
    : `/complete`
  );

  let current = parseFloat(`${level.level}.${round.round}`);
  let completed = filter(rounds, (round, key) => parseFloat(key) <= current);
  let known = fromPairs(flatten(map(completed, ({jamo}) => map(jamo, j => [j, true]))));

  return (
    <TransitionGroup>
      {(showingLetters || showingReview) ?
        <div className="round__complete" key="letters">
          <div className="round__complete__top">
            {/*<Circle className="round__complete__top__halfcircle" />*/}
            <label>Round Complete!</label>
            {showingReview ?
              <p>You’ve learned&nbsp; {newJamos.length > 1 ? <span><b>{newJamos.length}</b> new Hangul letters!</span> : 'a new Hangul letter!'}</p>
            :
              <p>You now know <b>{Object.keys(known).length}</b> Hangul letters!</p>
            }
          </div>

          <div className="back-forward-buttons">
            <Link to={path} className="button button--forward round__complete__continue-bottom" data-autofocus="true">
              Continue
            </Link>
          </div>

          <TransitionGroup className="transition-group">
            {showingLetters ?
              <JamoTable newJamos={newJamos} known={known} key="jamo-table" />
            :
              <Review round={round} shapes={shapes} key="review" />
            }
          </TransitionGroup>
        </div>
      :
        <Summary round={round} session={session} path={path} key="summary" />
      }
    </TransitionGroup>
  );
}

function summaryAnimateIn(cb) {
  const circles = findDOMNode(this).querySelectorAll('.round__complete .circle');
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

class Summary extends React.Component {
  componentWillEnter(cb) {
    return summaryAnimateIn.call(this, cb);
  }

  componentWillAppear(cb) {
    return summaryAnimateIn.call(this, cb);
  }

  render() {
    let {round, session, path} = this.props;
    let {peeks, totalMisses, words} = session;
    let elapsed = Math.round((session.completed - session.started) / 1000);

    return (
      <div className="round__complete">
        <div className="round__complete__title">
          <Circle r="298" />
          <img className="calligraphy" width="230" height="230" src="/images/calligraphy/round-complete.svg" />
          <div className="round__complete__title__inner">
            <h1>Round Complete!</h1>
            <h2>‘{round.name}’</h2>
          </div>
        </div>

        <div className="round__complete__words">
          <Circle r="146" />
          <label>Words Read</label>
          <div className="value">
            {words.length}
          </div>
        </div>

        <div className="round__complete__time">
          <Circle r="116" />
          <label>Time</label>
          <div className="value">
            {formatSeconds(elapsed)}
          </div>
        </div>

        <div className="round__complete__peeks">
          <Circle r="94" />
          <label>Peeks</label>
          <div className="value negative">
            {peeks.length}
          </div>
        </div>

        <div className="round__complete__misses">
          <Circle r="76" />
          <label>Misses</label>
          <div className="value negative">
            {totalMisses}
          </div>
        </div>

        <div className="back-forward-buttons">
          <Link to={path} className="button button--forward round__complete__continue" data-autofocus="true">
            Continue
          </Link>
        </div>
      </div>
    );
  }
}

function reviewAnimateIn(cb) {
  const letters = findDOMNode(this).querySelectorAll('.round__complete__review__jamo');
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

class Review extends React.Component {
  componentWillEnter(cb) {
    return reviewAnimateIn.call(this, cb);
  }

  componentDidMount(cb) {
    return reviewAnimateIn.call(this, cb);
  }

  render() {
    let {round, shapes} = this.props;
    return (
      <div className="round__complete__review">
        {round.jamo.map((jamo, i) => (
          <div className="round__complete__review__jamo" key={jamo}>
            <Circle r="137" />
            <BigJamo jamo={jamo} shapes={shapes} />
            <div className={`bubble ${isMedial(jamo) ? 'bubble--blue' : ''}`}>
              {getJamoHint(jamo)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default branch(RoundComplete, {
  cursors({params}) {
    let {level, round} = params;
    let key = `${level}.${parseFloat(round)}`;
    let nextKey = `${level}.${parseFloat(round) + 1}`;
    return {
      session: ['session'],
      rounds: ['rounds'],
      nextRound: ['rounds', nextKey],
      newJamos: ['rounds', key, 'jamo'],
    };
  }
});
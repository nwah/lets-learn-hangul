import React from 'react';
import { findDOMNode } from 'react-dom';
import { map, flatten, filter } from 'lodash';
import BezierEasing from 'bezier-easing';
import Markdown from 'react-remarkable';
import { Link } from 'react-router';
import { branch } from 'baobab-react/higher-order';
import Circle from './Circle';
import MissionComplete from './MissionComplete';
import BigWord from './BigWord';
import GeometricJamo from './GeometricJamo';

const ease = BezierEasing(0.4, 0, 0.4, 1);

function animateIn(cb = () => {}) {
  const circle = findDOMNode(this).querySelector('.learned-everything__intro .circle');
  TweenLite.fromTo(circle, 0.3,
    {scale: .5},
    {scale: 1, onComplete: cb, ease: Back.easeOut},
  );
}

class LearnedEverything extends React.Component {
  t0 = 0;
  timer = null;
  animating = false;

  state = {
    duration: 3000,
    showing: 'intro',
    continueButtonShowing: false,
  };

  tick = () => {
    requestAnimationFrame(this.tick);
    if (!this.animating) return;

    let {words, jamos, showing, duration} = this.state;
    let t = ease(Math.min(Math.max(0, (Date.now() - this.t0) / duration), 1));
    
    if (showing === 'letters') {
      let j = Math.round(t * (jamos.length - 1));
      this.setState({j});
      if (j === jamos.length - 1) {
        this.stopAnimating();
        this.timer = setTimeout(this.showWords, 1800);
      }
    }
    else if (showing === 'words') {
      let w = Math.round(t * (words.length - 1));
      this.setState({w});
      if (w === words.length - 1) {
        this.stopAnimating();
        this.timer = setTimeout(this.showContinueButton, 1800);
      }
    }
  };

  startAnimating = () => {
    this.animating = true;
    this.t0 = Date.now();
    this.tick();
  };

  stopAnimating = () => {
    this.animating = false;
  };

  showContinueButton = () => {
    this.setState({continueButtonShowing: true});
  };

  showLetters = () => {
    this.setState({
      duration: 3000,
      showing: 'letters',
      jamos: filter(flatten(map(this.props.rounds, round => round.jamo))),
      j: 0,
    }, this.startAnimating);
  };

  showWords = () => {
    this.setState({
      duration: 4000,
      animating: true,
      showing: 'words',
      words: flatten(map(this.props.rounds, round => [round.headword].concat(round.words))),
      w: 0,
    }, this.startAnimating);
  };

  showOutro = () => {
    this.setState({
      showing: 'outro',
    });
  };

  componentDidMount() {
    return animateIn.call(this);
  }

  render() {
    let {showing, jamos, words, j, w, continueButtonShowing} = this.state;
    let {geometric, shapes} = this.props;

    return (
      <div className="learned-everything">
        {showing === 'intro' ? 
          <div className="learned-everything__intro">
            <Circle r={338} />
            <MissionComplete className="learned-everything__calligraphy" />
            <h1>Mission Complete!</h1>
            <p>You can read Hangul!</p>
            <button
              className="button button--forward"
              data-autofocus="true"
              onClick={this.showLetters}>
              Continue
            </button>
          </div>

        : showing === 'letters' ?
          <div className="learned-everything__letters">
            <Circle r={338} />
            <p>You learned <b>{j + 1}</b> Hangul letters!</p>
            <GeometricJamo jamo={jamos[j]} geometric={geometric} />
          </div>

        : showing === 'words' ?
          <div className="learned-everything__words">
            <Circle r={338} />
            <p>You read <b>{w + 1}</b> Korean words!</p>
            <BigWord word={words[w]} shapes={shapes} clickable={false} />
            {continueButtonShowing &&
              <Link
                to="/nowwhat"
                className="button button--forward"
                data-autofocus="true">
                Now what?
              </Link>
            }
          </div>
        :
          ''
        }
      </div>
    );
  }
}

export default branch(LearnedEverything, {
  cursors: {
    geometric: ['geometric'],
    jamos: ['jamos'],
    words: ['words'],
    shapes: ['shapes'],
    rounds: ['rounds'],
  }
});
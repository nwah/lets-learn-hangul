import React from 'react';
import classNames from 'classnames';
import { map, each } from 'lodash';
import { branch } from 'baobab-react/higher-order';
import { getRomanizations } from '../utils';
import { isMedial } from '../utils/hangul';
import { getJamoHint } from '../utils/display';
import { startSession, continueSession, submitResponse } from '../actions/presession';
import { play, isPlaying } from '../sound';
import Circle from './Circle';
import BigJamo from './BigJamo';
import SoundButton from './SoundButton';

class RoundPreLearn extends React.Component {
  hasAnimatedOptions = false;

  componentDidMount() {
    const {actions, level, round} = this.props;
    actions.startSession(level, round);
    // setTimeout(() => this.animateLetter(), 20);
    // setTimeout(() => this.animateOptions(), 170);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.presession.current !== this.props.presession.current) {
      this.animateLetter();
      this.animateOptions();
    }
  }

  animateLetter() {
    const circle = this.refs.letter.querySelector('.circle');
    TweenLite.fromTo(circle, 0.45,
      {scale: 0.7},
      {scale: 1, ease: Back.easeOut},
    );
  }

  animateOptions() {
    if (this.hasAnimatedOptions) return;
    this.hasAnimatedOptions = true;
    
    const options = this.refs.options.querySelectorAll('.round__prelearn__option');
    const tl = new TimelineLite();
    each(options, (option, i) =>
      tl.from(option, 0.3, {scale: 0.5}, i * 0.15)
    );
    tl.play();
  }

  render() {
    let {params, presession, round, shapes, words, actions} = this.props;
    let {jamos, showCorrect, current, options} = presession;

    return (
      <div className={classNames('round__prelearn', {
        'show-correct': showCorrect,
      })}>
        <div className='round__prelearn__jamo' ref='letter'>
          <Circle r={245} />
          <label>New Letter</label>
          <BigJamo jamo={current} shapes={shapes} />
        </div>

        <div className='round__prelearn__options' ref='options'>
          <p>What sound does this letter make?</p>
          {map(options, jamo =>
            <button
              key={jamo}
              className={classNames('round__prelearn__option', {
                'bubble': true,
                'bubble--blue': isMedial(jamo),
                'correct': showCorrect && jamo === current,
              })}
              onClick={e => !showCorrect && actions.submitResponse(jamo)}
            >
              {getJamoHint(jamo)}
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default branch(RoundPreLearn, {
  actions: {startSession, continueSession, play, submitResponse},
  cursors: {presession: ['presession']}
});
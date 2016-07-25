import React from 'react';
import classNames from 'classnames';
import { map } from 'lodash';
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

  componentDidMount() {
    const {actions, level, round} = this.props;
    actions.startSession(level, round);
  }

  render() {
    let {params, presession, round, shapes, words, actions} = this.props;
    let {jamos, showCorrect, current, options} = presession;

    return (
      <div className={classNames('round__prelearn', {
        'show-correct': showCorrect,
      })}>
        <div className='round__prelearn__jamo'>
          <Circle r={245} />
          <label>New Letter</label>
          <BigJamo jamo={current} shapes={shapes} />
        </div>

        <div className='round__prelearn__options'>
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
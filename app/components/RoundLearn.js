import React from 'react';
import classNames from 'classnames';
import { branch } from 'baobab-react/higher-order';
import Markdown from 'react-remarkable';
import { getRomanizations } from '../utils';
import { continueSession, handlePeek } from '../actions/session';
import { dismissHint } from '../actions/user';
import { play, isPlaying } from '../sound';
import Image from './Image';
import Circle from './Circle';
import BigWord from './BigWord';
import LearnResponseForm from './LearnResponseForm';
import SoundButton from './SoundButton';
import Tooltip from './Tooltip';

class RoundLearn extends React.Component {

  preventScroll = (e) => {
    e.preventDefault();
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  };

  continueSession = (e) => {
    this.props.actions.continueSession();
    let fatInput = document.querySelector('.round__learn__entry .fat-input');
    fatInput.removeAttribute('disabled');
    fatInput.focus();
  };

  componentDidMount() {
    window.addEventListener('scroll', this.preventScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.preventScroll);
  }

  render() {
    let {params, session, shapes, words, actions, hinted} = this.props;
    let {current: word, response, showCorrect, responseError, showAnswer, currentMisses} = session;
    let {image, audio, translation, latin} = words[word];

    let hasImage = image && image.url;
    let hasAudio = audio && audio.url;

    let phonetics = getRomanizations(word, true).syllables
      .map(syllable => syllable.ideal).join(' · ');

    return (
      <div className={classNames('round__learn', {
        'has-image': hasImage,
        'has-audio': hasAudio,
        'show-correct': showCorrect,
        'one-syllable': word.length === 1, 
        'medium-word': word.length > 3 && word.length < 5,
        'long-word': word.length >= 5,
      })}>
        <div className='round__learn__new-word'>
          <Circle className="round__learn__new-word__circle" />
          <label>New word</label>
          
          { (!hinted.peeking && currentMisses > 0) && 
            <Tooltip
              text="Click a letter to peek at its pronunciation"
              onClick={() => actions.dismissHint('peeking')} />
          }

          <BigWord word={word} shapes={shapes} onPeek={actions.handlePeek} />
          <div className="round__learn__phonetics">{phonetics}</div>

          { hasImage && (
            <div className="round__learn__image">
              <Image src={image.url} width="420" height="420" />
            </div>
          )}

          { hasAudio && (
            <div className="round__learn__audio">
              <SoundButton url={audio.url} />
            </div>
          )}
        </div>

        { showCorrect && (
          <div className="round__learn__correct-word">
            <Circle />
            <label>Meaning</label>
            <h3>{translation}</h3>
          </div>
        )}

        <div
          className={classNames("round__learn__entry", {
            'correct': showCorrect,
          })}
          ref="entry">
          <Circle />
          { showCorrect
            ? <label className="correct">Correct!</label>
            : showAnswer ? <label>The Correct Answer is</label>
            : responseError ? <label className="error">Oops!</label>
            : <label>Romanization</label>
          }
          
          { showAnswer
            ? <div className="round__learn__entry__correct-answer">
                {getRomanizations(word, true).ideal}
              </div>
            : <LearnResponseForm word={word} onFocus={this.preventScroll} /> }

          { (showCorrect || showAnswer) &&
            <button
              className="button--blue button--forward"
              onClick={this.continueSession}
              data-autofocus="true">
              Next
            </button>
          }

          { !hinted.romanization && 
            <Tooltip
              text="Type the pronunciation of the Korean word here"
              onClick={() => actions.dismissHint('romanization')} />
          }
        </div>
      </div>
    );
  }
}

export default branch(RoundLearn, {
  actions: {continueSession, play, handlePeek, dismissHint},
  cursors: {
    session: ['session'],
    hinted: ['user', 'hinted'],
  }
});
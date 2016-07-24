import { reduce, get, mapKeys } from 'lodash';
import { browserHistory } from 'react-router';
import { checkRomanization } from '../utils/validation';
import { setLatest } from './user';
import { playEffect, play, preload } from '../sound';

export function startSession(tree, level, round) {
  let words = [round.headword].concat(round.words);

  // TODO: Store defaults somewhere?
  tree.set('session', {
    active: true,
    paused: false,
    complete: false,
    showCorrect: false,
    showAnswer: false,
    level: level,
    round: round,
    words: words,
    queue: words.slice(),
    current: words[0],
    response: '',
    responseError: null,
    currentMisses: 0,
    peeks: [],
    started: Date.now(),
    elapsed: 0
  });

  // TODO: Should this live in the action?
  browserHistory.push(`/level/${level.level}/round/${round.round}/learn`);

  let sounds = reduce(words, (arr, w) => {
    let word = tree.get('words', w);
    let url = get(word, 'audio.url');
    return url ? arr.concat([url]) : arr;
  }, []);
  preload(sounds);

  playEffect('ready');
}

export function continueSession(tree) {
  const session = tree.select('session');
  let queue = session.get('queue');

  session.set('response', '');
  session.set('showCorrect', false);
  session.set('showAnswer', false);
  session.set('currentMisses', 0);

  if (queue.length === 0) {
    return completeSession(tree);
  }
  session.set('current', queue[0]);

  // TODO: Don't do this
  setTimeout(() => {
    let input = document.querySelector('.learn-response-form .fat-input');
    input.focus();
    input.select();
  }, 15);
}

export function skipWord(tree) {
  const session = tree.select('session');
}

export function updateResponse(tree, response) {
  const session = tree.select('session');
  session.set('response', response);
  session.set('responseError', null);
  tree.commit();
}

export function submitResponse(tree) {
  let session = tree.select('session');
  session.set('responseError', null);

  let word = session.get('current');
  let response = session.get('response');
  let phonetic = session.get('level').level === 5; // TODO: Make this smarter
  let result = checkRomanization(word, response, phonetic);
  let meta = tree.get('words', word);

  if (result.correct) handleCorrectResponse(session, result, meta);
  else handleIncorrectResponse(session, result, meta);
}

function handleCorrectResponse(session, result, meta) {

  playEffect('correct');
  if (meta.audio && meta.audio.url) {
    setTimeout(() => play(meta.audio.url), 400);
  }

  session.set('queue', session.get('queue').slice(1));
  session.set('showCorrect', true);
}

function handleIncorrectResponse(session, result, meta) {
  playEffect('wrong');

  let queue = session.get('queue');
  let misses = session.get('currentMisses') + 1;

  session.merge(
    misses < 3
    ? {
        currentMisses: misses,
        responseError: result,
      }
    : {
        responseError: null,
        showAnswer: true,
        // Move current word to third (or last) in queue
        queue: queue.slice(1,3).concat([queue[0]], queue.slice(3))
      }
  );
}

export function completeSession(tree) {
  let session = tree.select('session');
  let level = session.get('level');
  let round = session.get('round');

  session.merge({
    active: false,
    complete: true,
    paused: true
  });

  setLatest(tree, level.level, round.round);
  browserHistory.push(`/level/${level.level}/round/${round.round}/complete`);
}
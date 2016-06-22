import { reduce, get, mapKeys } from 'lodash';
import { browserHistory } from 'react-router';
import { checkRomanization } from '../utils/validation';
import { playEffect, play, preload } from '../sound';

export function startSession(tree, level, round) {
  let words = [round.headword].concat(round.words);

  // TODO: Store defaults somewhere?
  tree.set('session', {
    active: true,
    paused: false,
    complete: false,
    showCorrect: false,
    level: level,
    round: round,
    words: words,
    current: 0,
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

  session.set('showCorrect', false);

  let next = session.get('current') + 1;
  if (next >= session.get('words').length) {
    return completeSession(tree);
  }
  session.set('current', next);
}

export function updateResponse(tree, response) {
  const session = tree.select('session');
  session.set('response', response);
  tree.commit();
}

export function submitResponse(tree) {
  let session = tree.select('session');
  session.set('responseError', null);

  let word = session.get('words')[session.get('current')];
  let response = session.get('response');
  let result = checkRomanization(word, response);
  let meta = tree.get('words', word);

  if (result.correct) handleCorrectResponse(session, result, meta);
  else handleIncorrectResponse(session, result, meta);
}

function handleCorrectResponse(session, result, meta) {
  session.set('currentMisses', 0);
  session.set('response', '');

  playEffect('correct');
  if (meta.audio && meta.audio.url) {
    setTimeout(() => play(meta.audio.url), 400);
  }

  session.set('showCorrect', true);
}

function handleIncorrectResponse(session, result, meta) {
  playEffect('wrong');

  session.merge({
    currentMisses: session.get('currentMisses') + 1,
    responseError: result.reason
  });
}

export function completeSession(tree) {
  let session = tree.select('session');
  let progress = tree.select('progress', 'jamo');
  let level = session.get('level');
  let round = session.get('round');

  session.merge({
    active: false,
    complete: true,
    paused: true
  });

  let newJamos = mapKeys(session.get('jamo'), jamo => jamo);
  progress.merge({
    known: {
      ...progress.get('known'),
      ...newJamos,
    },
    justLearned: newJamos
  });

  browserHistory.push(`/level/${level.level}/round/${round.round}/complete`);
}
import { browserHistory } from 'react-router';

export function startSession(tree, level, round) {
  // TODO: Store defaults somewhere?
  tree.set('session', {
    active: true,
    paused: false,
    complete: false,
    level: level,
    round: round,
    words: [round.headword].concat(round.words),
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
}

export function updateResponse(tree, response) {
  const session = tree.select('session');
  session.set('response', response);
  tree.commit();
}

export function submitResponse(tree) {
  let session = tree.select('session');
  let response = session.get('response');

  session.set('responseError', null);

  let result = response === 'correct' ? {correct: true} : {correct: false, reason: 'blah blah blah'};
  if (result.correct) handleCorrectResponse(session, result);
  else handleIncorrectResponse(session, result);
}

function handleCorrectResponse(session, result) {
  session.set('currentMisses', 0);

  let next = session.get('current') + 1;
  if (next >= session.get('words').length) {
    return completeSession(tree);
  }
  session.set('current', next);
}

function handleIncorrectResponse(session, result) {
  session.merge({
    currentMisses: session.get('currentMisses') + 1,
    responseError: result.reason
  });
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
  browserHistory.push(`/level/${level.level}/round/${round.round}/complete`);
}
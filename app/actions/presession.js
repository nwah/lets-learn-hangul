import { uniq, random, sample, range, filter, fromPairs, flatten, map } from 'lodash';
import { browserHistory } from 'react-router';
import { playEffect, play, preload } from '../sound';

export let continueTimer;

export function startSession(tree, level, round) {
  let rounds = tree.get('rounds');
  let current = parseFloat(`${level.level}.${round.round}`);
  let completed = filter(rounds, (round, key) => parseFloat(key) <= current);
  let knownJamos = fromPairs(flatten(map(completed, ({jamo}) => map(jamo, j => [j, true]))));

  let queue = round.jamo.slice();
  while (queue.length < 4) {
    queue = uniq(queue.concat([sample(knownJamos)]));
  }

  tree.set('presession', {
    level: level,
    round: round,
    current: queue[0],
    queue: queue,
    options: getOptions(tree, queue[0]),
    response: null,
    showCorrect: false,
    responseError: null,
    misses: 0,
    started: Date.now(),
    completed: 0,
  });
}

export function continueSession(tree) {
  const session = tree.select('presession');
  let queue = session.get('queue');

  session.set('response', null);
  session.set('showCorrect', false);
  session.set('misses', 0);

  if (queue.length === 0) {
    return completeSession(tree);
  }
  session.set('current', queue[0]);
  session.set('options', getOptions(tree, queue[0]));
}

export function completeSession(tree) {
  let session = tree.select('presession');
  let level = session.get('level');
  let round = session.get('round');

  session.merge({
    completed: Date.now(),
  });

  browserHistory.push(`/level/${level.level}/round/${round.round}/headword`);
}

export function submitResponse(tree, response) {
  let session = tree.select('presession');
  session.set('responseError', null);

  let jamo = session.get('current');
  let meta = tree.get('jamos', jamo);
  if (jamo === response) handleCorrectResponse(tree, meta);
  else handleIncorrectResponse(tree, meta);
}

function handleCorrectResponse(tree, jamo) {
  let session = tree.select('presession');

  playEffect('correct');
  setTimeout(() => play(jamo.audio.url), 400);

  session.set('queue', session.get('queue').slice(1));
  session.set('showCorrect', true);

  continueTimer = setTimeout(() => continueSession(tree), 1200);
}

function handleIncorrectResponse(tree, {jamo}) {
  playEffect('wrong');

  let session = tree.select('presession');
  let queue = session.get('queue');

  session.merge({
    misses: session.get('misses') + 1,
    queue: [jamo].concat(uniq(queue.slice(1).concat([jamo]))),  
  });
}

function getOptions(tree, jamo) {
  const allJamos = Object.keys(tree.get('jamos'));
  let options = range(4).map(() => sample(allJamos));
  options[random(3)] = jamo;
  options = uniq(options);
  while (options.length < 4) {
    options = uniq(options.concat([sample(allJamos)]));
  }
  return options;
}
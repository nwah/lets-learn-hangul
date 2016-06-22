import { zipObject, map, omit } from 'lodash';

function extractLevels(data) {
  let levels = data;
  let ids = map(levels, lvl => lvl.level);
  let pruned = map(levels, lvl => ({
    ...lvl,
    rounds: lvl.rounds.map(rnd => `${lvl.level}.${rnd.round}`),
  }));
  return zipObject(ids, pruned);
}

function extractRounds(data) {
  let rounds = {};
  data.forEach(lvl => {
    lvl.rounds.forEach(rnd => {
      rounds[`${lvl.level}.${rnd.round}`] = rnd;
    });
  });
  return rounds;
}

export function loadCourse(tree) {
  return fetch('/data/course.json')
    .then(res => res.json())
    .then(data => {
      let levels = extractLevels(data);
      let rounds = extractRounds(data);
      tree.merge({levels, rounds});
    });
}

export function loadShapes(tree) {
  return fetch('/data/shapes.json')
    .then(res => res.json())
    .then(data => tree.set('shapes', data));
}

export function loadGeometric(tree) {
  return fetch('/data/geometric.json')
    .then(res => res.json())
    .then(data => tree.set('geometric', data));
}

export function loadJamos(tree) {
  return fetch('/data/jamos.json')
    .then(res => res.json())
    .then(data => {
      let keys = map(data, jamo => jamo.jamo);
      tree.set('jamos', zipObject(keys, data));
    });
}

export function loadWords(tree) {
  return fetch('/data/words.json')
    .then(res => res.json())
    .then(data => {
      let keys = map(data, word => word.word);
      tree.set('words', zipObject(keys, data));
    });
}
import { zipObject, map, pluck, omit } from 'lodash';

function extractLevels(data) {
  let levels = data;
  let ids = pluck(levels, 'level');
  let pruned = map(levels, lvl => omit(lvl, 'rounds'));
  return zipObject(ids, pruned);
}

function extractRounds(data) {
  let rounds = {};
  data.forEach(level => {
    level.rounds.forEach(round => {
      rounds[`${level.level}.${round.round}`] = round;
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
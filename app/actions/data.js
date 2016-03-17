import { zipObject, map, pluck, omit } from 'lodash';
import { processText } from '../utils/text';

function extractLevels(data) {
  let levels = data;
  let ids = pluck(levels, 'level');
  let pruned = map(levels, lvl => ({
    ...lvl,
    text: processText(lvl.text),
    rounds: lvl.rounds.map(rnd => `${lvl.level}.${rnd.round}`),
  }));
  return zipObject(ids, pruned);
}

function extractRounds(data) {
  let rounds = {};
  data.forEach(lvl => {
    lvl.rounds.forEach(rnd => {
      rounds[`${lvl.level}.${rnd.round}`] = {
        ...rnd,
        text: processText(rnd.text),
      };
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
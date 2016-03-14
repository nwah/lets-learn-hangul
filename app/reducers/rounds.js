import { zipObject, pluck, omit, map } from 'lodash';

export default function rounds(state = {}, action) {
  switch (action.type) {
    case 'COURSE_LOADED':
      let rounds = {};
      action.data.forEach(level => {
        level.rounds.forEach(round => {
          rounds[`${level.level}.${round.round}`] = round;
        });
      });
      return rounds;
    default:
      return state;
  }
}
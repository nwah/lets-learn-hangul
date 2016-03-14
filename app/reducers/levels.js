import { zipObject, pluck, omit, map } from 'lodash';

export default function levels(state = {}, action) {
  switch (action.type) {
    case 'COURSE_LOADED':
      let levels = action.data;
      let ids = pluck(levels, 'level');
      let pruned = map(levels, lvl => omit(lvl, 'rounds'));
      return zipObject(ids, pruned);
    default:
      return state;
  }
}
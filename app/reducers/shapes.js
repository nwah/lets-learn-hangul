import { zipObject, pluck, omit, map } from 'lodash';

export default function rounds(state = {}, action) {
  switch (action.type) {
    case 'SHAPES_LOADED':
      return action.shapes;
    default:
      return state;
  }
}
const initialState = {
  level: null,
  round: null,
  word: null,
  misses: 0,
  peeks: [],
  paused: true,
  started: 0,
  elapsed: 0
};

export default function session(state = initialState, action) {
  switch (action.type) {
    case 'START_SESSION':
      return Object.assign({}, initialState, {
        level: action.level,
        round: action.round,
        word: '떡볶이',
        paused: false,
        started: Date.now()
      });
    default:
      return state;
  }
}
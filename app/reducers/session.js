const initialState = {
  active: false,
  paused: true,
  complete: false,
  level: null,
  round: null,
  words: [],
  current: 0,
  response: '',
  responseError: null,
  currentMisses: 0,
  peeks: [],
  started: 0,
  elapsed: 0
};

export default function session(state = initialState, action) {
  switch (action.type) {
    case 'START_SESSION':
      let {level, round} = action;
      let {headword, words} = round;

      return Object.assign({}, initialState, {
        level: level,
        round: round,
        active: true,
        paused: false,
        started: Date.now(),
        words: [headword].concat(words),
      });

    case 'UPDATE_RESPONSE':
      let {response} = action;
      return Object.assign({}, state, {response});

    case 'SUBMIT_RESPONSE':
      if (state.response === 'correct') {
        let next = state.current + 1;
        return Object.assign({}, state, {
          response: '',
          currentMisses: 0,
          current: next
        });
      }
      else {
        return Object.assign({}, state, {response});
      }

    default:
      return state;
  }
}
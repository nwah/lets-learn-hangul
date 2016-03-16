import Baobab from 'baobab';

const tree = new Baobab({
  levels: {/*
    '1': {
      id: '1',
      name: 'Level One',
      text: { ... },
      rounds: ['1.1', '1.2', '1.3'],
    }
  */},
  rounds: {/*
    '1.1': {
      id: '1.1',
      name: 'Round One',
      text: { ... },
      headword: 'foo',
      words: ['bar', 'baz'],
      jamo: ['ㄱ', 'ㄴ', 'ㄷ'],
    }
  */},
  words: {/*
    
  */},
  jamo: {},
  shapes: {/*
    jamo_Cv_g: "M322.204,99.002 ..."
  */},

  progress: {
    levels: {complete: {}},
    rounds: {complete: {}},
    words: {learned: {}},
    jamo: {learned: {}}
  },

  session: {
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
  },
});

export default tree;
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
  jamos: {/*
    jamo: 'ㅁ',
    latin: 'm',
    description: `
      This letter sounds like **m** in English.
    `,
    memory: '**m**at'
  */},
  shapes: {/*
    jamo_Cv_g: "M322.204,99.002 ..."
  */},

  user: {
    levels: {complete: {}},
    rounds: {complete: {}},
    latest: null, // '1.1'
    history: [/*
      {event: 'session-start', time: 1468980423012},
      {event: 'peek', time: 1468980862292, jamo: 'ㄱ', round: '1.1', word: '김치'},
      {event: 'word-hit', time: 1468980868001, word: '김치', round: '1.1'},
      {event: 'word-miss', time: 1468980810841, word: '침', round: '1.1'},
      {event: 'word-hit', time: 1468980820311, word: '침', round: '1.1'},
      {event: 'stop', time: 1468980423012},
      {event: 'session-complete', time: 1468980423012},
    */],
    hinted: {
      romanization: false,
      peeking: false,
    }
  },

  session: {
    active: false,
    paused: true,
    complete: false,
    showCorrect: false,
    showAnswer: false,
    level: null,
    round: null,
    words: [],
    current: 0,
    response: '',
    responseError: null,
    currentMisses: 0,
    totalMisses: 0,
    peeks: [],
    started: 0,
    completed: 0,
  },

  presession: {
    level: null,
    round: null,
    queue: [],
    current: null,
    options: [],
    response: null,
    showCorrect: false,
    responseError: null,
    misses: 0,
    started: 0,
    completed: 0,
  },

  indexShowing: false
});

export default tree;
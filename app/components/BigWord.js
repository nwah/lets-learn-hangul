import React from 'react';
import BigSyllable from './BigSyllable';

const BigWord = ({word, shapes, onPeek}) => (
  !shapes ? <noscript /> :
  <div className="big-word">
    {word.split('').map((syllable, i) =>
      <BigSyllable syllable={syllable} key={i} shapes={shapes} onPeek={onPeek} />
    )}
  </div>
);

export default BigWord;
import React from 'react';
import BigSyllable from './BigSyllable';

const BigWord = ({word, shapes, onPeek, clickable = true}) => (
  !shapes ? <noscript /> :
  <div className="big-word">
    {word.split('').map((syllable, i) =>
      <BigSyllable syllable={syllable} key={i} shapes={shapes} onPeek={onPeek} clickable={clickable} />
    )}
  </div>
);

export default BigWord;
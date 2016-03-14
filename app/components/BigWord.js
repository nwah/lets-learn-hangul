import React from 'react';
import BigSyllable from './BigSyllable';

const BigWord = ({word}) => (
  <div className="big-word">
    {word.split('').map((syllable, i) =>
      <BigSyllable syllable={syllable} key={i} />
    )}
  </div>
);

export default BigWord;
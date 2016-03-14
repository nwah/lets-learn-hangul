import React from 'react';
import { decompose } from '../utils/hangul';
import { getShapes, getShapeIDs, getJamoHint } from '../utils/display';

const colors = ['#ee1a60', '#367add', '#b70d4e'];

const BigSyllable = ({syllable}) => {
  let shapes = getShapes(syllable);
  let jamos = decompose(syllable);
  let hints = jamos.map((jamo, i) => getJamoHint(jamo, i === 0));
  console.log('hints:', hints);

  return (
    <svg style={{width: 60, height: 60}} viewBox="0 0 600 600" className="big-syllable">
      {shapes.map((shape, i) =>
        <path d={shape} fill={colors[i]} key={i} onClick={e => alert(hints[i])} />
      )}
    </svg>
  );
};

export default BigSyllable;
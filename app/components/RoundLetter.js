import React from 'react';
import { Link } from 'react-router';
import { isMedial } from '../utils/hangul';
import { getJamoHint, isVertical } from '../utils/display';
import Circle from './Circle';
import Markdown from './Markdown';
import BigJamo from './BigJamo';

const RoundLetter = ({params, round, jamos, shapes}) => {
  let jamo = round.jamo[params.letter] || round.jamo[0];
  let next = (parseFloat(params.letter) || 0) + 1;
  let hasAnother = next < round.jamo.length;
  let {description, latin, memory} = jamos[jamo];
  console.log(jamo, 'isVertical:', isVertical(jamo))

  return (
    <div className="round__letter">
      <Circle r="464" />

      <label>New Letter</label>
      <BigJamo
        className={`big-jamo ${isVertical(jamo) ? 'big-jamo--vertical' : ''}`}
        jamo={jamo}
        shapes={shapes} />

      <div className={`bubble ${isMedial(jamo) ? 'bubble--blue' : ''}`}>
        {getJamoHint(jamo)}
      </div>

      <div className="round__letter__description">
        <Markdown source={description} options={{breaks: false}}/>
      </div>

      {hasAnother ? (
        <Link 
          className="button button--forward"
          to={`/level/${params.level}/round/${params.round}/letter/${next}`}>
          Next letter
        </Link>
      ) : (
        <Link
          className="button button--forward"
          to={`/level/${params.level}/round/${params.round}/headword`}>
          Continue
        </Link>
      )}
    </div>
  );
};

export default RoundLetter;
import React from 'react';
import { Link } from 'react-router';
import { isMedial } from '../utils/hangul';
import { getJamoHint } from '../utils/display';
import Circle from './Circle';
import Markdown from './Markdown';
import BigJamo from './BigJamo';

const defaultText = 'Here are the new letters for this round.';

const RoundLetters = ({params, round, shapes}) => {
  let text = round.text.letters[0] || defaultText;

  return (
    <div className="round__letters">
      <div className="round__letters__text">
        <Markdown source={text} />
      </div>

      <div className="round__letters__container">
        {round.jamo.map((jamo, i) => (
          <div className="round__letters__jamo" key={jamo}>
            <Circle r="137" />
            <BigJamo jamo={jamo} shapes={shapes} />
            <div className={`bubble ${isMedial(jamo) ? 'bubble--blue' : ''}`}>
              {getJamoHint(jamo)}
            </div>
          </div>
        ))}
      </div>
      
      <Link
        className="button button--forward"
        to={`/level/${params.level}/round/${params.round}/letter`}>
        Continue
      </Link>
    </div>
  );
};

export default RoundLetters;
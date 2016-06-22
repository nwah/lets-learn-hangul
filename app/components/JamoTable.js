import React from 'react';
import { each, map } from 'lodash';
import classNames from 'classnames';
import { branch } from 'baobab-react/higher-order';
import GeometricJamo from './GeometricJamo';
import Circle from './Circle';

const jamos = (
  'ㄱ ㄴ ㄷ ㄹ ㅎ ㅋ ㅍ ㄲ ㄸ ㅃ ' +
  'ㅂ ㅅ ㅇ ㅈ ㅁ ㅊ ㅌ ㅆ ㅉ ㅢ ' +
  'ㅣ ㅡ ㅗ ㅜ ㅛ ㅠ ㅖ ㅘ ㅙ ㅚ ' +
  'ㅐ ㅔ ㅏ ㅓ ㅒ ㅑ ㅕ ㅝ ㅞ ㅟ'
).split(' ');

const JamoTable = ({known, justLearned, geometric}) => (console.log(known, justLearned, geometric), 
  <div className="jamo-table">
    {jamos.map(jamo => 
      <div
        key={jamo}
        className={classNames("jamo-table__jamo", {
          "jamo-table__jamo--unknown": !(known[jamo]),
          "jamo-table__jamo--new": justLearned[jamo]
        })}>
        <GeometricJamo jamo={jamo} geometric={geometric} />
      </div>
    )}
  </div>
);

export default branch(JamoTable, {
  cursors: {
    geometric: ['geometric'],
    justLearned: ['progress', 'jamo', 'justLearned'],
    known: ['progress', 'jamo', 'known'],
  }
});
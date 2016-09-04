import React from 'react';
import { each, map, includes } from 'lodash';
import classNames from 'classnames';
import { branch } from 'baobab-react/higher-order';
import { isMedial } from '../utils/hangul';
import { getJamoHint } from '../utils/display';
import { play } from '../sound';
import GeometricJamo from './GeometricJamo';
import Circle from './Circle';

const table = (
  'ㄱ ㄴ ㄷ ㄹ ㅎ ㅋ ㅍ ㄲ ㄸ ㅃ ' +
  'ㅂ ㅅ ㅇ ㅈ ㅁ ㅊ ㅌ ㅆ ㅉ ㅢ ' +
  'ㅣ ㅡ ㅗ ㅜ ㅛ ㅠ ㅖ ㅘ ㅙ ㅚ ' +
  'ㅐ ㅔ ㅏ ㅓ ㅒ ㅑ ㅕ ㅝ ㅞ ㅟ'
).split(' ');

const JamoTable = ({known = {}, newJamos = {}, geometric, jamos = {}}) => (
  <div className="jamo-table">
    {table.map(jamo => 
      <div
        key={jamo}
        className={classNames("jamo-table__jamo", {
          "jamo-table__jamo--unknown": !(known[jamo]),
          "jamo-table__jamo--new": includes(newJamos, jamo),
        })}
        style={{
          animationDelay: `${Math.max(0, newJamos.indexOf(jamo)) * 120}ms`
        }}
        data-jamo={jamo}
        onClick={() => jamos[jamo] && play(jamos[jamo].audio.url)}
        onTouchStart={(e) => {
          let el = document.querySelector(`[data-jamo="${jamo}"]`);
          el.classList.add('touched');
          setTimeout(() => el.classList.remove('touched'), 500);
        }}
      >
        <div className={classNames("jamo-table__jamo__latin", {"vowel": isMedial(jamo)})}>
          {getJamoHint(jamo)}
        </div>
        <GeometricJamo jamo={jamo} geometric={geometric} />
      </div>
    )}
  </div>
);

export default branch(JamoTable, {
  cursors: {
    geometric: ['geometric'],
    jamos: ['jamos'],
  }
});
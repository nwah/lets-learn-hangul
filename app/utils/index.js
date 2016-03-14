import { map, uniq, filter } from 'lodash';
import romanizations from '../data/romanizations';
import { decompose, isMedial, isIotizedVowel } from './hangul';

export function getRomanizations(str = '') {
  // initial
  // final
  // beforeVowel
  // beforeIY
  // alternateBeforeNasal
  // alternateBeforeR
  // afterR
  // afterN
  // alternateAfterG
  // alternateAfterM
  // alternateAfterNg
  // alternateAfterB

  // normal
  // alternates
  // afterS
  // afterNull

  let syllables = map(str.split(''), decompose);
  let word = syllables.reduce((acc, syl) => acc.concat(syl), []);
  let jamoReadings = word.map(jamo => []);

  let i = 0;
  for (let s = 0; s < syllables.length; s++) {
    let syllable = syllables[s];
    for (let j = 0; j < syllable.length; j++) {
      let jamo = syllable[j];
      let prev = word[i-1];
      let next = word[i+1];

      let isInitial = j === 0;
      let isVowel = j === 1;
      let isFinal = j === 2;

      let isBeforeVowel = isInitial || (isFinal && next === 'ㅇ');
      let isBeforeIY = isIotizedVowel(next) || (next === 'ㅇ' && isIotizedVowel(word[i+2]));
      let isBeforeNasal = next === 'ㄴ' || next === 'ㅁ';
      let isBeforeR = next === 'ㄹ';
      let isAfterR = prev === 'ㄹ';
      let isAfterN = prev === 'ㄴ';
      let isAfterG = prev === 'ㄱ';
      let isAfterM = prev === 'ㅁ';
      let isAfterNg = prev === 'ㅇ';
      let isAfterB = prev === 'ㅂ';

      let isAfterS = prev === 'ㅆ' || prev === 'ㅅ';
      let isAfterNull = prev === 'ㅇ';

      let rules = romanizations[jamo];
      let readings = jamoReadings[i];

      console.log(jamo, 'isBeforeVowel:', isBeforeVowel, 'isBeforeIY:', isBeforeIY, 'isFinal:', isFinal, 'rules.beforeVowel:', rules.beforeVowel);
      
      // Primary reading
      if (isAfterR && rules.afterR) readings.push(rules.afterR);
      else if (isAfterN && rules.afterN) readings.push(rules.afterN);
      else if (isAfterN && rules.afterN) readings.push(rules.afterN);
      else if (isFinal && isBeforeIY && rules.finalBeforeIY) readings.push(rules.finalBeforeIY);
      else if (isBeforeIY && rules.beforeIY) readings.push(rules.beforeIY);
      else if (isBeforeVowel && rules.beforeVowel) readings.push(rules.beforeVowel);
      else if (isInitial && rules.initial != null) readings.push(rules.initial);
      else if (isFinal && rules.final) readings.push(rules.final);
      else if (isAfterNull && rules.afterNull) readings.push(rules.afterNull);
      else if (isAfterS && rules.afterS) readings.push(rules.afterS);
      else if (isVowel) readings.push(rules.normal);

      // Alternates
      if (isBeforeNasal && rules.alternateBeforeNasal) readings.push(rules.alternateBeforeNasal);
      if (isBeforeR && rules.alternateBeforeR) readings.push(rules.alternateBeforeR);
      if (isAfterR && rules.alternateAfterR) readings.push(rules.alternateAfterR);
      if (isAfterN && rules.alternateAfterN) readings.push(rules.alternateAfterN);
      if (isAfterG && rules.alternateAfterG) readings.push(rules.alternateAfterG);
      if (isAfterM && rules.alternateAfterM) readings.push(rules.alternateAfterM);
      if (isAfterNg && rules.alternateAfterNg) readings.push(rules.alternateAfterNg);
      if (isAfterB && rules.alternateAfterB) readings.push(rules.alternateAfterB);
      if (isFinal && rules.alternateFinal) readings.push(rules.alternateFinal);
      if (isInitial && rules.alternateInitial) readings.push(rules.alternateInitial);
      if (isAfterS && rules.alternatesAfterS) readings.push.apply(readings, rules.alternatesAfterS);
      if (rules.alternates) readings.push.apply(readings, rules.alternates);

      i++;
    }
  }

  let primary = map(jamoReadings, rs => rs[0]).join('');
  let pattern = map(jamoReadings, readings => {
    readings = uniq(filter(readings, r => r.length));
    if (readings.length === 0) return '';
    return `(?:${readings.join('|')})`;
  }).join('');
  let regexp = new RegExp(`^${pattern}$`, 'i');
  return [primary, regexp];
}
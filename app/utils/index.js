import { map, uniq, filter, flattenDeep, flatMapDeep } from 'lodash';
import romanizations from '../data/romanizations';
import { decompose, isHangul, isMedial, isIotizedVowel } from './hangul';

let cache = {};

export function getRomanizations(str = '') {
  if (str in cache) return cache[str];
  
  let characters = str.split('');
  if (filter(characters, isHangul).length === 0) return str;

  let syllables = map(characters, decompose);
  let word = syllables.reduce((acc, syl) => acc.concat(syl), []);
  let jamoReadings = word.map(jamo => []);

  let i = 0;
  for (let s = 0; s < syllables.length; s++) {
    if (!isHangul(characters[s])) {
      jamoReadings[i] = {literal: characters[s]};
      i++;
      continue;
    }

    let syllable = syllables[s] || characters[s];
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
      
      // Primary reading
      if (isAfterR && rules.afterR) readings.push(rules.afterR);
      else if (isAfterN && rules.afterN) readings.push(rules.afterN);
      else if (isAfterN && rules.afterN) readings.push(rules.afterN);
      else if (isFinal && isBeforeIY && rules.finalBeforeIY) readings.push(rules.finalBeforeIY);
      else if (isBeforeIY && rules.beforeIY) readings.push(rules.beforeIY);
      else if (isBeforeVowel && rules.beforeVowel) readings.push(rules.beforeVowel);
      else if (isInitial && rules.initial != null) readings.push(rules.initial);
      else if (isFinal && rules.final) readings.push(rules.final);
      else if (isAfterNull && rules.afterNull) readings.push.apply(readings, rules.afterNull);
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

  let ideal = map(jamoReadings, rs => rs.literal || rs[0]).join('');
  let pattern = map(jamoReadings, readings => {
    if (readings.literal) {
      return /[a-zA-Z0-9-]/.test(readings.literal)
        ? `(?:${readings.literal})`
        : `(?:[^a-zA-Z]*)`;
    }
    readings = uniq(filter(readings, r => r.length));
    if (readings.length === 0) return '';
    return `(?:${readings.join('|')})`;
  }).join('');
  let regexp = new RegExp(`^${pattern}$`, 'i');

  let possibilities = [];
  (function walk(str, nodes = []) {
    return nodes.length
      ? map(nodes, node => walk(str + node[0], node[1]))
      : possibilities.push(str);
  })('', (function recurse(jamos) {
    return map(jamos[0], jamo => [jamo, recurse(jamos.slice(1))])
  })(jamoReadings));

  return (cache[str] = {ideal, regexp, possibilities, readings: jamoReadings});
}
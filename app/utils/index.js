import { map, uniq, filter, flattenDeep, flatMapDeep } from 'lodash';
import romanizations from '../data/romanizations';
import { decompose, isHangul, isMedial, isIotizedVowel } from './hangul';

let cache = {};

export function getRomanizations(str = '', phonetic = false) {
  if (str in cache) return cache[str];
  
  let characters = str.split('');
  if (filter(characters, isHangul).length === 0) return str;

  let syllables = map(characters, decompose);
  let word = syllables.reduce((acc, syl) => acc.concat(syl), []);
  let jamoReadings = word.map(jamo => []);
  let syllableReadings = syllables.map(syl => []);

  let i = 0;
  let last = syllables.length - 1;
  for (let s = 0; s <= last; s++) {
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
      let isStop = isFinal && next !== 'ㅇ';

      let isAfterS = prev === 'ㅆ' || prev === 'ㅅ';
      let isAfterNull = prev === 'ㅇ';

      let rules = romanizations[jamo];
      let normal = [];
      let contextual = [];
      let pronunciation = [];
      
      // Primary reading
      if (isBeforeNasal && rules.beforeNasal) pronunciation.push(rules.beforeNasal);
      else if (isBeforeR && rules.beforeR) pronunciation.push(rules.beforeR);
      else if (isStop && rules.stop) pronunciation.push(rules.stop);
      else if (isAfterR && rules.afterR) pronunciation.push(rules.afterR);
      else if (isAfterN && rules.afterN) pronunciation.push(rules.afterN);
      else if (isAfterM && rules.afterM) pronunciation.push(rules.afterM);
      else if (isAfterG && rules.afterG) pronunciation.push(rules.afterG);
      else if (isAfterNg && rules.afterNg) pronunciation.push(rules.afterNg);
      else if (isFinal && isBeforeIY && rules.finalBeforeIY) contextual.push(rules.finalBeforeIY);
      else if (isBeforeIY && rules.beforeIY) contextual.push(rules.beforeIY);
      else if (isBeforeVowel && rules.beforeVowel) contextual.push(rules.beforeVowel);
      else if (isInitial && rules.initial != null) normal.push(rules.initial);
      else if (isFinal && rules.final) normal.push(rules.final);
      else if (isAfterNull && rules.afterNull) normal.push.apply(normal, rules.afterNull);
      else if (isAfterS && rules.afterS) contextual.push(rules.afterS);
      else if (isVowel) normal.push(rules.normal);

      // Alternates
      if (isBeforeNasal && rules.alternateBeforeNasal) contextual.push(rules.alternateBeforeNasal);
      if (isBeforeR && rules.alternateBeforeR) contextual.push(rules.alternateBeforeR);
      if (isAfterR && rules.alternateAfterR) contextual.push(rules.alternateAfterR);
      if (isAfterN && rules.alternateAfterN) contextual.push(rules.alternateAfterN);
      if (isAfterG && rules.alternateAfterG) contextual.push(rules.alternateAfterG);
      if (isAfterM && rules.alternateAfterM) contextual.push(rules.alternateAfterM);
      if (isAfterNg && rules.alternateAfterNg) contextual.push(rules.alternateAfterNg);
      if (isAfterB && rules.alternateAfterB) contextual.push(rules.alternateAfterB);
      if (isFinal && rules.alternateFinal) contextual.push(rules.alternateFinal);
      if (isInitial && rules.alternateInitial) contextual.push(rules.alternateInitial);
      if (isAfterS && rules.alternatesAfterS) contextual.push.apply(contextual, rules.alternatesAfterS);
      if (rules.alternates) contextual.push.apply(contextual, rules.alternates);

      let readings = jamoReadings[i];
      readings.push.apply(readings, pronunciation);
      if (!phonetic || !pronunciation.length) {
        readings.push.apply(readings, normal);
        readings.push.apply(readings, contextual);
      }

      syllableReadings[s].push(readings);

      i++;
    }
  }

  let ideal = map(jamoReadings, rs => rs.literal || rs[0]).join('');
  let pattern = map(jamoReadings, primary => {
    if (primary.literal) {
      return /[a-zA-Z0-9-]/.test(primary.literal)
        ? `(?:${primary.literal})`
        : `(?:[^a-zA-Z]*)`;
    }
    primary = uniq(filter(primary, r => r.length));
    if (primary.length === 0) return '';
    return `(?:${primary.join('|')})`;
  }).join('');
  let regexp = new RegExp(`^${pattern}$`, 'i');


  let syllableRomanizations = map(syllableReadings, jamoReadings => {
    let ideal = map(jamoReadings, rs => rs.literal || rs[0]).join('');
    let pattern = map(jamoReadings, primary => {
      if (primary.literal) {
        return /[a-zA-Z0-9-]/.test(primary.literal)
          ? `(?:${primary.literal})`
          : `(?:[^a-zA-Z]*)`;
      }
      primary = uniq(filter(primary, r => r.length));
      if (primary.length === 0) return '';
      return `(?:${primary.join('|')})`;
    }).join('');
    let regexp = new RegExp(`^${pattern}$`, 'i');
    return {ideal, pattern, regexp};
  });


  let possibilities = [];
  (function walk(str, nodes = []) {
    return nodes.length
      ? map(nodes, node => walk(str + node[0], node[1]))
      : possibilities.push(str);
  })('', (function recurse(jamos) {
    return map(jamos[0], jamo => [jamo, recurse(jamos.slice(1))])
  })(jamoReadings));

  return (cache[str] = {ideal, regexp, possibilities, primary: jamoReadings, syllables: syllableRomanizations});
}
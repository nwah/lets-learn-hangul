import { map } from 'lodash';
import { decompose, isMedial } from './hangul';

export const mapping = {
  "ㄱ": "g",
  "ㅏ": "a",
  "ㄲ": "gg",
  "ㄴ": "n",
  "ㄷ": "d",
  "ㄸ": "dd",
  "ㄹ": "r",
  "ㅁ": "m",
  "ㅂ": "b",
  "ㅃ": "bb",
  "ㅅ": "s",
  "ㅆ": "ss",
  "ㅇ": "ng",
  "ㅈ": "j",
  "ㅉ": "jj",
  "ㅊ": "ch",
  "ㅋ": "k",
  "ㅌ": "t",
  "ㅍ": "p",
  "ㅎ": "h",
  "ㅐ": "ae",
  "ㅑ": "ya",
  "ㅒ": "yae",
  "ㅓ": "eo",
  "ㅔ": "e",
  "ㅕ": "yeo",
  "ㅖ": "ye",
  "ㅣ": "i",
  "ㅜ": "u",
  "ㅡ": "eu",
  "ㅠ": "yu",
  "ㅛ": "yo",
  "ㅗ": "o",
  "ㅝ": "weo",
  "ㅢ": "eui",
  "ㅟ": "wi",
  "ㅞ": "we",
  "ㅚ": "oi",
  "ㅙ": "wae",
  "ㅘ": "wa",
  "ㅄ": "bs",
  "ㅀ": "lh",
  "ㄿ": "lp",
  "ㄾ": "lt",
  "ㄽ": "ls",
  "ㄼ": "lb",
  "ㄻ": "lm",
  "ㄺ": "lg",
  "ㄶ": "nh",
  "ㄵ": "nj",
  "ㄳ": "gs",
};

export const alternates = {
  "ㄱ": "k",
  "ㄲ": "kk",
  "ㄷ": "t",
  "ㄸ": "tt",
  "ㄹ": "l",
  "ㅂ": "p",
  "ㅃ": "pp",
  "ㅈ": "z",
  "ㅉ": "zz",
  "ㅜ": "oo",
  "ㅡ": "eu",
  "ㅢ": "ee",
  "ㅚ": "weh"
};

export const vs = {
  "ㅏ": 1,
  "ㅐ": 1,
  "ㅑ": 1,
  "ㅒ": 1,
  "ㅓ": 1,
  "ㅔ": 1,
  "ㅕ": 1,
  "ㅖ": 1,
  "ㅣ": 1,
};

export const hs = {
  "ㅜ": 1,
  "ㅡ": 1,
  "ㅠ": 1,
  "ㅛ": 1,
  "ㅗ": 1,
};

export const ws = {
  "ㅝ": 1,
  "ㅢ": 1,
  "ㅟ": 1,
  "ㅞ": 1,
  "ㅚ": 1,
  "ㅙ": 1,
  "ㅘ": 1,
};

export const ccs = {
  "ㅄ": 1,
  "ㅀ": 1,
  "ㄿ": 1,
  "ㄾ": 1,
  "ㄽ": 1,
  "ㄼ": 1,
  "ㄻ": 1,
  "ㄺ": 1,
  "ㄶ": 1,
  "ㄵ": 1,
  "ㄳ": 1,
};

export function isVertical(jamo) {
  return jamo in vs;
}

export function isHorizontal(jamo) {
  return jamo in hs;
}

export function isCombo(jamo) {
  return jamo in ws;
}

export function getSyllableType(syllable) {
  if (syllable.length > 1) {
    return syllable.split('').map(getSyllableType);
  }

  let jamos = decompose(syllable);
  let type = ['C'];
  type.push(isCombo(jamos[1]) ? 'W' : isHorizontal(jamos[1]) ? 'H' : 'V');
  if (jamos[2]) type.push(jamos[2] in ccs ? 'CC' : 'C');
  return type.join('-');
}

export function getShapeIDs(syllable) {
  if (syllable.length > 1) {
    return syllable.split('').map(getShapeIDs);
  }

  let type = getSyllableType(syllable);
  let jamos = decompose(syllable);
  
  return jamos.map((jamo, i) => {
    let latin = mapping[jamo];
    let id = type.toLowerCase().split('-');
    
    if (type.substr(2) === 'CC' && i < 2) {
      id = ['c', 'v', 'c'];
    }

    id[i] = id[i].toUpperCase();
    return 'jamo_' + id.join('') + '_' + latin;
  });
}

export function getShapeID(jamo) {
  let latin = mapping[jamo];
  let type = (isMedial(jamo)
    ? (jamo in ws ? 'W' : jamo in hs ? 'H' : 'V')
    : (jamo in ccs ? 'CC' : 'C'));
  return `jamo_${type}_${latin}`;
}

// TODO: Make more elegant
export function getHintIDs(syllable) {
  let type = getSyllableType(syllable);
  let ids = {
    'C-V': ['Cv', 'cV'],
    'C-H': ['Ch', 'cH'],
    'C-W': ['Cw', 'cW'],
    'C-V-C': ['Cvc', 'cVc', 'cvC'],
    'C-W-C': ['Cwc', 'cWc', 'cwC'],
    'C-H-C': ['Chc', 'cHc', 'chC'],
    'C-V-CC': ['Cvc', 'cVc', 'cvCC'],
    'C-W-CC': ['Cwc', 'cWc', 'cvCC'],
    'C-H-CC': ['Chc', 'cHc', 'cvCC'],
  };
  return ids[type].map(id => `hint_${id}`);
}

export function getJamoHint(jamo, isInitial = false) {
  let main = mapping[jamo];
  let alt = alternates[jamo];
  if (jamo === 'ㅇ' && isInitial) return '—';
  return alt ? `${main} / ${alt}` : main;
}
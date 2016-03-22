import { mapValues, trim } from 'lodash';

export function processText(textSet) {
  const separator = /\n+\s*---+\s*\n+/m;
  return mapValues(textSet, raw => raw.split(separator).map(trim));
}
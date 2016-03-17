import { mapValues, trim } from 'lodash';

export function processText(textSet) {
  // TODO: Parse as Markdown or something?
  const separator = /\n+\s*---+\s*\n+/m;
  return mapValues(textSet, raw => raw.split(separator).map(trim));
}
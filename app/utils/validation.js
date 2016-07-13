import { filter, map } from 'lodash';
import { getRomanizations } from '.';

export function checkRomanization(hangul, input, phonetic = false) {
  let romanization = getRomanizations(hangul, phonetic);
  if (input === romanization) return {correct: true};

  let {ideal, regexp, possibilities} = romanization;
  console.log(romanization);
  let correct = regexp.test(input);
  let result = {correct};
  if (correct) return result;
  
  // TODO: Give better reasons
  result.reason = `Should be “${ideal}”.`;
  for (let i = 0; i < input.length; i++) {
    let matches = filter(possibilities, possibility => 
      possibility.substr(0, i + 1) === input.substr(0, i + 1)
    );

    if (matches.length === 0) {
      result.wrongChar = i;
      break;
    }
  }

  return result;
}
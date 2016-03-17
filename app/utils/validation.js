import { getRomanizations } from '.';

export function checkRomanization(hangul, input) {
  let {ideal, regexp} = getRomanizations(hangul);
  let correct = regexp.test(input);
  let result = {correct};
  // TODO: Give better reasons
  if (!correct) result.reason = `Should be “${ideal}”.`;
  return result;
}
/**
 * Convert emojis to letters-digits.
 */

import CharMap from './type/CharMap';
import MAP     from '../../config/char_map.json';
const map:CharMap = MAP;

function emoji2char(emojis:string):string
{
  let chars = emojis;

  for (const k in map)
  {
    const regExp = new RegExp(map[k], 'gu');
    chars = chars.replace(regExp, k);
  }

  return chars;
}

export default emoji2char;

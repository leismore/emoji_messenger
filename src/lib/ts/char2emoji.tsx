/**
 * Convert letters-digits to emoji.
 */

import CharMap from './type/CharMap';
import MAP     from '../../config/char_map.json';

const map:CharMap = MAP;

function char2emoji(chars:string):string
{
  for (const k in map)
  {
    const regExp = new RegExp(k, 'gu');
    chars = chars.replace(regExp, map[k]);
  }

  return chars;
}

export default char2emoji;

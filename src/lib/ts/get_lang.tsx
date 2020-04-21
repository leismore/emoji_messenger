/**
 * Get a supported language-tag for this project.
 */

import { lookup, navigatorLanguages } from 'langtag-utils';
import config                         from '../../config/config.json';
import SupportedLangs                 from './type/SupportedLangs';

function get_lang():SupportedLangs
{
  let supported = [];
  for (const k in config.supportedLangs)
    { supported.push( config.supportedLangs[k].lang.toLowerCase() + '-' +
                      config.supportedLangs[k].region.toUpperCase() ); }

  // @ts-ignore
  return lookup(supported, navigatorLanguages(), supported[0]);
}

export default get_lang;

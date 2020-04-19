/**
 * Remove the appended decryption URL from an encrypted text.
 * @exception {EMError} 3
 */

import EMError from './EMError';
import config  from '../../config/config.json';
const appended = ' :-) ' + config.app.url;

export default function remove_appendedURL(text:string):string
{
    if (typeof text !== 'string')
    {
        throw new EMError('Decryption: invalid text', '3');
    }

    if (text.endsWith(appended))
    {
        return text.slice(0, 0-appended.length);
    }
    else
    {
        return text;
    }
};
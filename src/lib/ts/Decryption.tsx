/**
 * Data for Decryption
 */

import SimpleCrypto       from "simple-crypto-js";
import config             from '../../config/config.json';
import EMError            from './EMError';
import emoji2char         from './emoji2char';
import { PlainText }      from '@leismore/plaintext';
import remove_appendedURL from './remove_appendedURL';

class Decryption
{
  public readonly text:      string;  // Encrypted
  public          password:  string;  // Plain

  /**
   * @param {string} text
   * @param {string} password
   * @exception {EMError}  3 / 4
   */
  constructor(text:string, password:string)
  {
    try
    {
      let unified = PlainText.removeLB(text, '');
      if (unified === null)
        { text = ''; }
      else
        { text = unified; }

      text = text.trim();
      text = remove_appendedURL(text);
      text = text.trim();
    }
    catch(e)
    {
      throw new EMError('Decryption: invalid text', '3', e);
    }

    if (typeof text !== 'string' ||
       (text.length < config.text.minLength || text.length > config.text.maxLength))
    {
      throw new EMError('Decryption: invalid text', '3');
    }

    if (typeof password !== 'string' ||
       (password.length < config.password.minLength || password.length > config.password.maxLength))
    {
      throw new EMError('Decryption: invalid password', '4');
    }

    this.text     = text;
    this.password = password;
  }

  /**
   * @exception {EMError} 4
   */
  decrypt():string
  {
    let sc = new SimpleCrypto(this.password);
    let decrypted = String( sc.decrypt( emoji2char(this.text) ) );
    if (decrypted.length === 0)
    {
      throw new EMError('Decryption: invalid password', '4');
    }
    else
    {
      return decrypted;
    }
  }
}

export default Decryption;

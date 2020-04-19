/**
 * Data for Encryption
 */

import SimpleCrypto  from "simple-crypto-js";
import config        from '../../config/config.json';
import EMError       from './EMError';
import { PlainText } from '@leismore/plaintext';
import char2emoji    from './char2emoji';

class Encryption
{
  public text:     string;  // Plain
  public password: string;  // Plain

  /**
   * @param {string} text
   * @param {string} password
   * @exception {EMError}  1 / 2
   */
  constructor(text:string, password:string)
  {
    try
    {
      let unified = PlainText.unifyLB(text);
      if (unified === null)
        { text = ''; }
      else
        { text = unified; }
    }
    catch(e)
    {
      throw new EMError('Encryption: invalid text', '1');
    }

    if (typeof text !== 'string' ||
       (text.length < config.text.minLength || text.length > config.text.maxLength))
    {
      throw new EMError('Encryption: invalid text', '1');
    }

    if (typeof password !== 'string' ||
       (password.length < config.password.minLength || password.length > config.password.maxLength))
    {
      throw new EMError('Encryption: invalid password', '2');
    }

    this.text     = text;
    this.password = password;
  }

  encrypt():string
  {
    let sc = new SimpleCrypto(this.password);
    let encrypted = sc.encrypt(this.text);
    return char2emoji(encrypted);
  }
}

export default Encryption;

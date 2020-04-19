/**
 * Data for Decryption
 */

import SimpleCrypto from "simple-crypto-js";
import config       from '../../config/config.json';
import EMError      from './EMError';

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
    let decrypted = String( sc.decrypt(this.text) );
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

/**
 * EMError: The Error class for this project.
 *
 * Code         Message
 * 1            Encryption: invalid text
 * 2            Encryption: invalid password
 * 3            Decryption: invalid text
 * 4            Decryption: invalid password
 */

import config from '../../config/config.json';
const ptnMessage  = /^.+$/u;
const ptnCode     = /^\d+$/;

class EMError extends Error
{
  public readonly code:       string;
  public          previous?:  Error;

  /**
   * @param {string}     message          Message for human
   * @param {string}     code             Error code for machine
   * @param {Error}      [previous]       Previous Error
   * @exception {Error}  'invalid_message' / 'invalid_code' / 'invalid_previous'
   */
  constructor(message:string, code:string, previous?:Error)
  {
    if (ptnMessage.test(message) === false)
    {
      throw new Error('invalid_message');
    }

    if (ptnCode.test(code) === false)
    {
      throw new Error('invalid_code');
    }

    super(message);
    this.code      = code;
    this.previous  = previous;
  }

  public toString():string
  {
    if (this.previous === undefined)
    {
      return (`${this.constructor.name}: ${this.message} / ${this.code}`);
    }
    else
    {
      return (`${this.constructor.name}: ${this.message} / ${this.code}` + config.linebreak + this.previous);
    }
  }

}

export default EMError;

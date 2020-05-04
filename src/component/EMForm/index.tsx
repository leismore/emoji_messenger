import React, { FormEvent }               from 'react';
import style                              from './index.module.css';
import { Props, States }                  from './type';
import { Grid }                           from '@material-ui/core';
import { ThemeProvider, createMuiTheme }  from '@material-ui/core/styles';
import Encryption                         from '../../lib/ts/Encryption';
import Decryption                         from '../../lib/ts/Decryption';
import config                             from '../../config/config.json';

import EMFormText                         from '../EMFormText';
import EMFormPW                           from '../EMFormPW';
import EMFormCheckboxAppendURL            from '../EMFormCheckboxAppendURL';
import EMFormMessengerClipboard           from '../EMFormMessengerClipboard';
import EMFormButtons                      from '../EMFormButtons';

const theme = createMuiTheme({
  palette: {
    text: {
      primary:   "#fff",
      secondary: "rgba(255, 255, 255, 0.7)"
    }
  }
});

class EMForm extends React.Component<Props, States>
{
    constructor(props:Props)
    {
      super(props);

      let states:States = {
        textValue:               '',
        textValid:               null,
        pwValue:                 '',
        pwValid:                 null,
        appendURL:               true,
        submittedEncrypt:        false,
        submittedDecrypt:        false,
        copiedToClipboard:       false,
        copiedFromClipboard:     false,
        formReady:               false,
        wrongPW:                 false
      }
      this.state = states;

      this.updaterText                = this.updaterText.bind(this);
      this.updaterPW                  = this.updaterPW.bind(this);
      this.updaterCheckboxAppendURL   = this.updaterCheckboxAppendURL.bind(this);
      this.updaterButtonEncrypt       = this.updaterButtonEncrypt.bind(this);
      this.updaterButtonDecrypt       = this.updaterButtonDecrypt.bind(this);
      this.updaterButtonToClipboard   = this.updaterButtonToClipboard.bind(this);
      this.updaterButtonFromClipboard = this.updaterButtonFromClipboard.bind(this);
    }

    updaterText(event:FormEvent<HTMLTextAreaElement>):void
    {
      this.setState({
        // @ts-ignore
        textValue: event.target.value,
        submittedEncrypt:    false,
        submittedDecrypt:    false,
        copiedToClipboard:   false,
        copiedFromClipboard: false,
        formReady:           false,
        wrongPW:             false
      });
    }

    updaterPW(event:FormEvent<HTMLInputElement>):void
    {
      this.setState({
        // @ts-ignore
        pwValue: event.target.value,
        submittedEncrypt:    false,
        submittedDecrypt:    false,
        copiedToClipboard:   false,
        copiedFromClipboard: false,
        formReady:           false,
        wrongPW:             false
      });
    }

    updaterCheckboxAppendURL(event: FormEvent<HTMLInputElement>):void
    {
      this.setState({
        appendURL: event.currentTarget.checked,
        submittedEncrypt:    false,
        submittedDecrypt:    false,
        copiedToClipboard:   false,
        copiedFromClipboard: false,
        formReady:           false
      });
    }

    updaterButtonEncrypt(event: FormEvent<HTMLButtonElement>):void
    {
      this.setState({
        submittedEncrypt:        true,
        submittedDecrypt:        false,
        copiedToClipboard:       false,
        copiedFromClipboard:     false,
        formReady:               false,
        wrongPW:                 false
      });
    }

    updaterButtonDecrypt(event: FormEvent<HTMLButtonElement>):void
    {
      this.setState({
        submittedEncrypt:        false,
        submittedDecrypt:        true,
        copiedToClipboard:       false,
        copiedFromClipboard:     false,
        formReady:               false
      });
    }

    updaterButtonToClipboard(event: FormEvent<HTMLButtonElement>):void
    {
      this.setState({
        submittedEncrypt:        false,
        submittedDecrypt:        false,
        copiedToClipboard:       true,
        copiedFromClipboard:     false
      });
    }

    updaterButtonFromClipboard(event: FormEvent<HTMLButtonElement>):void
    {
      this.setState({
        submittedEncrypt:        false,
        submittedDecrypt:        false,
        copiedToClipboard:       false,
        copiedFromClipboard:     true
      });
    }

    render():React.ReactNode
    {
      return (
        <ThemeProvider theme={theme}>
          <Grid className={style.container} container component="form" xs={12} sm={7} direction="column">
            <EMFormText
              lang         = {this.props.lang}
              value        = {this.state.textValue}
              valid        = {this.state.textValid}
              valueUpdater = {this.updaterText} />
            <EMFormPW 
              lang         = {this.props.lang}
              value        = {this.state.pwValue}
              valid        = {this.state.pwValid}
              valueUpdater = {this.updaterPW} />
            <EMFormCheckboxAppendURL
              lang         = {this.props.lang}
              checked      = {this.state.appendURL}
              updater      = {this.updaterCheckboxAppendURL} />
            <EMFormMessengerClipboard
              lang         = {this.props.lang}
              visible      = {this.state.copiedToClipboard} />
            <EMFormButtons
              lang                 = {this.props.lang}
              encryptUpdater       = {this.updaterButtonEncrypt}
              decryptUpdater       = {this.updaterButtonDecrypt}
              clipboardToUpdater   = {this.updaterButtonToClipboard}
              clipboardFromUpdater = {this.updaterButtonFromClipboard} />
          </Grid>
          </ThemeProvider>
      );
    }

    componentDidUpdate(_prevProps:Props, prevState:States):void
    {
      // Validate text
      if (prevState.textValue !== this.state.textValue)
      {
        this.setState({
          textValid: this.validaterText(this.state.textValue)
        });
      }

      // Validate password
      if (prevState.pwValue !== this.state.pwValue)
      {
        if (this.state.wrongPW === true)
        {
          this.setState({
            pwValid: false
          });
        }
        else
        {
          this.setState({
            pwValid: this.validaterPW(this.state.pwValue)
          })
        }
      }

      // Encrypt button
      if ( prevState.submittedEncrypt === false && this.state.submittedEncrypt === true &&
           this.state.formReady === false )
      {
        if (this.validaterText(this.state.textValue) === true &&
            this.validaterPW(this.state.pwValue)     === true)
        {
          this.setState({
            submittedEncrypt:        true,
            submittedDecrypt:        false,
            copiedToClipboard:       false,
            copiedFromClipboard:     false,
            formReady:               true,
            wrongPW:                 false
          });
        }
        else
        {
          this.setState({
            submittedEncrypt:        false,
            submittedDecrypt:        false,
            copiedToClipboard:       false,
            copiedFromClipboard:     false,
            formReady:               false,
            wrongPW:                 false
          });
        }
      }

      // Encrypt
      if (prevState.formReady === false && this.state.formReady === true && this.state.submittedEncrypt === true)
      {
        const encrypted = this.encrypt(this.state.textValue, this.state.pwValue);
        this.setState({
          textValue:               encrypted,
          submittedEncrypt:        false,
          submittedDecrypt:        false,
          copiedToClipboard:       false,
          copiedFromClipboard:     false,
          formReady:               false,
          wrongPW:                 false
        });
      }

      // Decrypt button
      if ( prevState.submittedDecrypt  === false &&
           this.state.submittedDecrypt === true  &&
           this.state.formReady        === false )
      {
        if ( this.validaterText(this.state.textValue) === true &&
             this.validaterPW(this.state.pwValue)     === true &&
             this.state.wrongPW                       === false )
        {
          this.setState({
            submittedEncrypt:        false,
            submittedDecrypt:        true,
            copiedToClipboard:       false,
            copiedFromClipboard:     false,
            formReady:               true
          });
        }
        else
        {
          this.setState({
            submittedEncrypt:        false,
            submittedDecrypt:        false,
            copiedToClipboard:       false,
            copiedFromClipboard:     false,
            formReady:               false
          });
        }
      }

      // Decrypt
      if (prevState.formReady === false && this.state.formReady === true && this.state.submittedDecrypt === true)
      {
        try
        {
          const decrypted = this.decrypt(this.state.textValue, this.state.pwValue);
          this.setState({
            textValue:               decrypted,
            pwValid:                 true,
            submittedEncrypt:        false,
            submittedDecrypt:        false,
            copiedToClipboard:       false,
            copiedFromClipboard:     false,
            formReady:               false,
            wrongPW:                 false
          });
        }
        catch(e)
        {
          this.setState({
            pwValid:                 false,
            submittedEncrypt:        false,
            submittedDecrypt:        false,
            copiedToClipboard:       false,
            copiedFromClipboard:     false,
            formReady:               false,
            wrongPW:                 true
          });
        }
      }

      // ToClipboard button
      if (prevState.copiedToClipboard === false && this.state.copiedToClipboard === true)
      {
        const that = this;
        this.copyToClipboard(this.state.textValue).finally(() => {
          setTimeout(() => {
            that.setState({
              copiedToClipboard: false
            })
          }, config.messengerClipboard.duration * 1000);
        });
      }

      // FromClipboard button
      if (prevState.copiedFromClipboard === false && this.state.copiedFromClipboard === true)
      {
        const that = this;
        this.copyFromClipboard().then(text => {
          that.setState({
            textValue: text
          })
        }).finally(() => {
          setTimeout(() => {
            that.setState({
              copiedFromClipboard: false
            });
          }, config.messengerClipboard.duration *1000);
        });
      }
    }

    protected validaterText(text:string): (boolean|null)
    {
      if (text === '')
      {
        return null;
      }

      if ( typeof text !== 'string' ||
         ( text.length < config.text.minLength ||
           text.length > config.text.maxLength ) )
      {
        return false;
      }
      else
      {
        return true;
      }
    }

    protected validaterPW(password:string): (boolean|null)
    {
      if (password === '')
      {
        return null;
      }

      if ( typeof password !== 'string' ||
         ( password.length < config.password.minLength ||
           password.length > config.password.maxLength ) )
      {
        return false;
      }
      else
      {
        return true;
      }
    }

    protected encrypt(text:string, password:string):string
    {
      const enc = new Encryption(text, password);
      const encrypted = enc.encrypt();
      return encrypted;
    }

    protected decrypt(text:string, password:string):string
    {
      try {
        const dec = new Decryption(text, password);
        const decrypted = dec.decrypt();
        return decrypted;
      }
      catch (e)
      {
        throw e;
      }
    }

    protected async copyToClipboard(text:string):Promise<void>
    {
      if (this.state.appendURL)
      {
        return navigator.clipboard.writeText(text + ' :-) ' + config.app.url);
      }
      else
      {
        return navigator.clipboard.writeText(text);
      }
    }

    protected async copyFromClipboard():Promise<string>
    {
      return navigator.clipboard.readText();
    }
}

export default EMForm;

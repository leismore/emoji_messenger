import React         from 'react';
import style         from './index.module.css';
import { Props }     from './type';
import { Grid, TextField, InputLabel, FormHelperText } from '@material-ui/core';
import config        from '../../config/config.json';
import get_ui        from '../../lib/ts/get_ui';

class EMFormPW extends React.Component<Props>
{
  render():React.ReactNode
  {
    const ui = get_ui(this.props.lang);

    const NORMAL = (
      <Grid className={style.container}>
        <InputLabel className={style.label}>{ui.form.password.label}</InputLabel>
        <TextField
          className   = { style.pwNormal }
          value       = { this.props.value }
          onInput     = { this.props.valueUpdater }
          type        = "password"
          inputProps  = {{
            minLength: config.password.minLength,
            maxLength: config.password.maxLength
          }}
          required />
          <FormHelperText className={style.helperNormal}>{ui.form.password.help}</FormHelperText>
      </Grid>);

    const VALID = (
      <Grid className={style.container}>
        <InputLabel className={style.label}>{ui.form.password.label}</InputLabel>
        <TextField
          className   = { style.pwValid }
          value       = { this.props.value }
          onInput     = { this.props.valueUpdater }
          type        = "password"
          inputProps  = {{
            minLength: config.password.minLength,
            maxLength: config.password.maxLength
          }}
          required />
          <FormHelperText className={style.helperValid}>{ui.form.password.help}</FormHelperText>
      </Grid>);

    const INVALID = (
      <Grid className={style.container}>
        <InputLabel className={style.label}>{ui.form.password.label}</InputLabel>
        <TextField
          className   = { style.pwInvalid }
          value       = { this.props.value }
          onInput     = { this.props.valueUpdater }
          type        = "password"
          inputProps  = {{
            minLength: config.password.minLength,
            maxLength: config.password.maxLength
          }}
          required />
          <FormHelperText className={style.helperInvalid}>{ui.form.password.help}</FormHelperText>
      </Grid>);

    switch (this.props.valid) {
      case true:
        return VALID;
      case false:
        return INVALID;
      default:
        return NORMAL;
    }
  }

}

export default EMFormPW;

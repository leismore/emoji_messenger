import React         from 'react';
import style         from './index.module.css';
import { Props }     from './type';
import { Grid, TextareaAutosize, InputLabel, FormHelperText } from '@material-ui/core';
import config        from '../../config/config.json';
import get_ui        from '../../lib/ts/get_ui';

class EMFormText extends React.Component<Props>
{
  render():React.ReactNode
  {
    const ui = get_ui(this.props.lang);

    const NORMAL = (
      <Grid className={style.container}>
        <InputLabel className={style.label} color="primary">{ui.form.text.label}</InputLabel>
        <TextareaAutosize
          className   = { style.textNormal }
          value       = { this.props.value }
          onInput     = { this.props.valueUpdater }
          rowsMin     = { config.text.minLines }
          placeholder = { ui.form.text.placeholder }
          maxLength   = { config.text.maxLength }
          minLength   = { config.text.minLength }
          required />
        <FormHelperText className={style.helperNormal}>{ui.form.text.help}</FormHelperText>
      </Grid>
    );

    const VALID = (
      <Grid className={style.container}>
        <InputLabel className={style.label} color="primary">{ui.form.text.label}</InputLabel>
        <TextareaAutosize
          className   = { style.textValid }
          value       = { this.props.value }
          onInput     = { this.props.valueUpdater }
          rowsMin     = { config.text.minLines }
          placeholder = { ui.form.text.placeholder }
          maxLength   = { config.text.maxLength }
          minLength   = { config.text.minLength }
          required />
        <FormHelperText className={style.helperValid}>{ui.form.text.help}</FormHelperText>
      </Grid>
    );

    const INVALID = (
      <Grid className={style.container}>
        <InputLabel className={style.label} color="primary">{ui.form.text.label}</InputLabel>
        <TextareaAutosize
          className   = { style.textInvalid }
          value       = { this.props.value }
          onInput     = { this.props.valueUpdater }
          rowsMin     = { config.text.minLines }
          placeholder = { ui.form.text.placeholder }
          maxLength   = { config.text.maxLength }
          minLength   = { config.text.minLength }
          required />
        <FormHelperText className={style.helperInvalid}>{ui.form.text.help}</FormHelperText>
      </Grid>
    );

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

export default EMFormText;

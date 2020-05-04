import React                                from 'react';
import style                                from './index.module.css';
import { Props }                            from './type';
import { Grid, Checkbox, FormControlLabel } from '@material-ui/core';
import { ThemeProvider, createMuiTheme }    from '@material-ui/core/styles';
import { grey }                             from '@material-ui/core/colors';
import get_ui                               from '../../lib/ts/get_ui';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey['400']
    },
    text: {
      secondary: grey['500']
    }
  },
  typography: {
    fontSize: 12
  }
});

class EMFormCheckboxAppendURL extends React.Component<Props>
{
  render():React.ReactNode
  {
    const ui = get_ui(this.props.lang);
    return (
      <ThemeProvider theme={theme}>
        <Grid className={style.container}>
          <FormControlLabel
            className = { style.containerCheckbox }
            control   = { <Checkbox className = { style.checkbox }
                                    checked   = { this.props.checked }
                                    onChange  = { this.props.updater }
                                    color     = "primary" /> }
            label     = { ui.form.checkboxAppendURL.label } />
        </Grid>
      </ThemeProvider>
    );
  }

}

export default EMFormCheckboxAppendURL;

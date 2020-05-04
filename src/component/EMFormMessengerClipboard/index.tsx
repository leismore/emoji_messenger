import React                             from 'react';
import style                             from './index.module.css';
import { Props }                         from './type';
import { Grid, Typography }              from '@material-ui/core';
import CheckCircleIcon                   from '@material-ui/icons/CheckCircle';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green }                         from '@material-ui/core/colors';
import get_ui                            from '../../lib/ts/get_ui';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green['A700']
    },
    text: {
      primary: 'white'
    }
  },
  typography: {
    fontSize: 10
  }
});

class EMFormMessengerClipboard extends React.Component<Props>
{
  render():React.ReactNode
  {
    const ui = get_ui(this.props.lang);

    if (this.props.visible)
    {
      return (
        <ThemeProvider theme={theme}>
          <Grid className={style.container}>
            <Typography className={style.message} color="textPrimary">
              <CheckCircleIcon className={style.icon} color="primary" />
              {ui.form.messengerClipboard.message}
            </Typography>
          </Grid>
        </ThemeProvider>
      );
    }
    else
    {
      return (
        <ThemeProvider theme={theme}>
          <Grid className={style.containerHidden}>
            <Typography className={style.message} color="textPrimary">
              <CheckCircleIcon className={style.icon} color="primary" />
              {ui.form.messengerClipboard.message}
            </Typography>
          </Grid>
        </ThemeProvider>
      );
    } 
  }
}

export default EMFormMessengerClipboard;

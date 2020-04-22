import React                             from 'react';
import { CssBaseline }                   from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';
import './App.css';
import get_lang from './lib/ts/get_lang';

import EMHeader from './component/EMHeader/index';
import EMFooter from './component/EMFooter/index';

const LANG = get_lang();

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <EMHeader lang={LANG} />
        <EMFooter lang={LANG} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

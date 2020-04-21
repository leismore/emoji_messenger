import React                             from 'react';
import { CssBaseline }                   from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';
import './App.css';

import EMHeader from './component/EMHeader/index';

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
        <EMHeader />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

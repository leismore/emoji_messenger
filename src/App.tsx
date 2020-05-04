import React                             from 'react';
import { CssBaseline }                   from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';
import './App.css';
import get_lang       from './lib/ts/get_lang';
import SupportedLangs from './lib/ts/type/SupportedLangs';

import EMHeader from './component/EMHeader/index';
import EMMain   from './component/EMMain';
import EMFooter from './component/EMFooter/index';

const LANG = get_lang();

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

type States = {
  lang: SupportedLangs
};

class App extends React.Component<{}, States>
{
  constructor()
  {
    super({});
    this.state = {
      lang: LANG
    };
  }

  render():React.ReactNode
  {
    return (
      <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme = {theme}>
          <EMHeader    lang  = {this.state.lang} />
          <EMMain      lang  = {this.state.lang} />
          <EMFooter    lang  = {this.state.lang} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;

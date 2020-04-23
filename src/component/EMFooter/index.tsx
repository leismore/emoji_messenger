import React         from 'react';
import style         from './index.module.css';
import { Props }     from './type';
import { Container, Box, Grid, Button, Typography } from '@material-ui/core';
import { ThemeProvider, createMuiTheme }            from '@material-ui/core/styles';
import { grey }      from '@material-ui/core/colors';
import GitHubIcon    from '@material-ui/icons/GitHub';
import get_ui        from '../../lib/ts/get_ui';
import config        from '../../config/config.json';
import logo_leismore from '../../lib/image/logo_leismore.svg';

const theme = createMuiTheme({
  palette: {
    secondary:
    {
      main:      grey['500']
    },
    text: {
      primary:   grey['400'],
      secondary: grey['500']
    }
  },
  typography: {
    fontSize: 10
  }
});

class EMFooter extends React.Component<Props>
{
    render():React.ReactNode
    {
      const ui = get_ui(this.props.lang);

      return (
        <ThemeProvider theme={theme}>
          <Container className={style.container} component="footer" maxWidth="md">
           <Grid container justify="space-evenly" spacing={3}>
            <Grid item xs={12} sm={2}>
              <Button href={config.donation.url} variant="contained" color="primary">{ui.donation.label}</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography color="textPrimary" noWrap={true}>
                &copy; {config.app.date.initYear}-{config.app.date.updatedYear} {ui.leismore.name} /&nbsp;
                <a href={config.license.url} className={style.link}>{ui.license.name}</a></Typography>
              <Box className={style.containerLogoLeismore}><a href={config.leismore.url}>
                <img className={style.logoLeismore} src={logo_leismore} alt={ui.leismore.name} /></a></Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <a href={config.app.github}><GitHubIcon color="secondary" fontSize="small" /></a>
            </Grid>
           </Grid>
          </Container>
        </ThemeProvider>
      );
    }
}

export default EMFooter;

import React         from 'react';
import style         from './index.module.css';
import lang          from '../../lib/ts/get_lang';
import get_ui        from '../../lib/ts/get_ui';
import { Container, Typography } from '@material-ui/core';
import logo          from '../../logo.svg';

// @ts-ignore
const ui = get_ui(lang);

class EMHeader extends React.Component
{
    render():React.ReactNode
    {
      return (
        <Container className={style.container} component="header" maxWidth="md">
           <img className={style.logo} src={logo} alt={ui.app.name} />
           <Typography variant='h6' component='h1' color="textPrimary" display="inline" noWrap={true}>
             {ui.app.name}</Typography>
        </Container>
      );
    }
}

export default EMHeader;

import React         from 'react';
import style         from './index.module.css';
import { Props }     from './type';
import { Container } from '@material-ui/core';
import EMForm        from '../../component/EMForm';

class EMMain extends React.Component<Props>
{
  render():React.ReactNode
  {
    return (
      <Container className={style.container} maxWidth="md"><EMForm lang={this.props.lang} /></Container>
    );
  }
}

export default EMMain;

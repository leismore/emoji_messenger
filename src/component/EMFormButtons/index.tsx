import React                     from 'react';
import style                     from './index.module.css';
import { Props }                 from './type';
import { Grid, ButtonGroup }     from '@material-ui/core';
import EMFormButtonEncrypt       from '../EMFormButtonEncrypt';
import EMFormButtonDecrypt       from '../EMFormButtonDecrypt';
import EMFormButtonToClipboard   from '../EMFormButtonToClipboard';
import EMFormButtonFromClipboard from '../EMFormButtonFromClipboard';

class EMFormButtons extends React.Component<Props>
{
  render():React.ReactNode
  {
    const LANG = this.props.lang;
    return (
      <Grid className={style.container}>
        <ButtonGroup className={style.buttonGroup1}>
          <EMFormButtonEncrypt lang={LANG} updater={this.props.encryptUpdater} />
          <EMFormButtonDecrypt lang={LANG} updater={this.props.decryptUpdater} />
        </ButtonGroup>
        <ButtonGroup  className={style.buttonGroup2}>
          <EMFormButtonToClipboard   lang={LANG} updater={this.props.clipboardToUpdater} />
          <EMFormButtonFromClipboard lang={LANG} updater={this.props.clipboardFromUpdater} />
        </ButtonGroup>
      </Grid>
    );
  }
}

export default EMFormButtons;

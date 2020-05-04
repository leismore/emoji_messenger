import React         from 'react';
import style         from './index.module.css';
import { Props }     from './type';
import { Button }    from '@material-ui/core';
import LockOpenIcon  from '@material-ui/icons/LockOpenOutlined';
import get_ui        from '../../lib/ts/get_ui';

class EMFormButtonDecrypt extends React.Component<Props>
{
  render():React.ReactNode
  {
    const ui = get_ui(this.props.lang);
    return (
      <Button
        className = { style.button }
        onClick   = { this.props.updater }
        variant   = "contained"
        color     = "primary"
        fullWidth = { true }
        startIcon = { <LockOpenIcon /> } >
      {ui.form.button.decrypt.label}
      </Button>
    );
  }
}

export default EMFormButtonDecrypt;

import React         from 'react';
import style         from './index.module.css';
import { Props }     from './type';
import { Button }    from '@material-ui/core';
import LockIcon      from '@material-ui/icons/LockOutlined';
import get_ui        from '../../lib/ts/get_ui';

class EMFormButtonEncrypt extends React.Component<Props>
{
  render():React.ReactNode
  {
    const ui = get_ui(this.props.lang);
    return (
      <Button className = { style.button }
              onClick   = { this.props.updater }
              variant   = "contained"
              color     = "primary"
              fullWidth = { true }
              startIcon = { <LockIcon /> } >
        {ui.form.button.encrypt.label}
      </Button>
    );
  }
}

export default EMFormButtonEncrypt;

import React         from 'react';
import style         from './index.module.css';
import { Props }     from './type';
import { Button }    from '@material-ui/core';
import get_ui        from '../../lib/ts/get_ui';

class EMFormButtonFromClipboard extends React.Component<Props>
{
  render():React.ReactNode
  {
    const ui = get_ui(this.props.lang);
    return (
      <Button className = { style.button }
              onClick   = { this.props.updater }
              variant   = "outlined"
              color     = "primary"
              fullWidth = { true }>
        {ui.form.button.fromClipboard.label}
      </Button>
    );
  }
}

export default EMFormButtonFromClipboard;

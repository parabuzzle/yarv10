import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = {
  appbar: {
    paddingBottom: '2em',
  },
};



class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar className={classes.appbar} position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Yet Another RV 10 Build Log
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);

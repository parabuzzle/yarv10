import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';

const styles = {
  appbar: {
    paddingBottom: '1em',
  },
  img: {
    margin: '1em',
    color: '#fff',
  },
  imgFlip: {
    margin: '1em',
    color: '#fff',
    transform: 'scaleX(-1)',
  },
  icon: {
    margin: '0.25em',
    fontSize: '2em',
    transform: 'scaleX(-1)',
  },
  title: {
    fontFamily: "'Indie Flower', cursive",
    fontSize: '2em',
    fontWeight: 'bold',
  },
};



class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar className={classes.appbar} position="static" color="primary">
          <Toolbar>
            <Icon className={classes.icon} color="#fff">
              build
            </Icon>
            <Typography variant="title" color="inherit" className={classes.title}>
              Yet Another RV10 Build Log
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);

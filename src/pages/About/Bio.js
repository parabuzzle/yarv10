import React from 'react'

import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    padding: '1em',
    marginBottom: '0.5em',
  },
  avatar: {
    float: 'left',
    margin: '1em',
    width: 100,
    height: 100,
  },
  headline: {
    marginBottom: '0.5em',
    textDecoration: 'underline',
  },
});

const Bio = ({classes, name, avatar, children, textAlign}) => (
  <div className={classes.root}>
    <Avatar src={avatar} className={classes.avatar}/>
    <Typography variant="headline" className={classes.headline}>
      {name}
    </Typography>
      {children}
  </div>
)
export default withStyles(styles)(Bio);

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
    width: 150,
    height: 150,
  },
  headline: {
    marginBottom: '0.5em',
  },
});

const Bio = ({classes, name, avatar, children}) => (
  <div className={classes.root}>
    <Avatar src={avatar} className={classes.avatar}/>
    <Typography variant="headline" className={classes.headline}>
      {name}
    </Typography>
      {children}
  </div>
)
export default withStyles(styles)(Bio);

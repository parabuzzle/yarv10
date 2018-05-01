import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
  main: {
    textAlign: 'left',
    padding: '2em',
  },
  title: {
    marginBottom: '1em',
  },
};

class MainContent extends Component {

  title() {
    if(this.props.title){
      return(
        <div className={this.props.classes.title}>
          <Typography variant="title">
            {this.props.title}
          </Typography>
        </div>
      )
    }
  }

  render() {
    const { classes, children } = this.props;
    console.log(children)

    return(
      <div className={classes.main}>
        {this.title()}
        {children}
      </div>
    )
  }
}

MainContent.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainContent);

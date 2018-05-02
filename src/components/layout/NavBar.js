import React, { Component } from 'react';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';


class NavBar extends Component {
  render() {
    return (
      <div>
        <Toolbar>
          <Button color="primary" href="/#">Home</Button>
          <Button color="primary" href="/#about">Who are the Builders</Button>
          <Button color="primary" href="/#build">Build Log</Button>
        </Toolbar>
      </div>
    );
  }
}

export default NavBar;

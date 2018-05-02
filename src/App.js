import React, { Component } from 'react';
import './App.css';
import theme from './theme';

import CssBaseline from 'material-ui/CssBaseline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/layout/Header';
import NavBar from './components/layout/NavBar';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <NavBar />
          <Routes />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import CssBaseline from 'material-ui/CssBaseline';

import Header from './components/layout/Header';
import NavBar from './components/layout/NavBar';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header/>
        <NavBar/>
        <Routes />
      </div>
    );
  }
}

export default App;

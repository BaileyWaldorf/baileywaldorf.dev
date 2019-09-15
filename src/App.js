import React, { Component } from 'react';
import './css/App.css';
import './css/fonts.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';

var background = {
  backgroundColor: 'rgb(10, 25, 47)',
  overflow: 'hidden',
  textAlign: 'center',
  color: '#333',
};

class App extends Component {

  render() {
    return (
      <div className="App" style={background}>
        <Header />
        <Home />
        <Projects />
      </div>
    );
  }
}

export default App;

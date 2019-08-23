import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Background from './assets/bg.jpg';

var background = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  overflow: 'hidden',
  textAlign: 'center',
  height: '500vh',
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

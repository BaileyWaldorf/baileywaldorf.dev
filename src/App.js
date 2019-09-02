import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Background from './assets/bg.jpg';

var background = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  overflow: 'hidden',
  textAlign: 'center',
  height: '200vh',
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

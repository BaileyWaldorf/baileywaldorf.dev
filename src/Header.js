import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: false,
      work: false,
      about: false,
      contact: false,
    }
  }

  onButtonClick = (header) => {
    switch (header) {
      case 'projects':
        this.setState({
          projects: true,
          work: false,
          about: false,
          contact: false
         })
         break;
      case 'work':
        this.setState({
          projects: false,
          work: true,
          about: false,
          contact: false
        })
        break;
      case 'about':
        this.setState({
          projects: false,
          work: false,
          about: true,
          contact: false
        })
        break;
      case 'contact':
        this.setState({
          projects: false,
          work: false,
          about: false,
          contact: true
        })
        break;
    }
  }

  render() {
    return (
      <div className="header-container">
        <span className="header-logo">
          <a href="index.html">
            Bailey Waldorf
            </a>
        </span>
        <span className="nav-buttons-container">
          <span className={this.state.projects ? "nav-buttons-selected" : "nav-buttons"}>
            <a href="#projects" onClick={() => {this.onButtonClick('projects')}}>
              Projects
            </a>
          </span>
          <span className={this.state.work ? "nav-buttons-selected" : "nav-buttons"}>
            <a href="#experience" onClick={() => {this.onButtonClick('work')}}>
              Work
            </a>
          </span>
          <span className={this.state.about ? "nav-buttons-selected" : "nav-buttons"}>
            <a href="#about" onClick={() => {this.onButtonClick('about')}}>
              About
            </a>
          </span>
          <span className={this.state.contact ? "nav-buttons-selected" : "nav-buttons"}>
            <a href="index.html" onClick={() => {this.onButtonClick('contact')}}>
              Contact
            </a>
          </span>
        </span>
      </div>
    );
  }
}

export default Header;

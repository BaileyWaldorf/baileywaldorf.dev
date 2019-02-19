import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
        <div className="header-container">
            <span className="header-logo">
            <a href="index.html">
                Bailey Waldorf
            </a>
            </span>
            <span className="nav-buttons-container">
            <span className="nav-buttons">
                <a href="#projects">
                Projects
                </a>
            </span>
            <span className="nav-buttons">
                <a href="#experience">
                Work Experience
                </a>
            </span>
            <span className="nav-buttons">
                <a href="#about">
                About Me
                </a>
            </span>
            <span className="nav-buttons">
                <a href="index.html">
                Contact
                </a>
            </span>
            </span>
        </div>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import classnames from "classnames";
import '../css/App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: false,
      work: false,
      resume: false,
      contact: false,
      prevScrollpos: window.pageYOffset,
      visible: true
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    let navLinks = document.getElementsByClassName('nav-links');
    // let homePage = document.getElementById('home-page');

    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');

      // homePage.style.marginTop = mainNav.classList.contains('active') ? "150px" : "0px";
    });

    for(var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function () {
        mainNav.classList.toggle('active');
  
        // homePage.style.marginTop = mainNav.classList.contains('active') ? "150px" : "0px";
      });
    }
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  
  handleScroll = () => {
    const { prevScrollpos } = this.state;
  
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
  
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    }, () => {
      if(!this.state.visible) {
        let mainNav = document.getElementById('js-menu');
        if(mainNav.classList.contains('active')) mainNav.classList.toggle('active');
      }
    });
  }

  onButtonClick = (header) => {
    // eslint-disable-next-line default-case
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
      <nav className={classnames("header-container", {"header-container-hidden": !this.state.visible})}>
        <span className="header-logo">
          <a href="index.html">
            BaileyWaldorf<span className="dot-dev">.dev</span>
            </a>
        </span>

        <span className="navbar-toggle" id="js-navbar-toggle">
          <i className="fa fa-bars"></i>
        </span>
        <ul className="main-nav" id="js-menu">
          <li>
              <a href="#projects" className="nav-links">Projects</a>
          </li>
          {/* <li>
              <a href="index.html" className="nav-links">Work</a>
          </li>
          <li>
              <a href="index.html" className="nav-links">Contact</a>
          </li> */}
          <li>
              <a href="resume.pdf" className="nav-links">Resume</a>
          </li>
        </ul>

        <span className="nav-buttons-container">
          <span className={this.state.projects ? "nav-buttons-selected" : "nav-buttons"}>
            <a href="#projects" onClick={() => {this.onButtonClick('projects')}}>
              Projects
            </a>
          </span>
          {/* <span className={this.state.work ? "nav-buttons-selected" : "nav-buttons"}>
            <a href="#experience" onClick={() => {this.onButtonClick('work')}}>
              Work
            </a>
          </span>
          <span className={this.state.contact ? "nav-buttons-selected" : "nav-buttons"}>
            <a href="index.html" onClick={() => {this.onButtonClick('contact')}}>
              Contact
            </a>
          </span> */}
          <span className={this.state.resume ? "nav-buttons-selected" : "nav-buttons"}>
            <a href="resume.pdf" target="_blank">
              Resume
            </a>
          </span>
        </span>
      </nav>
    );
  }
}

export default Header;

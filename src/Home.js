import React, { Component } from 'react';
import Portrait from './assets/portrait-dramatic.jpg';
import PortraitHovered from './assets/portrait-vivid.jpg';
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
  }

  render() {
    return (
      <div className="home-page">
        <div className="about-container">
          <span className="about-txt-container">
            <div className="txt-hello">Hello, I'm</div>
            <div className="txt-name">Bailey Waldorf</div>
            <br />
            <h2>CS Student at University of Central Florida</h2>
            <h4>Previously at&nbsp;
              <form action="https://www.americanexpress.com/" method="get" target="_blank">
                <button className="txt-company">American Express</button>
              </form>,&nbsp;
              <form action="https://www.homedepot.com/" method="get" target="_blank">
                <button className="txt-company">Home Depot</button>
              </form>
              ,&nbsp;and&nbsp;
              <form action="https://www.journeylabs.io/" method="get" target="_blank">
                <button className="txt-company">JourneyLabs</button>
              </form>
            </h4>
            <br />
            <div>I'm a software engineer based in Orlando, FL with experience in
              web development and design. Lately I've been working on an AI for
              NASA's Jet Propulsion Laboratory and using Spotify's API to experiment
              on human communication through music. Check out my work below and don't
              be afraid to reach out!
            </div>
          </span>
          <span className="about-pic-container">
            <a href="https://www.linkedin.com/in/baileywaldorf/">
              <img
                className="self-portrait"
                src={this.state.hovered ? PortraitHovered : Portrait}
                alt="Self Portrait"
                onMouseEnter={() => {this.setState({hovered: true})}}
                onMouseLeave={() => {this.setState({hovered: false})}}
                height="300px"
                width="300px"
              />
            </a>
          </span>
        </div>
          <a href="#projects" class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
      </div>
    );
  }
}

export default Home;

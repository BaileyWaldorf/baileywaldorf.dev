import React, { Component } from "react";
import "../css/App.css";
import ProjectCard from './ProjectCard';
import ProjectContent from '../content/projects';

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        {/* eslint-disable-next-line */}
        <a href="\" id="projects" style={{marginTop: '0px'}}/>
        <div className="projects-section-header">>_ Some things I've built</div>
        <div className="projects-tile-container">
          {ProjectContent.map((project, index) =>
            <ProjectCard title={project.title} subTitle={project.subTitle} technologies={project.technologies} body={project.body} picture={project.picture} key={index} URL={project.URL}/>)
          }
        </div>
      </div>
    );
  }
}

export default Projects;

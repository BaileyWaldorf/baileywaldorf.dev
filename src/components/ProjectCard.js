import React from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';

const ProjectCard = (props) => {

  AOS.init();

  return (
    <a href={props.URL} target="_blank" rel="noopener noreferrer">
      <div className="project-card" data-aos="zoom-in">
        <img
          className="project-picture"
          src={props.picture}
          alt="not found"
          align="middle"
          height="270px"
          width="100%"
          style={{ opacity: "0.9" }}
        />
        <h3 className="project-title">
          {props.title}
        </h3>
        <div className="project-subtitle">
          {props.technologies}
        </div>
        <div className="project-body">
          {props.body}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard;
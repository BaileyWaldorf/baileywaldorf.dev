import React from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';

const ProjectCard = (props) => {

  AOS.init();

  return (
    <a href={props.URL} target="_blank">
      <div class="project-card" data-aos="zoom-in">
        <img src={props.picture} alt="not found" align="middle" height="270px" width="100%" style={{opacity: "0.9"}}/>
        <h2 className="project-title">
          {props.title}
        </h2>
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
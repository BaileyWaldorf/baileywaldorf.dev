import React from 'react';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';

const ProjectCard = (props) => {

  AOS.init();

  return (
    <div class="project-card" data-aos="zoom-in">
      <img src={props.picture} alt="not found" align="middle" height="300px" width="100%"/>
      <h2 className="project-title">
        {props.title}
      </h2>
      <div className="project-subtitle">
        {props.subTitle}
      </div>
      <div className="project-body">
        {props.body}
      </div>
    </div>
  )
}

export default ProjectCard;
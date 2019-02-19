import React from 'react';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';

const ExperienceCard = (props) => {

  AOS.init();

  return (
    <div class="experience-card" data-aos="zoom-in">
      <h2 className="experience-position">
        {props.position}
      </h2>
      <span className="experience-company">
        {props.company}
      </span>
      <div className="project-body">
        {props.body}
      </div>
    </div>
  )
}

export default ExperienceCard;
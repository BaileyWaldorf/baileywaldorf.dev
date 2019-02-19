import React, { Component } from "react";
import "./App.css";
import ExperienceCard from './ExperienceCard';

class Experience extends Component {

  experience = {
    experience: [
      {
        "company": "JourneyLabs",
        "position": "Product Science Intern",
        "location": "Orlando, FL",
        "period": "Oct 2018 – Present",
        bullets: [
          {
            "1": "Utilizing the JourneyLabs cloud-based platform and problem-solving techniques to create solutions for clients",
            "2": "Collaborating with the dev team to product test for bugs, usability, and user experience after each platform iteration",
          },
        ]
      },
      {
        "company": "The Home Depot",
        "position": "Software Engineering Intern",
        "location": "Atlanta, GA",
        "period": "May 2018 – Aug 2018",
        bullets: [
          {
            "1": "Developed an in-house monitoring application for the Cassandra database to replace Datastax OpsCenter and save over $1M/year in third-party licensing costs; Will be open sourced and used by the site reliability engineers in over 7 teams",
            "2": "Created the application to be deployed in GCP using Go/Prometheus as the backend and React/Grafana as the frontend",
          },
        ]
      },
      {
        "company": "Draftpot",
        "position": "Motion Graphic Designer",
        "location": "Orlando, FL",
        "period": "Feb 2015 – May 2015",
        bullets: [
          {
            "1": "Developed an in-house monitoring application for the Cassandra database to replace Datastax OpsCenter and save over $1M/year in third-party licensing costs; Will be open sourced and used by the site reliability engineers in over 7 teams",
            "2": "Created the application to be deployed in GCP using Go/Prometheus as the backend and React/Grafana as the frontend",
          },
        ]
      },
      {
        "company": "Fullscreen Inc.",
        "position": "Brand Manager & Video Producer",
        "location": "Plantation, FL",
        "period": "Sep 2011 – Apr 2014",
        bullets: [
          {
            "1": "Created a brand identity across multiple media platforms, totaling 9.4M public impressions and 66K followers",
            "2": "•	Incorporated JavaScript within After Effects for video production effects and web development",
          },
        ]
      },
    ]
  }

  render() {
    return (
      <div className="experience-container">
        <a name="experience" />
        <div class="experience-flex-container">
          {this.experience.experience.map((exp, index) =>
            <ExperienceCard company={exp.company} position={exp.position} location={exp.location} period={exp.period} bullets={exp.bullets} index={index}/>)
          }
        </div>
      </div>
    );
  }
}

export default Experience;

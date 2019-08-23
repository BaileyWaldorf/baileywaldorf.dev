import React, { Component } from "react";
import "./App.css";
import ProjectCard from './ProjectCard';

class Projects extends Component {

  projects = {
    projects: [
      {
        "title": "Hide-N-Seek",
        "subTitle": "Project Lead & Developer",
        "technologies": "React Native, Firestore, Node, Express",
        "body": "Real time hide-n-seek mobile game where friends can relive their childhood.",
        "picture": "./Hide-N-Seek-Animated-Mockup.gif"
      },
      // {
      //   "title": "Home Depot Internship",
      //   "subTitle": "Software Engineer - Database Monitoring",
      //   "technologies": "Cassandra DB, Prometheus, Go, React, Grafana",
      //   "body": "My experience as an intern as The Home Depot and what I learned.",
      //   "picture": "./home-depot-pic.jpg"
      // },
      {
        "title": "Language Leap",
        "subTitle": "Developer & Designer",
        "technologies": "Dart, Flutter, Android Studio, Hackathon",
        "body": "Using Google Vision and Google Translate to teach new languages.",
        "picture": "./language-leap.jpg"
      },
      {
        "title": "UCF Events Page Recreation",
        "subTitle": "Project Lead, Developer, & Designer",
        "technologies": "React, mySQL, Node, Express",
        "body": "A CRUD app to view and manage events going on around school.",
        "picture": "./got-events.jpg"
      },
      {
        "title": "Rising",
        "subTitle": "Scripter & Graphic Designer",
        "technologies": "Unity, C#, GameJam, React, Grafana",
        "body": "A shared controller experience where you must use teamwork and wit to complete puzzles.",
        "picture": "./rising.jpg"
      },
      {
        "title": "Royal Original Redesign",
        "subTitle": "UX/UI Design",
        "technologies": "Dart, Flutter, Android Studio, Hackathon",
        "body": "Created a few new looks for a clothing website paying close attention to user experience.",
        "picture": "./royal-og-redesign.jpg"
      }
    ]
  }

  render() {
    return (
      <div className="projects-container">
        <a id="projects" style={{marginTop: '0px'}}/>
        <div className="projects-section-header">Some things I've built</div>
        <div class="projects-tile-container">
          {this.projects.projects.map((project, index) =>
            <ProjectCard title={project.title} subTitle={project.subTitle} technologies={project.technologies} body={project.body} picture={project.picture} index={index}/>)
          }
        </div>
      </div>
    );
  }
}

export default Projects;

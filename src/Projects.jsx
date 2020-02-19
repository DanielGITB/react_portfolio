import Axios from "axios";
import React, { Component } from "react";
import ProjectCard from "./ProjectCard";


class Projects extends Component {
    state = {
        projects:[]
    }


    componentDidMount() {
        axios.get('./src/data/projects.json')
          .then(response => {
            this.setState({
              projects: response.data
            })
          })
      }

    render() {
    const projects = this.state.projects;
    let projectsList;



    if (projects.length > 0) {
        projectList = projects.map(project => {
            return (
                <div id={'project-' + project.id} key={project.id}>
                    <ProjectCard project={project} />
                </div>
            )
        })
    }

    return (
        <div className="ui main container">
            <h1 id=" projects-header" className="uiheader">My Projects</h1>
            <div className="ui stackable four column grid">{ProjectsList}</div>
        </div>

    )

    }



}


export default Projects;

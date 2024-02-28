import ProjectCard from '../projectCard';
import projects from '../project.json';
import React from 'react';
import "../style.css";

function Projects() {
    return (
        <>
        <div className="row myProjects">
            {projects.map((project) => (
                <ProjectCard key={project.id} name={project.name} image={project.image} description={project.description} github={project.github} deployed={project.deployed} deployedPage={project.deployedPage} githubPage={project.githubPage} />
            ))}</div>
        </>
    );
}

export default Projects;

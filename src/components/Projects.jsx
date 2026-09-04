import {
    projects
} from "../data/portfolioData.js";

import ProjectCard
    from "./ProjectCard.jsx";


function Projects() {
    return (
        <section
            className="section"
            id="projects"
        >

            <div className="section-heading">

                <p>FEATURED WORK</p>

                <h2>
                    Projects I've built.
                </h2>

                <span>
                    Practical applications covering
                    full-stack development, React,
                    analytics and Python.
                </span>

            </div>


            <div className="projects-grid">

                {projects.map(
                    (project) => (

                        <ProjectCard
                            key={
                                project.title
                            }
                            project={
                                project
                            }
                        />

                    )
                )}

            </div>

        </section>
    );
}


export default Projects;
function ProjectCard({
    project
}) {
    return (
        <article className="project-card">

            <div className="project-image">

                <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                />

                <span className="project-number">
                    {project.number}
                </span>

            </div>


            <div className="project-content">

                <div className="project-meta">
                    {project.featured
                        ? "FEATURED PROJECT"
                        : "PROJECT"}
                </div>


                <h3>
                    {project.title}
                </h3>


                <p>
                    {project.description}
                </p>


                <div className="tech-list">

                    {project.technologies.map(
                        (technology) => (

                            <span
                                key={
                                    technology
                                }
                            >
                                {technology}
                            </span>

                        )
                    )}

                </div>


                <div className="project-links">

                    {project.live && (

                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="button primary small"
                        >
                            Live Demo ↗
                        </a>

                    )}


                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="button secondary small"
                    >
                        GitHub ↗
                    </a>

                </div>

            </div>

        </article>
    );
}


export default ProjectCard;
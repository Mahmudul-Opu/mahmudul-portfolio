import {
    skills
} from "../data/portfolioData.js";


function Skills() {
    return (
        <section
            className="section"
            id="skills"
        >

            <div className="section-heading">

                <p>TECHNICAL SKILLS</p>

                <h2>
                    Technologies I work with.
                </h2>

            </div>


            <div className="skills-grid">

                {skills.map(
                    (group) => (

                        <article
                            className="skill-card"
                            key={group.category}
                        >

                            <h3>
                                {group.category}
                            </h3>

                            <div className="skill-tags">

                                {group.items.map(
                                    (skill) => (

                                        <span
                                            key={skill}
                                        >
                                            {skill}
                                        </span>

                                    )
                                )}

                            </div>

                        </article>

                    )
                )}

            </div>

        </section>
    );
}


export default Skills;
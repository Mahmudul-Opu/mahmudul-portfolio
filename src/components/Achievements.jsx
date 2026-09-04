import {
    achievements
} from "../data/portfolioData.js";


function Achievements() {
    return (
        <section
            className="section"
            id="achievements"
        >

            <div className="section-heading">

                <p>ACHIEVEMENTS</p>

                <h2>
                    Competition highlights.
                </h2>

            </div>


            <div className="achievement-grid">

                {achievements.map(
                    (achievement) => (

                        <article
                            className="achievement-card"
                            key={
                                achievement.subtitle
                            }
                        >

                            <div className="achievement-icon">
                                {
                                    achievement.icon
                                }
                            </div>

                            <div>

                                <span>
                                    {
                                        achievement.title
                                    }
                                </span>

                                <h3>
                                    {
                                        achievement.subtitle
                                    }
                                </h3>

                                <p>
                                    {
                                        achievement.meta
                                    }
                                </p>

                            </div>

                        </article>

                    )
                )}

            </div>

        </section>
    );
}


export default Achievements;
function Hero() {
    return (
        <section
            className="hero section"
            id="home"
        >

            <div className="hero-copy">

                <div className="availability">
                    <span></span>
                    Open to Internship Opportunities
                </div>

                <p className="hero-hello">
                    Hi, I'm
                </p>

                <h1>
                    Mahmudul
                    <br />

                    <span>
                        Amin Opu.
                    </span>
                </h1>

                <h2>
                    CSE Student |
                    Software Developer
                </h2>

                <p className="hero-description">
                    I build full-stack,
                    data-driven and responsive
                    applications using JavaScript,
                    React, PHP, MySQL and Python.
                </p>


                <div className="hero-buttons">

                    <a
                        href="#projects"
                        className="button primary"
                    >
                        View Projects
                        <span>→</span>
                    </a>

                    <a
                        href="https://github.com/Mahmudul-Opu"
                        target="_blank"
                        rel="noreferrer"
                        className="button secondary"
                    >
                        GitHub
                    </a>

                    <a
                        href="/cv/Mahmudul-Amin-Opu-CV.pdf"
                        download="Mahmudul-Amin-Opu-CV.pdf"
                        className="button secondary"
                    >
                        Download CV
                    </a>    


        
                     

                </div>


                <div className="hero-social">

                    <a
                        href="mailto:shakibopu030@gmail.com"
                    >
                        Email
                    </a>

                    <span>•</span>

                    <a
                        href="https://www.linkedin.com/in/mahmudul-amin-opu/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <span>•</span>

                    <a
                        href="https://github.com/Mahmudul-Opu"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                </div>

            </div>


            <div className="hero-photo-area">

                <div className="photo-glow">
                </div>

                <div className="profile-card">

                    <img
                        src="/images/profile.jpg"
                        alt="Mahmudul Amin Opu"
                    />

                    <div className="location-chip">
                        <span></span>
                        Dhaka, Bangladesh
                    </div>

                </div>


                <div className="floating-skill skill-one">

                    <strong>
                        &lt;/&gt;
                    </strong>

                    <div>
                        <b>Full Stack</b>
                        <small>
                            PHP • MySQL • JS
                        </small>
                    </div>

                </div>


                <div className="floating-skill skill-two">

                    <strong>R</strong>

                    <div>
                        <b>React</b>
                        <small>
                            Modern Frontend
                        </small>
                    </div>

                </div>

            </div>

        </section>
    );
}


export default Hero;
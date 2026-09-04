import "./App.css";

import Navbar
    from "./components/Navbar.jsx";

import Hero
    from "./components/Hero.jsx";

import About
    from "./components/About.jsx";

import Skills
    from "./components/Skills.jsx";

import Projects
    from "./components/Projects.jsx";

import Research
    from "./components/Research.jsx";

import Achievements
    from "./components/Achievements.jsx";

import Education
    from "./components/Education.jsx";

import Experience
    from "./components/Experience.jsx";

import Certifications
    from "./components/Certifications.jsx";

import Contact
    from "./components/Contact.jsx";

import Footer
    from "./components/Footer.jsx";


function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Research />
                <Achievements />
                <Education />
                <Experience />
                <Certifications />
                <Contact />
            </main>

            <Footer />
        </>
    );
}


export default App;
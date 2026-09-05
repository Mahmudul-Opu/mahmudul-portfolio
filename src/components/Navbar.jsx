import { useState } from "react";


function Navbar() {
    const [open, setOpen] =
        useState(false);


    function closeMenu() {
        setOpen(false);
    }


    return (
        <header className="navbar">

            <div className="nav-container">

                <a
                    href="#home"
                    className="logo"
                    onClick={closeMenu}
                >
                    <span>M</span>
                    Mahmudul.
                </a>


                <button
                    type="button"
                    className="menu-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    onClick={() =>
                        setOpen(!open)
                    }
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>


                <nav
                    className={
                        open
                            ? "nav-links open"
                            : "nav-links"
                    }
                >
                    <a
                        href="#about"
                        onClick={closeMenu}
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        onClick={closeMenu}
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        onClick={closeMenu}
                    >
                        Projects
                    </a>

                    <a
                        href="/cv/Mahmudul-Amin-Opu-CV.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="nav-cv"
                    >
                        View CV

                    </a>    

                    <a
                        href="#achievements"
                        onClick={closeMenu}
                    >
                        Achievements
                    </a>

                    <a
                        href="#contact"
                        onClick={closeMenu}
                    >
                        Contact
                    </a>

                </nav>

            </div>

        </header>
    );
}


export default Navbar;
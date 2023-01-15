import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'

const Menu = () => (
    <>
    <p><a href="#aboutMe">About me</a></p>
    <p><a href="#education">Education</a></p>
    <p><a href="#workExperience">Work experience</a></p>
    <p><a href="#majorProjects">Major projects</a></p>
    <p><a href="#volunteering">Volunteering</a></p>
    <p><a href="#contact">Contact</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="portfolio__navbar">
            <div className="portfolio__navbar-links">
                <Menu />
            </div>
            <div className="portfolio__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine 
                        color="var(--color-text)" 
                        size={27}
                        onClick={() => setToggleMenu(false)} 
                        />
                    : <RiMenu3Line
                        color="var(--color-text)"
                        size={27}
                        onClick={() => setToggleMenu(true)}
                        />
                }
                {toggleMenu && (
                    <div className="portfolio__navbar-menu_container scale-up-center">
                        <div classNem="portfolio__navbar-menu_container-links">
                            <Menu />
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Navbar
import React from 'react'
import './footer.css'
import Socials from './../socials/Socials'

import LOGO from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer>

            <div className="footer__logo">
                <img src={LOGO} alt='LOGO' />
            </div>
            <ul className='permalinks'>
                <li><a href="# ">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#education">Educations</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <Socials />
            </div>

            <div className="footer__copyright">
                <small>© Md. Zahed Hossain. All rights reserved.</small>
            </div>
        </footer>
    )
}


export default Footer
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Socials from './../socials/Socials'

import Typewriter from 'typewriter-effect';

const Header = () => {


    return (
        <header id="header">
            <div className="container header__container" >
                <h5>Hello I am</h5>
                <h1>Md. Zahed Hossain</h1>
                <h5 className="text-light">
                    <Typewriter
                        options={{
                            strings: ['Civil Engineer', 'Teacher', 'Web Developer', 'Civil Engineer, Teacher & Web Developer'],
                            autoStart: true,
                            loop: true,

                        }}
                    />
                </h5>
                <CTA />
                <div className="header__socials">
                    <Socials />
                </div>

                <div className="me" >
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
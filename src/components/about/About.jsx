import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card animated'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className='about__card animated'>
                            <FiUsers className='about__icon' />
                            <h5>Research</h5>
                            <small>2+ Conference Paper</small>
                        </article>

                        <article className='about__card animated'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>2 Residential Buildings and 5 Websites</small>
                        </article>
                    </div>

                    <p>
                        Passionate in designed based work and a Civil engineering graduate from KUET. Working as a Lecturer at the Department of Civil Engineering at Stamford University Bangladesh. Dedicated to take the organization to a better quality. Quick learner and willing to handle large volumes without compromising quality to prove myself as a professional engineer and a dedicated individual to serve the country.
                    </p>

                    <a href="#contact" className='btn btn-primary'> Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
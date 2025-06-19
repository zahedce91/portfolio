import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const civil_data = [
    {
        name: 'Residential Building Structural Design ',
    },
    {
        name: 'Office Building Structural Design ',
    },
    {
        name: 'Foundation Design',
    },

]

const web_data = [

    {
        name: 'PHP Website ',
    },
    {
        name: 'Banking Software ',
    },
    {
        name: 'Sales Management Website ',
    },
    {
        name: 'Somity Software Developement ',
    },
    {
        name: 'Portfolio Website ',
    },
]

const other_data = [
    {
        name: 'Teaching ',
    },
    {
        name: 'Data Management',
    },
    {
        name: 'MS Access Database Software',
    },
    {
        name: 'Content Writing',
    },

]


const Services = () => {
    return (
        <section id='services'>
            <h5>What Services I Offer</h5>
            <h2>Services</h2>

            <div className="container service__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>Civil Engineering</h3>
                    </div>

                    <ul className='service__list '>
                        {
                            civil_data.map(({ name }, index) => {
                                return (
                                    <li key={index}>
                                        <BiCheck className='service__list-icon' />
                                        <p> {name} </p>
                                    </li>
                                )
                            })
                        }


                    </ul>
                </article>
                {/* END OF CIVIL */}
                <article className='service'>
                    <div className="service__head">
                        <h3>WEB Development</h3>
                    </div>

                    <ul className='service__list'>
                        {
                            web_data.map(({ name }, index) => {
                                return (
                                    <li key={index}>
                                        <BiCheck className='service__list-icon' />
                                        <p> {name} </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </article>
                {/* END OF WEB DEVELOPMENT*/}
                <article className='service'>
                    <div className="service__head">
                        <h3>Other Services</h3>
                    </div>

                    <ul className='service__list'>
                        {
                            other_data.map(({ name }, index) => {
                                return (
                                    <li key={index}>
                                        <BiCheck className='service__list-icon' />
                                        <p> {name} </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </article>
                {/* END OF OTHER SERVICES*/}
            </div>
        </section>
    )
}

export default Services
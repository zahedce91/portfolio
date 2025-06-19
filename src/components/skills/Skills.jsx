import React from 'react'
import './skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const civil_skills = [
    {
        name: 'ArcGIS',
        type: 'Mapping'
    },
    {
        name: 'AutoCAD',
        type: 'Design: 2D, 3D'
    },
    {
        name: 'Etabs',
        type: 'Analysis'
    },
    {
        name: 'Revit ',
        type: 'Design & Analysis'
    },
    {
        name: 'Tekla Structure',
        type: 'Design & Analysis'
    },
    {
        name: 'SketchUp',
        type: '3D Design'
    },
    {
        name: 'Python',
        type: 'Prograaming'
    },
    {
        name: 'R',
        type: 'Programing'
    },
]

const web_skills = [
    {
        name: 'PHP',
        type: 'Backend'
    },
    {
        name: 'JavaScript',
        type: 'Frontend'
    },
    {
        name: 'MySQL',
        type: 'Database'
    },
    {
        name: 'Bootstrap',
        type: 'Frontend'
    },
    {
        name: 'WordPress',
        type: 'Framework'
    },
    {
        name: 'jQuery',
        type: 'Frontend'
    },
    {
        name: 'HTML 5',
        type: 'Frontend'
    },
]

const Skills = () => {
    return (
        <section id='skills'>
            <h5>What Skills I Have</h5>
            <h2>My Skills</h2>

            <div className="container skills__container ">
                <div className="civil__skills">
                    <h3>Civil Engineering Skills</h3>
                    <div className="skills__content">
                        {
                            civil_skills.map(({ name, type }, index) => {
                                return (
                                    <article key={index} className='skills__details'>
                                        <BsPatchCheckFill className='skills__details-icon' />
                                        <div>
                                            <h4> {name} </h4>
                                            <small className='text-light'> {type} </small>
                                        </div>
                                    </article>
                                )
                            })
                        }

                    </div>
                </div>
                {/*====== END OF CIVIL ======*/}

                <div className="skills__backend">
                    <h3>Web Development Skills</h3>
                    <div className="skills__content">
                        {
                            web_skills.map(({ name, type }, index) => {
                                return (

                                    <article key={index} className='skills__details'>
                                        <BsPatchCheckFill className='skills__details-icon' />
                                        <div>
                                            <h4>{name} </h4>
                                            <small className='text-light'> {type} </small>
                                        </div>
                                    </article>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
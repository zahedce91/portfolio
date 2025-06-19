import React from 'react'
import './education.css'
import { IoIosSchool } from 'react-icons/io'
import { TbCertificate } from 'react-icons/tb'

const education_data = [
    {
        degree: 'M.Sc. in Civil  Engineering',
        duration: 'April 2023 - Present',
        institute: 'Bangladesh University of Engineering & Technology',
        description: 'Major: Transportation Engineering '
    },
    {
        degree: 'B.Sc. in Civil Engineering',
        duration: 'February 2016 - April 2022',
        institute: 'Khulna University of Engineering & Technology',
        description: 'Thesis Major: Water Resource Engineering | CGPA: 3.78 out of 4.00'
    },
    {
        degree: 'Higher Secondary School Certificate (H.S.C.)',
        duration: 'April 2014 - February 2016',
        institute: 'Govt. Haji Mohammad Mohsin College',
        description: 'Group: Science | GPA: 5.00 out of 5.00'
    },
    {
        degree: 'Secondary School Certificate (H.S.C.)',
        duration: '2014',
        institute: 'Chakaria Korak Biddyapith',
        description: 'Group: Science | GPA: 5.00 out of 5.00'
    }
]

const certification_data = [
    {
        name: 'GIS, Mapping, And Spatial Analysis Specialization',
        description: 'by University of Toronto on Coursera. Credential ID: AMB4JEMP5FWL'
    },
    {
        name: 'Python For Everybody Specialization',
        description: 'by University of Michigan on Coursera. Credential ID: J5WU3SY5Y39H'
    },
    {
        name: 'Excel Skills For Business Specialization',
        description: 'by Macquarie University on Coursera. Credential ID: V3HZWKGC8TEK'
    },
    {
        name: 'Project Management & Other Tools For Career Development Specialization',
        description: 'by University of California, Irvine on Coursera. Credential ID: AGF7WYUKS4JW'
    },
]

const Education = () => {
    return (
        <section id='education'>
            <h5>Where I Have Studied</h5>
            <h2>My Education</h2>

            <div className="container education__container">
                <div className="academic__qualification ">
                    <h3>Academic Qualification</h3>
                    <div className="education__content">
                        {
                            education_data.map(({ degree, duration, institute, description }, index) => {
                                return (
                                    <article key={index} className='education__details'>
                                        <IoIosSchool className='education__details-icon' />
                                        <div>
                                            <h4>{degree}</h4>
                                            <small className='text-light'>{duration} </small>
                                            <h5>{institute}</h5>
                                            <small className='text-light'> {description} </small>
                                        </div>
                                    </article>
                                )
                            })
                        }

                    </div>
                </div>
                {/*====== END OF ACADEMIC ======*/}

                <div className="certification">
                    <h3>Certifications</h3>
                    <div className="education__content">
                        {
                            certification_data.map(({ name, description }, index) => {
                                return (
                                    <article key={index} className='education__details'>
                                        <TbCertificate className='education__details-icon' />
                                        <div>
                                            <h4> {name} </h4>
                                            <small className='text-light'> {description} </small>
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

export default Education
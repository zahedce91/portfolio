import React from 'react'
import './experience.css'
import { FaIndustry } from 'react-icons/fa'
import { BsPatchCheckFill } from 'react-icons/bs'

const experience_data = [
    {
        name: 'Lecturer',
        duration: 'January 2023 - Now',
        institute: 'Department of Civil Engineering, Stamford University Bangladesh, 51 Siddeswari Road (Ramna), Dhaka-1217.'
    },
    {
        name: 'Former Lecturer',
        duration: 'August 2022 - December 2023',
        institute: 'Department of Civil Engineering, University of Creative Technology, Chandgaon Police Station, 1084, Shah Amanat Bridge Connecting Road, Chittagong 4212.'
    },

]

const project_data = [
    {
        name: 'International Conference Paper ',
        details: 'Md. Zahed Hossain, Sajal Kumar Adhikary; Identifying groundwater recharge potential zones in barind tract of Bangladesh using geospatial technique. AIP Conf. Proc. 28 April 2023; 2713 (1): 050001. https://doi.org/10.1063/5.0129774.'
    },
    {
        name: 'International Conference Paper ',
        details: 'Hossain, M. Z., & Adhikary, S. K. (2022). FLOOD SUSCEPTIBILITY ASSESSMENT IN SOUTHWEST COASTAL REGION OF BANGLADESH USING AN AHP-GIS BASED APPROACH.'
    },
    {
        name: 'Undergraduate Thesis',
        details: 'Groundwater recharge potential zoning in the Barind tract of Bangladesh Using Analytical Hierarchical Process(AHP) and Multi-influenching Factor Approach.'
    },


]

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Experience I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="civil__skills">
                    <h3>Working History</h3>
                    <div className="experience__content ">
                        {
                            experience_data.map(({ name, duration, institute }, index) => {
                                return (
                                    <article key={index} className='experience__details'>
                                        <FaIndustry className='experience__details-icon' />
                                        <div>
                                            <h4> {name} </h4>
                                            <small className='text-light'> {duration} </small>
                                            <h5>{institute} </h5>
                                        </div>
                                    </article>
                                )
                            })
                        }

                    </div>
                </div>
                {/*====== END OF WORKING ======*/}

                <div className="experience__backend">
                    <h3>Selected Projects & Publications</h3>
                    <div className="experience__content">
                        {
                            project_data.map(({ name, details }, index) => {
                                return (
                                    <article key={index} className='experience__details'>
                                        <BsPatchCheckFill className='experience__details-icon' />
                                        <div>
                                            <h4> {name} </h4>
                                            <small className='text-light'> {details} </small>
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

export default Experience
import React from 'react'
import './portfolio.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'


// IMAGE LIST HERE 
const data = [
    {
        image: IMG1,
        title: 'Agent Banking Management',
        link1: 'https://youtube.com/playlist?list=PLEoB51HUURxfZDMCpk8hKdsfSx46dJ3bP', link1_title: 'Totorial',
        link2: 'https://fksollution.ffkenterprise.com/', link2_title: 'Live Demo',
    },
    {
        image: IMG2,
        title: 'Dealership Buisness Management',
        link1: 'https://dealer.ffkenterprise.com/index.php', link1_title: 'Tutorial',
        link2: 'https://dealer.ffkenterprise.com/index.php', link2_title: 'Live Demo',
    },
    {
        image: IMG3,
        title: 'Three Storied Building',
        link1: IMG3, link1_title: 'View',
        link2: '', link2_title: 'Live 3 ',
    },
    {
        image: IMG4,
        title: 'Somity Management',
        link1: 'https://udb.ffkenterprise.com/', link1_title: 'Tutorial',
        link2: 'https://udb.ffkenterprise.com/', link2_title: 'Live Demo',
    },
    {
        image: IMG5,
        title: 'Agent Bangking Access Database',
        link1: IMG5, link1_title: 'View',
        link2: '', link2_title: 'Live Demo',
    },

]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <Swiper className="container portfolio__container"
                // install Swiper modules
                modules={[Pagination]}
                pagination={{ clickable: true }}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}>
                {
                    data.map(({ image, title, link1, link1_title, link2, link2_title }, index) => {
                        return (
                            <SwiperSlide key={index} className='portfolio__item '>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">

                                    {link1 === '' ? '' : <a href={link1} className='btn' target='_blank' rel='noreferrer'> {link1_title} </a>}
                                    {link2 === '' ? '' : <a href={link1} className='btn btn-primary' target='_blank' rel='noreferrer'> {link2_title} </a>}

                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section >
    )
}

export default Portfolio
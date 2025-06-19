import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
    {
        avatar: AVTR1,
        name: 'Abdul Mannan',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vel, adipisci, dolore culpa accusantium dolorem debitis quibusdam ratione nobis aliquid provident minus! Sit ab officia fuga accusantium nesciunt officiis voluptas'
    },
    {
        avatar: AVTR2,
        name: 'Zubaer Hossain',
        review: 'Lorem ipsum rem debitis quibusdam ratione nobis aliquid provident minus! Sit ab officia fuga accusantium nesciunt officiis voluptas'
    },
    {
        avatar: AVTR3,
        name: 'Noman',
        review: 'Lorem ipsum dolor sit, accusantium dolorem debitis quibusdam ratione nobis aliquid provident minus! Sit ab officia fuga accusantium nesciunt officiis voluptas'
    },
    {
        avatar: AVTR4,
        name: 'Hobaib',
        review: 'Lorem ipsum met consectetur adipisicing elit. Quo vel, adipisci, dolore culpa accusantium dolorem debitis quibusdam ratione nobis aliquid provident minus! Sit ab officia ficiis voluptas'
    },
]


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonial</h2>

            <Swiper className="container testimonial__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials
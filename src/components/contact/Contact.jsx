import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_20yq4fu', 'template_ck34kik', form.current, '1LeLhzokHVsGO6EYA')

        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option animated'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>zahedce91@gmail.com</h5>
                        <a href="mailto:zahedce91@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className='contact__option animated'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>zahedce91</h5>
                        <a href="https://m.me/zahedce91" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className='contact__option animated'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+8801751744807</h5>
                        <a href="https://wa.me/8801751744807?text=" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="text" name='email' placeholder='Enter Your Email' required />
                    <input type="text" name='subject' placeholder='Enter Your Subject' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
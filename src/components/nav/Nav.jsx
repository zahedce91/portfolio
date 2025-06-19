import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { MdCastForEducation } from 'react-icons/md'
import { FcNightLandscape } from 'react-icons/fc'

import { useState } from 'react'

const Nav = () => {
    const [activeNav, SetActiveNav] = useState('')

    const changeurl = () => {
        //console.log(window.scrollY)
        var px_600 = window.matchMedia("(max-width: 600px)")
        var px_1024 = window.matchMedia("(max-width: 1024px)")

        if (px_600.matches) {
            if (window.scrollY < 520) {
                SetActiveNav('#')
            } else if (window.scrollY > 520 && window.scrollY < 1770) {
                SetActiveNav('#about')
            } else if (window.scrollY > 1770 && window.scrollY < 2870) {
                SetActiveNav('#education')
            } else if (window.scrollY > 2870 && window.scrollY < 4400) {
                SetActiveNav('#experience')
            } else if (window.scrollY > 5650 && window.scrollY < 6800) {
                SetActiveNav('#services')
            } else if (window.scrollY > 8200 && window.scrollY < 9500) {
                SetActiveNav('#contact')
            } else {
                SetActiveNav('')
            }
        } else if (px_1024.matches) {
            if (window.scrollY < 520) {
                SetActiveNav('#')
            } else if (window.scrollY > 520 && window.scrollY < 1220) {
                SetActiveNav('#about')
            } else if (window.scrollY > 1220 && window.scrollY < 2500) {
                SetActiveNav('#education')
            } else if (window.scrollY > 2500 && window.scrollY < 3500) {
                SetActiveNav('#experience')
            } else if (window.scrollY > 5000 && window.scrollY < 6000) {
                SetActiveNav('#services')
            } else if (window.scrollY > 7200 && window.scrollY < 8300) {
                SetActiveNav('#contact')
            } else {
                SetActiveNav('')
            }
        } else {
            if (window.scrollY < 520) {
                SetActiveNav('#')
            } else if (window.scrollY > 520 && window.scrollY < 1200) {
                SetActiveNav('#about')
            } else if (window.scrollY > 1200 && window.scrollY < 2100) {
                SetActiveNav('#education')
            } else if (window.scrollY > 2100 && window.scrollY < 3000) {
                SetActiveNav('#experience')
            } else if (window.scrollY > 3550 && window.scrollY < 4200) {
                SetActiveNav('#services')
            } else if (window.scrollY > 5400 && window.scrollY < 6650) {
                SetActiveNav('#contact')
            } else {
                SetActiveNav('')
            }
        }





    }
    window.addEventListener('scroll', changeurl)

    return (
        <>
            <nav>
                <a href="# " title="Home" onClick={() => SetActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
                <a href="#about" title="About" onClick={() => SetActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a >
                <a href="#education" title="Education" onClick={() => SetActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><MdCastForEducation /></a>
                <a href="#experience" title="Experience" onClick={() => SetActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
                <a href="#services" title="Services" onClick={() => SetActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
                <a href="#contact" title="Contact" onClick={() => SetActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>


            </nav >
            {/**/}<div className='theme-changer'>
                <p title="Theme Changer" onClick={() => document.body.classList.toggle('light-mode')} ><FcNightLandscape /></p>
            </div>
        </>

    )
}

export default Nav
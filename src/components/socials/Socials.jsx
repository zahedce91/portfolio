import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { SiResearchgate } from 'react-icons/si'

const Socials = () => {
    return (
        <>
            <a href="https://www.researchgate.net/profile/Md-Hossain-389" target="_blank" rel="noreferrer"><SiResearchgate /></a>
            <a href="https://www.linkedin.com/in/zahedce91" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://www.facebook.com/zahedce91" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.youtube.com/channel/UC4KkmEhdtszttGok1mdWNRQ" target="_blank" rel="noreferrer"><BsYoutube /></a>
        </>
    )
}

export default Socials
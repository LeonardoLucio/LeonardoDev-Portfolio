import React from 'react'
import * as F from './style'
import {AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram} from 'react-icons/ai'
import {FaStackOverflow} from 'react-icons/fa'
function Icons() {
    return(
        <F.Container>
        <F.Content>
        <a href="https://github.com/LeonardoLucio" target="_blank"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/leonardo-l%C3%BAcio-batista-92507217a/" target="_blank"><AiFillLinkedin /></a>
        <a href="https://www.facebook.com/leoz272" target="_blank"><AiFillFacebook /></a>
        <a href= "https://www.instagram.com/leonardolucioss/" target="_blank"><AiFillInstagram /></a>
        <a href ="https://stackoverflow.com/users/17965527/leonardo-lucio-batista"target="_blank"><FaStackOverflow /></a>
        </F.Content>
        </F.Container>
    )
}

export default Icons;
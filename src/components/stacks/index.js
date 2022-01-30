import React from 'react'
import * as F from './style'
import {FaReact, FaNodeJs, FaNode, FaVuejs, FaHtml5, FaCss3} from 'react-icons/fa'
import {SiTypescript, SiJavascript} from 'react-icons/si'
function Stacks() {
    return(
        <F.Container>
        <F.Content>
        <FaReact />
        <FaNodeJs />
        <FaNode />
        <FaVuejs />
        <SiTypescript />
        <SiJavascript />
        <FaHtml5 />
        <FaCss3 />
        </F.Content>
        </F.Container>
    )
}

export default Stacks;
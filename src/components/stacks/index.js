import React from 'react'
import * as F from './style'
import {FaReact, FaNodeJs, FaNode, FaVuejs, FaHtml5, FaCss3, FaPhp} from 'react-icons/fa'
import {SiTypescript, SiJavascript, SiExpress, SiBootstrap} from 'react-icons/si'
function Stacks() {
    return(
        <F.Container>
        <F.Content>
        <FaReact />
        <FaNode />
        <FaVuejs />
        <SiTypescript />
        <SiJavascript />
        <FaHtml5 />
        <FaCss3 />
        <FaPhp/>
        <SiExpress/>
        <SiBootstrap/>
        </F.Content>
        </F.Container>
    )
}

export default Stacks;
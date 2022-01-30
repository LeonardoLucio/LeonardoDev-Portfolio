import React from 'react'
import * as F from './style'
import { Link } from 'react-router-dom'
function Header() {
    return(
        <F.Container>
        <F.Content>
        <button type="button"><Link to="/">HOME</Link></button>
        <button type="button"><Link to="/work">WORK</Link></button>
        <button type="button"><Link to="/about">ABOUT</Link></button>
        <button type="button"><Link to="/repository">REPOSITORY</Link></button>
        </F.Content>
        </F.Container>
    )
}

export default Header;
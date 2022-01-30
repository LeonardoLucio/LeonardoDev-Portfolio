import React from 'react'
import * as F from './style'
import Header from '../../components/header';
import Description from '../../components/description';
import Icons from '../../components/icons';
function Home() {

    return(
        <F.Container>
        <Header />
        <F.Content>
        <F.Image>
        <img src="https://github.com/LeonardoLucio.png"></img>
        </F.Image>
        <F.Bio>
        <Description />  
        </F.Bio>
        <F.Icons>
            <Icons />
        </F.Icons>
        </F.Content>
        </F.Container>
    )
}

export default Home;
import React from 'react'
import * as F from './style'
import Header from '../../components/header';
function Academic() {
    return(
        <F.Container>
        <Header />
        <F.Content>
        <F.Work>

        <h1>Formação</h1>
        <br></br>
        <h2>Engenharia da computação</h2>  
        <h3>Centro Universitário Salesiano de São Paulo 2017 ~ 2022</h3>

        <br></br>
        {/* /////////////////////////////////////////////////////////*/}
        <h2>Técnico de informatica</h2>  
        <h3>Etec Prof. Marcos uchôas dos Santos Penchel 2006 ~ 2017</h3>
        <br></br>
        {/* /////////////////////////////////////////////////////////*/}
        <h2>Ensino Médio</h2>
        <h3>Comunidade Canção Nova 2003 ~ 2017</h3>    
        <br></br>
        {/* /////////////////////////////////////////////////////////*/}
    
        </F.Work>
        </F.Content>
        </F.Container>
    )
}

export default Academic;

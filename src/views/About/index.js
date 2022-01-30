import React from 'react'
import * as F from './style'
import Header from '../../components/header';
import Stacks from '../../components/stacks';
function About() {
    return(
        <F.Container>
        <Header />
        <F.Content>
       <F.About>
        <p>Atualmente estou cursando 9 º Semestre de Engenharia da Computação na UNISAL/campus Lorena-SP e atuo como Técnico de suporte na empresa DBNET, Formação Técnico de informatica na ETEC - Prof. Marcos Uchôas dos Santos Penchel, possuo experiência intermediaria em relação a Manutenção de computadores e Redes em geral, Facilidade com trabalhos em equipe e atualmente sou estudante de programação</p>
       </F.About>
       <F.Stacks>
           <F.Title>
               <h1>My Stacks</h1>
           </F.Title>
           <Stacks />
       </F.Stacks>
        </F.Content>
        </F.Container>
    )
}

export default About;
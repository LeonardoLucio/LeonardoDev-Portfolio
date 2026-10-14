import React from 'react';
import * as F from './style';
import Stacks from '../../components/stacks';

function About() {
  return (
    <F.Container id="sobre">
      <F.Heading><span>01 / SOBRE</span><h2>Infraestrutura sólida.<br /></h2></F.Heading>
      <F.Content>
        <F.About>
          <p>Sou bacharel em Engenharia da Computação pelo UNISAL e atuo com infraestrutura de redes e datacenter no ambiente do INPE</p>
          <p>Minha experiência reúne administração de redes e servidores, virtualização, monitoramento e automação. Também estudo e desenvolvo projetos com tecnologias web, APIs e bancos de dados.</p>
        </F.About>
        <F.Stacks><F.Title><h3>Tecnologias e ferramentas</h3></F.Title><Stacks /></F.Stacks>
      </F.Content>
    </F.Container>
  );
}

export default About;

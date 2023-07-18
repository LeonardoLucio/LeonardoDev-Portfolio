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
        <p>Bacharel em engenharia da Computação na UNISAL/campus Lorena-SP e Técnico de suporte na empresa DATAINFO - Instituto Nacional de Pesquisas Espaciais(INPE-CP) , possuo plena experiência em relação a manutenção de computadores e redes em geral, atuo em um dos maiores DATACENTERS do brasil, onde fica localizado o Supercomputador TUPÃ, pleno conhecimento em montagem de servidores de rack, cabeamento estruturado para os mesmo e manipulação de sistemas operacionais diversos na base (Windows, Unix, MacOS), pleno conhecimento em monitoramento de servidores e rede através das ferramentas Zabbix, Nagios, Dude, Observium e Grafana, pleno conhecimento em geração de scripts para automatização de processos através de shellscript e nodejs , conhecimento em configuração de switchs e access points CISCO, suporte a VPN openVPN e VPN Cisco, virtualização de servidores através de XenServer e XCP-ng, pleno conhecimento em bases linux, facilidade com trabalhos em equipe e aspirante á programação, principais linguagens e ferramentas - Node JS, React JS, MongoDB, PostgreeSQL, Postman Client API, Ansible, Docker, Vagrant, MySql.</p>
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

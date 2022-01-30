import React from 'react'
import * as F from './style'
import Header from '../../components/header';
function Work() {
    return(
        <F.Container>
        <Header />
        <F.Content>
        <F.Work>
        <h2>Técnico de Suporte</h2>
        <h3>Debian Signal Comunicação Multimidia - DBNET - Provedora de internet | 06/2021 até o momento</h3>    
        <ul>
        <li>Configurações de antenas em modo bridge, station e access point.</li>
        <li>Criação e manipulação de Servidor FTP para backups diarios.</li>
        <li>Configurações de roteadores em modo bridge, router e repeater, autenticação por PPPOE</li>
        <li>Gerenciamento do provedor, clientes, adoção e exclusão de ONUs através do sistema ERP IXCSof</li>
        <li>Criação e manipulação de maquinas virtuais através do Citrix XenServer</li>
        <li>Monitoramento e Gestão de rede com ( Dude, UNM2000 fiberhome )</li>
        <li>Monitoramento de rede via Zabbix and Observium</li>
        <li>Manutenção/configuração de Sistemas Linux (Ubunt e Debian)</li>
        <li>Suporte a usuários nível help-desk</li>
        </ul>
        <h2>Estagiario de suporte de informatica</h2>  
        <h3>Centro Universatario Salesiano de São Paulo - UNISAL | 08/2019 ~ 09/2020</h3>
        <ul>
        <li>Manutenção/configuração de Sistemas Linux (Ubuntu, Linux Mint e Debian)</li>
        <li> Manutenção de infraestrutura de rede</li>
        <li>Personalização de imagens Windows</li>
        <li>Backup e recuperação de dados</li>
        <li>Criação e manipulação de maquinas virtuais através do Citrix XenServer</li>
        <li> Suporte a usuários nível help-desk</li>
        
        </ul>
        </F.Work>
        </F.Content>
        </F.Container>
    )
}

export default Work;
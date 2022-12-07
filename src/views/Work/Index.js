import React from 'react'
import * as F from './style'
import Header from '../../components/header';
function Work() {
    return(
        <F.Container>
        <Header />
        <F.Content>
        <F.Work>

        <h2>Técnico de Operação e Serviço (N2 - INPE/CACHOEIRA PAULISTA)</h2>  
        <h3>CENTRAL IT - Tecnologia em Negócios | 03/2022 até o momento</h3>
        <ul>
        <li>Criação de Scripts para automação de processos( ShellScript, JS, Python )</li>
        <li> Manutenção e formatação de computadores e notebooks</li>
        <li>Mapeamento de impressoras através da rede. </li>
        <li>Instalação e remoção de servidores no datacenter.</li>
        <li>Configuração de rede 802.1X. </li>
        <li>Instalação e configuração de Switchs, VOIP’s e Acess Point CISCO. </li>
        <li>Geração de relatórios de qualidade </li>
        <li> Cabeamento estruturado em datacenter </li>
        <li>Auxílio na utilização de VPN com OPENVPN.  </li>
        <li> Cabeamento estruturado em datacenter </li>
        <li>Manutenção/configuração de Sistemas Linux (Ubunt, Debian, mint) </li>
        </ul>
        {/* /////////////////////////////////////////////////////////*/}
        <h2>Técnico de Suporte</h2>
        <h3>Debian Signal Comunicação Multimidia - DBNET - Provedora de internet | 06/2021 ~ 03/2022</h3>    
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
        {/* /////////////////////////////////////////////////////////*/}
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

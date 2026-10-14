import React from 'react';
import * as F from './style';

const roles = [
  { title: 'Analista de Redes', company: 'DATAINFO · INPE, Cachoeira Paulista', period: '09/2023 — atual', tasks: ['Administração de redes de campus e datacenter físico e virtual.', 'Configuração e suporte a firewalls Cisco ASA, FTD e FMC, além de pfSense.', 'Apoio à configuração de roteamento dinâmico com BGP.', 'Suporte a VPNs cliente-site e site-site, incluindo acesso remoto com Cisco AnyConnect.', 'Participação na reestruturação de unidades e na análise de segurança da infraestrutura.', 'Configuração de switches, hypervisors, servidores Linux, telefonia e Wi-Fi Cisco.', 'Monitoramento com Zabbix, Nagios e Grafana e automação de tarefas com Ansible.', 'Gestão de incidentes, mudanças, documentação e topologias de rede.'] },
  { title: 'Técnico de Suporte', company: 'DATAINFO · INPE, Cachoeira Paulista', period: '03/2023 — 09/2023', tasks: ['Automação de processos com Shell Script, JavaScript e Python.', 'Suporte a estações, redes, servidores de datacenter, equipamentos Cisco e VPN.', 'Manutenção de sistemas Linux e cabeamento estruturado.'] },
  { title: 'Técnico de Operação e Serviço N2', company: 'CENTRAL IT · INPE, Cachoeira Paulista', period: '03/2022 — 03/2023', tasks: ['Suporte técnico, manutenção de estações, redes e servidores.', 'Scripts de automação, configuração de rede 802.1X e equipamentos Cisco.', 'Suporte a Linux, VPN e infraestrutura de datacenter.'] },
  { title: 'Técnico de Suporte', company: 'DBNET · Provedora de internet', period: '06/2021 — 03/2022', tasks: ['Configuração de roteadores, antenas, ONUs e equipamentos de rede.', 'Monitoramento com Zabbix, Observium e Dude.', 'Administração de Linux, FTP e máquinas virtuais XenServer.'] },
  { title: 'Estagiário de Suporte de Informática', company: 'UNISAL · Lorena', period: '08/2019 — 09/2020', tasks: ['Suporte a usuários e manutenção de computadores e sistemas Linux.', 'Apoio à infraestrutura de rede, backup e recuperação de dados.'] },
];

function Work() {
  return (
    <F.Container id="experiencia">
      <F.Heading><span>02 / EXPERIÊNCIA</span><h2>Uma trajetória construída <em>resolvendo problemas.</em></h2></F.Heading>
      <F.Timeline>{roles.map((role) => <F.RoleCard key={`${role.company}-${role.period}`}>
        <div className="role-head"><div><h3>{role.title}</h3><p>{role.company}</p></div><time>{role.period}</time></div>
        <ul>{role.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
      </F.RoleCard>)}</F.Timeline>
    </F.Container>
  );
}

export default Work;

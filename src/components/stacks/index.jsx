import React from 'react';
import * as F from './style';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaNetworkWired, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiAnsible, SiDocker, SiProxmox, SiGrafana, SiCisco } from 'react-icons/si';

const skills = [
  ['Cisco', SiCisco], ['Ansible', SiAnsible], ['Docker', SiDocker],
  ['Proxmox', SiProxmox], ['phpIPAM', FaNetworkWired], ['NetBox', FaNetworkWired],
  ['Grafana', SiGrafana], ['Zabbix', FaChartLine], ['Wazuh', FaShieldAlt],['React', FaReact], ['Node.js', FaNodeJs], ['TypeScript', SiTypescript],
  ['JavaScript', SiJavascript], ['HTML', FaHtml5], ['CSS', FaCss3Alt], ['PHP', FaPhp]
];

function Stacks() {
  return <F.Content>{skills.map(([name, Icon]) => <span key={name}><Icon aria-hidden="true" />{name}</span>)}</F.Content>;
}

export default Stacks;

import React, { useEffect, useState } from 'react';
import * as F from './style';
import Header from '../../components/header';
import Icons from '../../components/icons';
import About from '../About';
import Work from '../Work/Index';
import Repository from '../Repository';
import Academic from '../Academicducation/Index';

function Home() {
  const [theme, setTheme] = useState(() => {
    try {
      return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // O tema continua funcionando mesmo se o navegador bloquear o armazenamento local.
    }
  }, [theme]);

  return (
    <F.Container data-theme={theme}>
      <Header theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <F.Content>
        <F.Hero id="inicio">
          <F.Intro>
            <F.Eyebrow>PORTFÓLIO • INFRAESTRUTURA & DESENVOLVIMENTO</F.Eyebrow>
            <F.Title>Olá, eu sou <em>Leonardo Lúcio.</em></F.Title>
            <F.Role>Analista de redes <span>·</span> Entusiasta de tecnologia</F.Role>
            <F.Summary>Conecto infraestrutura confiável a soluções práticas. Trabalho com redes, servidores e automação, e sigo expandindo minha atuação em desenvolvimento de software.</F.Summary>
            <F.Actions>
              <a href="#experiencia" className="primary">Conheça minha experiência <span aria-hidden="true">↗</span></a>
              <a href="https://www.linkedin.com/in/leonardo-l%C3%BAcio-batista-92507217a/" target="_blank" rel="noreferrer" className="secondary">Vamos conversar <span aria-hidden="true">↗</span></a>
            </F.Actions>
            <F.Social><span>ENCONTRE-ME</span><Icons /></F.Social>
          </F.Intro>
          <F.Profile>
            <div className="portrait-wrap">
              <img src="https://avatars.githubusercontent.com/u/73317150?v=4" alt="Foto de perfil de Leonardo Lúcio" />
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="profile-tag"><span>⌘</span><div><strong>Infra + código</strong></div></div>
            </div>
          </F.Profile>
        </F.Hero>
        <F.Highlights>
          <div><strong>Redes</strong><span>Campus & datacenter</span></div>
          <div><strong>Automação</strong><span>Linux, scripts & Ansible</span></div>
          <div><strong>Desenvolvimento</strong><span>React, Node.js & APIs</span></div>
          <a href="#sobre">Saiba mais sobre mim <span aria-hidden="true">→</span></a>
        </F.Highlights>
        <About />
        <Work />
        <Repository />
        <Academic />
        <F.Footer><span>Leonardo Lúcio</span><span>{new Date().getFullYear()}</span><a href="#inicio">Voltar ao topo ↑</a></F.Footer>
      </F.Content>
    </F.Container>
  );
}

export default Home;

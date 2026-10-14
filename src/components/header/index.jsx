import React from 'react';
import * as F from './style';
import { FiMoon, FiSun } from 'react-icons/fi';

function Header({ theme, onToggleTheme }) {
  return (
    <F.Container>
      <F.Content>
        <a href="#inicio" className="brand" aria-label="Leonardo Lúcio, início">LL<span>.</span></a>
        <nav aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Projetos</a>
          <a href="#formacao">Formação</a>
        </nav>
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-pressed={theme === 'light'} aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'} title={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}>
          {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
        </button>
        <a className="contact" href="https://www.linkedin.com/in/leonardo-l%C3%BAcio-batista-92507217a/" target="_blank" rel="noreferrer">Contato <span aria-hidden="true">↗</span></a>
      </F.Content>
    </F.Container>
  );
}

export default Header;

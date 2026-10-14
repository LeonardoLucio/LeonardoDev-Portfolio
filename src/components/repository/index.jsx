import React, { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import * as F from './style';

function Repositorio() {
  const [repositories, setRepositories] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://api.github.com/users/LeonardoLucio/repos?sort=updated&per_page=6', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Não foi possível carregar os repositórios.');
        return response.json();
      })
      .then((data) => { setRepositories(data); setStatus('success'); })
      .catch((error) => { if (error.name !== 'AbortError') setStatus('error'); });
    return () => controller.abort();
  }, []);

  if (status === 'loading') return <F.Message role="status">Carregando projetos do GitHub…</F.Message>;
  if (status === 'error') return <F.Message>Não foi possível carregar os projetos agora. <a href="https://github.com/LeonardoLucio" target="_blank" rel="noreferrer">Visite meu GitHub <span aria-hidden="true">↗</span></a></F.Message>;

  return (
    <F.Grid>
      {repositories.map((repository) => <F.Card key={repository.id}>
        <div className="card-top"><span className="repo-icon"><AiFillGithub aria-hidden="true" /></span><a href={repository.html_url} target="_blank" rel="noreferrer" aria-label={`Abrir ${repository.name} no GitHub`}>↗</a></div>
        <h3><a href={repository.html_url} target="_blank" rel="noreferrer">{repository.name}</a></h3>
        <p>{repository.description || 'Projeto público no GitHub.'}</p>
        <div className="meta">{repository.language && <span><i />{repository.language}</span>}<span>⑂ {repository.forks_count}</span><span>★ {repository.stargazers_count}</span></div>
      </F.Card>)}
    </F.Grid>
  );
}

export default Repositorio;

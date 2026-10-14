import React from 'react';
import * as F from './style';

const education = [
  { title: 'Engenharia da Computação', school: 'Centro Universitário Salesiano de São Paulo · UNISAL', period: '2017 — 2022' },
  { title: 'Técnico em Informática', school: 'Etec Professor Marcos Uchôas dos Santos Penchel', period: '2006 — 2017' },
  { title: 'Ensino Médio', school: 'Comunidade Canção Nova', period: '2003 — 2017' },
];

function Academic() {
  return (
    <F.Container id="formacao">
      <F.Heading><span>04 / FORMAÇÃO & CERTIFICAÇÕES</span><h2>Aprendizado que acompanha <em>a prática.</em></h2></F.Heading>
      <F.Certification>
        <div className="badge" aria-hidden="true">ITIL<span>®</span></div>
        <div className="details">
          <span className="issuer">CERTIFICAÇÃO · PEOPLECERT</span>
          <h3>ITIL 4 Foundation</h3>
          <p>IT Service Management</p>
          <div className="dates"><span>Conquistada <strong>29 dez 2023</strong></span><span>Renovação até <strong>29 dez 2026</strong></span></div>
        </div>
      </F.Certification>
      <F.Subheading>Formação acadêmica</F.Subheading>
      <F.Cards>{education.map((item) => <F.Card key={item.title}><span className="period">{item.period}</span><h3>{item.title}</h3><p>{item.school}</p></F.Card>)}</F.Cards>
    </F.Container>
  );
}

export default Academic;

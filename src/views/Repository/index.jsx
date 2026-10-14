import React from 'react';
import * as F from './style';
import Repositorio from '../../components/repository';

function Repository() {
  return <F.Container id="projetos"><F.Heading><span>03 / PROJETOS</span><h2>Projetos e experimentos <em>no GitHub.</em></h2></F.Heading><Repositorio /></F.Container>;
}

export default Repository;

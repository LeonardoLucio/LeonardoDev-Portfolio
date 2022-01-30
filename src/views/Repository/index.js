import React from 'react'
import * as F from './style'
import Header from '../../components/header';
import Repositorio from '../../components/repository';
function Repository() {
    return(
        <F.Container>
        <Header />
        <F.Content>
        <Repositorio />
        </F.Content>
        </F.Container>
    )
}

export default Repository;
import { useEffect, useState } from 'react';
import {AiFillGithub} from 'react-icons/ai'
import React from 'react'
import * as F from './style'
function Repositorio() {

    const [repository, setRepository] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/LeonardoLucio/repos')
        .then(response => response.json())
        .then(data => setRepository(data))
    }, [])
    
    return(
        <F.Container>
        <F.Content>
        <F.Repository>
        <ul>
            {repository.map(repository => {
                return(
                    <li>
                        <h3>{repository.name} <a href={repository.html_url} target="_blank"><AiFillGithub /></a></h3>
                        <p>{repository.description}</p>
                        
                        
                    </li>
                )
            })}
           
        </ul>
        </F.Repository>
        </F.Content>
        </F.Container>
    )
}

export default Repositorio;
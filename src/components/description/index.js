import { useEffect, useState } from 'react';
import React from 'react'
import * as F from './style'
function Description() {

    const [bio, setBio] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/LeonardoLucio')
        .then(response => response.json())
        .then(data => setBio(data))
    }, [])
    
    return(
        <F.Container>
        <F.Content>
        <p>{bio.bio}</p>
        </F.Content>
        </F.Container>
    )
}

export default Description;
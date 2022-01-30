import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: none;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    alignItems: center;
    justify-content: center;


`

export const Repository = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    
    overflow: auto;

    li{
        color: white;
        &:hover{
            background:rgba(235, 231, 231, 0.2); 
        }
    }
    h3 {
        font-size: 30px;
        display: flex;
    }
    svg{
        font-size: 1.5em;
        color: black;
    }
`
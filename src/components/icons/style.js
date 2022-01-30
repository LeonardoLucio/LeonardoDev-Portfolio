import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 50px;
    background: none;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
  
    display: flex;
    alignItems: center;
    justify-content: center;

    svg{
        padding: 0px 20px;
        font-size: 3.0em;
        color: white;
    }
    @media only screen and (max-width: 705px) {
        svg{
            padding: 0px 10px;
            font-size: 2.0em;
        }
    }
`
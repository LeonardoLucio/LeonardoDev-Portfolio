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

    p {
        color: white;
        font-size: 30px;
        text-align: center;
        font-weight: bold;
    }
  
    @media only screen and (max-width: 705px) {
        p{
            font-size: 25px;
        }
    }
`
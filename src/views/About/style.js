import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: none;
    display: flex,
    flex-direction: column;
`

export const Content = styled.div`
    width: 100%;
    height: 80%;
    
    display: flex;
    alignItems: center;
    justify-content: center;
    margin-top: 50px;
    flex-direction: column;
`

export const About = styled.div`
   
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        width: 80%;
        color: white;
        font-weight: bold;
        font-size: 20px;
        text-align: center; 
    }
    @media only screen and (max-width: 705px){
        p{
            font-size: 15px;
        }
`

export const Stacks = styled.div`
    width: 100%;
    height: 100%;
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    h1{
        color: white;
    }
`
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

`
export const Work = styled.div`
   
  
    height: 100%;
    overflow: auto;
    h2{
        color : white;
        font-weight: bold;
    }
    h3{
        color : white;
        font-weight: lighter;
    }
    li{
      color : white;
    }
`
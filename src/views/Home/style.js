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
    background:rgba(235, 231, 231, 0.1) ;
    display: flex;
    alignItems: center;
    justify-content: center;
    margin-top: 30px;
    flex-direction: column;
    
`
export const Image = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    img {
        width: 180px;
        height: 180px;
        border-radius: 100px;
    }
    @media only screen and (max-width: 400px) {
        img{
            width: 140px;
            height: 140px;
        }
    }
    @media only screen and (max-width: 705px) {
        img{
            width: 160px;
            height: 160px;
        }
    }
`
export const Bio = styled.div`
    width: 100%;
    height: 100%;
`

export const Icons = styled.div`
    width: 100%;
    height: 100%;
`
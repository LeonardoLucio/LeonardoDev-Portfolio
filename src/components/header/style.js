import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 50px;
    background: none;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    background:rgba(235, 231, 231, 0.1) ;
    display: flex;
    alignItems: center;
    justify-content: center;

    button{
        opacity: none;
        background: none;
        border: none;

        padding: 0px 25px;

        &:hover{
            opacity: 0.5;
            cursor: pointer;
        }
        a {
            text-decoration: none;
            color: white;
            font-size: 20px;
            font-weight: bold;
        }
        @media only screen and (max-width: 705px){
            a{
                font-size: 15px;
            }
        }
    }
`
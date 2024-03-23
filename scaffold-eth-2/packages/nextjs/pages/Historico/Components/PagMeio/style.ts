import styled from "styled-components";


export const ContainerMeio = styled.div `
    background-color: #1D92C5;
    width: 100%;
`;

export const Container = styled.div `
    background-image: url('./assets/home/bg2.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    border-radius: 8cqw 0 0 0;
    width: 100%;
`;

export const MainContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;



export const TituloMeio = styled.p`
    color: #28AAE3;
    font-size: 40px;
    font-weight: bold;
`

export const ConjuntoTexto = styled.div`
    width: 650px;
    margin-left: 65px;
`

export const Texto = styled.p`
    font-weight: bold;
    color: #A6A6A6;
    text-align: justify;
`

export const Image = styled.img `
     
`;

export const Botao = styled.button`
    padding: 12px 17px;
    background-color: #28AAE3;
    border-radius: 25px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;
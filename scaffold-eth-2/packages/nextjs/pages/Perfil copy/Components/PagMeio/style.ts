import styled from "styled-components";

export const ContainerMeio = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
`;

export const ContainerTransferencia = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 60%;
`;

export const Titulo = styled.h1 `
    margin-top: 60px;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 36px;
    color: #1D92C5;
`
export const Texto = styled.p`
    font-weight: bold;
    font-size: 24px;
    color: black;

    ${({ grey }) =>
        grey &&
        `
        font-weight: normal;
        font-size: 18px;
        color: #C7C7C7;
    `}

    ${({ blue }) =>
            blue &&
            `
            font-weight: normal;
            color: #28AAE3;
        `}
`

export const InputContainer = styled.input `
    margin-left: 10px;
    margin-bottom: 20px;
    border: 10px;
    border-radius: 20px;
    padding: 15px;
    box-shadow: 0px 10px 10px rgb(0 0 0 / 0.2);
    background-color: white;
    background-image: url('/assets/transf/bandeiraBrasil.svg');
    background-repeat: no-repeat;
    background-position: right 20px center;
    background-size: 30px;
    font-size: 24px;
    color: black;

    &:nth-of-type(3) {
        background-image: url('/assets/transf/Pix.svg');
    }
`;

export const ContainerText = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const Negrito = styled.span`
    font-weight: bold;
    font-size: 24px;
`;

export const Button = styled.button `
    width: 100%;
    border-radius: 20px;
    padding: 15px 0px 15px 0px;
    box-shadow: 0px 10px 10px rgb(0 0 0 / 0.2);
    background-color: #1D92C5;
    font-weight: bold;
    font-size: 24px;
    color: #fff;

`;
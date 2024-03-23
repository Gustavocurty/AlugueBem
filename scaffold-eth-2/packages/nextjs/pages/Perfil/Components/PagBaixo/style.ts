import styled from "styled-components";

export const Container = styled.div `
    background-color: white;
    width: 100%;

`;

export const ContentContainer = styled.div `
    background-image: url('./assets/home/bg3.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    border-radius: 0 60px 0 0;
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

export const TextContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%
`;



export const Title = styled.p `
    margin-left: 20px;
    font-size: 40px;
    color: #28AAE3;
    font-weight: bold;
`;

export const Text = styled.p `
    margin-left: 20px;
    font-size: 17px;
    color: #A6A6A6;
    font-weight: bold;
`;


export const Image = styled.img `
    width: 500px;
    height: 500px;
     
`;
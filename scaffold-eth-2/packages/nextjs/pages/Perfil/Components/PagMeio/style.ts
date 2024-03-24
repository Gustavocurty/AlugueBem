import styled from "styled-components";

export const Container = styled.div `
    background-image: url('./assets/home/bg2.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    width: 100%;

`;

export const ContentContainer = styled.div `
    display: flex;
    
`;

export const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 220px;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const TextContainer = styled.div `
    display: flex;
    justify-content: left;
`;

export const RealContainer = styled.div `
    display: flex;
    flex-direction: row;
`;

export const MoneyContainer = styled.div `

`;

export const Title = styled.p `
    font-size: 40px;
    color: #28AAE3;
    font-weight: bold;
`;

export const Text = styled.p `
    font-size: 40px;
    color: #455A64;
    font-weight: bold;
`;

export const SubText = styled.p `
    margin-top: 42px;
    margin-left: 5px;
    font-size: 17px;
    color: #A6A6A6;
    font-weight: bold;
    display: flex;
    justify-content: flex-end;
`;

export const SmallText = styled.p `
    margin-top: -20px;
    font-size: 17px;
    color: #A6A6A6;
    font-weight: bold;
`;

export const Image = styled.img `
    width: 500px;
    height: 500px;
     
`;
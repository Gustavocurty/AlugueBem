import { styled } from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: 10px;
    width: 100%;
`;

export const TextContainer = styled.div`
    margin-top: 35px;
`;

export const Card = styled.div`
    display:flex;
    flex-direction:column;

    background-color: #fff;
    margin: 20px;
    padding: 30px;
    width: 300px;
    height:230px;
    border-radius: 30px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const Text = styled.p `
    font-size: 28px;
    color: #455A64;
    font-weight: bold;
`;

export const SmallText = styled.p `
    margin-top: -8%;
    font-size: 17px;
    color: #A6A6A6;
    font-weight: bold;
`;

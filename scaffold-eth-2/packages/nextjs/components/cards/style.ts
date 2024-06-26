import { styled } from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    position: absolute;
    width: 100%;
    margin-top: -80px;
`;

export const Card = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin: 20px;
    padding: 30px;
    width: 300px;
    height:130px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const Text = styled.p `
    font-weight: bold;
`;

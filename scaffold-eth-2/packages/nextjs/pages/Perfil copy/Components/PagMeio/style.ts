import styled from "styled-components";

export const InputContainer = styled.input `
    border: 10px;
    margin-left: 10px;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    background-color: white;
    background-image: url('/assets/transf/bandeiraBrasil.svg');
    background-repeat: no-repeat;
    background-position: right 20px center;
    background-size: 30px;
    box-shadow: 0px 10px 10px rgb(0 0 0 / 0.2);
    color: black;
    font-size: 24px;

    &:nth-of-type(3) {
        background-image: url('/assets/transf/Pix.svg');
    }
`;

export const ContainerMeio = styled.div `
    display: flex;
    justify-content: center;
    background-color: white;
    width: 100%;
    height: 100vh;
`;

export const ContainerTransferencia = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 60%;
`;

export const Texto = styled.p`
    font-weight: bold;
    color: black;
    font-size: 24px;

`

export const Titulo = styled.h1 `
    color: #1D92C5;
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 20px;
`






// import styled from "styled-components";

// export const Container = styled.div `
//     background-color: white;
//     width: 100%;

// `;

// export const ContentContainer = styled.div `
//     background-image: url('./assets/home/bg3.svg');
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: top;
//     border-radius: 0 60px 0 0;
//     width: 100%;
// `;

// export const MainContainer = styled.div `
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     height: 100vh;
// `;

// export const TextContainer = styled.div `
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     width: 40%
// `;



// export const Title = styled.p `
//     margin-left: 20px;
//     font-size: 40px;
//     color: #28AAE3;
//     font-weight: bold;
// `;

// export const Text = styled.p `
//     margin-left: 20px;
//     font-size: 17px;
//     color: #A6A6A6;
//     font-weight: bold;
// `;


// export const Image = styled.img `
//     width: 500px;
//     height: 500px;
     
// `;
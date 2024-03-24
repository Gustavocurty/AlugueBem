import React from 'react'
import Image from "next/image";
import Cripto from "../../../../public/assets/home/ImgCripto.svg"

import {
    Container, BannerContainer, TextContainer, Text, MainContainer, Linha, InfoContainer, Valor, Title
} from './style'

interface FeitoProps {
    title: string,
    data: string,
    valor: string,
    transf: string,
}

const Feito: React.FC<FeitoProps> = ({ title, data, valor, transf }) =>{
    return(
        <Container>
            <Linha> </Linha>
            <MainContainer>
                <Image alt="info" src="./assets/historico/add.svg" width={50} height={50}></Image>
                <InfoContainer>
                    <Title>{title}</Title>
                    <Text>{data}</Text>
                </InfoContainer>
                <TextContainer>
                    <Valor>{valor}</Valor>
                    <Text>{transf}</Text>
                </TextContainer>
            </MainContainer>


        </Container>
    )
}


export default Feito

import React from 'react'
import Image from "next/image";

import {
    Container, ContentContainer, TextContainer, Title, Text, MainContainer,
} from './style'


const PagBaixo: React.FC = () =>{
    return(
        <Container>
            <ContentContainer>
                <MainContainer>
                    <TextContainer>
                        <Title>Não importa onde você esteja,</Title>
                        <Text>nossos serviços facilitam o processo de receber seus pagamentos de aluguel. E o melhor de tudo, você não precisa se preocupar com as flutuações do mercado, pois seu aluguel é convertido e enviado em criptomoedas para sua carteira. Com Alugue Bem, você desfruta da conveniência e da segurança de receber seus aluguéis em criptomoedas, tornando todo o processo mais eficiente e moderno.</Text>
                    </TextContainer>
                    <Image alt="Crypto Image" src="./assets/home/carteira.svg" width={500} height={500}/>
                </MainContainer>
            </ContentContainer>
        </Container>
    )
}

export default PagBaixo

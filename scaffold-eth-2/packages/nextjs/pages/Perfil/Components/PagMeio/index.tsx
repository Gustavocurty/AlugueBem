import React from 'react'
import Image from "next/image";
import MultipleCards from '../Card';

import {
    Container, ContentContainer, TextContainer, Title, Text, MainContainer, RealContainer, SubText, SmallText, MoneyContainer
} from './style'


const PagMeio: React.FC = () =>{
    return(
        <Container>
            <ContentContainer>
                <MainContainer>
                    <TextContainer>
                        <Title>Olá, Gustavo!</Title>
                    </TextContainer>
                    <MoneyContainer>
                        <RealContainer>
                            <Text>R$ 1.000.000</Text>
                            <SubText>BRL</SubText>
                        </RealContainer>
                        <SmallText>Valor total da conta</SmallText>
                    </MoneyContainer>
                    <MultipleCards />
                </MainContainer>
            </ContentContainer>
        </Container>
    )
}

export default PagMeio

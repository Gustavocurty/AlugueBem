import React from 'react'
import Image from "next/image";
import Feito from '../Feito';


import {
    Container, ContentContainer, Title,  MainContainer, TextContainer
} from './style'


const PagMeio: React.FC = () =>{
    return(
        <Container>
            <ContentContainer>
                <MainContainer>
                    <TextContainer>
                        <Title>Histórico</Title>
                    </TextContainer>
                    <Feito title="Gustavo" data="22/03/2024" valor="+ R$ 5,000" transf="Transferencia feita para 1234567"/>
                    <Feito title="Carolina" data="22/03/2024" valor="+ R$ 50,000" transf="Transferencia feita para 1234567"/>
                    <Feito title="João Victor" data="22/03/2024" valor="+ R$ 3,000" transf="Transferencia feita para 1234567"/>
                    <Feito title="Estevão" data="22/03/2024" valor="+ R$ 3,000" transf="Transferencia feita para 1234567"/>
                    <Feito title="Daniel" data="22/03/2024" valor="+ R$ 35,000" transf="Transferencia feita para 1234567"/>
                    <Feito title="Serra Jr." data="22/03/2024" valor="+ R$ 100,000" transf="Transferencia feita para 1234567"/>
                    <Feito title="Gustavo" data="22/03/2024" valor="+ R$ 5,000" transf="Transferencia feita para 1234567"/>

                </MainContainer>

            </ContentContainer>
        </Container>
    )
}

export default PagMeio

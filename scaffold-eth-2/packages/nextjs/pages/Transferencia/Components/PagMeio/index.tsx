import React from 'react'
import Image from "next/image";
import Cripto from "../../../../public/assets/home/ImgCripto.svg"

 import {
      ContainerMeio, TituloMeio, ConjuntoTexto, Texto, Container, Botao, MainContainer
 } from './style'



const PagMeio: React.FC = () =>{
    return(
        <ContainerMeio>
            <Container>
                <MainContainer>
                    <Image alt='Imagem criptomoeda' src={Cripto} width={400} height={400}/>
                    <ConjuntoTexto>
                        <TituloMeio> Receba seu aluguel em cripto, de forma fácil e segura </TituloMeio>
                        <Texto>
                        Alugue Bem é uma plataforma que facilita o recebimento de aluguéis em criptomoedas. Os locatários pagam em reais, convertidos para cripto e divididos entre locador e administradora. O valor do locador é enviado para sua carteira em cripto, enquanto o da administradora é convertido de volta para reais e depositado via PIX. Simplificando o processo de pagamento de aluguéis com criptomoedas.
                        </Texto>
                        <Botao>Começar    &#8250;</Botao>
                    </ConjuntoTexto>
                </MainContainer>
            </Container>
        </ContainerMeio>
    )
}

export default PagMeio



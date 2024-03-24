import React from 'react'

 import {
     Button,
      ContainerMeio, ContainerTransferencia, InputContainer, Texto, Titulo, ContainerText, Negrito,
 } from './style'



const PagMeio: React.FC = () =>{
    return(
        <ContainerMeio>

            <ContainerTransferencia>
                <Titulo>Transferência</Titulo>

                <Texto>Você envia exatamente</Texto>
                <InputContainer placeholder="1000.00"></InputContainer>
                <Texto>Beneficiário recebe exatamente</Texto>
                <InputContainer placeholder="999.25"></InputContainer>
                <Texto>Chave Pix</Texto>
                <InputContainer placeholder="Digite sua chave Pix" isPix></InputContainer>
                <ContainerText>
                    <Texto blue>Ao continuar, você aceita os Termos de Uso da empresa.
                        <Negrito> Saiba Mais &gt;</Negrito>
                    </Texto>
                    <Texto grey>O valor deve ser maior que R$ 0.75 e menor ou igual saldo disponível.</Texto>
                    <Button>Confirmar transferência</Button>
                </ContainerText>

            </ContainerTransferencia>

        </ContainerMeio>
    )
}

export default PagMeio



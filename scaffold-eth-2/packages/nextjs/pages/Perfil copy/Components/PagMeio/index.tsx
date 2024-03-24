import React from 'react'
import Image from "next/image";
import Cripto from "../../../../public/assets/home/ImgCripto.svg"

 import {
      ContainerMeio, ContainerTransferencia, InputContainer, Texto, Titulo,
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
                <InputContainer placeholder="Digite sua chave Pix"></InputContainer>

            </ContainerTransferencia>
        </ContainerMeio>
    )
}

export default PagMeio

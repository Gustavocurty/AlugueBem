import React from 'react'
import Image from "next/image";
import Cripto from "../../../../public/assets/home/ImgCripto.svg"

import {
    Container, BannerContainer, TextContainer, Text, TituloMeio
} from './style'

// import mainImg from '../../../../public/assets/home/mainImg.svg'
// import Logo from '../../../../public/assets/home/Logo.svg'

const Banner: React.FC = () =>{
    return(
        <Container>
            <BannerContainer>
                <TextContainer>
                    <Image alt="Logo Aluge Bem" src="./assets/home/Logo.svg" width={650} height={650}/>
                    <Text>Transformando seu aluguel em uma jornada fácil e criptograficamente segura</Text>
                </TextContainer>
                <Image alt="Main Image" src="./assets/home/mainImg.svg" width={650} height={650}/>
            </BannerContainer>
        </Container>
    )
}

export default Banner








{/* <Image alt="Logo Alugue Bem" fill src="/logo.svg" />
<Title src={Logo} alt="Logo Alugue Bem"></Title> */}
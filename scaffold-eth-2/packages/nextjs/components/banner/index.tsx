import React from 'react'
import Image from "next/image";
import Cripto from "../../../../public/assets/home/ImgCripto.svg"

import {
    Container, BannerContainer, Text,
} from './style'

interface BannerProps{
    image: string,
    text: string,
}

const Banner: React.FC<BannerProps> = ({image, text, imageLogo, textlogo}) =>{
    return(
        <Container>
            <BannerContainer>
                <Image alt={textLogo} src={imageLogo} width={650} height={650}/>
                <Image alt={text} src={image} width={650} height={650}/>
            </BannerContainer>
        </Container>
    )
}

export default Banner








{/* <Image alt="Logo Alugue Bem" fill src="/logo.svg" />
<Title src={Logo} alt="Logo Alugue Bem"></Title> */}
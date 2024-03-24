import React from "react";
import Image from "next/image";

import {
    Container,
    Card,
    Text,
    TextContainer,
    SmallText
} from './style'

const MultipleCards : React.FC = ({}) => {
    return(
        <Container>
            <Card>
                <Image alt="Icon BRL" src="./assets/perfil/BRL.svg" width={50} height={50} />
                <TextContainer>
                    <Text>1.000.000</Text>
                    <SmallText>Real brasileiro</SmallText>
                </TextContainer>
            </Card>
            <Card>
                <Image alt="Icon Bridged" src="./assets/perfil/Bridged.svg" width={50} height={50} />
                <TextContainer>
                    <Text>500.000</Text>
                    <SmallText>Real brasileiro</SmallText>
                </TextContainer>
            </Card>
            <Card>
                <Image alt="Icon Tether" src="./assets/perfil/Tether.svg" width={50} height={50} />
                <TextContainer>
                    <Text>750.000</Text>
                    <SmallText>Real brasileiro</SmallText>
                </TextContainer>
            </Card>
        </Container>
    )
}

export default MultipleCards;
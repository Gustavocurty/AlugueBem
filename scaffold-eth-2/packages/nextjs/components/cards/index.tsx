import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
    Container,
    Card,
    Text
} from './style'

const Cards : React.FC = ({}) => {
    return(
        <Container>
            <Link href='/transferencia'>
                <Card>
                    <Image alt="Icon Transferência" src="./assets/cards/transfer 1.svg" width={50} height={50} />
                    <Text>Transferência</Text>
                </Card>
            </Link>
            <Link href='/historico'>
                <Card>
                    <Image alt="Icon Histórico" src="./assets/cards/history 1.svg" width={50} height={50} />
                    <Text>Histórico</Text>
                </Card>
            </Link>
            <Link href='/perfil'>
                <Card>
                    <Image alt="Icon Perfil" src="./assets/cards/account 1.svg" width={50} height={50} />
                    <Text>Perfil</Text>
                </Card>
            </Link>
        </Container>
    )
}

export default Cards;
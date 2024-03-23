import React from 'react';

import Link from "next/link";

import {
    HeaderUlContainer,
    HeaderLi,
    HeaderUl,
} from './style'

export const Menu: React.FC = () => {
    return(
        <HeaderUlContainer> 
            <HeaderUl>
                <HeaderLi>
                    <Link href='/perfil'>Perfil</Link>
                </HeaderLi>
                <HeaderLi>
                    <Link href='/historico'>Histórico</Link>
                </HeaderLi>
                <HeaderLi>
                    <Link href='/transferencia'>Transferência</Link>
                </HeaderLi>
            </ HeaderUl>
        </HeaderUlContainer>
    )
}
import React from 'react'

import Banner from '../../../components/banner'
import PagMeio from '../Components/PagMeio'
import PagBaixo from '../Components/PagBaixo'

import {
    Content,
} from './style'

const Historico: React.FC = () =>{
    return(
        <Content>
            <Banner imageLogo="./assets/historico/bannerH.svg" textLogo="Página Histórico" image="./assets/historico/historicoImg.svg" text="Histórico"/>
            <PagMeio />
        </Content>
    )
}

export default Historico
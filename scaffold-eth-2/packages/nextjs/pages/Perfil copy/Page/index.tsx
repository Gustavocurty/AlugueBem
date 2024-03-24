import React from 'react'

import Banner from '../../../components/banner'
import Cards from '~~/components/cards'
import PagMeio from '../Components/PagMeio'

import {
    Content,
} from './style'

const Transferir: React.FC = () =>{
    return(
        <Content>
            <Banner imageLogo="./assets/transf/logoT.svg" textLogo="Página Transferencia" image="./assets/transf/imgT.svg" text="Transferencia"/>
            <Cards />
            <PagMeio/>
        </Content>
    )
}

export default Transferir
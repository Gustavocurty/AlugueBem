import React from 'react'

import Banner from '../../../components/banner'
import PagMeio from '../Components/PagMeio'
// import Cards from '../../../components/cards'

import {
    Content,
} from './style'

const Perfil: React.FC = () =>{
    return(
        <Content>
            <Banner imageLogo="./assets/perfil/logoP.svg" textLogo="Página Perfil" image="./assets/perfil/imgP.svg" text="Perfil"/>
            {/* <Cards /> */}
        </Content>
    )
}

export default Perfil
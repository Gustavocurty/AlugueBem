import React from 'react'

import Banner from '../Components/Banner'
import PagMeio from '../Components/PagMeio'
import PagBaixo from '../Components/PagBaixo'

import {
    Content,
} from './style'

const Home: React.FC = () =>{
    return(
        <Content>
            <Banner />
            <PagMeio />
            <PagBaixo/>
        </Content>
    )
}

export default Home
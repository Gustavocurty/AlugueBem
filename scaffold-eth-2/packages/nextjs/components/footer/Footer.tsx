import React from "react"

import{
  FooterStyle,
  FooterBottomRow,
  Copywrite,
  ContentDivision,
} from './style';

const Footer: React.FC = () => {
  return(
    <FooterStyle>
      <ContentDivision/>
      <FooterBottomRow>
        <Copywrite>© Serra Code 2024</Copywrite>
        <Copywrite>Todos os direitos reservados</Copywrite>
      </FooterBottomRow>
    </FooterStyle>
  )
}

export default Footer
import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Styles, BreakPoints, Responsive } from '../../styles/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = styled.footer`
  box-sizing: border-box;
  width: ${BreakPoints.lg}px;
  ${Responsive("lg")} {
    width: 100%;
  }
  margin: 0 auto;
  padding: 8px 16px;
  color: ${Styles.COLOR.LIGHTGLAY};
  font-size: ${Styles.FONT_SIZE.SMALL} px;
  text-align: center;
  ul {
    display: flex;
    width: 100%;
    margin: 8px;
    justify-content: center;
  }
  li {
    margin: 0 16px;
  }
  a {
    color: ${Styles.COLOR.LIGHTGLAY};
    &:hover {
      color: ${Styles.COLOR.SECONDARY};
    }
  }
  
`;

const Upper = styled.div`
  width: 100%;
  text-align: right;
  border-bottom: 1px solid ${Styles.COLOR.LIGHTGLAY};
`

const ToTop = styled.a`
  font-size: ${Styles.FONT_SIZE.DEFAULT}px;
`


const Copy = styled.p`
  font-size: ${Styles.FONT_SIZE.DEFAULT}px;
`

export default () => (
  <Footer>
      <Upper>
        <ToTop href="#"><FontAwesomeIcon icon={['fas', 'arrow-circle-up']} /> TOPに戻る</ToTop>
      </Upper>
    <ul>
      <li><Link to="profile">プロフィール</Link></li>
      {/* <li><Link to="contact">お問い合わせ</Link></li> */}
      <li>お問い合わせ</li>
      <li><Link to="privacy-policy">プライバシーポリシー</Link></li>
    </ul>
    <Copy>Copyright © 2018 ニッパチニッキ All Rights Reserved.</Copy>
  </Footer>
)
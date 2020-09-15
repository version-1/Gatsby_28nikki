import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Styles, BreakPoints, Responsive } from '../../styles/style'

const Footer = styled.footer`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 8px 16px;
  color: ${Styles.COLOR.LIGHTGLAY};
`;

const SubNav = styled.div`
  display: flex;
`


export default () => (
  <Footer>
    <Link to="profile">プロフィール</Link>
    <Link to="contact">お問い合わせ</Link>
    <Link to="privacy-policy">プライバシーポリシー</Link>
    <p>Copyright © 2018 ニッパチニッキ All Rights Reserved.</p>
  </Footer>
)
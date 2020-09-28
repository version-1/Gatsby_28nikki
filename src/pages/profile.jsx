import React from "react"
import Layout from "./components/Layout"
import Image from "./components/image"
import styled from 'styled-components'
import Pankuzu from "./components/atoms/Pankuzu"
import { Styles, BreakPoints, Responsive } from '../styles/style'

const Pict = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Profile = styled.div`
  width: ${BreakPoints.md}px;
  ${Responsive("md")} {
    min-width: 100%;
  }
`

export default () => (
  <Layout>
    <Pankuzu />
    <Profile>
      <h2>プロフィール</h2>
      <Pict>
      <Image filename="ui.png" alt="シマリス"
      　imgStyle= {{
            width: '100%',
            height: '100%', 
            borderRadius: '4px',
            }}　/>
        </Pict>
        <h3>管理者名</h3>
        <p>モトキ</p>
        <h3>職業</h3>
        <p>会社員</p>
        <h3>趣味</h3>
        <p>料理・お菓子作り／登山／読書／シマリス </p>
        <h3>勉強中</h3>
        <p>英語、プログラミング、お金</p>
      </Profile>
  </Layout>
)
import React from "react"
import Header from "./Header"
import Main from "./Main"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"
import { Styles } from '../../styles/style'

const GlobalStyle = createGlobalStyle`
body {
  background: #f5f7f4;
  color: ${Styles.COLOR.DARK};
  font-family: ${Styles.FONT_FAMILY.JP_SAWARABI};
  margin: 0;
  padding: 0px; 
}

a {
  text-decoration: none; 
  color: ${Styles.COLOR.DARK};
  }
ul {
  padding-left: 0;
}

li {
  display: block;
  text-decoration: none; }

l {
  list-style: none; 

}

.l-flex {
  display: flex; }

`

export default ({ page = "default", children }) => (
    <React.Fragment>
      <GlobalStyle theme="purple" />
      <Header page={page} />
      <Main sidebar={<Sidebar />}>{children}</Main>
      <Footer />
    </React.Fragment>
  )
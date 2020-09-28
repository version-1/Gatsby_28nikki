import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"
import { Styles } from '../../styles/style'
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート

library.add(fab, fas, far);

const GlobalStyle = createGlobalStyle`
body {
  background: #f5f7f4;
  color: ${Styles.COLOR.DARK};
  font-family: ${Styles.FONT_FAMILY.JP_SAWARABI};
  margin: 0;
  padding: 0 8px; 
}

a {
  text-decoration: none; 
  color: ${Styles.COLOR.DARK};
  transition: .3s;
  &:hover {
      color: ${Styles.COLOR.SECONDARY};
    }
  }
ul {
  padding-left: 0;
  list-style: none;
}

li {
  display: block;
  text-decoration: none;
 }


.l-flex {
  display: flex; }

`

export default ({ page = "default", children }) => (
    <React.Fragment>
      <GlobalStyle theme="purple" />
      <Header page={page} />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  )
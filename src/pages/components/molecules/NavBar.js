import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import Styles from '../../../styles/style';

const NavList = styled.ul`
display: flex;
width: 100%;
justify-content: space-around;
margin: 0;
padding: 0;

>li {
  transition: .2s;
  bottom: -2px;
  width: 100%;
  margin: 4px 0;
  padding: 8px 0;
  box-sizing: border-box;
  text-align: center;
  border-bottom: 2px solid ${Styles.COLOR.WHITE};
}
>li >a {
  color: ${Styles.COLOR.WHITE}
}

>li:hover {
    border-radius: ${Styles.BORDER_RADIUS} ${Styles.BORDER_RADIUS} 0 0;
    color: ${Styles.COLOR.WHITE};
    border-bottom: 2px solid ${Styles.COLOR.WHITE};
    background: ${Styles.COLOR.PRIMARY};
}

`

// >li:hover >a {
//     color: ${Styles.COLOR.PRIMARY};
// }

const NavBar = (props) => {
  const {
    categoriesAllMarkdownRemark: { group: categories },
  } = useStaticQuery(
    graphql`
      query {
        categoriesAllMarkdownRemark: allMarkdownRemark {
          group(field: frontmatter___categories) {
            category: fieldValue
            totalCount
          }
        }
      }
    `
  )

  return (
      <NavList>
            <li>
              <Link to="category/カナダ留学/">カナダ留学</Link>
            </li>
            <li>
              <Link to="category/英語学習/">英語学習</Link>
            </li>
            <li>
              <Link to="category/レシピ/">レシピ</Link>
            </li>
            <li>
              <Link to="category/プログラミング/">プログラミング</Link>
            </li>
            {/* <li>
              <Link to="/sample-page/">お問い合わせ</Link>
            </li> */}
            <li>
              <Link to="category/about/">お問い合わせ</Link>
            </li>
      </NavList>
  )
};

export default NavBar


import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { Styles, Responsive, BreakPoints } from '../../styles/style';
import Button from "./atoms/Button"
import NavBar from '../components/molecules/NavBar'
import TagBar from '../components/molecules/TagBar'

const HeaderBar = styled.header`
  margin: 0 auto;
  padding: 0;
  width: ${BreakPoints.lg}px;
  ${Responsive("lg")} {
    width: 100%;
  }
`

const HeaderUpper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  border-bottom: 1px solid ${Styles.COLOR.LIGHTGLAY};
  width: 100%;
`

const Titlebar = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: flex-end;

`


export default ({ page }) => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <HeaderBar>
       <Helmet
         htmlAttributes={{ lang: "ja" }}
         title={title}
         meta={[
           {
             name: "description",
             content: description,
           },
         ]}
       />
      <HeaderUpper>
        <div>
          <Button text1={title} to="/" type="title"/>
        </div>
        <Titlebar>
          <NavBar />
        </Titlebar>
      </HeaderUpper>
      <TagBar />
    </HeaderBar>
  )
}



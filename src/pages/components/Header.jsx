import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import Styles from '../../styles/style';
import Button from "./atoms/Button"
import NavBar from '../components/molecules/NavBar'
import TagBar from '../components/molecules/TagBar'


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
      <>
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
    <HeaderBar>
      <Titlebar>
      {page === "top" && <div>&nbsp;</div>}
      <Button text={title} to="/" type="title"/>
        <p>{description}</p>
        </Titlebar>
          <NavBar />
          <TagBar />
    </HeaderBar>
    </>
  )
}


const HeaderBar = styled.header`
  min-height: 100px;
  margin: 0;
  background: ${Styles.COLOR.SECONDARY}
`

const Titlebar = styled.div`
  min-height: 100px;
  width: 100%;
  margin: 0;
  display: flex
`


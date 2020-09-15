import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import { Styles } from '../../styles/style';
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
        <Button text1={title} to="/" type="title"/>
        {/* <p>{description}</p> */}
        <NavBar />
        </Titlebar>
          {/* <TagBar /> */}
    </HeaderBar>
    </>
  )
}


const HeaderBar = styled.header`
  margin: 0;
  padding: 4px 0 4px;
  background: ${Styles.COLOR.SECONDARY}
`

const Titlebar = styled.div`
  width: 100%;
  border-bottom: 2px solid ${Styles.COLOR.WHITE};
  margin: 0;
  display: flex;
  align-items: flex-end;
  p {
    color: ${Styles.COLOR.WHITE};
    font-size: ${Styles.FONT_SIZE.SMALL}px;
    margin-left: 32px;
  }
`


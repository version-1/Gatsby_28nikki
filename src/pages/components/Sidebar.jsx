import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import { Styles, BreakPoints, Responsive } from '../../styles/style'
import Button from "./atoms/Button"

export default () => {
  const {
    recentlyAllMarkdownRemark: { edges: recentlyBlogs }  } = useStaticQuery(
    graphql`
      query {
        recentlyAllMarkdownRemark: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 5
        ) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return (
    <SideBar>
        <Button text1="最近の" text2="投稿" type="secondary"/>
        <ul>
          {recentlyBlogs.map(
            ({
              node: {
                id,
                frontmatter: { title },
                fields: { slug },
              },
            }) => (
              <List key={id}>
                <Link to={slug}>{title}</Link>
              </List>
            )
          )}
        </ul>
    </SideBar>
  )
}

const SideBar = styled.div`
  width: ${BreakPoints["md"] - BreakPoints["sm"] - 16}px;
  height: ${BreakPoints.sm/3*2}px;
  margin: 16px 0;
  padding: 8px 0 0 16px;
  font-size: ${Styles.FONT_SIZE.DEFAULT}px;
  ${Responsive("md")} {
    display: none; 
  }
`

const List = styled.li`
  margin: 0 8px 4px;
`
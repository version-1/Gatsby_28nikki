import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import { Styles, BreakPoints, Responsive } from '../../styles/style'
import Button from "./atoms/Button"

export default () => {
  const {
    recentlyAllMarkdownRemark: { edges: recentlyBlogs },
    categoriesAllMarkdownRemark: { group: categories }
  } = useStaticQuery(
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
    <SideBar>
        <Button text1="最近の" text2="投稿" to="/" type="secondary"/>
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

      <Button text1="分類" to="/" type="primary"/>
        <ul>
          {categories.map(({ category, totalCount }) => (
            <List key={category}>
              <Link to={`category/${category}`}>{category}</Link> ( {totalCount}{" "}
              )
            </List>
          ))}
        </ul>
    </SideBar>
  )
}

const SideBar = styled.div`
  width: ${BreakPoints["md"] - BreakPoints["sm"] - 16}px;
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
import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
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
      <div>
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
              <li key={id}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          )}
        </ul>
      </div>

      <div>
      <Button text1="分類" to="/" type="primary"/>
        <ul>
          {categories.map(({ category, totalCount }) => (
            <li key={category}>
              <Link to={`category/${category}`}>{category}</Link> ( {totalCount}{" "}
              )
            </li>
          ))}
        </ul>
      </div>
    </SideBar>
  )
}

const SideBar = styled.div`
  min-width: 200px;
  margin: 0;
  padding: 8px;
`
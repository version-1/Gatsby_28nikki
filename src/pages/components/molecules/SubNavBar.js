import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import { Styles } from '../../../styles/style';

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
export default () => {
  const {
    recentlyAllMarkdownRemark: { edges: aboutBlogs },
  } = useStaticQuery(
    graphql`
      query {
        recentlyAllMarkdownRemark: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { categories: { in: ["about"] } } }
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
    <NavList>
        <ul>
          {aboutBlogs.map(
            ({
              node: {
                id,
                frontmatter: { title },
                fields: { slug },
              },
            }) => (
              <li key={id}>
                <Link to="sample-page">{title}</Link>
              </li>
            )
          )}
        </ul>
      </NavList>
  )
}

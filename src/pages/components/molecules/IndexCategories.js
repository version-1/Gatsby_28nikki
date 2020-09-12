import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import ArticleCard from "../atoms/ArticleCard"

const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const ArticlePart = (props) => {
  const {
    eachCategories : { edges },
    } = props;
  return (
    <>
    <Articles>
    {edges.map(
      ({
        node: {
          id,
          frontmatter: { title, date, avatar },
          fields: { slug },
          excerpt,
        }
      }) => (
        <>
         <ArticleCard key={title} avatar={avatar?.childImageSharp.sizes} date={date} to={slug} originalTitle={title} excerpt={excerpt}/>
        </>
      )
    )}
    </Articles>
    </>
  )
}

export default ({
  data: {
    eachCategories,
  },
  data
}) => {
  return (
    <>
      <ArticlePart eachCategories={eachCategories} />
  </>
)
}

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          id
          html
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
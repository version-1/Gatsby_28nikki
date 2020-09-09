import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "./components/Layout"
import ArticleCard from "./components/atoms/ArticleCard"




export default ({
  data: {
    allMarkdownRemark: { totalCount, edges: blogs },
  },
}) => (
  <Layout page={"top"}>
    <strong>投稿 ( {totalCount} ) </strong>
    {blogs.map(
      ({
        node: {
          id,
          frontmatter: { title, date },
          fields: { slug },
          excerpt,
        }, index
      }) => (
        <>
        <ArticleCard key={id} i={index} type={index == 0 ? "large" : "default"} date={date} to={slug} originalTitle={title} excerpt={excerpt}/>
        </>
      )
    )}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY年MM月DD日")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
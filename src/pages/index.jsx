import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "./components/Layout"




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
        },
      }) => (
        <div key={id} >
          <div >{date}</div>
          <h2>
            <Link to={slug}>{title}</Link>
          </h2>
          <p>{excerpt}</p>
        </div>
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
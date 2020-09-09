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
          frontmatter: { title, date, avatar },
          fields: { slug },
          excerpt,
        }, node,
      }) => (
        <>
        <ArticleCard key={id} type="default" avatar={avatar?.childImageSharp.fluid} date={date} to={slug} originalTitle={title} excerpt={excerpt}/>
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
            date(formatString: "YYYY/MM/DD")
            categories
            tags
            avatar {
              childImageSharp {
                fluid(maxWidth: 500, quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
                fixed(width: 125, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
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
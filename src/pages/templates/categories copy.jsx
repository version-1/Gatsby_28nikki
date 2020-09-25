import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import ArticleCard from "../components/atoms/ArticleCard"

export default ({
  data: {
    allMarkdownRemark: { totalCount, edges: blogs },
  },
}) => {
  return (
    <Layout>
      {blogs.map(
        ({
          node: {
            id,
            html,
            frontmatter: { title, avatar, date },
            fields: { slug },
          },
        }) => (
          <div key={id}>
            <ArticleCard type='default' avatar={avatar?.childImageSharp.sizes} date={date} to={slug} originalTitle={title} excerpt="" />
            <h2>
              <Link to={slug}>{title}</Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <hr />
          </div>
        )
      )}
    </Layout>
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
            date(formatString: "YYYY/MM/DD")
            avatar {
              childImageSharp {
                fluid(maxWidth: 500, quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
                sizes(maxHeight: 300, maxWidth: 250) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
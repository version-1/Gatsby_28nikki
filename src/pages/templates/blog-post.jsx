import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"

export default ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, categories, tags, avatar },
    },
  },
}) => {
  return (
    <Layout>
      <h1>{title}</h1>
      <Img fluid={avatar.childImageSharp.fluid} />
      <>
        <strong>カテゴリー : </strong>
        {categories.length ? categories.join(", ") : "なし"}
      </>
      <div dangerouslySetInnerHTML={{ __html: html }} />

      <>
        <strong>タグ : </strong>
        {tags.length ? tags.join(", ") : "なし"}
      </>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
   
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        categories
        tags
        avatar {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
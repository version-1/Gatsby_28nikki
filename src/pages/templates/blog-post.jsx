import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, categories, tags, pict },
    },
  },
}) => {
  return (
    <Layout>
      <h1>{title}</h1>
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
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        categories
        tags
        
      }
    }
  }
`
import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "./components/Layout"
import ArticleCard from "./components/atoms/ArticleCard"
import ArticleList from "./components/molecules/ArticleList"
import Sidebar from "./components/Sidebar"

const HeadArticle = styled.div`
  display: flex;
`;

export default ({
  data: {
    latest: { edges: blogs },
    categoriesAllMarkdownRemark: { group },
    englishArticlesAll: {edges: englishBlogs},
    canadaArticlesAll: {edges: canadaBlogs},
    recipeArticlesAll: {edges: recipeBlogs},
    programmingArticlesAll: {edges: programmingBlogs},
  }
}) => {

  const map = {
    "英語学習" : englishBlogs,
    "留学" : canadaBlogs,
    "レシピ" : recipeBlogs,
    "プログラミング" : programmingBlogs, 
    }

  return (
  <Layout page={"top"}>
    <HeadArticle>
      <ArticleCard type='large' avatar={blogs[0].node.frontmatter.avatar?.childImageSharp.sizes} date={blogs[0].node.frontmatter.date} to={blogs[0].node.fields.slug} originalTitle={blogs[0].node.frontmatter.title} excerpt={blogs[0].node.excerpt}/>
      <Sidebar/>
    </HeadArticle>
    {group.filter(({category}) => Object.keys(map).indexOf(category) !== -1).map(
      ({
        category
      }) => (
        <ArticleList blogs={map[category]} name={category}/>
        )
    )}
  </Layout>
)
}

export const query = graphql`
  query {
    categoriesAllMarkdownRemark: allMarkdownRemark {
      group(field: frontmatter___categories) {
        category: fieldValue
        totalCount
      }
    }
    latest: allMarkdownRemark(
      limit: 1,
      sort: { fields: [frontmatter___date], 
      order: DESC }) {
      edges {
        node {
          id
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
          excerpt
        }
      }
    }
    englishArticlesAll: allMarkdownRemark(
      sort: { fields: [frontmatter___date], 
      order: DESC}
      filter: { frontmatter: { categories: { in: ["英語学習"] } } }
      limit: 5
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            categories
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
          excerpt
        }
      }
    }
    canadaArticlesAll: allMarkdownRemark(
      sort: { fields: [frontmatter___date], 
      order: DESC}
      filter: { frontmatter: { categories: { in: ["留学"] } } }
      limit: 5
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            categories
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
          excerpt
        }
      }
    }
    recipeArticlesAll: allMarkdownRemark(
      sort: { fields: [frontmatter___date], 
      order: DESC}
      filter: { frontmatter: { categories: { in: ["レシピ"] } } }
      limit: 5
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            categories
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
          excerpt
        }
      }
    }
    programmingArticlesAll: allMarkdownRemark(
      sort: { fields: [frontmatter___date], 
      order: DESC}
      filter: { frontmatter: { categories: { in: ["プログラミング"] } } }
          limit: 10
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            categories
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
          excerpt
        }
      }
    }
  }
`
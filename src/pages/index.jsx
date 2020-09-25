import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "./components/Layout"
import ArticleCard from "./components/atoms/ArticleCard"
import ArticleList from "./components/molecules/ArticleList"
import Sidebar from "./components/Sidebar"
import {categoryMap} from "../styles/maps"

const HeadArticle = styled.div`
  display: flex;
`;

export default ({
  data: {
    latest: { edges: blogs },
    categoriesAllMarkdownRemark: { group },
    englishArticlesAll: {edges: englishBlogs},
    canadaArticlesAll: {edges: studyAbroadBlogs},
    recipeArticlesAll: {edges: recipeBlogs},
    programmingArticlesAll: {edges: programmingBlogs},
    healthArticlesAll: {edges: healthBlogs},
    othersArticlesAll: {edges: othersBlogs},
  }
}) => {

  const map = {
    "english" : englishBlogs,
    "study-abroad" : studyAbroadBlogs,
    "recipe" : recipeBlogs,
    "programming" : programmingBlogs, 
    "health" : healthBlogs,
    "others" : othersBlogs
    }

    // const map = {
    // "英語学習" : englishBlogs,
    // "留学" : studyAbroadBlogs,
    // "レシピ" : recipeBlogs,
    // "プログラミング" : programmingBlogs, 
    // "健康管理" : healthBlogs,
    // "その他" : othersBlogs
    // }

  return (
  <Layout page={"top"}>
    <HeadArticle>
      <ArticleCard type='large' avatar={blogs[0].node.frontmatter.avatar?.childImageSharp.sizes} date={blogs[0].node.frontmatter.date} to={blogs[0].node.fields.slug} originalTitle={blogs[0].node.frontmatter.title} excerpt={blogs[0].node.excerpt}/>
      <Sidebar/>
    </HeadArticle>
    {group.map((a, b) => (
        console.log(categoryMap[a.category].weight)
      ))}
    {group.filter(({category}) => Object.keys(map).indexOf(category) !== -1).map(
      ({
        category
      }) => (
        <ArticleList blogs={map[category]} category={category}/>
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
      filter: { frontmatter: { categories: { in: ["english"] } } }
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
      filter: { frontmatter: { categories: { in: ["study-abroad"] } } }
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
      filter: { frontmatter: { categories: { in: ["recipe"] } } }
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
      filter: { frontmatter: { categories: { in: ["programming"] } } }
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
    healthArticlesAll: allMarkdownRemark(
      sort: { fields: [frontmatter___date], 
      order: DESC}
      filter: { frontmatter: { categories: { in: ["health"] } } }
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
    othersArticlesAll: allMarkdownRemark(
      sort: { fields: [frontmatter___date], 
      order: DESC}
      filter: { frontmatter: { categories: { in: ["others"] } } }
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
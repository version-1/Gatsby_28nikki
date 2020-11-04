import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "./components/Layout"
import ArticleCard from "./components/atoms/ArticleCard"
import ArticleList from "./components/molecules/ArticleList"
import SideBlogList from "./components/atoms/SideBlogList"
import Pankuzu from "./components/atoms/Pankuzu"

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
    businessArticlesAll: {edges: businessBlogs},
    healthArticlesAll: {edges: healthBlogs},
    othersArticlesAll: {edges: othersBlogs},
    recentlyAllMarkdownRemark: { edges: recentlyBlogs },
  }
}) => {

  const map = {
    "english" : englishBlogs,
    "study-abroad" : studyAbroadBlogs,
    "business" : businessBlogs,
    "programming" : programmingBlogs, 
    "recipe" : recipeBlogs,
    "health" : healthBlogs,
    "others" : othersBlogs
    }

  return (
  <Layout page={"top"}>
    <Pankuzu />
    <HeadArticle>
      <ArticleCard type='large' avatar={blogs[0].node.frontmatter.avatar?.childImageSharp.sizes} date={blogs[0].node.frontmatter.date} to={blogs[0].node.fields.slug} originalTitle={blogs[0].node.frontmatter.title} excerpt={blogs[0].node.excerpt}/>
      <SideBlogList blogs={recentlyBlogs} text1="最近の" text2="投稿" />
    </HeadArticle>
    {Object.keys(map).map(
      (key) => {
        if (!map[key] || map[key].length === 0) {
          return null
        }
        return <ArticleList blogs={map[key]} category={key}/>
      }
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

    recentlyAllMarkdownRemark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
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
          excerpt(truncate: true, pruneLength: 68)
        }
      }
    }
    businessArticlesAll: allMarkdownRemark(
      sort: { fields: [frontmatter___date], 
      order: DESC}
      filter: { frontmatter: { categories: { in: ["business"] } } }
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
          excerpt(truncate: true, pruneLength: 68)
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
          excerpt(truncate: true, pruneLength: 68)
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
          excerpt(truncate: true, pruneLength: 68)
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
          excerpt(truncate: true, pruneLength: 68)
        }
      }
    }
    programmingArticlesAll: allMarkdownRemark(
      sort: { fields: [frontmatter___date], 
      order: DESC}
      filter: { frontmatter: { categories: { in: ["programming"] } } }
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
          excerpt(truncate: true, pruneLength: 68)
        }
      }
    }
    healthArticlesAll: allMarkdownRemark(
      sort: { fields: [frontmatter___date], 
      order: DESC}
      filter: { frontmatter: { categories: { in: ["health"] } } }
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
          excerpt(truncate: true, pruneLength: 68)
        }
      }
    }
    othersArticlesAll: allMarkdownRemark(
      sort: { fields: [frontmatter___date], 
      order: DESC}
      filter: { frontmatter: { categories: { in: ["others"] } } }
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
          excerpt(truncate: true, pruneLength: 68)
        }
      }
    }
  }
`
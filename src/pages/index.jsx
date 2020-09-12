import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "./components/Layout"
import ArticleCard from "./components/atoms/ArticleCard"
import IndexCategories from "./components/molecules/IndexCategories"

const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const Categoriy = (props) => {
  const {
    categories,
    eachCategories : { edges },
    } = props;
  console.log(edges)
  console.log(categories)
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

// 

export default ({
  data: {
    latest: { edges: blogs },
    categoriesAllMarkdownRemark: { group},
    eachCategories,
  },
  data
}) => {

  return (
  <Layout page={"top"}>
    <ArticleCard type='large' avatar={blogs[0].node.frontmatter.avatar?.childImageSharp.sizes} date={blogs[0].node.frontmatter.date} to={blogs[0].node.fields.slug} originalTitle={blogs[0].node.frontmatter.title} excerpt={blogs[0].node.excerpt}/>
    <Categoriy categories={group} eachCategories={eachCategories} />
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
    eachCategories: allMarkdownRemark(
      sort: { fields: [frontmatter___categories], 
      order: DESC}) {
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
            categories
            tags
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
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from 'styled-components'
import { Styles, Responsive, BreakPoints} from '../../styles/style'
import ArticleCard from "../components/atoms/ArticleCard"
import Button from "../components/atoms/Button"
import SidePickUp from "../components/atoms/SidePickUp"

const SideBar = styled.div`
  width: ${BreakPoints["md"] - BreakPoints["sm"] - 16}px;
  margin: 16px 0;
  padding: 8px 0 0 16px;
  font-size: ${Styles.FONT_SIZE.DEFAULT}px;
  ${Responsive("md")} {
    display: none; 
  }
`
const Card = styled.div`
  width: 240px;
  height: 180px;
`

const Article = styled.div`
  display: flex;
  width: 100%;
  margin: 16px 0;
  padding: 0;
`

const HeadArticle = styled.div`
  display: flex;
  margin-bottom: 100px;
`

const Info = styled.div`
  position: relative;
  margin: 4px 8px;
  align-items: baseline;
  justify-content: flex-start;
  height: 70px;
  box-sizing: border-box;
`;


const SubInfo = styled.div`
    font-family: ${Styles.FONT_FAMILY.EN};
    font-size: ${Styles.FONT_SIZE.SMALL}px;
    color: ${Styles.COLOR.LIGHTGLAY};
    margin: 0px;
    margin-bottom: 10px;
`;

const Description = styled.div`
    width: 100%;
    color: ${Styles.COLOR.LIGHTGLAY};
    font-size: ${Styles.FONT_SIZE.MIDDLE}px;
    ${Responsive("sm")} {
      font-size: ${Styles.FONT_SIZE.SMALL}px;
    }
`;


export default ({
  data: {
    allMarkdownRemark: { totalCount, edges: blogs },
  },
}) => {

    const createRandom = () => {
      const arr = []
      const exceptLatest = blogs.slice(1, blogs.length)
      if (blogs.length < 5) {
        return blogs
      }
      while (arr.length < 5) {
          var random = Math.floor( Math.random() * (blogs.length - 1) ) ;
          arr.push(exceptLatest[random])
      }
      return arr
  }
  const randomList = createRandom()
  
  return (
    <Layout>
      <HeadArticle>
        <ArticleCard type='large' avatar={blogs[0].node.frontmatter.avatar?.childImageSharp.sizes} date={blogs[0].node.frontmatter.date} to={blogs[0].node.fields.slug} originalTitle={blogs[0].node.frontmatter.title} excerpt={blogs[0].node.excerpt}/>
        <SideBar>
        <Button text1="ピック" text2="アップ" to="/" type="secondary"/>
          <SidePickUp blogs={randomList} />
        </SideBar>
      </HeadArticle>
      {blogs.slice(1, blogs.length).map(
        ({
          node: {
            id,
            frontmatter: { title, avatar, date },
            fields: { slug },
            excerpt
          },
        }) => (
        <Link  to={slug} >
            <Article key={id}>
              <Card>
                <ArticleCard type='default' avatar={avatar?.childImageSharp.sizes} date={date} to={slug} originalTitle={title} excerpt="" />
              </Card>
              <Info>
                <SubInfo>{date}</SubInfo>
                <Description>{excerpt}</Description>
              </Info>
          </Article>
        </Link>
        )
      )}

    </Layout>
  )
}

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
  }
`
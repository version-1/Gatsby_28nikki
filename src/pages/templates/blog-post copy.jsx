import React from "react"
import { graphql, Link } from "gatsby"
import rehypeReact from "rehype-react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import {categoryMap} from "../../styles/maps"
import styled from 'styled-components'
import { Styles, BreakPoints, Responsive } from '../../styles/style'
import Fukidasi from "./parts/Fukidasi"


const Article = styled.div`
  box-sizing: border-box;
  width: ${BreakPoints.md}px;
  ${Responsive("sm")} {
    width: 100%;
  }
  margin: 0;
  padding: 8px 16px;
  font-size: ${Styles.FONT_SIZE.DEFAULT};
`;

const Category = styled.span`
  border: 1px solid ${Styles.COLOR.SECONDARY};
  color: ${Styles.COLOR.WHITE};
  background: ${Styles.COLOR.SECONDARY};
  font-size: ${Styles.FONT_SIZE.SMALL}px;
  border-radius: 4px;
  padding: 4px 8px;
  margin: 4px 0px;
`;

const Date = styled.div`
  color: ${Styles.COLOR.LIGHTGLAY};
  font-size: ${Styles.FONT_SIZE.SMALL}px;
  border-radius: 4px;
  padding: 2px 3px;
  margin: 4px 0px;
`;

const Tag = styled.span`
  border: 1px solid ${Styles.COLOR.LIGHTGLAY};
  color: ${Styles.COLOR.LIGHTGLAY};
  font-size: ${Styles.FONT_SIZE.SMALL}px;
  border-radius: 4px;
  padding: 2px 3px;
  margin: 4px 16px 4px 0;
`;

const Pict = styled.div`
  max-width: ${BreakPoints.md}px;
  height: ${BreakPoints.md/3*2}px;
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "fukidasi": Fukidasi},//keyの指定は小文字
}).Compiler

export default ({
  data: {
    markdownRemark: {
      htmlAst,
      // html,
      frontmatter: { title, categories, tags, avatar, date },
    },
  },
}) => {
  return (
    <Layout>
      <Article>
      {categories.map((category) => (
        <Link to={`category/${categoryMap[category].url}/`}><Category>{categoryMap[category].name}</Category></Link>))} 
      <h2>{title}</h2>

      {/* <Img fluid={avatar.childImageSharp.fluid} /> */}
      <Pict><Img fluid={avatar.childImageSharp.fluid} alt={title & date}
            imgStyle= {{
              width: '100%',
              height: '100%', 
              objectFit: 'cover', 
              objectPosition: 'center center', 
              }}　
              style= {{
                width: '100%',
                height: '100%', 
                boxSizing: 'border-box', 
                border: '1px solid #ccc',
                borderRadius: '4px',
           }}/>
        </Pict>
      <Date>{date} モトキ</Date>
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      {renderAst(htmlAst)}
      {tags.map((tag) => (<Link to={`tag/${tag}`}><Tag>{tag}</Tag></Link>))} 
      </Article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
   
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
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
        date(formatString: "YYYY/MM/DD")
      }
    }
  }
`
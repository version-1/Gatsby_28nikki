import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import {categoryMap} from "../../styles/maps"
import styled from 'styled-components'
import { Styles, BreakPoints, Responsive } from '../../styles/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Article = styled.div`
  box-sizing: border-box;
  min-width: ${BreakPoints.md}px;
  margin: 0;
  padding: 8px 16px;
  font-size: ${Styles.FONT_SIZE.DEFAULT};
  ${Responsive("md")} {
    min-width: 100%;
    padding: 8px 0px;
  }
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

const Tags = styled.span`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

const Tag = styled.span`
  display: inline-block;
  border: 1px solid ${Styles.COLOR.LIGHTGLAY};
  color: ${Styles.COLOR.LIGHTGLAY};
  font-size: ${Styles.FONT_SIZE.SMALL}px;
  border-radius: 4px;
  padding: 1px 3px;
  margin: 4px 16px 4px 0;
  &:hover {
    background: ${Styles.COLOR.SECONDARY};
    color: ${Styles.COLOR.WHITE};
    border: 1px solid ${Styles.COLOR.SECONDARY};
  }
`;

const Pict = styled.div`
  max-width: ${BreakPoints.md}px;
  height: ${BreakPoints.md/5*3}px;
  ${Responsive("sm")} {
    max-width: 100%;
    height: ${BreakPoints.sm/5*3}px;
  }
`


const Content = styled.div`
  border-bottom: 1px solid ${Styles.COLOR.LIGHTGLAY};
  margin-bottom: 16px;
  h1, h2, h3, h4, h5, h6 {
    border-top: 2px solid ${Styles.COLOR.PRIMARY};
    color: ${Styles.COLOR.PRIMARY};
    padding: 4px 2px 0;
    margin: 32px 0 0;
  }
  h3 {
    font-size: ${Styles.HEADER_FONT_SIZE.H3}px ;
  }
  h4 {
    font-size: ${Styles.HEADER_FONT_SIZE.H4}px ;
  }
  h5 {
    font-size: ${Styles.HEADER_FONT_SIZE.H5}px ;
  }
  h6 {
    font-size: ${Styles.HEADER_FONT_SIZE.H6}px ;
  }
  table {
    border-collapse: collapse;
    padding: 0;
  
  }
  th, td {
    border: 1px solid #ccc;
    padding: 4px 8px;
    margin: 0;
  }
  th {
    background: ${Styles.COLOR.LIGHTGLAY};
    color: ${Styles.COLOR.WHITE};
  }

  ul li {
    display: list-item;
    list-style-type: disc;
    list-style-position: outside;
    margin-left: 24px;
  }
`


export default ({
  data: {
    markdownRemark: {
      html,
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

      <Pict><Img fluid={avatar.childImageSharp.fluid} alt={title & date}
            imgStyle= {{
              width: '100%',
              height: '100%', 
              objectFit: 'contain', 
              objectPosition: 'center center', 
              }}　
              style= {{
                width: '100%',
                height: '100%', 
                boxSizing: 'border-box', 
                borderRadius: '4px',
           }}/>
        </Pict>
      <Date><FontAwesomeIcon icon={['far', 'clock']} /> {date} モトキ</Date>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
      <Tags>
        {tags.map((tag) => (<Link to={`tag/${tag}`}><Tag>{tag}</Tag></Link>))} 
      </Tags>

      </Article>
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
        date(formatString: "YYYY/MM/DD")
      }
    }
  }
`
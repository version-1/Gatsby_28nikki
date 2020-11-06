import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import {categoryMap} from "../../styles/maps"
import styled from 'styled-components'
import { Styles, BreakPoints, Responsive } from '../../styles/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BlogArticleStyles } from '../../styles/BlogArticleStyles'
import Pankuzu from '../components/atoms/Pankuzu'
import SEO from '../components/seo'
import Toc from '../components/atoms/Toc'

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
  display: inline-block;  
  border: 1px solid ${Styles.COLOR.PRIMARY};
  color: ${Styles.COLOR.WHITE};
  background: ${Styles.COLOR.PRIMARY};
  font-size: ${Styles.FONT_SIZE.SMALL}px;
  border-radius: 4px;
  padding: 1px 3px;
  margin: 4px 16px 4px 0;
  transition: .2s;
  &:hover {
    background: ${Styles.COLOR.WHITE};
    color: ${Styles.COLOR.PRIMARY};
    
  }
`;

const Date = styled.div`
  color: ${Styles.COLOR.LIGHTGLAY};
  font-size: ${Styles.FONT_SIZE.SMALL}px;
  border-radius: 4px;
  padding: 2px 3px;
  margin: 4px 0px;
`;

const Tags = styled.div`
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
  transition: .2s;
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

export default ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, categories, tags, avatar, date },
      fields: { slug },
      excerpt,
      tableOfContents
    },
  },
}) => {
  return (
    <Layout>
      <SEO title={title} 
        description={excerpt}
        image={avatar.childImageSharp.fluid}  
        lang="ja"
    />
      <Pankuzu middle={categories[0]} article={{name: title, to: slug}} />
      <Article>
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
      <Toc data={tableOfContents} />
      <BlogArticleStyles dangerouslySetInnerHTML={{ __html: html }} />
  
      <Tags>
      {categories.map((category) => (
        <Link to={`/${categoryMap[category].url}`}><Category>{categoryMap[category].name}</Category></Link>
        ))} 
        {tags.map((tag) => (<Link to={`/tag/${tag}`}><Tag>#{tag}</Tag></Link>))} 
      </Tags>

      </Article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      excerpt(truncate: true, pruneLength: 120)
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
      fields {
        slug
      }
    }
  }
`
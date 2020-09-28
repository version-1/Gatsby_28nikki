import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import { Styles } from '../../../styles/style';

const TagList = styled.ul`
display: flex;
width: 100%;
justify-content: space-around;
margin: 0;
padding: 0;

>li {
  width: 100%;
  margin:0;
  padding: 8px 0;
  box-sizing: border-box;
  text-align: center;
  border-bottom: 2px solid ${Styles.COLOR.WHITE};
  background: ${Styles.COLOR.WHITE};
  font-size: ${Styles.FONT_SIZE.SMALL}px;
  a {
    border-radius: 4px;
    padding: 2px 3px;
  }
}

>li:hover {
    color: ${Styles.COLOR.WHITE};
    a {
      color: ${Styles.COLOR.WHITE};
      background: ${Styles.COLOR.SECONDARY};
    }
}
`

const TagBar = (props) => {
  const {
    tagsAllMarkdownRemark: { group: tags },
  } = useStaticQuery(
    graphql`
      query {
        tagsAllMarkdownRemark: allMarkdownRemark {
          group(field: frontmatter___tags) {
            tag: fieldValue
            totalCount
          }
        }
      }
    `
  )
  return (
      <TagList>
            {tags.sort(function(a, b) {
              return  b.totalCount - a.totalCount;
            }).slice(0, 6).map(({ tag }) => (
            <li key={tag}>
              <Link to={`tag/${tag}`}>#{tag}</Link>
            </li>
          ))}
      </TagList>
  )
};

export default TagBar


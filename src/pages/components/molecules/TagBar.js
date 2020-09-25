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
  transition: .2s;
  width: 100%;
  margin:0;
  padding: 8px 0;
  box-sizing: border-box;
  text-align: center;
  border-bottom: 2px solid ${Styles.COLOR.WHITE};
  background: ${Styles.COLOR.WHITE};
  font-size: ${Styles.FONT_SIZE.SMALL}px;
  transition: .3s;
}

>li:hover {
    color: ${Styles.COLOR.SECONDARY};
    a {
      color: ${Styles.COLOR.SECONDARY};
    }
}
`

// >li >a {
//   color: ${Styles.COLOR.WHITE}
// }

// >li:hover {
//     border-radius: ${Styles.BORDER_RADIUS} ${Styles.BORDER_RADIUS} 0 0;
//     color: ${Styles.COLOR.WHITE};
//     border-bottom: 2px solid ${Styles.COLOR.WHITE};
//     background: ${Styles.COLOR.PRIMARY};
// }

// >li:hover >a {
//     color: ${Styles.COLOR.PRIMARY};
// }

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


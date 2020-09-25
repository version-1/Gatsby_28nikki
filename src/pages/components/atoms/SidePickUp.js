import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const List = styled.li`
  margin: 0 8px 4px;
`

const ArticleList = (props) => {
    const { blogs } = props;

    return (
      <>
      {console.log(blogs)}
        <ul>
          {blogs.map(
            ({
              node: {
                id,
                frontmatter: { title },
                fields: { slug },
              },
            }) => (
              <List key={id}>
                <Link to={slug}>{title}</Link>
              </List>
            )
          )}
        </ul>
      </>
    )
  }
  
  export default ArticleList


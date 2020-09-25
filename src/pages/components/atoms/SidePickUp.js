import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from 'styled-components'
import { Styles, BreakPoints, Responsive } from '../../../styles/style'
import Button from "./Button"



const ArticleList = (props) => {
    const { blogs } = props;
    const createRandom = () => {
        const exceptLatest = blogs.slice(1, blogs.length)
        let randomList = []
        while (randomList.length < 6) {
            var random = Math.floor( Math.random() * (blogs.length + 1 - 1) ) + 1 ;
                randomList.push(exceptLatest[random])
        }
        return randomList
    }

    const randomList = createRandom()

    return (
      <>
        <ul>
          {randomList.map(
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

const SideBar = styled.div`
  width: ${BreakPoints["md"] - BreakPoints["sm"] - 16}px;
  margin: 16px 0;
  padding: 8px 0 0 16px;
  font-size: ${Styles.FONT_SIZE.DEFAULT}px;
  ${Responsive("md")} {
    display: none; 
  }
`

const List = styled.li`
  margin: 0 8px 4px;
`
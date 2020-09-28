import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Styles, BreakPoints, Responsive } from '../../../styles/style'
import Button from "./Button"


const SideBar = styled.div`
  width: ${BreakPoints["md"] - BreakPoints["sm"] - 16}px;
  height: ${BreakPoints.sm/3*2}px;
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

const ArticleList = (props) => {
    const { blogs, text1, text2 } = props;

    return (
      <SideBar>
               <Button text1={text1} text2={text2} type="secondary"/>
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
      </SideBar>
    )
  }
  
  export default ArticleList


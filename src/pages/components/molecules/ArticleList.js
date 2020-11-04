import React from "react"
import styled from 'styled-components'
import ArticleCard from "../atoms/ArticleCard"
import Button from "../atoms/Button"
import {categoryMap} from "../../../styles/maps"
import { Responsive } from '../../../styles/style'

const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
  ${Responsive("md")} {
    justify-content: center;
  }
  ${Responsive("sm")} {
    justify-content: space-between;
  }

`;

const Title = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  margin-bottom: 8px;
`;

const ArticleList = (props) => {
  const {
    blogs,
    category
    } = props;
  return (
    <>
      <Title>
        <Button type="SECONDARY" text1={categoryMap[category].name} to={categoryMap[category].url}/>
      </Title>
      <Articles>
        {blogs.map(
          ({
            node: {
              id,
              frontmatter: { title, date, avatar },
              fields: { slug },
              excerpt,
            }
          }) => (
            <ArticleCard key={title} avatar={avatar?.childImageSharp.sizes} date={date} to={slug} originalTitle={title} excerpt={excerpt}/>
          )
        )}
        <ArticleCard key={category} to={`${categoryMap[category].url}/`} originalTitle={categoryMap[category].name} type="several" excerpt={category} />
     </Articles>
    </>
  )
}

export default ArticleList
import React from "react"
import styled from 'styled-components'
import ArticleCard from "../atoms/ArticleCard"
import Button from "../atoms/Button"
import Styles from '../../../styles/style';

const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 50px;
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

const Explanation = styled.p`
  font-size: ${Styles.FONT_SIZE.MIDDLE};
  color: ${Styles.COLOR.LIGHTGLAY};
  margin-left: 32px;
`;

const ArticleList = (props) => {
  const {
    blogs,
    name
    } = props;
  return (
    <>
    <Title>
      <Button type="secondary" text1={name} to={`category/${name}`}/>
      {/* <Explanation>ご飯食べたいな</Explanation> */}
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
    <ArticleCard key={name} to={`category/${name}`} originalTitle={name} type="several" excerpt={name} />
    </Articles>
    </>
  )
}

export default ArticleList
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import Styles from '../../../styles/style';


const Card = styled.div`
  display: block;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 800;
  font-size: ${Styles.FONT_SIZE.MIDDLE}px;
  width: 250px;
  height: 180px;
  margin: 0px 16px 16px 0px;
  padding: 0;
  position: relative;
`;

const Pict = styled.div`
    max-width: ${props => props.type === "large" ? '640px' : '100%'};
    height: ${props => props.type === "large" ? '430px' : '100%' };
    padding: 4px;
    box-sizing: border-box;
`;

const Title = styled.h3`
    width: 70%;
    margin: 4px;
    padding: 4px;
    font-size: 0.8em;
    position: absolute;
    top: 4px;
    left: 4px;
    z-index: 5;
    span {
      background-color: rgba(250,250,250,0.7);
      padding: 2px 1px;
    }
`;

const CardSeveral = styled(Card)`
  z-index: 10;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: ${Styles.COLOR.WHITE};
  margin: 4px 4px 0 4px;
  &::before, &::after {
    position: absolute;
    box-sizing: border-box;
    content: '';
    z-index: -100;
    height: 100%;
    width:  100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: ${Styles.COLOR.WHITE};
  }
  &::before{
    top: 2px;
    right: 2px;
  }
  &::after {
    top: 4px;
    right: 4px;
  }
`;


 const CardLarge = styled(Card)`
    font-size: ${Styles.FONT_SIZE.HEADER}px;
    margin: 32px 0;
    width: 650px;
    height: 500px;
 `;

 const Info = styled.div`
    margin: 4px 8px;
    display: flex;
    align-items: baseline;
    justify-content: space-evenly;
    height: 70px;
    box-sizing: border-box;
`;

const SubInfo = styled.div`
    font-size: ${Styles.FONT_SIZE.SMALL}px;
    color: ${Styles.COLOR.LIGHTGLAY};
`;

const Description = styled.div`
    max-width: 500px;
    font-size: ${Styles.FONT_SIZE.MIDDLE}px;
    color: ${Styles.COLOR.SECONDARY};
`;



const ArticleCardDefault = (props) => {
  const { title, to, avatar, date } = props;
  return (
    <Card>
    <Link to={to}>
      <Pict>
      <Title><span>{title}</span></Title>
        <Img fluid={avatar} alt={title & date}
         imgStyle= {{
           width: '100%',
           height: '100%', 
           objectFit: 'cover', 
           objectPosition: 'center top', 
           }}　
           style= {{
            width: '250px',
            height: '180px', 
            boxSizing: 'border-box', 
            border: '1px solid #ccc',
            borderRadius: '4px',
           }}/>
      </Pict>
      </Link>
  </Card>
  )
}

const ArticleCardSeveral = (props) => {
  const { title, to, avatar, date } = props;
  return (
    <CardSeveral>
    <Link to={to}>
      <Pict>
      <Title><span>{title}</span></Title>
        <Img fluid={avatar} alt={title & date}
         imgStyle= {{
           width: '100%',
           height: '100%', 
           objectFit: 'cover', 
           objectPosition: 'center top', 
           }}　
           style= {{
            width: '250px',
            height: '180px', 
            boxSizing: 'border-box', 
            border: '1px solid #ccc',
            borderRadius: '4px',
           }}/>
      </Pict>
      </Link>
  </CardSeveral>
  )
}

const ArticleCardLarge = (props) => {
    const { title, to, avatar, date, text, type} = props;
    return (
      <CardLarge>
      <Link to={to}>
        <Pict type={type}>
          <Title><span>{title}</span></Title>
          <Img fluid={avatar} alt={title & date}
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
        </Link>
        <Info>
            <SubInfo>{date}</SubInfo>
            <Description>{text}</Description>
        </Info>
    </CardLarge>
    )
  }



const map = {
  default: ArticleCardDefault,
  several: ArticleCardSeveral,
  large: ArticleCardLarge,
};


const ArticleCard = (props) => {
  const { originalTitle, to, avatar, date, excerpt, type} = props;
  const component = map[type] || map.default; 
  const title = originalTitle.length > 30 ? originalTitle.slice(0, 30) : originalTitle;
  const text = excerpt.length > 140 ? excerpt.slice(0, 30) : excerpt;
  return React.createElement(component, { title, to, avatar, date, text, type} )
};

export default ArticleCard
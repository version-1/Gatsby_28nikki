import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import { Styles, BreakPoints, Responsive } from '../../../styles/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = styled.div`
  display: block;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 800;
  font-size: ${Styles.FONT_SIZE.MIDDLE}px;
  width: 240px;
  height: 180px;
  margin: 0px 16px 32px 0px;
  padding: 0;
  position: relative;
  &:hover {
    span {
      color: ${Styles.COLOR.SECONDARY};
    }
  }

  ${Responsive("md")} {
    margin: 0px 0px 32px 0px;
  }
`;

const Pict = styled.div`
    max-width: 100%;
    height: 100%;
    padding: 4px;
    box-sizing: border-box;
`;

const Title = styled.h4`
    width: 75%;
    margin: 4px;
    padding: 4px;
    font-size: 0.8em;
    position: absolute;
    top: 4px;
    left: 4px;
    z-index: 5;
    span {
      background-color: rgba(250,250,250,0.8);
      padding: 2px 1px;
      transition: .3s;

    }
`;

const CardSeveral = styled(Card)`
  z-index: 10;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: ${Styles.COLOR.WHITE};
  margin: 0px 16px 32px 0px;
  transition: .5s;

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
    transition: .5s;
  }

  &::before{
    top: 1px;
    right: 1.5px;
  }
  &::after {
    top: 3px;
    right: 3px;
  }

    
  ${Responsive("md")} {
    margin: 0px 0px 32px 4px;
  }

`;

 const CardLarge = styled(Card)`
    font-size: ${Styles.FONT_SIZE.HEADER}px;
    margin: 32px 0 100px 0;
    max-width: ${BreakPoints.sm}px;
    min-width: ${BreakPoints.sm}px;
    height: ${BreakPoints.sm/3*2}px;
    ${Responsive("md")} {
      max-width: 100%;
      min-width: 100%;
      height: 100%;
    }
    &:hover {
      span {
        color: ${Styles.COLOR.PRIMARY};
      }
    }
 `;

 const PictLarge = styled.div`
    max-width: ${BreakPoints.sm}px;
    height: ${BreakPoints.sm/3*2}px;
    ${Responsive("md")} {
      max-width: 100%;
    }
    ${Responsive("sm")} {
      height: 300px;
    }
    box-sizing: border-box;
`;

 const Info = styled.div`
    margin: 4px 8px;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    height: 70px;
    box-sizing: border-box;
`;

const SubInfo = styled.div`
    font-family: ${Styles.FONT_FAMILY.EN};
    font-size: ${Styles.FONT_SIZE.SMALL}px;
    color: ${Styles.COLOR.LIGHTGLAY};
    margin-right: 16px;
    width: 130px;
`;

const Description = styled.div`
    width: 100%;
    color: ${Styles.COLOR.LIGHTGLAY};
    font-size: ${Styles.FONT_SIZE.MIDDLE}px;
    ${Responsive("sm")} {
      font-size: ${Styles.FONT_SIZE.SMALL}px;
    }
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
           objectPosition: 'center', 
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
            width: '100%',
            height: '100%', 
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
    const { title, to, avatar, date, text} = props;
    return (
      <CardLarge>
      <Link to={to}>
        <PictLarge>
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
        </PictLarge>
        </Link>
        <Info>
            <SubInfo><FontAwesomeIcon icon={['far', 'clock']} /> {date}</SubInfo>
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
  const title = originalTitle;
  const text = excerpt
  // const text = excerpt.length > 140 ? excerpt.slice(0, 20) : excerpt;
  return React.createElement(component, { title, to, avatar, date, text, type} )
};

export default ArticleCard
import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Styles from '../../../styles/style';

const Card = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 800;
  font-size: ${Styles.FONT_SIZE.MIDDLE}px;
  width: 250px;
  border-radius: ${Styles.BORDER_RADIUS};
  border: 2px solid ${Styles.COLOR.LIGHTGLAY};
  margin: 8px 4px;
  padding: 0;
  position: relative;
`;

const Pict = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #ccc;
    box-sizing: border-box;
    img {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 1px solid ${Styles.COLOR.LIGHTGLAY};
        border-radius: ${Styles.BORDER_RADIUS} px;
    }
`;

const Title = styled.h3`
    width: 100%;
    margin: 4px;
    padding: 0;
    font-size: 0.8em;
    background: ${Styles.COLOR.WHITE};
    position: absolute;
    top: 4px;
    left: 4px;
    z-index: 5;
`;

 const CardLarge = styled(Card)`
  font-size: ${Styles.FONT_SIZE.LARGE}px;
  width: 100%;
 `;

 const Info = styled.div`
    margin: 4px 8px;
    display: flex;
`;

const SubInfo = styled.div`
    margin: 4px 8px;
    font-size: ${Styles.FONT_SIZE.SMALL}px;
    color: ${Styles.COLOR.LIGHTGLAY};
`;

const Description = styled.div`
    margin: 4px 8px;
    font-size: ${Styles.FONT_SIZE.MIDDLE}px;
    color: ${Styles.COLOR.SECONDARY};
`;

const ArticleCardDefault = (props) => {
  const { title, to, pict, date } = props;

  return (
    <Card>
    <Link to={to}>
      <Pict>
        <h3>{title}</h3>
        <img src={pict} alt={title & date} />
      </Pict>
      </Link>
  </Card>
  )
}

const ArticleCardLarge = (props) => {
    const { title, to, pict, date, text } = props;
    
    return (
      <CardLarge>
      <Link to={to}>
        <Pict>
          <h3>{title}</h3>
          <img src={pict} alt={title & date} />
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
  large: ArticleCardLarge,
};


const ArticleCard = (props) => {
  const { originalTitle, to, pict, date, excerpt, type} = props;
  const component = map[type] || map.default; 
  const title = originalTitle.length > 30 ? originalTitle.slice(0, 30) : originalTitle;
  const text = excerpt.length > 140 ? excerpt.slice(0, 30) : excerpt;
  return React.createElement(component, { title, to, pict, date, text} )
};

export default ArticleCard
import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Styles } from '../../../styles/style';

const commonStyle = {
    width: 80,
    height: 65
}

const ButtonOriginal = styled.div`
 ${props =>props.to && "cursor: pointer;"}
  width: ${commonStyle.width}px;
  height: ${commonStyle.height}px;
  box-sizing: border-box;
  text-decoration: none;
  border-radius: ${Styles.BORDER_RADIUS};
  border: 2px solid ${Styles.COLOR.LIGHTGLAY};
  font-size: 1rem;
  margin: 8px 4px;
  background: ${props =>props.type === "title" ? Styles.COLOR.PRIMARY : Styles.COLOR.WHITE};
  padding: 0;
  z-index: -1;
  border: 2px solid ${props => props.type === "title" ? Styles.COLOR.PRIMARY : Styles.COLOR[props.type]};
  margin-right: ${props => props.type === "title" && "20px"};
  transition: 1s;
`;

const ButtonText = styled.div`
 ${props =>props.to && "cursor: pointer;"}
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  z-index: 3;
  position: relative;
  text-align: center;
  color:  ${props => props.type === "title" ? Styles.COLOR.WHITE : Styles.COLOR[props.type]};
  transition: 1s;
  font-weight: 800;
  h1 {
    font-size: ${Styles.FONT_SIZE.MIDDLE}px;
    margin: 0;
    padding: 0;
  }
  span {
    font-size: .9rem;
  }
  &:hover {
    background: ${props =>props.type === "title" ? Styles.COLOR.WHITE : props.type ? Styles.COLOR[props.type] : Styles.COLOR.DARK};
    color: ${props =>props.type === "title" ? Styles.COLOR.PRIMARY : Styles.COLOR.WHITE };
  }
 `;


 const Text = ({text1, text2, type}) => {
  if (type === "title") {
    return(
      <h1>
        {text1}
        {text2 ? <br /> : "" }
        {text2}
      </h1>
    )
 } else {
  return(
    <span>
      {text1}
      {text2 ? <br /> : "" }
      {text2}
    </span>
  )
 }
}




const Button = (props) => {
  const { to, text1, text2,  onClick, type } = props;
  if (to) {
    return (      
      <Link to={to}> 
        <ButtonOriginal type={type} to={to} onClick={onClick}>
          <ButtonText type={type} to={to} >
            <Text type={type} text1={text1} text2={text2} />
          </ButtonText>
        </ButtonOriginal>
      </Link>
      )
  } else {
  return (
    <ButtonOriginal type={type} to={to} onClick={onClick}>
      <ButtonText type={type} to={to} >
        <h1>
          {text1}
          {text2 ? <br /> : "" }
          {text2}
        </h1>
      </ButtonText>
    </ButtonOriginal>
  )
}
};


export default Button
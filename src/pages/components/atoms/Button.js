import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Styles } from '../../../styles/style';

const commonStyle = {
    width: 80,
    height: 65
}

const ButtonOriginal = styled.div`
  cursor: pointer;
  width: ${commonStyle.width}px;
  height: ${commonStyle.height}px;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 800;
  border-radius: ${Styles.BORDER_RADIUS};
  border: 2px solid ${Styles.COLOR.LIGHTGLAY};
  font-size: 1rem;
  margin: 8px 4px;
  padding: 0;
  z-index: -1;
`;

const ButtonText = styled.div`
  cursor: pointer;
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

  &::before, &::after {
    position: absolute;
    transition: 1s;
    box-sizing: border-box;
    content: '';
    z-index: -1;
    background: ${Styles.COLOR.WHITE};}
  
  &::before {
    height: ${(commonStyle.height / 4 * 3)}px;
    width:  ${commonStyle.width}px ;
    top: ${commonStyle.height / 10}px;
    left: -2px;
    }
  
  &::after {
    height: ${commonStyle.height}px ;;
    width:  ${commonStyle.width/ 4 * 3}px ;
    top: -2px;
    left: ${commonStyle.width / 10}px ;
    }
  
  &:hover::before {
    transform: scaleY(0);
  }
  
  &:hover::after {
    transform: scaleX(0);
  }

  span {
    display: block;
  }
 `;

 const ButtonElementDefault = styled(ButtonOriginal)`
  color: ${Styles.COLOR.LIGHTGLAY};
  background: ${Styles.COLOR.WHITE};
 `;

const ButtonElementPrimary = styled(ButtonOriginal)`
  color: ${Styles.COLOR.PRIMARY};
  border: 2px solid ${Styles.COLOR.PRIMARY};
`;

const ButtonElementSecondary = styled(ButtonOriginal)`
  color: ${Styles.COLOR.SECONDARY};
  border: 2px solid ${Styles.COLOR.SECONDARY};
`;

const ButtonElementHeader = styled(ButtonOriginal)`
  color: ${Styles.COLOR.WHITE};
  background: ${Styles.COLOR.SECONDARY};
  border: 2px solid ${Styles.COLOR.WHITE};
  margin-right: 20px;
`;

const ButtonTextHeader = styled(ButtonText)`
h1 {
  font-size: ${Styles.FONT_SIZE.MIDDLE}px;
  margin: 0;
  padding: 0;

}
&::before, &::after {
  background: ${Styles.COLOR.SECONDARY};}
 `;


const ButtonDefault = (props) => {
  const { onClick, text1, text2, to, type } = props;
  return (
    <Link to={to}>
      <ButtonElementDefault onClick={onClick}>
       <ButtonText><span>{text1}{text2 ? <br /> : "" }{text2}</span></ButtonText>
      </ButtonElementDefault>
    </Link>
  )
}

const ButtonPrimary = (props) => {
  const { onClick, text1, text2, to } = props;
  return (
    <Link to={to}>
      <ButtonElementPrimary onClick={onClick}>
        <ButtonText><span>{text1}{text2 ? <br /> : "" }{text2}</span></ButtonText>
      </ButtonElementPrimary>
    </Link>
  )
}


const ButtonSecondary = (props) => {
  const { onClick, text1, text2, to } = props;
  return (
    <Link to={to}>
      <ButtonElementSecondary onClick={onClick}>
       <ButtonText><span>{text1}{text2 ? <br /> : "" }{text2}</span></ButtonText>
      </ButtonElementSecondary>
    </Link>
  )
}

const ButtonHeader = (props) => {
  const { onClick, text1, text2, to } = props;
  return (
    <Link to={to}>
      <ButtonElementHeader onClick={onClick}>
        <ButtonTextHeader><h1>{text1}{text2 ? <br /> : "" }{text2}</h1></ButtonTextHeader>
      </ButtonElementHeader>
    </Link>
  )
}


const map = {
  default: ButtonDefault,
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
  title: ButtonHeader,
};

const ButtonElements = (props) => {

}

const Button = (props) => {
  const { to, text1, text2,  onClick, type } = props;
  const component = map[type] || map.default; 
  return React.createElement(component, { onClick, text1, text2, to } )
};

export default Button
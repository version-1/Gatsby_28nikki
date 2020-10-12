import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Styles, Responsive } from '../../../styles/style';
import { categoryMap } from '../../../styles/maps';

const NavList = styled.ul`
display: flex;
width: 100%;
justify-content: flex-end;
margin: 0;
padding: 0;
  ${Responsive("md")} {
    flex-wrap: wrap;
  }

li {
  transition: .2s;
  min-width: 100px;
  bottom: -2px;
  margin: 4px 0 0;
  padding: 8px 16px;
  box-sizing: border-box;
  text-align: center;
  font-weight: 600;
  color: ${Styles.COLOR.LIGHTGLAY};
  transition: .3s;
  a {
    color: ${Styles.COLOR.LIGHTGLAY};
    transition: .3s;
  }
  ${Responsive("sm")} {
    transition: 0s;
    min-width: 90px;
    padding: 8px 4px;
    font-size: ${Styles.FONT_SIZE.DEFAULT}px;
  }
}

li:hover {
    background: ${Styles.COLOR.WHITE};
    color: ${Styles.COLOR.PRIMARY};
    a {
      color: ${Styles.COLOR.PRIMARY};
    }
}
`

const NavBar = (props) => {
  return (
      <NavList>
        {Object.keys(categoryMap).map(
              (key) => {
                return <li><Link to={categoryMap[key].url}>{categoryMap[key].name}</Link></li>
              }
            )}
      </NavList>
  )
};

export default NavBar


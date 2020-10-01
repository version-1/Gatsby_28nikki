import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Styles } from '../../../styles/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {categoryMap} from "../../../styles/maps"

const PankuzuList = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 8px 0 0;

`
const Item = styled.li`
  color: ${Styles.COLOR.LIGHTGLAY};
  font-size: ${Styles.FONT_SIZE.SMALL}px;
  a {
      padding-right: 4px;
      padding-left: 4px;
  }
`
const Pankuzu = (props) => {
    const { middle, article } = props;
    return (
        <PankuzuList>
            <Item>
                <Link to=""><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> TOP</Link>
            </Item>
            {middle ?
                <Item>
                      &gt; <Link to={categoryMap[middle]? categoryMap[middle].url :middle}>{categoryMap[middle]? categoryMap[middle].name : decodeURI(middle).slice(5)}</Link>
                </Item> : ""
            }
            {article ? 
                    <Item>
                         &gt; <Link to={article.to}>{article.name}</Link> 
                    </Item>
                    : ""
                }
        </PankuzuList>
    )
}

export default Pankuzu;
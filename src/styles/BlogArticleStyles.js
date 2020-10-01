import styled from 'styled-components'
import { Styles } from './style'


export const BlogArticleStyles = styled.div`
  border-bottom: 1px solid ${Styles.COLOR.LIGHTGLAY};
  margin-bottom: 16px;
  h1, h2, h3, h4, h5, h6 {
    border-top: 2px solid ${Styles.COLOR.PRIMARY};
    color: ${Styles.COLOR.PRIMARY};
    padding: 4px 2px 0;
    margin: 32px 0 0;
  }
  h3 {
    font-size: ${Styles.HEADER_FONT_SIZE.H3}px ;
  }
  h4 {
    font-size: ${Styles.HEADER_FONT_SIZE.H4}px ;
  }
  h5 {
    font-size: ${Styles.HEADER_FONT_SIZE.H5}px ;
  }
  h6 {
    font-size: ${Styles.HEADER_FONT_SIZE.H6}px ;
  }
  table {
    border-collapse: collapse;
    padding: 0;
  
  }
  th, td {
    border: 1px solid #ccc;
    padding: 4px 8px;
    margin: 0;
  }
  th {
    background: ${Styles.COLOR.LIGHTGLAY};
    color: ${Styles.COLOR.WHITE};
  }
  ul li {
    display: list-item;
    list-style-type: disc;
    list-style-position: outside;
    margin-left: 24px;
  }
`
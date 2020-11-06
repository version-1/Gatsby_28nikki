import React from "react";
import styled from 'styled-components'
import { Styles, BreakPoints, Responsive } from '../../../styles/style'


const Content = styled.div`
  box-sizing: border-box;
  max-width: ${BreakPoints.sm}px;
  margin: 8px auto;
  padding: 8px 0px;
  font-size: ${Styles.FONT_SIZE.DEFAULT};
  ${Responsive("sm")} {
    min-width: 100%;
    padding: 8px 0px;
  }
  border: 1px solid #ccc;
`;

const Title = styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background: #ccc;
  padding: 8px 16px;
  font-size: ${Styles.FONT_SIZE.MIDDLE};
  font-weight: 600;
`;

const List = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 16px;
  font-size: ${Styles.FONT_SIZE.DEFAULT};
  ul {
      padding: 0;
      margin-left: 30px;
      display: list-item;
      list-style-type: disc;
      list-style-position: outside;
  }
  li {
      margin: 4px 0;
      display: list-item;
      list-style-type: disc;
      list-style-position: outside;
  }
  p {
      margin: 0;
  }
`;

const Toc = (props) => {
  return (
    <Content>
      <Title>目次</Title>
      <List dangerouslySetInnerHTML={{
          __html: props.data,
        }}
      />
    </Content>
  );
};

export default Toc;
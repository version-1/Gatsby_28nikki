import React from "react"
import styled from 'styled-components'

export default ({ children, sidebar}) => (
  <Flex >
    <Article >{children}</Article>
  </Flex>
)

const Flex = styled.div`
  display: flex;
`

const Article = styled.div`
  width: 860px;
  margin: 0 auto;
`
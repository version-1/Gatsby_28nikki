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
  max-width: 768px;
  margin: 0 auto;
`
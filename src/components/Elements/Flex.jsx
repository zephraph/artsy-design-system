import styled from 'styled-components'
import { alignItems, height, width } from 'styled-system'

export const Flex = styled.div`
  display: flex;
  ${alignItems};
  ${height};
  ${width};
`

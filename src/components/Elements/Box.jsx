import styled from 'styled-components'
import {
  display,
  space,
  top,
  left,
  right,
  bottom,
  position,
  zIndex,
  background
} from 'styled-system'

export const Box = styled.div`
  ${display};
  ${position};
  ${space};
  ${top};
  ${left};
  ${right};
  ${bottom};
  ${zIndex};
  ${background};
`

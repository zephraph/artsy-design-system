import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from './Elements/Box'
import { Flex } from './Elements/Flex'
import ArtsyLogo from '../icons/artsy-logo'

import NavLink from './NavLink'

const Nav = Box.withComponent('nav')

export default ({ handlePopupOpen }) => (
  <Nav background="white" position="sticky" top="0" zIndex="1">
    <Flex alignItems="center" height="80px">
      <Link to="/">
        <Box mx="20px">
          <ArtsyLogo />
        </Box>
      </Link>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/about/" exact>
        About
      </NavLink>
      <NavLink to="/blog/" exact>
        Blog
      </NavLink>
      <NavLink to="/contact/" exact>
        Contact
      </NavLink>
    </Flex>
  </Nav>
)

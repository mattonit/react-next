import React, { Component } from 'react';
import styled from 'styled-components'

const Navbar = styled.nav`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ededed;
`

const Logo = styled.p`
  color: #282828;
  font-weight: 500;
`

class Header extends Component {

  render() {

    return(
      <Navbar>
        <Logo>Navbar Brand</Logo>
      </Navbar>
    );
  }

}

export default Header;
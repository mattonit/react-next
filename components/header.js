import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components'

const Navbar = styled.nav`
  display: flex;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ededed;
`

const Logo = styled.p`
  color: #282828;
  font-weight: 500;
`

const Nav = styled.ul`
  display: flex;
  margin-left: auto;
  padding-left: 0;
  list-style: none;
`

class Header extends Component {

  render() {

    return(
      <Navbar>
        <Logo>Navbar Brand</Logo>
        <Nav>
        	<Link href="/">
        		<a>Home</a>
          </Link>
        	<Link href="/about">
            <a>About</a>
          </Link>
        </Nav>
      </Navbar>
    );
  }

}

export default Header;
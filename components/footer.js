import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  background: linear-gradient(to top left,#28a5f5,#1e87f0) 0 0 no-repeat,#fff;
  color: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const Copy = styled.p`
  text-align: center;
`

class Header extends Component {

  render() {

    return(
      <Footer>
        <Copy>Mattonit &copy; {(new Date().getFullYear())}</Copy>
      </Footer>
    );
  }

}

export default Header;
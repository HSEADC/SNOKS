import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import logo from '../images/logo.webp';

const StyledLogo = styled.button `
    width: 6vw;
    height: 4vw;
    background-image: url('${logo}');
    background-size: 95% 95%;
    background-repeat: no-repeat;
    border: transparent;
    transition: all 0.3s ease;
    
    &:hover {
      background-size: 100% 100%;
  }
`;

function NavLogo() {
    return (
        <form action="./preview.html">
          <StyledLogo src="#"></StyledLogo>
        </form>
    );
  }

export default NavLogo;
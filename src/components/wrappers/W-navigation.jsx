import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import NavigationBtns from '../collections/C-navigation-buttons.jsx';
import NavLogo from '../quarks/Q-navigation-logo.jsx';

const StyledWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 88vw;
  top: -2vw;
  left: 6vw;
  align-items: center;
  background-color: ${Pallete["white"]};
  padding: 3vw 3vw 1vw 3vw;
  border-radius: 2.5vw;
  position: fixed;
  z-index: 11111111111111111111111;
`;

function Navigation() {
    return (
        <StyledWrapper> 
            <NavLogo></NavLogo>
            <NavigationBtns></NavigationBtns>
        </StyledWrapper>
    );
  }

export default Navigation;
import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';


const StyledButton = styled.a`
  font-size: 1.1vw;
  color: ${Pallete["black"]};
  opacity: 1;
  transition: all 0.3s ease;
  text-decoration: none;
  font-family: ${Pallete["fontP"]};
  text-transform: lowercase;
  font-weight: bold;

  &:hover {
  opacity: 0.6;
  }
`;

function NavButton(props) {
    return (
    <StyledButton className="A-navigation-button" href="btnLink">{ props["btnName"] }</StyledButton>
    );
  }
  
export default NavButton;
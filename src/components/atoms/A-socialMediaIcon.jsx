
import React, { useState, useDeferredValue, useEffect, Suspense} from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';


const StyledButton = styled.button`
  color: ${Pallete["black"]};
  width: 5vw;
  height: 5vw;
  border-radius: 100%;
  opacity: 1;
  transition: all 0.3s ease;
  background-color: ${Pallete["blue"]};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  .Q-icon {
    width: 2.3vw;
    height: 2.3vw;
    pointer-events: none;
  }

  &:hover {
  opacity: 0.6;
  }

  &.prev {
    transform: rotate(180deg)
  }
`;


function SocialMediaButton(props) {

    return (
    <StyledButton className={props["className"]} href="btnLink">
        <img className="Q-icon" src={props["src"]}>
        </img></StyledButton>
    );
  }
  
export default SocialMediaButton;
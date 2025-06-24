import React, { useState, useDeferredValue, useEffect, Suspense} from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

const StyledButton = styled.button`
  color: ${Pallete["black"]};
  padding: 1vw;
  border-radius: 3vw;
  opacity: 1;
  transition: all 0.3s ease;
  background-color: ${Pallete["blue"]};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${Pallete["fontP"]};


  &:hover {
  opacity: 0.6;
  }

  &.prev {
    transform: rotate(180deg)
  }
`;


function BlueButton(props) {
    return (
    <StyledButton className={props["className"]} id={props['id']}>
      {props["textContent"]}
    </StyledButton>
    );
  }
  
export default BlueButton;
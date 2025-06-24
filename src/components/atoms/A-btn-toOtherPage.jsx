import React, { useState, useDeferredValue, useEffect, Suspense} from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import VectorDecor from '../quarks/Q-vectorDecor.jsx'
import Text from './A-text.jsx'

import svg from '../images/vectorDecor.svg'

const StyledButton = styled.button`
  color: ${Pallete["black"]};
  padding: 0.6vw 2vw 0.6vw 5vw;
  border-radius: 2vw;
  opacity: 1;
  transition: all 0.3s ease;
  background-color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 4.5vw;

  .Q-button-decor {
    left: 2vw;
  }
`;


function OtherPageButton(props) {
    return (
    <StyledButton href="btnLink" className={props["className"]}>
        <VectorDecor className="Q-button-decor" src={svg}></VectorDecor>
        <Text className="A-btn-name" textContent={props["textContent"]}></Text>
    </StyledButton>
    );
  }
  
export default OtherPageButton;
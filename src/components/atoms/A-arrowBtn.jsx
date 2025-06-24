
import React, { useState, useDeferredValue, useEffect, Suspense} from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import arrow from "../images/icon.svg"


const StyledButton = styled.button`
  color: ${Pallete["black"]};
  width: 6vw;
  height: 6vw;
  border-radius: 100%;
  opacity: 1;
  transition: all 0.3s ease;
  background-color: ${Pallete["blue"]};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  .arrow {
    width: 2vw;
    height: 3vw;
    margin-left: 0.5vw;
    pointer-events: none;
  }

  &:hover {
  opacity: 0.6;
  }

  &.prev {
    transform: rotate(180deg)
  }
`;


function ArrowButton({ onClick, className, way }) {
    const [inputValue, setInputValue] = useState('');
    let fullClass = className + " " + way

    const handleChange = (event) => {
      if (event.target.classList.contains("next")) {
         setInputValue(true);
         onClick(true);
      } else  if (event.target.classList.contains("prev")) {
        setInputValue(false);
        onClick(false);
        console.log(11111111111)
      }
    };


    return (
    <StyledButton className={fullClass} href="btnLink" onClick={handleChange}
    ><img className="arrow" src={arrow}></img></StyledButton>
    );
  }
  
export default ArrowButton;
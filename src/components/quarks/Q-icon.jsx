import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import { useId } from 'react';

const StyledImg = styled.img`
  position: absolute;
  width: 2vw;
  height: 2vw;
`;

function IconImg(props) {
    return (
      <StyledImg src={props["src"]} className={props["className"]} /> 
    );
  }

export default IconImg;
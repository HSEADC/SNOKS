import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import { useId } from 'react';

const StyledImg = styled.img`
  position: absolute;
  transition: all 0.3s ease-in-out;
  width: 40vw;
  height: 55vw;
  margin-top: -15vw;
`;

function CardImg(props) {
    let id = useId();
    id = id.slice(1, id.length - 1)
    return (
      <StyledImg src={props["src"]} id={id} className={props["className"]} /> 
    );
  }

export default CardImg;
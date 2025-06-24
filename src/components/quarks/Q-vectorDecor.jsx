import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import { useId } from 'react';

const StyledLetter = styled.img `
    width: 2vw;
    height: 2vw;
    background-size: 100% 100%;
    position: absolute;
    transition: all 0.3s ease;
`;

function VectorDecor(props) {
    let id = useId();
    id = id.slice(1, id.length - 1)
    return (
        <StyledLetter className={props["className"]} id={id} src={`${props["src"]}`}></StyledLetter>
    );
  }

export default VectorDecor;
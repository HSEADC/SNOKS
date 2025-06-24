import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import Text from '../atoms/A-text.jsx';
import VectorDecor from '../quarks/Q-vectorDecor.jsx'

import vectorDecor from '../images/vectorDecor.svg'

const StyledContainter = styled.div`
  position: relative;
  width: 100%;
  margin: 5vw 0 2vw 0;
  z-index: 1;

  
`;

function DecorText(props) {
    return (
        <StyledContainter className={props["className"]}> 
         
        </StyledContainter>
    );
  }

export default DecorText;
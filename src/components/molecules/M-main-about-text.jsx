import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import Title from '../atoms/A-title.jsx';
import ThreeDLetter from '../quarks/Q-3DLetter.jsx'

import OImg from '../images/0.webp'
import HImg from '../images/n.webp'
import MImg from '../images/m.webp'
import AImg from '../images/a.webp'


const StyledContainter = styled.div`
  position: relative;
  width: 90%;
  margin: 5vw auto;
  display: flex;
  justify-content: center;
  z-index: 1;

  .A-textWith3D {
    font-size: 4.5vw;
    text-align: center;
    font-weight: 500;
  }

  .Q-3DLetter1 {
    left: 6.3vw;
    top: -1vw;
  }

  .Q-3DLetter2 {
    left: 30.7vw;
    top: -1vw;
  }

  .Q-3DLetter3 {
    left: 56.5vw;
    top: 4vw;
  }

  .Q-3DLetter4 {
    left: 47.3vw;
    top: 8.5vw;
  }
`;

function AboutContainter() {
    return (
        <StyledContainter> 
          <Title className="A-textWith3D" textContent="П .  чему м .  е это снится? <br> Есть ли какой-то с .  ысл <br> в моих сн .  х?"></Title>
          <ThreeDLetter src={`${OImg}`} className="Q-3DLetter1"></ThreeDLetter>
          <ThreeDLetter src={`${HImg}`} className="Q-3DLetter2"></ThreeDLetter>
          <ThreeDLetter src={`${MImg}`} className="Q-3DLetter3"></ThreeDLetter>
          <ThreeDLetter src={`${AImg}`} className="Q-3DLetter4"></ThreeDLetter>
        </StyledContainter>
    );
  }

export default AboutContainter;
import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import Title from '../atoms/A-title.jsx';
import Text from '../atoms/A-text.jsx';
import ThreeDLetter from '../quarks/Q-3DLetter.jsx'

import braket from '../images/bracket.webp'


const StyledTitleContainter = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 5vw auto;
  align-items: center;
  flex-wrap: wrap;
  position: relative;

  .A-page-title {
    font-size: 7vw;
    width: fit-content;
    margin: 1vw auto;
    text-align: center;
  }

  .Q-Titlebracket {
    height: 18vw;
    width: 8vw;
    position: absolute;

    &.left {
      left: 17vw
    } 

    &.right {
      transform: rotate(180deg);
      right: 18vw
    }
  }

`;

function TitleContainter(props) {
    return (
        <StyledTitleContainter> 
          <ThreeDLetter className="Q-Titlebracket left" src={braket}></ThreeDLetter>
          <Title className="A-page-title" textContent={props["textContent"]}></Title>
          <ThreeDLetter className="Q-Titlebracket right" src={braket}></ThreeDLetter>
        </StyledTitleContainter>
    );
  }

export default TitleContainter;
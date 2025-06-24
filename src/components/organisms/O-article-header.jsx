import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import { useId } from 'react';

import CardImg from '../quarks/Q-cardBackground.jsx'
import Text from '../atoms/A-text.jsx';
import IconImg from '../quarks/Q-icon.jsx'
import icon from '../images/clock.svg'

const StyledBlock = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 28vw;
  align-items: center;
  background-color: ${Pallete["white"]};
  border-radius: 2.5vw;
  position: relative;
  overflow: hidden;
  background-color: white;
  margin-bottom: 2vw;

  .Q-cardBackground {
    width: 100%;
    height: 28vw;
    bottom: 0vw;
    margin: auto;
    transition: all 0.3s ease-in-out;
    border-radius: 2.5vw;
    pointer-events: none;
  }

    .M-articleTime {
      position: absolute;
      font-size: 1.5vw;
      font-weight: 500;
      background-color: white;
      color: ${Pallete["black"]};
      top: 19.5vw;
      left: 2vw;
      padding: 1.5vw 2vw 1.5vw 7vw;
      border-radius: 3vw;
      transition: all 0.3s ease-in-out;
    }

    .Q-icon {
      width: 3vw;
      height: 3vw;
      position: absolute;
      left: 2vw;
      top: 0.8vw;
      opacity: 1;
    }
  

`;

function ArticleHeader(props) {

  return (
      <StyledBlock className={props["className"]}> 
        <CardImg className="Q-cardBackground" src={props["src"]}></CardImg>
        <div className="M-articleTime">
          <IconImg className="Q-icon" src={icon}></IconImg>
          <Text className="A-articleTime" textContent={`${props["time"]} мин`}></Text>
        </div>
      </StyledBlock>
    );

}

  
export default ArticleHeader;
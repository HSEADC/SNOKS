import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import { useId } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CardImg from '../quarks/Q-cardBackground.jsx'
import Text from '../atoms/A-text.jsx';
import IconImg from '../quarks/Q-icon.jsx'

import icon from '../images/clock.svg'

const StyledBlock = styled.section`
  display: flex;
  justify-content: space-between;
  width: 20vw;
  height: 30vw;
  align-items: center;
  background-color: ${Pallete["white"]};
  border-radius: 2.5vw;
  position: relative;
  overflow: hidden;
  background-color: white;
  transition: all 0.3s ease-in-out;

  .Q-cardBackground {
    width: 100%;
    height: 16vw;
    bottom: 0;
    margin: auto;
    transition: all 0.3s ease-in-out;
    border-radius: 2.5vw;
    pointer-events: none;
  }

  .A-main-testTitle {
    position: absolute;
    font-size: 1.8vw;
    font-weight: 600;
    color: ${Pallete["black"]};
    top: 5vw;
    left: 1.5vw;
    pointer-events: none;
    width: 90%;
    transition: all 0.3s ease-in-out;
  }

  .A-main-testTime {
    position: absolute;
    font-size: 1.3vw;
    font-weight: 400;
    color: ${Pallete["black"]};
    top: 2vw;
    left: 1.5vw;
    opacity: 0.6;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
  }

   .Q-clock {
    width: 1.5vw;
    height: 1.5vw;
    position: absolute;
    top: 1.8vw;
    left: 10vw;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }

  .darker {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    background-color: ${Pallete["black"]};
    transition: all 0.3s ease-in-out

  }


`;

function TestCard(props) {
  let id = useId();
  id = id.slice(1, id.length - 1)

  if (props["className"] == "O-test-card") {
    return (
      <StyledBlock id={id} className={props["className"]} onMouseOver={(e) => {
        document.querySelectorAll(".darker").forEach((elem) => {
          elem.style.opacity="0.5"
          elem.style.pointerEvents="all"
        })
        if (e.target.querySelector(".darker") != undefined) {
          e.target.querySelector(".darker").style.opacity="0"
          e.target.querySelector(".darker").style.pointerEvents="none"
        }
      }} 
      
      onMouseLeave={(e) => {
        document.querySelectorAll(".darker").forEach((elem) => {
          elem.style.opacity="0"
          elem.style.pointerEvents="none"
        })
      }}> 
        <IconImg className="Q-clock" src={icon}> </IconImg>
        <Text className="A-main-testTime" textContent={`${props["time"]} мин`}></Text>
        <Text className="A-main-testTitle" textContent={props["title"]}></Text>
        <CardImg className="Q-cardBackground" src={props["src"]}></CardImg>
        <div className="darker"></div>
      </StyledBlock>
    );
  } else {


  return (
      <StyledBlock id={id} className={props["className"] + " "  + props["type"]}> 
        <IconImg className="Q-clock" src={icon}> </IconImg>
        <Text className="A-main-testTime" textContent={`${props["time"]} мин`}></Text>
        <Text className="A-main-testTitle" textContent={props["title"]}></Text>
        <CardImg className="Q-cardBackground" src={props["src"]}></CardImg>
        <div className="darker"></div>
      </StyledBlock>
    );

  }
}
  

export default TestCard;
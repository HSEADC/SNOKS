import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import { useId } from 'react';

import CardImg from '../quarks/Q-cardBackground.jsx'
import Text from '../atoms/A-text.jsx';

import sectionImg1 from '../images/section1.webp'
import sectionImg2 from '../images/section2.webp'
import sectionImg3 from '../images/section3.webp'

const a = {
  "sectionImg1": sectionImg1,
  "sectionImg2": sectionImg2,
  "sectionImg3": sectionImg3,
}

const StyledBlock = styled.section`
  display: flex;
  justify-content: space-between;
  width: 32%;
  height: 40vw;
  align-items: center;
  background-color: ${Pallete["white"]};
  border-radius: 2vw;
  position: relative;
  overflow: hidden;

  .Q-cardBackground {
    width: 44vw;
    height: 40vw;
    position: absolute;
    bottom: 5vw;
  }

  svg {
    position: absolute;
    bottom: -6vw;
    left: -7%;
    pointer-events: none;
  }

  img {
    pointer-events: none;
  }

  .A-main-CardTitle {
    position: absolute;
    font-size: 4vw;
    font-weight: 600;
    color: ${Pallete["white"]};
    top: 60%;
    left: 2.6vw;
    pointer-events: none;
  }

  .A-main-CardText {
    position: absolute;
    font-size: 1.8vw;
    color: ${Pallete["white"]};
    top: 73%;
    left: 2vw;
    opacity: 0.5;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
  }

  @media screen and (min-width: 1200px) {
    .A-main-CardText {
      top: 70%;
      left: 2.6vw;
    }

    .A-main-CardTitle {
      top: 58%;
      left: 2.6vw;
    }

    
  }

  @media screen and (max-width: 1200px) {
    .A-main-CardText {
      top: 73%;
      left: 2.6vw;
    }

    .A-main-CardTitle {
      top: 63%;
      left: 2.6vw;
    }

    svg {
      position: absolute;
      bottom: -11vw;
      pointer-events: none;
    }
  }

  @media screen and (max-width: 950px) {
    .A-main-CardText {
      top: 72%;
      left: 2.6vw;
    }

    .A-main-CardTitle {
      top: 64%;
      left: 2.6vw;
    }

    svg {
      position: absolute;
      bottom: -13vw;
      pointer-events: none;
    }
  }
`;

function SectionMain(props) {
  let id = useId();
  id = id.slice(1, id.length - 1)
    return (
        <StyledBlock id={id} className={props["className"]}> 
          <CardImg className="Q-cardBackground" src={a[props["src"]]}></CardImg>
          <svg xmlns="http://www.w3.org/2000/svg" width="503" height="351" viewBox="0 0 503 351" fill="none">
            <path d="M569.152 630.996C947.958 403.335 703.92 -7.7647 201.212 0.802243C-121.521 16.9571 -237.636 244.83 -152.141 487.179C-66.6453 729.529 190.345 858.657 569.152 630.996Z" fill="#7DA6FF"/>
          </svg>
          <Text className="A-main-CardTitle" textContent={props["title"]}></Text>
          <Text className="A-main-CardText" textContent={props["text"]}></Text>
        </StyledBlock>
    );
  }
  

export default SectionMain;
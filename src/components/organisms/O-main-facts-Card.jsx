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
  width: 18vw;
  height: 28vw;
  align-items: center;
  background-color: ${Pallete["blue"]};
  border-radius: 2vw;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &.choosenFact {
    width: 23vw;
    height: 37vw;

    .A-main-CardTitle {
      font-size: 2.7vw;
      top: 2.5vw;
      left: 2vw;
      word-break: break-all;
    }

    img {
      width: 37vw;
      height: 32vw;
      left: -5vw;
      bottom: -4vw;
      transition: all 0.3s ease-in-out;
      pointer-events: none;
    }
  }

  svg {
    position: absolute;
    bottom: -3vw;
    left: -7%;
    pointer-events: none;
  }

  img {

    width: 37vw;
    height: 32vw;
    left: -10vw;
    bottom: -14vw;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }

  .A-main-CardTitle {
    position: absolute;
    font-size: 2vw;
    font-weight: 600;
    color: ${Pallete["white"]};
    top: 2vw;
    left: 1.6vw;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
  }
`;




function FactCard(props) {
  let id = useId();
  id = id.slice(1, id.length - 1)
  if (props != undefined) {
   // let id = useId();
    //id = id.slice(1, id.length - 1)
    return (
     <StyledBlock id={props["id"]} className={props["className"]}> 
       <CardImg className="Q-cardBackground" src={props["src"]}></CardImg>

        <Text className="A-main-CardTitle" textContent={props['title']}></Text>
      </StyledBlock>
  );
  }

}
  

export default FactCard;
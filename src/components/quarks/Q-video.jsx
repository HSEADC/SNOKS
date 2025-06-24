import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import { useId } from 'react';


const StyledLetter = styled.div`
    width: 100vw;
    background-size: 100% 100%;
    position: relative;
    transition: all 0.3s ease;
    left: -19vw;

    .Q-borderUpper {
      position: absolute;
      top: -1vw;
      left: 12.2vw;
      width: 100%;
      height: 8vw;
      border-bottom-right-radius: 2vw;
      border-bottom-left-radius: 2vw;
      background-color: ${Pallete["white"]}
    }

    .Q-borderDown {
      position: absolute;
      bottom: -1vw;
      left: 12.2vw;
      width: 100%;
      height: 8vw;
      border-top-right-radius: 2vw;
      border-top-left-radius: 2vw;
      background-color: ${Pallete["white"]}
    }

    .Q-video {
      width: 125vw;
    }
`;

function Video(props) {
    let id = useId();
    id = id.slice(1, id.length - 1)
    return (
        <StyledLetter className={props["className"]} id={id} src={`${props["src"]}`}>
          <div className="Q-borderUpper"></div>
          <video className="Q-video" autoPlay muted loop>
          <source src={props["src"]} type="video/webm" />
          Your browser does not support the video tag.
         </video>
          <div className="Q-borderDown"></div>
        </StyledLetter>
    );
  }

export default Video;

 //<video className={props["className"]} autoPlay muted loop>
//          <source src={props["src"]} type="video/webm" />
//          Your browser does not support the video tag.
//         </video>
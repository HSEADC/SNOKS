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
  width: 21.3vw;
  height: 26vw;
  align-items: center;
  background-color: ${Pallete["white"]};
  border-radius: 2.5vw;
  position: relative;
  overflow: hidden;
  background-color: white;
  margin-bottom: 2vw;

  .A-tagArticle {
    position: absolute;
    background-color: white;
    border-radius: 3vw;
    padding: 0.5vw 1vw;
    left: 2vw;
    top: 2vw;
  }

  .Q-cardBackground {
    width: 100%;
    height: 29vw;
    bottom: 0;
    margin: auto;
    transition: all 0.3s ease-in-out;
    border-radius: 2.5vw;
    pointer-events: none;
  }

  .A-main-articleTitle {
    position: absolute;
    font-size: 1.5vw;
    font-weight: 600;
    color: ${Pallete["black"]};
    top: 19.5vw;
    left: 2vw;
    pointer-events: none;
    width: 95%;
    transition: all 0.3s ease-in-out;
  }
  
  svg {
    position: absolute;
    bottom: -10vw;
    left: -8vw;
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

function ArticleCard(props) {
  let id = useId();
  id = id.slice(1, id.length - 1)


  return (
      <StyledBlock id={props["id"]} className={props["className"] + " "  + props["type"]}> 
        <CardImg className="Q-cardBackground" src={props["src"]}></CardImg>
        <svg width="505" height="295" viewBox="0 0 505 295" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M365.242 279.674C448.281 259.903 701.739 -7.6752 211.926 0.672C-102.529 16.4125 3.64258 186.213 91.9067 246.557C140.345 279.674 214.857 315.48 365.242 279.674Z" fill="white"/>
        </svg>
        <Text className="A-main-articleTitle" textContent={props["title"]}></Text>
        <Text className="A-tagArticle" textContent={props['tag']}></Text>
      </StyledBlock>
    );

}

  
export default ArticleCard;
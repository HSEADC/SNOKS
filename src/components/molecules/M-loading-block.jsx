import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';


import Text from '../atoms/A-text.jsx';

const StyledContainter = styled.div`
  width: 100%;
  margin: 5vw 0;
  width: 100%;
  height: 30vw;
  background-color: white;
  border-radius: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .A-text-loading {
    font-size: 3vw;
    line-height: 2.1vw;
    font-weight: 600;
    color: ${Pallete["blue"]};
    text-align: center;
    animation: loading 2s infinite cubic-bezier(0.215, 0.610, 0.355, 1);
  }

  @keyframes loading {
    0% { color: ${Pallete["blue"]};}
    50% { color: ${Pallete["lightBlue"]};}
    100% { color: ${Pallete["blue"]};}
  }

`;

function Loading(props) {
    return (
        <StyledContainter className={props["className"]}> 
          <Text className="A-text-loading" textContent="Загрузка"></Text>
        </StyledContainter>
    );
  }

export default Loading;
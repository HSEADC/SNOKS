import React, { useId, useState, useDeferredValue, useEffect, Suspense} from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import Text from '../atoms/A-text.jsx';

const StyledContainter = styled.div`
  width: 100%;
  margin: 11vw 0 9vw 0;
  padding: 10vw 22vw 10vw 5vw;
  width: 60vw;
  height: 24vw;
  background-color: white;
  border-radius: 3vw;

  .A-text-fact-text {
    font-size: 1.4vw;
    line-height: 1.7vw;
  }

`;


function FactText(props) {
    return (
      <StyledContainter className={props["className"]}> 
        <Text className="A-text-fact-text" textContent={"Во время сна наши знания переходят из кратковременной памяти в долговременную"}></Text>
      </StyledContainter>
    );
  }

export default FactText;
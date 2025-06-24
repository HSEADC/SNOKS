import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import React, { useState, useDeferredValue, useEffect, Suspense} from 'react';


const SectionFacts = React.lazy(() => import('../wrappers/W-main-UI.jsx'));
import Loading from '../molecules/M-loading-block.jsx'
import DecorText from '../molecules/M-main-decor-text.jsx';

const StyledContainter = styled.section`
  width: 100%;
  margin: 5vw auto;
  z-index: 1;
`;

function Facts(props) {
    return (
        <StyledContainter className={props["className"]}> 
          <DecorText className="M-main-decor-Text"></DecorText>
          <Suspense fallback={
            <Loading className="M-loading">Загрузка...</Loading>
          }>
            <SectionFacts className="W-main-facts-UI"></SectionFacts>
          </Suspense>
        </StyledContainter>
    );
  }

export default Facts;
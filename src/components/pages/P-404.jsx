import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import Loading from '../molecules/M-loading-block.jsx'
import TitleContainter from '../molecules/M-pages-title.jsx'
import TestsShare from '../wrappers/W-tests-share.jsx'
import React, { useState, useDeferredValue, useEffect, Suspense} from 'react';

const TestsCardPaged = React.lazy(() => import('../collections/C-generated-tests.jsx')); 

const StyledPage = styled.section`
  padding: 10vw 0 2vw 0;
  height: fit-content;
  background-color: ${Pallete["white"]};
`;

const StyledMain = styled.main`
  width: 90%;
  margin: auto;
  height: inherit;

  .C-main-Tests-UI {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    animation: none;
    position: inherit;
    margin: 2vw auto;
    justify-content: space-between;

    .O-test-card {
      margin-bottom: 2vw;
    }

    .O-test-card:hover {
      width: 20vw;
      height: 30vw;

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
    }
  }

`;


function Page404() {
    return (
        <StyledPage>
            <StyledMain className="main">
            
            </StyledMain>
        </StyledPage>
    );
  }

export default Page404;
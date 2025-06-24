import React, { useId, useState, useDeferredValue, useEffect, Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

const TestsCards = React.lazy(() => import('../collections/C-main-tests-cards.jsx'));
import Loading from '../molecules/M-loading-block.jsx'
import Text from '../atoms/A-text.jsx';

import OtherPageButton from '../atoms/A-btn-toOtherPage.jsx'

const StyledBlock = styled.section`
  display: flex;
  justify-content: space-between;
  width: 248vw;
  height: 28vw;
  align-items: center;
  border-radius: 2vw;
  position: relative;
  transition: all 0.3s ease-in-out;

  .link {
    text-decoration: none;
  }

  .W-textAndBtn {
    margin-top: -26vw;
    width: 35%;
    display: flex;
    justify-content: space-between;
    height: fit-content;
  }

  .C-main-Tests-UI {
    margin-top: 17vw;
  }

  .A-main-tests-text {
    font-size: 2.2vw;

    span {
      color: ${Pallete["blue"]}
    }
  }
`;




function TestsLine(props) {
    return (
      <StyledBlock className={props["className"]}> 
        <div className="W-textAndBtn"> 
          <Text className="A-main-tests-text" textContent="Узнай больше о себе <br> с <span> тестами </span> от SNOK(S)"></Text>
          <Link class="link" to='/tests'><OtherPageButton className="A-otherPageButton" textContent="Подробнее" action=""></OtherPageButton></Link>
        </div>
        <Suspense fallback={
          <Loading className="M-loading">Загрузка...</Loading>
        }>
          <TestsCards className="C-main-Tests-UI" tableName="tests"></TestsCards>
        </Suspense>
      </StyledBlock> 
    );
}
  

export default TestsLine;
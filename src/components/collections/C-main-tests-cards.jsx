import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import React, { useId, useState, useDeferredValue, useEffect, Suspense, useMemo, useCallback} from 'react';


import AsyncClass from "../tests.js";

import TestCard from '../organisms/O-test-card.jsx'



//import content from '../data.js'
//import AsyncClass from "../data.js";

//import Loading from '../molecules/M-loading-block.jsx'

import FactCard from '../organisms/O-main-facts-Card.jsx'

const StyledCollection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 354vw;
  height: 22vw;
  align-items: center;
  position: absolute;
  transition: all 0.3s ease-in-out;
  left: -28vw;
  animation: scroll 7.5s linear infinite;
  transition: all 0.5 ease-in-out;

  &:hover {
    animation-play-state: paused;
  }

  .O-test-card:hover {
    width: 25vw;
    height: 35vw;

    .Q-cardBackground {
      width: 100%;
      height: 20vw;
      bottom: 0;
      margin: auto
    }

    .A-main-testTitle {
      position: absolute;
      font-size: 2.2vw;
      font-weight: 600;
      color: ${Pallete["black"]};
      top: 5vw;
      left: 1.5vw;
      pointer-events: none;
      width: 90%;
    }

    .A-main-testTime {
      position: absolute;
      font-size: 1.7vw;
      font-weight: 400;
      color: ${Pallete["black"]};
      top: 2vw;
      left: 1.5vw;
      opacity: 0.6;
      pointer-events: none;
    }

    .Q-clock {
      width: 2vw;
      height: 2vw;
      position: absolute;
      top: 1.8vw;
      left: 13vw;
    }
  }
  
  @keyframes scroll {
    from {
      left: -28vw;
    }

    to {
      left: -206.03vw;
    }
  }

`;


function generateTests(a)  {
  let generated = [];
  for (let i = 0; i < a.length; i++) {
      let b = (<TestCard className="O-test-card" src={a[i]['img'][0]["url"]} title={a[i]['title']} time={a[i]['time']}></TestCard>)
      generated.push(b)
  }

  for (let i = 0; i < a.length; i++) {
      let b = (<TestCard className="O-test-card" src={a[i]['img'][0]["url"]} title={a[i]['title']} time={a[i]['time']}></TestCard>)
      generated.push(b)
  }
  return generated
}


function TestsCards(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
  const data = async ()=> {
    setIsLoading(true);

    const instance = new (await AsyncClass)();
     while (instance.getVariable() == undefined) {
       await new Promise(resolve => setTimeout(resolve, 200));
    }
    const variableValue = instance.getVariable();

    //aaa = generateCards(variableValue)
    setData(generateTests(variableValue));
    setIsLoading(false);
  };
  data()
  }, [])

  const data1 = useMemo(() => data);

      //<>{dataa.map((item) => (
    //      <>{item}</>
     // ))}</>

  //let data = generateTests() 
  return (
    <StyledCollection className={props["className"]}>

      <>{data1.map((item) => (
          <>{item}</>
      ))}</>

    </StyledCollection>
    
  );
}

export default TestsCards;


import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import React, { useId, useState, useDeferredValue, useEffect, Suspense, useMemo, useCallback} from 'react';

import AsyncClass from "../tests.js";
import Text from '../atoms/A-text.jsx';
import TestCard from '../organisms/O-test-card.jsx';
import BlueButton from '../atoms/A-blueBtn.jsx';
import IconImg from '../quarks/Q-icon.jsx'

import cross from '../images/cross.svg'

//import content from '../data.js'
//import AsyncClass from "../data.js";
//import Loading from '../molecules/M-loading-block.jsx'


const StyledCollection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 354vw;
  height: fit-content;
  align-items: center;
  position: absolute;
  transition: all 0.3s ease-in-out;
  left: -28vw;
  animation: scroll 7.5s linear infinite;
  transition: all 0.5 ease-in-out;
  margin-bottom: 7vw;

  .C-tags {
    width: 100%;
    display: flex;
    margin: 7vw 0 3vw 0;

    .A-tagBtn {
      background-color: white;
      font-size: 1.5vw;
      font-weight: 500;
      padding: 1vw 3vw;
      margin-right: 2vw;
      opacity: 1;
    }

    .clear {
      width: 4vw;
      height: 4vw;
      padding: 0;
      border-radius: 100%;
      position: relative;
    }

    .A-tagBtn:hover {
      background-color: ${Pallete["blue"]};
      color: ${Pallete["white"]};
    }
  }

  .O-test-cardGenerated {
    width: 28vw;
    height: 37vw;
    margin-bottom: 2vw;

    .Q-cardBackground {
      width: 100%;
      height: 23vw;
      bottom: -1vw;
    }

    .A-main-testTitle {
      font-size: 2.4vw;
      font-weight: 600;
      top: 5vw;
      left: 1.5vw;
    }
    
  }

  .Q-bigCardBack {
    width: 90vw;
    height: 50vw;
    background-color: white;
    position: relative;
    border-radius: 3vw;
    padding: 3vw;
    margin: 4vw auto;

    .A-description {
      font-size: 1.8vw;
      width: 45%;
      margin-bottom: 3vw;
    }

    .A-time {
      opacity: 0.5;
      font-weight: 500;
      font-size: 1.5vw;
      margin-bottom: 20vw;
    }

    .A-btn {
      position: absolute;
      left: 3vw;
      bottom: 3vw;
      width: 43%;
      color: ${Pallete["white"]};
      font-size: 1.5vw;
    }

    .big {
      position: absolute;
      margin-bottom: 0;
      right: 0vw;
      bottom: 0vw;
      height: 50vw;
      width: 43vw;

      .Q-clock { 
        display: none;
      }
      .A-main-testTime {
        display: none;
      }

      .Q-cardBackground {
        bottom: 0;
        width: 100%;
        height: 35vw;
      }

      .A-main-testTitle {
        top: 3vw;
        font-size: 3vw;
      }
    }


    .first {
      position: absolute;
      margin-bottom: 0;
      right: 0vw;
      bottom: 0vw;
      height: 50vw;
      width: 43vw;

      .Q-clock { 
        display: none;
      }
      .A-main-testTime {
        display: none;
      }

      .Q-cardBackground {
        bottom: 0;
        width: 100%;
        height: 35vw;
      }

      .A-main-testTitle {
        top: 3vw;
        font-size: 3vw;
      }
    } 
  } 
`;

function generateTags(a) {
  let tags = []
  let tagsTexsts = []
  for (let i = 0; i < a.length; i++) {
    if (tagsTexsts.indexOf(a[i]["tag"]) == -1) {
      tagsTexsts.push(a[i]["tag"])
      tags.push(<BlueButton className="A-tagBtn" textContent={a[i]["tag"]}></BlueButton>)
    }
  }
  console.log(tags)

  
  let collection = ( <div className="C-tags">
    <>{tags.map((item) => (
        <>{item}</>
    ))}
    </>

  </div>)

  return collection
}

function generateTests(a)  {
  generateTags(a)
  let generated = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i]["num"] == 0) {
      let b = (<div className="Q-bigCardBack first"><Text className="A-description" textContent={a[i]['description']}></Text><Text className='A-time' textContent={`Время прохождения: ${a[i]['time']} мин`}></Text><BlueButton className="A-btn" textContent="Пройти"></BlueButton><TestCard className="O-test-cardGenerated" src={a[i]['img'][0]["url"]} type={a[i]["type"]} title={a[i]['title']} time={a[i]['time']}></TestCard></div>)
      console.log(a[0])
      generated.push(b)
    }
  }

  generated.push(generateTags(a))

  for (let i = 1; i < a.length+1; i++) {
    for (let m = 0; m < a.length; m++) {
      if (a[m]['num'] == i) {
        if (a[m]['type'] == "big") {
          let b = (<div className="Q-bigCardBack"><Text className="A-description" textContent={a[m]['description']}></Text><Text className='A-time' textContent={`Время прохождения: ${a[m]['time']} мин`}></Text><BlueButton className="A-btn" textContent="Пройти"></BlueButton><TestCard className="O-test-cardGenerated" src={a[m]['img'][0]["url"]} type={a[m]["type"]} title={a[m]['title']} time={a[m]['time']}></TestCard></div>)
            console.log(a[m])
            generated.push(b)
        } else {
          let b = (<TestCard className="O-test-cardGenerated" src={a[m]['img'][0]["url"]} type={a[m]["type"]} title={a[m]['title']} time={a[m]['time']}></TestCard>)
            console.log(a[m])
            generated.push(b)
        }  
      }
    }
  }
  return generated
}


function TestsCardPaged(props) {
  const [data, setData] = useState([]);
  const [first, setFirst] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
  const data = async ()=> {
    setIsLoading(true);

    const instance = new (await AsyncClass)();
     while (instance.getVariable() == undefined) {
       await new Promise(resolve => setTimeout(resolve, 300));
    }
    const variableValue = instance.getVariable();
    setData(generateTests(variableValue));
    setIsLoading(false);
    
    for (let m = 0; m < variableValue.length; m++) {
      if (variableValue[m]['num'] == 1) {
        setFirst(<TestCard className="O-test-card big" src={variableValue[m]['img'][0]["url"]} title={variableValue[m]['title']} time={variableValue[m]['time']}></TestCard>)
      }
    }
    
    console.log(first)
  };
  data()
  }, [])

  const data1 = useMemo(() => data);

      //<>{dataa.map((item) => (
    //      <>{item}</>
     // ))}</>

  //let data = generateTests() 

  console.log(data)
  return (
    <StyledCollection className={props["className"]}>
      <>{data1.map((item) => (
          <>{item}</>
      ))}</>


    </StyledCollection>
    
  );
}

export default TestsCardPaged;


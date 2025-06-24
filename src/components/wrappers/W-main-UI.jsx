import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import { useId } from 'react';


import React, { useState, useDeferredValue, useEffect, Suspense} from 'react';

import FactText from '../molecules/M-main-facts-card.jsx';
//import FactsCards from '../collections/C-main-facts-cards.jsx'

import Loading from '../molecules/M-loading-block.jsx'
import AsyncClass from "../data.js";
import ArrowButton from "../atoms/A-arrowBtn.jsx"
import Text from '../atoms/A-text.jsx'
const FactsCards = React.lazy(() => import('../collections/C-main-facts-cards.jsx'));

// "Ленивая" загрузка компонента

const StyledBlock = styled.section`
  width: 100vw;
  height: 49vw;
  position: relative;
  overflow: hidden;
  

  .arrows {
    position: absolute;
    display: flex;
    width: 17vw;
    top: 37vw;
    left: 3vw;
    justify-content: space-between;
  }

  .A-sectionName {
    font-size: 3vw;
    font-weight: 600;
    position: absolute;
    left: 2vw;
    top: 4vw;
  }

  .overflow {
    width: 70vw;
    height: 40vw;
    overflow: hidden;
    position: absolute;
    margin-left: 41vw;
  }
`;

let queue = {
  1: {
    "pos": "-40vw",
    "num": "1",
    "id": "fact1",
    "text": "Во время сна наши знания переходят из кратковременной памяти в долговременную"
  },
  2: {
    "pos": "-18.3vw",
    "num": "2",
    "id": "fact2",
    "text": "Хроническая нехватка сна ведёт к расстройствам слуха, зрения, повышенной тревожности, нарушению обмена веществ, нервным тикам и общей слабости"
  },
  3: {
    "pos": "3.4vw",
    "num": "3",
    "id": "fact3",
    "text": "Примерно четверть всей своей жизни мы проводим во сне"
  },
  4: {
    "pos": "25.1vw",
    "num": "4",
    "id": "fact4",
    "text": "Через 5 минут после пробуждения мы забываем до 50% снов, а через 10 минут — до 90%."
  },
  5: {
    "pos": "46.8vw",
    "num": "5",
    "id": "fact5",
    "text": "Примерно 12% людей видят сны только в черно-белом цвете" 
  },
}

function SectionFacts(props) {


  function renderQueue(e) {
    if (e == true) {
      let pos = Number((document.querySelector(".choosenFact").id).substr(4))
      if (pos == 5) {
        document.querySelector(".choosenFact").style.marginLeft="0vw"
        document.querySelector(".choosenFact").classList.remove("choosenFact")
        document.querySelector(`#fact1`).classList.add("choosenFact")
        document.querySelector(".C-main-facts-card").style.right=queue["1"]["pos"]
        document.querySelector(".A-text-fact-text").textContent=queue["1"]["text"]
      } else {
        document.querySelector(".choosenFact").style.marginLeft="0vw"
        document.querySelector(".choosenFact").classList.remove("choosenFact")
        document.querySelector(`#fact${pos+1}`).classList.add("choosenFact")
        document.querySelector(".C-main-facts-card").style.right=queue[pos+1]["pos"]
        document.querySelector(".A-text-fact-text").textContent=queue[pos+1]["text"]
      }
    } else if (e == false) {
      let pos = Number((document.querySelector(".choosenFact").id).substr(4))
      if (pos == 1) {
        document.querySelector(".choosenFact").style.marginLeft="0vw"
        document.querySelector(".choosenFact").classList.remove("choosenFact")
        document.querySelector(`#fact5`).classList.add("choosenFact")
        document.querySelector(".C-main-facts-card").style.right=queue["5"]["pos"]
        document.querySelector(".A-text-fact-text").textContent=queue["5"]["text"]
      } else {
        document.querySelector(".choosenFact").style.marginLeft="0vw"
        document.querySelector(".choosenFact").classList.remove("choosenFact")
        document.querySelector(`#fact${pos-1}`).classList.add("choosenFact")
        document.querySelector(".C-main-facts-card").style.right=queue[pos-1]["pos"]

        document.querySelector(".A-text-fact-text").textContent=queue[pos-1]["text"]
      }
    }
}

  /*const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  const data = async ()=> {
    setIsLoading(true);

    const instance = new (await AsyncClass)();
     while (instance.getVariable() == undefined) {
       await new Promise(resolve => setTimeout(resolve, 500));
    }
    const variableValue = instance.getVariable();

    //aaa = generateCards(variableValue)
  //  setData(generateCards(variableValue));

    setData(variableValue)
    setIsLoading(false);
  };
  data()
  }, [])
  
    console.log(data) */
   // if (!isLoading) {

  const [myValue, setMyValue] = useState('no');

    const handleChildChange = (newValue) => {
      setMyValue(newValue);
      renderQueue(newValue)
      setTimeout(()=> {
        setMyValue("no");
      }, 50)
    };

    return (

    <StyledBlock className={props["className"]}>
      <Text className="A-sectionName" textContent="Факты про сон"></Text>
      <div className="overflow">
        <FactsCards className="C-main-facts-card" state={myValue}></FactsCards>
      </div>
      <FactText className="M-main-facts-card" textContent=''></FactText>
      <div className="arrows">
        <ArrowButton className="A-arrowBtn" way="prev" onClick={handleChildChange}></ArrowButton>
        <ArrowButton className="A-arrowBtn" way="next" onClick={handleChildChange}></ArrowButton>
      </div>

    </StyledBlock>
  );

//  }
}

export default SectionFacts;

/*

function SectionFacts(props) {
    return (
        <StyledBlock className={props["className"]}> 
          <Suspense fallback={
            <Loading className="M-loading">Загрузка...</Loading>
          }>
            <FactText className="M-main-facts-card" textContent=""></FactText>
            <FactsCards className="C-main-facts-cards"></FactsCards>
          </Suspense>
        </StyledBlock>
    );
  }
  

export default SectionFacts;

*/
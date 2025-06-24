import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import React, { useId, useState, useDeferredValue, useEffect, Suspense, useMemo} from 'react';


//import content from '../data.js'
//import AsyncClass from "../data.js";

//import Loading from '../molecules/M-loading-block.jsx'
//const FactCard = React.lazy(() => import('../organisms/O-main-facts-Card.jsx'));

import FactCard from '../organisms/O-main-facts-Card.jsx'

const StyledCollection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 110vw;
  height: 40vw;
  align-items: center;
  position: absolute;
  transition: all 0.3s ease-in-out;
  right: -40vw;

`;

import img1 from '../images/Intersect-2.webp'
import img2 from '../images/Intersect-4.webp'
import img3 from '../images/Intersect-3.webp'
import img4 from '../images/Intersect.webp'
import img5 from '../images/Intersect-2.webp'

let cards = {
  1: {
    "img": img1,
    "title": "Обучение",
    "text": "Во время сна наши знания переходят из кратковременной памяти в долговременную",
    "id": "fact1"
  },

  2: {
    "img": img2,
    "title": "Нехватка <br> сна",
    "text": "Хроническая нехватка сна ведёт к расстройствам слуха, зрения, повышенной тревожности, нарушению обмена веществ, нервным тикам и общей слабости",
    "id": "fact2"
  },

  3: {
    "img": img3,
    "title": "Время",
    "text": "Примерно четверть всей своей жизни мы проводим во сне",
    "id": "fact3"
  },

  4: {
    "img": img4,
    "title": "Забывчи <br> вость",
    "text": "Через 5 минут после пробуждения мы забываем до 50% снов, а через 10 минут — до 90%.",
    "id": "fact4"
  },

  5: {
    "img": img5,
    "title": "Цвета",
    "text": "Примерно 12% людей видят сны только в черно-белом цвете",
    "id": "fact5"
  }
}


function generateCards(list) {
  let a = list[0]
  let b = list[1]
  let c = list[2]
  let d = list[3]
  let e = list[4]
  let generated = [];
  let rr = (<FactCard className="O-main-facts-card choosenFact" id={cards[a]["id"]} src={cards[a]['img']} textContent={cards[a]['text']} title={cards[a]['title']}></FactCard>)
  generated.push(rr)
  rr = (<FactCard className="O-main-facts-card" id={cards[b]["id"]} src={cards[b]['img']} textContent={cards[b]['text']} title={cards[b]['title']}></FactCard>)
  generated.push(rr)
  rr = (<FactCard className="O-main-facts-card" id={cards[c]["id"]} src={cards[c]['img']} textContent={cards[c]['text']} title={cards[c]['title']}></FactCard>)
  generated.push(rr)
  rr = (<FactCard className="O-main-facts-card" id={cards[d]["id"]} src={cards[d]['img']} textContent={cards[d]['text']} title={cards[d]['title']}></FactCard>)
  generated.push(rr)
  rr = (<FactCard className="O-main-facts-card" id={cards[e]["id"]} src={cards[e]['img']} textContent={cards[e]['text']} title={cards[e]['title']}></FactCard>)
  generated.push(rr)


  return generated
}


/*

function generateCards(a) {
  let generated = [];
  for (let i = 0; i < a.length; i++) {
      let b = (<FactCard className="O-main-facts-Card" src={a[i]['img'][0]} textContent={a[i]['text']} title={a[i]['name']}></FactCard>)
      generated.push(b)
  }
  return generated
}

function activateLasers(e, data) {
  console.log(e.target.textContent,data)
  document.querySelector(".A-text-fact-text").textContent = "gfgfdgfdfgfd"
}

function  FactsCards(props) {
  
  let data = generateCards(props["cardsContent"])

    return (
    <StyledCollection className={props["className"]} onClick={(e) => activateLasers(e, data)}>
       <>{data.map((item) => (
          <>{item}</>
      ))}</>
    </StyledCollection>
  );
}

/* 

function FactsCards(props) {
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
    setData(generateCards(variableValue));
    setIsLoading(false);
  };
  data()
  }, [])
  
  
    return (
    <StyledCollection className={props["className"]} onClick={(e) => activateLasers(e)}>
      <>{data.map((item) => (
          <>{item}</>
      ))}</>
    </StyledCollection>
  );
}

*/


let b = [1, 2, 3, 4, 5]

function FactsCards(props) {

  let data = generateCards(b) 
  const data1 = useMemo(() => data);
  return (
    <StyledCollection className={props["className"]}>
      <>{data1.map((item) => (
          <>{item}</>
      ))}</>
    </StyledCollection>
  );
}

export default FactsCards;



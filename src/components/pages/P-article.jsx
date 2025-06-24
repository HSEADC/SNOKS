import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import { useLocation } from 'react-router-dom';
import Loading from '../molecules/M-loading-block.jsx'

import Text from '../atoms/A-text.jsx'
import ArticleHeader from '../organisms/O-article-header.jsx'
import ArticleInner from '../superorganisms/S-articleInner.jsx'
import Footer from '../organisms/O-footer.jsx'

import AsyncClass from "../article.js";
import React, { useState, useDeferredValue, useEffect, Suspense} from 'react';

//const ArticlesCardPaged = React.lazy(() => import('../collections/C-generated-articles.jsx')); 

const StyledPage = styled.section`
  padding: 10vw 0 2vw 0;
  height: fit-content;
  background-color: ${Pallete["white"]};
`;

const StyledMain = styled.main`
  width: 90%;
  margin: auto;
  height: inherit;

  .W-articleHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2vw;

    .A-articleName {
      font-size: 3vw;
      font-weight: 600;
      margin-bottom: 1vw;
      width: 75%;
    }

     .A-articleTag {
      font-size: 1.3vw;
      font-weight: 400;
      margin-bottom: 1vw;
      color: white;
      background-color: ${Pallete["blue"]};
      padding: 1vw 2vw;
      border-radius: 3vw;
    }
  }
`;


function Article() {
  const [receivedData, setReceivedData] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [usefull, setUsefull] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('myData');
    if (data) {
      setReceivedData(JSON.parse(data));
    }
  }, []); 

   useEffect(() => {
    if (receivedData) {
      const data = async ()=> {
      setIsLoading(true);

      const instance = new (await AsyncClass)();
       while (instance.getVariable() == undefined) {
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      const variableValue = instance.getVariable();
      setData(variableValue);
      setIsLoading(false); 

      console.log(variableValue)

      let myArray = variableValue

    const extractNumbers = (posString) => {
    const match = posString.match(/^(\d+)\s+(\d+)/); // More robust regex
    return match ? match.slice(1).map(Number) : [Infinity, Infinity];
    };

    const sortedArray = [...myArray].sort((a, b) => {
      const [a1, a2] = extractNumbers(a.pos);
      const [b1, b2] = extractNumbers(b.pos);
      if (a1 !== b1) return a1 - b1;
      return a2 - b2;
    });


    function chooseUsefull(a, b) {
      let usefulll = []
      console.log(a, b)

      for (const [key, value] of Object.entries(a)) {

        if (value["pos"].split(" ")[0] == b) {
        usefulll.push(value)
        }
      }
/*              console.log(a, value)
      if (value["pos"].split(" ")[0] == b) {
        usefulll.push(value)
      }*/
      setUsefull(usefulll)
      return usefulll
    

    }

    chooseUsefull(sortedArray, receivedData[0]["num"])
    console.log(usefull)  


    }

  data()
    }

  }, [receivedData]); 

    return (
        <StyledPage>
            <StyledMain className="main">
              {receivedData ? ( 
                <>
                <div className="W-articleHeader">
                  <Text className="A-articleName" textContent={receivedData[0]["bannerTitle"]}></Text>
                  <Text className="A-articleTag" textContent={receivedData[0]["tag"]}></Text>
                </div>
                <ArticleHeader className="O-articleHeader" time={receivedData[0]["time"]} src={receivedData[0]["bannerImg"][0]["url"]}></ArticleHeader>
                {usefull && usefull.length > 0 ? ( 
                <ArticleInner className="S-articleInner" data={usefull}></ArticleInner>): (<></>)}
                </>
              ): (<p></p>)}
            </StyledMain>
            <Footer></Footer>
        </StyledPage>
    );
  }

export default Article;
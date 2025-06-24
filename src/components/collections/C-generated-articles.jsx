import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import React, { useId, useState, useDeferredValue, useEffect, Suspense, useMemo, useCallback} from 'react';
import { BrowserRouter as Router, Switch, Route, Link,  Routes, useNavigate} from 'react-router-dom';


import BlueButton from '../atoms/A-blueBtn.jsx';
import AsyncClass from "../articles.js";
import Text from '../atoms/A-text.jsx';
import ArticleCard from '../organisms/O-articles-card.jsx';
import IconImg from '../quarks/Q-icon.jsx'

import cross from '../images/cross.svg'

//import content from '../data.js'
//import AsyncClass from "../data.js";
//import Loading from '../molecules/M-loading-block.jsx'


const StyledCollection = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: fit-content;
  align-items: center;
  transition: all 0.3s ease-in-out;
  margin-bottom: 7vw;
  flex-wrap: wrap;

  .C-tags {
    width: 100%;
    display: flex;
    margin: 7vw 0 3vw 0;
    flex-wrap: wrap;


    .A-tagBtn {
      background-color: white;
      font-size: 1.5vw;
      font-weight: 500;
      padding: 1vw 3vw;
      margin-right: 2vw;
      opacity: 1;
      margin-bottom: 1vw;
    }

    .tagChoosen {
      background-color: ${Pallete["blue"]};
      color: white;
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
    width: 21vw;
    height: 30vw;
    margin-bottom: 2vw;

    .Q-cardBackground {
      width: 100%;
      height: 23vw;
      bottom: -1vw;
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

    .A-title {
      font-weight: 600;
      font-size: 3.2vw;
      margin-bottom: 2vw;
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

      .A-tagArticle {
        font-size: 2.5vw;
        padding: 1vw 2vw;
        right: 2vw;
        left: inherit;
      }

      svg {
        display: none;
      }

      .Q-cardBackground {
        bottom: 0;
        width: 100%;
        height: 50vw;
      }

      .A-main-testTitle {
        top: 3vw;
        font-size: 5vw;
      }

    }

    &.leftImg {
      .A-title {
        margin-left: 46vw;
      } 

      .A-description {
        margin-left: 46vw;
      } 

      .A-time {
        margin-left: 46vw;
      }

      .O-test-cardGenerated {
        left: 66vw;
      }

      .A-tagArticle {
        font-size: 2.5vw;
        padding: 1vw 2vw;
        left: 2vw;
        right: initial;
      }

      .big {
        left: 0vw;
      }
    }

  } 

  .notChoosenArticle {
    display: none;
  }

  .articleChoosen {
    display: relative;
  }

  .tagger {
    margin-left: 1.15vw;
  }
`;

function generative(e) {
  let allArticles = []
  let taggers = []

  if (e.target.className.indexOf("A-tagBtnCircle") != -1) {
    
  } else {}

  if (e.target.className.indexOf("tagChoosen") == -1) {
    e.target.classList.add("tagChoosen")
  } else {
    e.target.classList.remove("tagChoosen")
  }

  document.querySelectorAll('.tagger').forEach((item) => {
    //console.log(item.querySelector(".A-tagArticle"))
      allArticles.push(item)

 })

 document.querySelectorAll('.Q-bigCardBack').forEach((item) => {
  console.log(item)
    //console.log(item.querySelector(".A-tagArticle"))
      allArticles.push(item)

 })

 document.querySelectorAll('.tagChoosen').forEach((item) => {
  taggers.push(item.textContent)
})

if (taggers.length != 0) {


for (let i = 0; i < allArticles.length; i++) {
    if (allArticles[i].className.indexOf('notChoosenArticle') == -1) {
      if (allArticles[i].className.indexOf('articleChoosen') != -1) {
           allArticles[i].classList.add('notChoosenArticle')
           allArticles[i].classList.remove('articleChoosen')
      } else {
         allArticles[i].classList.add('notChoosenArticle')
      }
    } else {

    if (allArticles[i].className.indexOf('articleChoosen') != -1) {
          allArticles[i].classList.add('notChoosenArticle')
          allArticles[i].classList.remove('articleChoosen')
    } else {
        allArticles[i].classList.add('notChoosenArticle')
    }
    }
  }

  let tag = e.target.textContent
    console.log(taggers)
   for (let j = 0; j < allArticles.length; j++) {
    if (allArticles[j].className.indexOf('Q-bigCardBack') == -1) {
      if (taggers.includes(allArticles[j].children[0].children[3].textContent)) {
        allArticles[j].classList.remove("notChoosenArticle")
        allArticles[j].classList.add("articleChoosen")
      }
    } else {
      if (taggers.includes(allArticles[j].children[3].children[3].textContent)) {
        allArticles[j].classList.remove("notChoosenArticle")
        allArticles[j].classList.add("articleChoosen")
      }
    }
  }



} else {
  for (let i = 0; i < allArticles.length; i++) {
 
      if (allArticles[i].className.indexOf('articleChoosen') != -1) {
           allArticles[i].classList.remove('articleChoosen')
      } else  if (allArticles[i].className.indexOf('notChoosenArticle') != -1) {
         allArticles[i].classList.remove('notChoosenArticle')
      }
    }
  
}

  //console.log(allArticles)


//Q-bigCardBack div
  //if (e.target.className.indexOf("choosenTag") == -1) {

 // }
  //let tag = e.target.textContent
  //document.querySelectorAll('.O-article-cardGenerated').forEach((item) => {
   // console.log(item.querySelector(".A-tagArticle"))
  //})
  
}

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

     <BlueButton className="A-tagBtn clear" textContent=""></BlueButton>
    </>

  </div>)

  return collection
}

function generateArticles(a)  {
  let generated = [];

  generated.push(generateTags(a))
  for (let i = 1; i < a.length+1; i++) {
    for (let m = 0; m < a.length; m++) {
      if (a[m]['num'] == i) {
        if (a[m]['type'].indexOf("big") != -1) {
          let b = (<div className={`Q-bigCardBack ${a[m]['type']}`}><Text className="A-title" textContent={a[m]['title']}></Text><Text className="A-description" textContent={a[m]['description']}></Text><Text className='A-time' textContent={`Время прочтения: ${a[m]['time']} мин`}></Text><ArticleCard className="O-article-cardGenerated" tag={a[m]['tag']} src={a[m]['img'][0]["url"]} type={a[m]["type"]} title='' time={a[m]['time']}></ArticleCard></div>)
            generated.push(b)
        } else {
          let b = (<ArticleCard className="O-article-cardGenerated" src={a[m]['img'][0]["url"]} type={a[m]["type"]} id={a[m]["num"]} title={a[m]['title']} tag={a[m]['tag']}></ArticleCard>)
            generated.push(b)
        }  
      }
    }
  }
  return generated
}

function ArticlesCardPaged(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [first, setFirst] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [dataToStore, setDataToStore] = useState([]);



  useEffect(() => {
  const data = async ()=> {
    setIsLoading(true);

    const instance = new (await AsyncClass)();
     while (instance.getVariable() == undefined) {
       await new Promise(resolve => setTimeout(resolve, 300));
    }
    const variableValue = instance.getVariable();
    setData(generateArticles(variableValue));
    setIsLoading(false);
    setDataToStore(variableValue);
  };
  data()
  }, [])

  
 const handleLinkClick = (event) => {
  let a
  let b

  if (event.target.id < 11) {
    
    for (let i = 1; i < dataToStore.length+1; i++) {
    for (let m = 0; m < dataToStore.length; m++) {
      if (dataToStore[m]['num'] == i) {
        if (dataToStore[m]['num'] == event.target.id) {
          console.log(dataToStore[m]["num"], i)
          a = m
          b = i
        }
      }
    }
  }
  console.log(dataToStore[b],b, a)
    try {
      localStorage.setItem('myData', JSON.stringify([dataToStore[a], a]));
      navigate('/article');
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
      // Consider displaying an error message to the user
    }
  } else {
     try {
      navigate('/404');
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
      // Consider displaying an error message to the user
    }
  }
  };

  const data1 = useMemo(() => data);

  console.log(data)
  let dataAll = []
  for (let i = 0; i <= data1.length-1; i++) {
    console.log(data1[i]['props']["className"])
    if (data1[i]['props']["className"] != 'C-tags' && data1[i]['props']["className"].indexOf('big') == -1) {
      let a = (<Link className="tagger" to="/article" onClick={handleLinkClick}>{data1[i]}</Link>)
      dataAll.push(a)
    } else {
      if (data1[i]['props']["className"].indexOf('big') != -1) {
        console.log(data1[i]["props"]["children"])
        let b = []
        for (let m = 0; m < data1[i]["props"]["children"].length; m++) {
          b.push(data1[i]["props"]["children"][m])
        }
        b.push((<Link to="/article" onClick={handleLinkClick}><BlueButton className="A-btn" id={i} textContent="Читать"></BlueButton></Link>))
        console.log(b)
        dataAll.push((<div className={`Q-bigCardBack ${data1[i]['type']}`}>{b}</div>))
      } else {
        if (data1[i]['props']["className"] == 'C-tags') {
          console.log(data1[i]["props"]["children"]["props"]["children"][0], 222222222222222)
          let vv = []
          for (let cc = 0; cc < data1[i]["props"]["children"]["props"]["children"][0].length; cc++) {
            console.log(data1[i]["props"]["children"]["props"]["children"][0][cc], 555)

            vv.push(<a className="A-tag" onClick={(e) => generative(e)}>{data1[i]["props"]["children"]["props"]["children"][0][cc]}</a>)
          }
          //  console.log(444444444444)
         // }
          dataAll.push(<div className="C-tags">{vv}</div>)
        } else {
          let a = (<>{data1[i]}</>)
          dataAll.push(a)
        }
   
      
      }
    }
  }
  console.log(dataAll)
//<BlueButton className="A-btn" textContent="Читать"></BlueButton>
  // <Link to="/article" onClick={handleLinkClick}>{item}</Link>
  return (
    <StyledCollection className={props["className"]}>
      <>{dataAll.map((item) => (
          <>{item}</>
      ))}</>


    </StyledCollection>
    
  );
}

export default ArticlesCardPaged;


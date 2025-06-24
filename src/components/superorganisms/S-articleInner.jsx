import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import React, { useState, useDeferredValue, useEffect, Suspense} from 'react';

import Text from '../atoms/A-text.jsx';
import CardImg from '../quarks/Q-cardBackground.jsx'
import Loading from '../molecules/M-loading-block.jsx'

const StyledContainter = styled.section`
  width: 100%;
  margin: 5vw auto;
  z-index: 1;

  .W-articleSection {
    width: 100%;
    margin: 2vw auto;
    display: flex;
    justify-content: space-between;

    &.author {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10vw;

      .M-author {
        width: 30%;
        display: flex;
        justify-content: space-between;
        height: 8vw;

        .Q-author {
          width: 8vw;
          height: 8vw;
          position: inherit;
          margin: 0 1.5vw 0 0;
        }
      }

      .A-articleSectionText {
        width: 60%;
        font-size: 1.3vw;
        line-height: 1.65vw;
      }

      .M-authorNameAndState {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 7vw;

        .A-authorName {
          font-weight: 500;
          font-size: 1.9vw;
        }

        .A-authorDescription {
          opacity: 0.6;
          font-size: 1.1vw;
        }
      }
    }




    &.citation {
      display: flex;
      justify-content: space-between;
      padding: 2vw 2vw;
      background-color: ${Pallete["blue"]};
      border-radius: 3vw;
      width: 90vw;
      margin: 0 auto;
      margin-bottom: 5vw;

      .M-author {
        width: 30%;
        display: flex;
        justify-content: space-between;
        height: 8vw;

        .Q-author {
          width: 8vw;
          height: 8vw;
          position: inherit;
          margin: 0 1.5vw 0 0;
          color: ${Pallete["white"]};
        }

        .A-authorName {
          font-weight: 500;
           font-size: 1.9vw;
          color: ${Pallete["white"]};
        }

        .A-authorDescription {
          opacity: 0.6;
          font-size: 1.1vw;
          color: ${Pallete["white"]};
        }
      }

      .A-articleSectionText {
        width: 60%;
        color: ${Pallete["white"]};
        font-size: 1.3vw;
        line-height: 1.65vw;
      }

      .M-authorNameAndState {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }


    &.text {
      display: flex;
      justify-content: space-between;
      padding: 2vw 2vw;
      border-radius: 3vw;
      width: 90vw;
      margin: 0 auto;
      margin-bottom: 5vw;

      .A-sectionTitle {
        font-size: 2vw;
        font-weight: 500;
        width: 30%;
      }

      .M-articleTextAndImg {
        width: 65%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .A-sectionText {
          font-size: 1.3vw;
          line-height: 1.65vw;
        }

        .one {
          position: inherit;
          width: 100%;
          height: 20vw;
          margin: 0;
          border-radius: 2vw;
          margin-top: 3vw
        }
        .two {
          position: inherit;
          width: 48.5%;
          height: 25vw;
          margin: 0;
          border-radius: 2vw;
          margin-top: 3vw
        }
      }
    }
  }
`;

function generateInner(a) {
    let generated = []
    for (let i = 0; i <= a.length - 1; i++) {
        if (a[i]["type"] == "athor-and-description") {
          let b = (<div className='W-articleSection author'><div className="M-author"><CardImg className="Q-author" src={a[i]['userImg'][0]['url']}></CardImg><div className="M-authorNameAndState"><Text className="A-authorName" textContent={a[i]['userName']}></Text><Text className="A-authorDescription" textContent={a[i]['userDescription']}></Text></div></div><Text className="A-articleSectionText" textContent={a[i]['text']}></Text></div>)
          generated.push(b)
        } else if (a[i]["type"] == "citation") {
          let b = (<div className='W-articleSection citation'><div className="M-author"><CardImg className="Q-author" src={a[i]['userImg'][0]['url']}></CardImg><div class="M-authorNameAndState"><Text className="A-authorName" textContent={a[i]['userName']}></Text><Text className="A-authorDescription" textContent={a[i]['userDescription']}></Text></div></div><Text className="A-articleSectionText" textContent={a[i]['text']}></Text></div>)
          generated.push(b)
        } else if (a[i]["type"] == "text-and-img") {
          //if (a[i]["img"].length == 1) {
            if (a[i]["img"] !== undefined) {
              if (a[i]["img"].length == 1) {
                let b = (<div className='W-articleSection text'><Text className="A-sectionTitle" textContent={a[i]['title']}></Text><div className="M-articleTextAndImg"><Text className="A-sectionText" textContent={a[i]['text']}></Text><CardImg className="Q-imgForText one" src={a[i]['img'][0]['url']}></CardImg></div></div>)
                generated.push(b)
              } else if (a[i]["img"].length == 2) {
                let b = (<div className='W-articleSection text'><Text className="A-sectionTitle" textContent={a[i]['title']}></Text><div className="M-articleTextAndImg"><Text className="A-sectionText" textContent={a[i]['text']}></Text><CardImg className="Q-imgForText two" src={a[i]['img'][0]['url']}></CardImg><CardImg className="Q-imgForText two" src={a[i]['img'][1]['url']}></CardImg></div></div>)
                generated.push(b)
              }
            }
          //}
         // let b = (<div className='W-articleSection text'><Text className="sectionTitle" textContent={a[i]['title']}></Text><div className="M-articleTextAndImg">{a[i]['userImg'][0]['url'] > 0 ? ( ): (<p></p>)}</div></div>)
          //generated.push(b)
        }
    }
    console.log(generated)
    return generated
}

function ArticleInner(props) {
    if (props && props["data"] && props["data"].length > 0 && props["data"][0]["pos"] !== undefined) {
      console.log(props)
       let data = generateInner(props["data"])

        return (
        <StyledContainter className={props["className"]}> 
        <>{data.map((item) => (
          <>{item}</>
         ))}</>
        </StyledContainter>
    );
    }

  }

export default ArticleInner;
import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import { useId } from 'react';


const Styledh1 = styled.h2`
  font-size: 5.46vw;
  color: ${Pallete["black"]};
  font-family: ${Pallete["fontP"]};
  font-weight: 600;
  white-space: pre-wrap;
  width: 100%;
  margin-bottom: 2vw;

  span {
    color: ${Pallete["blue"]};
  }
`;

function br(props) {
  let text = props.split("<br>")
  let arr = []
  for (let i = 0; i < text.length; i++) {
    if (i != 0) {
      arr.push(<br />)
      arr.push(text[i])
    } else {
      arr.push(text[i])
    }
  }
  return arr
}

function span(props) {
  let arr = []
  for (let i = 0; i < props.length; i++) {
    if (typeof(props[i]) == "string") {
      if (props[i].indexOf("<span>") != -1) {
        let a = (props[i].slice([props[i].indexOf("<span>") + 7], [props[i].indexOf("</span>")]))
        arr.push(props[i].slice(0, [props[i].indexOf("<span>")]))
        arr.push(<span>{a}</span>)
        arr.push(props[i].slice([props[i].indexOf("</span>") + 7], props[i].length))

      } else {
        arr.push(props[i])
      }
    } else {
      arr.push(props[i])
    }
    
  }

  return arr
}

function Title(props) {
  let id = useId();
  id = id.slice(1, id.length - 1)
  let arr = br(props["textContent"])
  let b = span(arr)
    return (
      <Styledh1 className={`${props["className"]}`} id={id}>{b}</Styledh1>
    );
  }
  
export default Title;
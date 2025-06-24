import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import { useId } from 'react';

const StyledText = styled.p`
  font-size: 1.5vw;
  color: ${Pallete["black"]};
  font-family: ${Pallete["fontP"]};
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
        let a = (props[i].slice([props[i].indexOf("<span>")+7], [props[i].indexOf("</span>")-1]))
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

function Text(props) {
    let id = useId();
    id = id.slice(1, id.length - 1)
    if (props != undefined) {
      let arr = br(props['textContent'])
      let b = span(arr)
    return (
      <StyledText className={props["className"]} id={id} key={id}>{b}</StyledText>
    );
    }

  }
  
export default Text;
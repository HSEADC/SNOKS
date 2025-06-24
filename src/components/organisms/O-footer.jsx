import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import { useId } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import FooterEmail from '../molecules/M-footer-email.jsx'
import Text from '../atoms/A-text.jsx';


const StyledBlock = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 23vw;
  align-items: center;
  border-radius: 2.5vw;
  position: relative;
  overflow: hidden;
  padding: 4vw 4vw 2vw 4vw;
  background-color: ${Pallete['black']};
  margin-bottom: -2vw;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  .C-pages {
    margin: 0 5vw;
    width: fit-content;
    
    a {
      text-decoration: none;
      color: white;
    }
    .a-textPage {
      font-size: 1.5vw;
      color: ${Pallete["white"]};
      margin-bottom: 0.5vw;
    }
  }

`;

function Footer(props) {

  return (
      <StyledBlock className={props["className"]}> 

        <FooterEmail className=""></FooterEmail>
        <div className="C-pages">
          <Link to='/'><Text className="a-textPage" textContent="Главная"></Text></Link>
          <Link to='/Tests'><Text className="a-textPage" textContent="Тесты"></Text></Link>
          <Link to='/Articles'><Text className="a-textPage" textContent="Статьи"></Text></Link>
          <Text className="a-textPage" textContent="Магазин"></Text>
          <Text className="a-textPage" textContent="Стайлгайд"></Text>
        </div>

        <div className="C-pages">
          <Text className="a-textPage" textContent="Контакты"></Text>
          <Text className="a-textPage" textContent="@Kate097a"></Text>
          <Text className="a-textPage" textContent="@thisisandi"></Text>
          <Text className="a-textPage" textContent="@fwrrq"></Text>
        </div>
      </StyledBlock>
    );

}

  
export default Footer;
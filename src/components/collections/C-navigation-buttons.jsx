import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import NavButton from '../atoms/A-navigation-button.jsx';
import NavLogo from '../quarks/Q-navigation-logo.jsx';


const StyledWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 60%;
  align-items: center;
  background-color: ${Pallete["white"]};
  border-radius: 4vw;

  .navLink {
    text-decoration: none;
  }
`;

function NavigationBtns() {
    return (
        <StyledWrapper> 
          <Link className="navLink" to='/'><NavButton btnName="Главная"></NavButton></Link>
          <Link className="navLink" to='/articles'><NavButton btnName="Статьи"></NavButton></Link>
          <Link className="navLink" to='/tests'><NavButton btnName="Тесты"></NavButton></Link>
          <Link className="navLink" to='/'><NavButton btnName="Магазин"></NavButton></Link>
        </StyledWrapper>
    );
  }

export default NavigationBtns;
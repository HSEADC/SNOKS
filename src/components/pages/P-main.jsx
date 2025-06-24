import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import TitleContainer from '../molecules/M-main-title-texts.jsx';
import AboutContainter from '../molecules/M-main-about-text.jsx';
import MainSections from '../wrappers/W-main-sections.jsx';
import Facts from '../superorganisms/S-main-facts.jsx';;
import TestsLine from '../superorganisms/S-main-tests.jsx';
import MainShop from '../superorganisms/S-main-shop.jsx';
import Video from '../quarks/Q-video.jsx'
import Footer from '../organisms/O-footer.jsx'

import vid from '../images/4444.mp4'

const StyledPage = styled.section`
  padding: 3vw 2vw 0 2vw;
  background-color: ${Pallete["white"]};
`;

const StyledMain = styled.main`
  width: 90%;
  margin: auto;
  margin-bottom: 9vw;
  
`;

function Main() {
    return (
        <StyledPage>
            <StyledMain>
              <TitleContainer></TitleContainer>
              <Video src={vid}></Video>
              <AboutContainter></AboutContainter>
              <MainSections className="W-main-sections"></MainSections>
              <Facts className="S-main-facts"></Facts>
              <TestsLine className="S-main-tests"></TestsLine>
              <MainShop className="S-main-shop"></MainShop>
            </StyledMain>
            <Footer></Footer>
        </StyledPage>
    );
  }

export default Main;
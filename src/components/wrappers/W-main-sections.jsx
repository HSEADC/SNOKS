import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import Text from '../atoms/A-text.jsx';
import SectionsCollection from '../collections/C-main-sections.jsx'


const StyledWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  background-color: ${Pallete["white"]};
  flex-wrap: wrap;

  .A-main-sectionsText {
    font-size: 2.2vw;

    span {
      color:  ${Pallete["blue"]}
  }
  }
`;

function MainSections(props) {
    return (
        <StyledWrapper className={props["className"]}> 
            <Text className="A-main-sectionsText" textContent="Мы поможем вам <span> понять </span> <br>
свой сон и правильно <span> интепретировать </span> "></Text>
            <SectionsCollection className="C-main-sections"></SectionsCollection>
        </StyledWrapper>
    );
  }

export default MainSections;
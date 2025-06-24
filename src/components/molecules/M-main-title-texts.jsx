import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import Title from '../atoms/A-title.jsx';
import Text from '../atoms/A-text.jsx';


const StyledTitleContainter = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 5vw 0;
  align-items: center;
  flex-wrap: wrap;
`;

function TitleContainter() {
    return (
        <StyledTitleContainter> 
          <Title className="A-text" textContent="<span> SNOK(S) </span> —  медиа  <br>про сон и сновидения"></Title>
          <Text textContent="Значения образов <br> в сновидениях"></Text>
          <Text textContent="Улучшение качества <br> сна и жизни"></Text>
          <Text textContent="Познание себя и раскрытие <br> своего внутреннего мира"></Text>
        </StyledTitleContainter>
    );
  }

export default TitleContainter;
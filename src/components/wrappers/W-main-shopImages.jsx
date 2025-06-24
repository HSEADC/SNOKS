import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import Text from '../atoms/A-text.jsx';
import StyledImg from '../quarks/Q-cardBackground.jsx'

import img1 from '../images/shop1.webp'
import img2 from '../images/shop2.webp'
import img3 from '../images/shop3.webp'

const StyledWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 37vw;
  margin: 0 auto;
  align-items: center;
  background-color: ${Pallete["white"]};
  flex-wrap: wrap;

  div {
    width: 37%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }

  .Q-main-shopImages {
    position: inherit;
    margin-top: 0;
    border-radius: 2vw;

    &.img3 {
      width: 61%;
      height: 100%
    }

    &.img1 {
      height: 48%;
      width: 100%;
    }

    &.img2 {
            width: 100%;
      height: 48%;
    }
  }
`;



function MainShopImages(props) {
    return (
        <StyledWrapper className={props["className"]}> 
        <div>
          <StyledImg className="Q-main-shopImages img1" src={img3}></StyledImg>
          <StyledImg className="Q-main-shopImages img2" src={img2}></StyledImg>
        </div>
        <StyledImg className="Q-main-shopImages img3" src={img1}></StyledImg>
        </StyledWrapper>
    );
  }

export default MainShopImages;
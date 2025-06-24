import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import Text from '../atoms/A-text.jsx';
import StyledImg from '../quarks/Q-cardBackground.jsx';
import SocialMediaButton from '../atoms/A-socialMediaIcon.jsx'

import img1 from '../images/imageShare.webp';
import vk from '../images/vk.svg';
import tg from '../images/tg.svg';

const StyledWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 37vw;
  margin: 0vw auto 3vw auto;
  align-items: center;
  background-color: ${Pallete["white"]};
  position: relative;

  .M-shareTexts {
    background-color: white;
    height: 25vw;
    width: 50vw;
    padding: 3vw 3vw 3vw 10vw;
    border-radius: 3vw;
    margin-left: -4vw;

    .W-shareIcons {
      display: flex;
      margin-top: 3vw;
      justify-content: space-between;
      width: 30%;
    }

    .A-shareText {
      font-size: 2.5vw;

      span {
        color: ${Pallete["blue"]};
        font-weight: 500;
      }
    }
  }

  .Q-tests-shareImg {
    position: inherit;
    width: 35vw;
    height: 30vw;
    border-radius: 3vw;
    margin: 0;
  }
  
`;



function TestsShare(props) {
  return (
    <StyledWrapper className={props["className"]}> 
      <StyledImg className="Q-tests-shareImg" src={img1}></StyledImg>
      <div className='M-shareTexts'>
        <Text className="A-shareText" textContent="Делись своими <span> результатами </span> <br> в наших соц. сетях!"></Text>
        <div class="W-shareIcons">
          <form action="https://t.me/snoks_media" target="_blank">
            <SocialMediaButton className="A-socialMediaBtn" src={tg}></SocialMediaButton>
          </form>
          <form action="https://vk.com/snoks_media" target="_blank">
            <SocialMediaButton className="A-socialMediaBtn" src={vk}></SocialMediaButton>
          </form>
        </div>
      </div>
    </StyledWrapper>
    );
  }

export default TestsShare;
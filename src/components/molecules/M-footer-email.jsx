import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import Text from '../atoms/A-title.jsx'
import SocialMediaButton from '../atoms/A-socialMediaIcon.jsx'

import vk from '../images/vkk.svg'
import tg from '../images/tgg.svg'

const StyledContainter = styled.div`
  position: relative;
  width: 50%;
  margin: 5vw 0;
  z-index: 1;

  .W-shareIcons {
    display: flex;
    margin-top: 1vw;
    justify-content: space-between;
    width: 30%;

    .A-socialMediaBtn  {
      display: flex;
      margin-top: 2vw;
      justify-content: space-between;
      width: 50%;
      background-color: transparent;

      .Q-icon {
        width: 5.5vw;
        height: 4.5vw;
        pointer-events: none;
      } 
    }
  }

  .A-emailText {
    font-size: 2.2vw;
    color: ${Pallete["white"]};
  }

  .a_formInput {
    border: 0.2vw solid white;
    background-color: transparent;
    width: 70%;
    padding: 0.7vw;
    border-radius: 1vw;
    font-size: 1.5vw;
    color: ${Pallete['white']}
  }

  .a_formInput:focus {
    outline: none;
  }

  #my-form {
    position: relative;
  }

  .a_sendButton {
    font-family: ${Pallete["fontP"]};
    position: absolute;
    left: 17vw;
    padding: 0.8vw 1.5vw;
    font-size: 1.5vw;
    font-weight: 500;
    border: none;
    border-radius: 1.5vw;
    color: ${Pallete["black"]};
    background-color: ${Pallete["white"]};
  }
  
`;

function FooterEmail() {
    return (
        <StyledContainter> 
          <Text className="A-emailText" textContent="Будь в курсе новостей!"></Text>
          <form id="my-form" action="https://formspree.io/f/xpwzakpz" method="POST">
            <input class="a_formInput email" type="email" name="email" placeholder="E-mail"/>
            <button class="a_sendButton" id="my-form-button">Подписаться</button>
            <p id="my-form-status"></p>
          </form>
          <div class="W-shareIcons">
            <form action="https://t.me/snoks_media" target="_blank">
              <SocialMediaButton className="A-socialMediaBtn" src={tg}></SocialMediaButton>
            </form>
            <form action="https://vk.com/snoks_media" target="_blank">
              <SocialMediaButton className="A-socialMediaBtn" src={vk}></SocialMediaButton>
            </form>
          </div>
        </StyledContainter>
    );
  }

export default FooterEmail;
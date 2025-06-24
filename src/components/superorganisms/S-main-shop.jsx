import React, { useId, useState, useDeferredValue, useEffect, Suspense} from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import Loading from '../molecules/M-loading-block.jsx'
import Text from '../atoms/A-text.jsx';
import OtherPageButton from '../atoms/A-btn-toOtherPage.jsx'
import MainShopImages from '../wrappers/W-main-shopImages.jsx'

const StyledBlock = styled.section`
  width: 100%;
  height: fit-content;
  margin: 2vw auto;
  border-radius: 2vw;
  transition: all 0.3s ease-in-out;
  margin-top: 17vw;

  .A-main-shop-title {
    font-size: 3.5vw;
    font-weight: 600;
    margin-bottom: 2vw;
  }

  .W-textAndBtn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: fit-content;
    margin-bottom: 2vw;

    .A-main-shop-text {
      font-size: 2.2vw;
  
    span {
      color: ${Pallete["blue"]}
    }
  }
  }


`;


function MainShop(props) {
    return (
      <StyledBlock className={props["className"]}> 
        <Text className="A-main-shop-title" textContent="Товары <br>"></Text>
        <div className="W-textAndBtn"> 
          <Text className="A-main-shop-text" textContent="В нашем <span> магазине </span> ты сможешь <br> приобрести самые качественные <br> товары для комфортного сна"></Text>
          <OtherPageButton className="A-otherPageButton" textContent="Подробнее" action=""></OtherPageButton>
        </div>
        <Suspense fallback={
          <Loading className="M-loading">Загрузка...</Loading>
        }>
          <MainShopImages className="W-main-shopImages"></MainShopImages>
        </Suspense>
      </StyledBlock> 
    );
}
  

export default MainShop;
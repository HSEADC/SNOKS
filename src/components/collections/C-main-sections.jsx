import React from 'react';
import styled from 'styled-components';
import {Pallete} from '../variables.jsx';

import SectionMain from '../organisms/O-main-sections-Card.jsx'

const StyledCollection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40vw;
  align-items: center;
  background-color: ${Pallete["white"]};
  border-radius: 4vw;
  margin-top: 2vw;

  .choosen {
    width: 40%;
    transition: all 0.3s ease-in-out;

    img {
      margin-left: 0vw;
      margin-top: -15vw
    }

    .A-main-CardText {
      left: 2.6vw;
      opacity: 0.5;
    }
  }

  .notChoosen {
    width: 25vw;
    transition: all 0.3s ease-in-out;

    img {
      margin-left: -0vw;
      margin-top: -15vw
    }

    .A-main-CardText {
      left: 1vw;
      opacity: 0;
    }
  }
`;

function bigger(e) {
  let a = e.target
  var b = 0
  document.querySelectorAll(".O-main-sectionCard").forEach(element => {
    if (element.classList.contains("choosen")) {
      element.classList.remove("choosen")
      element.classList.add("notChoosen")
    }
    element.classList.add("notChoosen")
  });
  if (a.classList.contains("O-main-sectionCard")) {
     a.classList.remove("notChoosen")
     a.classList.add("choosen")
     b = a
  } else {
    document.querySelector(".section2").classList.remove("notChoosen")
    document.querySelector(".section2").classList.add("choosen")
  }
}

function SectionsCollection(props) {
  return (
      <StyledCollection className={props["className"]} onMouseMove={bigger}> 
          <SectionMain className="O-main-sectionCard section1" src="sectionImg1" title="Статьи" text="Простые объяснения и неожиданные факты"></SectionMain>
          <SectionMain className="O-main-sectionCard section2" src="sectionImg2" title="Тесты" text="Проверь себя и свой сон"></SectionMain>
          <SectionMain className="O-main-sectionCard section3" src="sectionImg3" title="Мерч" text="Уютные товары для дома и сна"></SectionMain>
      </StyledCollection>
  );
}

export default SectionsCollection;

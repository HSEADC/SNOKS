import '../articles.css';
import imgArt1 from '../images/articles/article1.webp';
import imgArt2 from '../images/articles/article2.webp';
import imgArt3 from '../images/articles/article3.webp';
import imgArt4 from '../images/articles/article4.webp';
import imgArt5 from '../images/articles/article5.webp';
import imgArt6 from '../images/articles/article6.webp';
import imgArt7 from '../images/articles/article7.webp';
import imgArt8 from '../images/articles/article8.webp';
import imgArt9 from '../images/articles/article9.webp';
import imgArt10 from '../images/articles/article10.webp';
import imgArt11 from '../images/articles/article11.webp';
import imgArt12 from '../images/articles/article12.webp';
import svgArrow from '../images/articles/arrow.svg'
import svgTT from '../images/articles/tt.svg'



document.addEventListener("DOMContentLoaded", (e) => {
    
    window.onload = function() { 
        setTimeout( () => {
            document.getElementById("preloader").style.opacity="0";
            document.getElementById("preloader").style.pointerEvents="none"
        }
        , 1200)
      };

    const data = {
        1: {
            name: `Почему дети \r\n плохо спят?`,
            time: "3 — 5",
            text: "Нарушения режима сна у детей — частая проблема для родителей. Узнай, какие факторы могут мешать  ребёнку спокойно засыпать и как можно справиться с ними!",
            size: "middle",
            tag: ["дети", "сон"],
            img: imgArt1,
        },
    
        2: {
            name: "Как помочь ребенку спать лучше??",
            time: "6 — 7",
            text: "Качественный сон — залог здоровья ребёнка. Разбираем эффективные подходы, чтобы малыш засыпал быстро и спал крепко всю ночь.",
            size: "middle",
            tag: ["дети", "сон"],
            img: imgArt2,
        },
    
        3: {
            name: "Нужен ли ребёнку дневной сон?",
            time: "3 — 5",
            text: "Дневной сон может быть важным в развитии ребёнка. Однако когда он необходим, а когда можно отказаться от него? Попробуем разобраться!",
            size: "middle",
            tag: ["дети", "сон"],
            img: imgArt3,
        },
    
        4: {
            name: "Что делать, если ребёнок боится засыпать один?",
            time: "5 — 7",
            text: "Многие дети боятся оставаться одни в темноте, и это абсолютно нормально. В этой статье вы узнаете, как создать спокойную атмосферу перед сном, научить ребёнка справляться с тревогой и сделать процесс засыпания комфортным.",
            size: "big",
            tag: ["дети", "сон"],
            img: imgArt4,
        },

        5: {
            name: `Причины бессоницы`,
            time: "3 — 5",
            text: "Разбираем самые распространённые факторы, которые лишают нас сна: от кофеина и гаджетов до тревожных мыслей, и делимся советами по их устранению.",
            size: "small",
            tag: ["здоровье"],
            img: imgArt5,
        },

        6: {
            name: `Почему дети \r\n плохо спят?`,
            time: "3 — 5",
            text: "Дневной сон бывает полезен не только детям!Мы собрали неожиданные факты о том, как короткий отдых может влиять на здоровье и настроение.",
            size: "small",
            tag: ["дети", "сон"],
            img: imgArt6,
        },

        7: {
            name: `Почему дети \r\n плохо спят?`,
            time: "3 — 5",
            text: "Нарушения режима сна у детей — частая проблема для родителей. Узнай, какие факторы могут мешать  ребёнку спокойно засыпать и как можно справиться с ними!",
            size: "small",
            tag: ["дети", "сон"],
            img: imgArt7,
        },

        8: {
            name: `Почему дети \r\n плохо спят?`,
            time: "3 — 5",
            text: "Нарушения режима сна у детей — частая проблема для родителей. Узнай, какие факторы могут мешать  ребёнку спокойно засыпать и как можно справиться с ними!",
            size: "small",
            tag: ["дети", "сон"],
            img: imgArt8,
        },

        9: {
            name: `Что такое лунатизми почему он возникает?`,
            time: "5 — 7",
            text: "Лунатизм или сомнамбулизм — это состояние, при котором человек выполняет действия во сне, часто не осознавая этого. В этой статье мы расскажем о том, как именно возникает лунатизм, какие факторы способствуют его появлению, и как это связано с нарушениями фаз сна. ",
            size: "big",
            tag: ["здоровье", "сон"],
            img: imgArt9,
        },

        
        10: {
            name: `Совы и жаворонки:кто это?`,
            time: "3 — 5",
            text: "Почему одни люди продуктивнее утром, а другие — вечером? В этой статье мы расскажем, что такое хронотипы и как они связаны с нашими привычками.",
            size: "middle",
            tag: ["иследование", "сон"],
            img: imgArt10,
        },

        11: {
            name: `Почему время во снах бывает искажено?`,
            time: "3 — 5",
            text: "Время во снах часто воспринимается иначе, чем в реальной жизни. В этой статье мы исследуем, почему наше восприятие времени во время сна искажено, что происходит с мозгом в процессе сновидений и как различные стадии сна могут влиять на это.",
            size: "middle",
            tag: ["иследование", "сон"],
            img: imgArt11,
        },

        12: {
            name: `7 советов для улучшения сна`,
            time: "3 — 5",
            text: "Мечтаешь высыпаться лучше? Мы подготовили простые и действенные советы, которые помогут сделать твой сон более восстанавливающим.",
            size: "middle",
            tag: ["советы", "сон"],
            img: imgArt12,
        },



    }
    

const sizes = {
    small: "24 22 1.1",
    middle: "32 35 1.2",
    big: "100 25 1.4"
}

let container = document.querySelector(".articlesBlock")


// generation of article cards


for (let elem in data) {

  const section = document.createElement('section');
  section.classList.add('articleCardAndTime');
  container.append(section);
  let sizeName = (sizes[`${data[elem].size}`]).split(" ");
  console.log(sizeName[0])
  section.style.width=`${sizeName[0]}%`;
  const div = document.createElement('div');
  div.classList.add('articleCard');
  div.style.height=`${sizeName[1]}vw`;
  div.id = `articleCard${elem}`;

  div.style.backgroundImage=`url('${data[elem].img}')`;

  if (sizeName[0] == 100) {
    console.log(div)
    div.style.backgroundSize="100% 120%"
  }

  section.append(div);
  const goIcon = document.createElement('div');
  goIcon.classList.add('goIcon');
  div.append(goIcon);
  const goIconImg = document.createElement('img')
  goIconImg.src=svgArrow
  goIcon.append(goIconImg)
  const p = document.createElement('p');
  p.id=`articleName${elem}`;
  p.textContent=`${data[elem].name}`;
  p.style.fontSize=`${sizeName[2]}vw`;
  div.append(p);
  const description = document.createElement('div');
  description.classList.add('description');
  div.append(description);
  const descriptionImg = document.createElement('img');
  descriptionImg.src=svgTT;
  description.append(descriptionImg);
  let time = document.createElement('p');
  time.id = `articleTime${elem}`;
  time.textContent=`${data[elem].time} мин`;
  section.append(time);
}

})
import '../articles.css';


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
        },
    
        2: {
            name: "Как помочь ребенку спать лучше??",
            time: "6 — 7",
            text: "Качественный сон — залог здоровья ребёнка. Разбираем эффективные подходы, чтобы малыш засыпал быстро и спал крепко всю ночь.",
            size: "middle",
            tag: ["дети", "сон"],
        },
    
        3: {
            name: "Нужен ли ребёнку дневной сон?",
            time: "3 — 5",
            text: "Дневной сон может быть важным в развитии ребёнка. Однако когда он необходим, а когда можно отказаться от него? Попробуем разобраться!",
            size: "middle",
            tag: ["дети", "сон"],
        },
    
        4: {
            name: "Что делать, если ребёнок боится засыпать один?",
            time: "5 — 7",
            text: "Многие дети боятся оставаться одни в темноте, и это абсолютно нормально. В этой статье вы узнаете, как создать спокойную атмосферу перед сном, научить ребёнка справляться с тревогой и сделать процесс засыпания комфортным.",
            size: "big",
            tag: ["дети", "сон"],
        },

        5: {
            name: `Причины бессоницы`,
            time: "3 — 5",
            text: "Разбираем самые распространённые факторы, которые лишают нас сна: от кофеина и гаджетов до тревожных мыслей, и делимся советами по их устранению.",
            size: "small",
            tag: ["здоровье"],
        },

        6: {
            name: `Почему дети \r\n плохо спят?`,
            time: "3 — 5",
            text: "Дневной сон бывает полезен не только детям!Мы собрали неожиданные факты о том, как короткий отдых может влиять на здоровье и настроение.",
            size: "small",
            tag: ["дети", "сон"],
        },

        7: {
            name: `Почему дети \r\n плохо спят?`,
            time: "3 — 5",
            text: "Нарушения режима сна у детей — частая проблема для родителей. Узнай, какие факторы могут мешать  ребёнку спокойно засыпать и как можно справиться с ними!",
            size: "small",
            tag: ["дети", "сон"],
        },

        8: {
            name: `Почему дети \r\n плохо спят?`,
            time: "3 — 5",
            text: "Нарушения режима сна у детей — частая проблема для родителей. Узнай, какие факторы могут мешать  ребёнку спокойно засыпать и как можно справиться с ними!",
            size: "small",
            tag: ["дети", "сон"],
        },

        9: {
            name: `Что такое лунатизми почему он возникает?`,
            time: "5 — 7",
            text: "Лунатизм или сомнамбулизм — это состояние, при котором человек выполняет действия во сне, часто не осознавая этого. В этой статье мы расскажем о том, как именно возникает лунатизм, какие факторы способствуют его появлению, и как это связано с нарушениями фаз сна. ",
            size: "big",
            tag: ["здоровье", "сон"],
        },

        
        10: {
            name: `Совы и жаворонки:кто это?`,
            time: "3 — 5",
            text: "Почему одни люди продуктивнее утром, а другие — вечером? В этой статье мы расскажем, что такое хронотипы и как они связаны с нашими привычками.",
            size: "middle",
            tag: ["иследование", "сон"],
        },

        11: {
            name: `Почему время во снах бывает искажено?`,
            time: "3 — 5",
            text: "Время во снах часто воспринимается иначе, чем в реальной жизни. В этой статье мы исследуем, почему наше восприятие времени во время сна искажено, что происходит с мозгом в процессе сновидений и как различные стадии сна могут влиять на это.",
            size: "middle",
            tag: ["иследование", "сон"],
        },

        12: {
            name: `7 советов для улучшения сна`,
            time: "3 — 5",
            text: "Мечтаешь высыпаться лучше? Мы подготовили простые и действенные советы, которые помогут сделать твой сон более восстанавливающим.",
            size: "middle",
            tag: ["советы", "сон"],
        },



    }
    

const sizes = {
    small: "24 22 1.1",
    middle: "32 35 1.2",
    big: "100 23 1.4"
}

let container = document.querySelector(".articlesBlock")


// generation of article cards


for (let elem in data) {

  const section = document.createElement('section');
  section.classList.add('articleCardAndTime');
  container.append(section);
  let sizeName = (sizes[`${data[elem].size}`]).split(" ");
  section.style.width=`${sizeName[0]}%`;
  const div = document.createElement('div');
  div.classList.add('articleCard');
  div.style.height=`${sizeName[1]}vw`;
  div.id = `articleCard${elem}`;
  let imgWay = "url('" + "../images/articles/article" + elem + ".webp" + "')";
  div.style.backgroundImage=imgWay;
  section.append(div);
  const goIcon = document.createElement('div');
  goIcon.classList.add('goIcon');
  div.append(goIcon);
  const goIconImg = document.createElement('img')
  goIconImg.src="../images/articles/arrow.svg"
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
  descriptionImg.src="/tt.svg";
  description.append(descriptionImg);
  let time = document.createElement('p');
  time.id = `articleTime${elem}`;
  time.textContent=`${data[elem].time} мин`;
  section.append(time);
}

})
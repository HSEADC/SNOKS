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
import svgArrows from '../images/arrows.svg'
import svgCross from '../images/articles/cross.svg' 

import svgLogo from '../images/preview/logo.svg'
import pngLogo from '../images/aboutUs/logoHeader.webp'
import { length } from 'three/examples/jsm/nodes/Nodes.js';



document.addEventListener("DOMContentLoaded", (e) => {
    
    window.onload = function() { 
        setTimeout( () => {
            document.getElementById("preloader").style.opacity="0";
            document.getElementById("preloader").style.pointerEvents="none"
        }
        , 1200)
    };

    document.getElementById("arrows").src=svgArrows

    const data = {
        1: {
            name: `Почему дети плохо спят?`,
            time: "3 — 5",
            size: "middle",
            tag: ["дети", "сон"],
            img: imgArt1,
        },
    
        2: {
            name: "Как помочь ребенку спать лучше?",
            time: "6 — 7",
            size: "middle",
            tag: ["дети", "сон"],
            img: imgArt2,
        },
    
        3: {
            name: "Нужен ли ребёнку дневной сон?",
            time: "3 — 5",
            size: "middle",
            tag: ["дети", "сон"],
            img: imgArt3,
        },
    
        4: {
            name: "Что делать, если ребёнок боится засыпать один?",
            time: "5 — 7",
            size: "big",
            tag: ["дети", "сон"],
            img: imgArt4,
        },

        5: {
            name: `Причины бессоницы`,
            time: "3 — 5",
            size: "small",
            tag: ["здоровье"],
            img: imgArt5,
        },

        6: {
            name: `Почему дети \r\n плохо спят?`,
            time: "3 — 5",
            size: "small",
            tag: ["дети", "сон"],
            img: imgArt6,
        },

        7: {
            name: `Почему дети \r\n плохо спят?`,
            time: "3 — 5",
            size: "small",
            tag: ["дети", "сон"],
            img: imgArt7,
        },

        8: {
            name: `Почему дети \r\n плохо спят?`,
            time: "3 — 5",
            size: "small",
            tag: ["дети", "сон"],
            img: imgArt8,
        },

        9: {
            name: `Что такое лунатизми почему он возникает?`,
            time: "5 — 7",
            size: "big",
            tag: ["здоровье", "сон"],
            img: imgArt9,
        },

        
        10: {
            name: `Совы и жаворонки:кто это?`,
            time: "3 — 5",
            size: "middle",
            tag: ["иследование", "сон"],
            img: imgArt10,
        },

        11: {
            name: `Почему время во снах бывает искажено?`,
            time: "3 — 5",
            size: "middle",
            tag: ["иследование", "сон"],
            img: imgArt11,
        },

        12: {
            name: `7 советов для улучшения сна`,
            time: "3 — 5",
            size: "middle",
            tag: ["советы", "сон"],
            img: imgArt12,
        },


    }
 

    let sizes = {
        small: "24 22 1.1 0.8 100 120 0 0",
        middle: "32 35 1.2 1.2 100 120 0 0",
        big: "100 25 1.4 1.5 100 120 0 0"
    }

/* articles adaptive */

    if (window.innerHeight > window.innerWidth) {
        sizes = {
            small: "48 45 2.9 3 100 120 0 0",
            middle: "100 65 2.9 3 100 180 0 -20",
            big: "100 45 2.9 3 180 150 -50 -15"
        }

        // width% heightVw fontSizeVW lineHeightVw BackGroundSize1Vw BackGroundSize2Vw BackGroundPosition1Vw BackGroundPosition2Vw

      } else if (window.innerHeight <= window.innerWidth) {
        sizes = {
            small: "24 22 1.1 1.5 100 120 0 0",
            middle: "32 35 1.2 1.5 100 120 0 0",
            big: "100 25 1.4 1.5 100 120 0 0"
        }

    }

/* */


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
        div.style.backgroundSize=`${sizeName[4]}% ${sizeName[5]}%`;
        div.style.backgroundPosition=`${sizeName[6]}vw ${sizeName[7]}vw`

        section.append(div);
        const goIcon = document.createElement('div');
        goIcon.classList.add('goIcon');
        div.append(goIcon);
        const goIconImg = document.createElement('img')
        goIconImg.src=svgArrow
        goIcon.append(goIconImg)
        const p = document.createElement('p');
        p.id=`articleName${elem}`;
        p.style.lineHeight="2.3vw";
        p.textContent=`${data[elem].name}`;
        p.style.fontSize=`${sizeName[2]}vw`;
        p.style.lineHeight=`${sizeName[3]}vw`;
        div.append(p);
        const description = document.createElement('div');
        description.id = `description${elem}`
        description.classList.add('description');
        div.append(description);
        const descriptionImg = document.createElement('img');
        descriptionImg.src=svgTT;
        descriptionImg.style.pointerEvents="none"
        description.append(descriptionImg);
        let time = document.createElement('p');
        time.id = `articleTime${elem}`;
        time.textContent=`${data[elem].time} мин`;
        section.append(time);
    }

//

// phoneBurger

    if (window.innerHeight > window.innerWidth) { 

        document.querySelector(".articlesBlock").style.width="90%"
        document.querySelector("main").style.marginTop="25vw"
        document.querySelector("#mobileNav").style.display="block"
        let flagNav = false;
        const burger = document.querySelector(".burger");
        document.querySelector(".navigation").style.display="none";
        burger.addEventListener("click", function() {
            burger.classList.toggle("open");
            if (!flagNav) {
                flagNav = true;
                document.querySelector("#mobileNav").style.backgroundColor="var(--blue)"
                document.querySelector(".burgerNav").style.display="block"
                setTimeout(()=> {
                    document.querySelector(".burgerNav").style.opacity="1";
                    document.querySelector("#mobileLogo").style.backgroundImage=`url("${svgLogo}")`
                    document.querySelector("#mobileLogo").style.backgroundSize="78% 78%";
                    document.querySelector("#mobileLogo").style.backgroundPosition="20% 50%"
                }, 0)
            } else {
                flagNav = false;
                document.querySelector(".burgerNav").style.opacity="0";
                document.querySelector("#mobileNav").style.backgroundColor="var(--white)"
                document.querySelector("#mobileLogo").style.backgroundImage=`url("${pngLogo}")`
                document.querySelector("#mobileLogo").style.backgroundSize="120% 100%"
                setTimeout(()=> {
                    document.querySelector(".burgerNav").style.display="none"
                }, 300)
            }
        });


    } else {
        document.querySelector("#pcNav").style.display="block"
    }

//


/* Articals description */

    fetch("https://api.npoint.io/2d0473e88177e8b86bfe").then(function (response) {
        return response.json();
      }).then(function (dataa) {   
        const dataText = dataa[0].articles
        console.log(dataText)
        const articles = Array.from(document.getElementsByClassName('description'));

        articles.forEach(article => {
            article.addEventListener('click', (e) => {
                let id = e.target.id.substr(11)
                if (document.getElementById(`articleCard${id}`).classList.contains("opened")) {
                    hide(id, dataText)
                } else {
                    hideAll(dataText)
                    showDescription(id, dataText)
                }
            })
        })

        function showDescription(id, dataText) {
     

            document.getElementById(`articleCard${id}`).classList.add("opened")
            const backColor = document.createElement('div');
            backColor.classList.add('articleCardRotated');
            backColor.id= `articleCardRotated${id}`;
            document.getElementById(`articleCard${id}`).append(backColor);
            document.querySelector(`#description${id}`).querySelector("img").src=svgCross;

            const articlDescription = document.createElement('p');
            articlDescription.classList.add("descriptionText");
            articlDescription.textContent=dataText[`article${id}`].text
            backColor.append(articlDescription);

            articlDescription.style.fontSize=`${sizes[data[id].size].split(" ")[2]}vw`
            articlDescription.style.lineHeight=`${sizes[data[id].size].split(" ")[3]}vw`

            const tagsContsiner = document.createElement("div");
            tagsContsiner.classList.add("tagsContainer"); 
            backColor.append(tagsContsiner);

            dataText[`article${id}`].tags.forEach((elem) => {
                const tag = document.createElement("p");
                tag.classList.add("tag");
                tag.textContent=elem;
                tag.style.fontSize=`${sizes[data[id].size].split(" ")[2]}vw`;
                if (window.innerHeight > window.innerWidth) {
                    tag.style.padding="2vw "
                } else {
                    tag.style.padding="1vw"
                }
                tagsContsiner.append(tag);
            })
        }

        function hideAll(dataText) {
            for (let i = 1; i <= Object.keys(dataText).length; i++) {
                if (document.getElementById(`articleCard${i}`).classList.contains("opened")) {
                    document.getElementById(`articleCardRotated${i}`).remove();
                    document.getElementById(`articleCard${i}`).classList.remove("opened")
                    document.querySelector(`#description${i}`).querySelector("img").src=svgTT;
                }
            }
        }

        function hide(id, dataText) {
            document.getElementById(`articleCardRotated${id}`).remove();
            document.getElementById(`articleCard${id}`).classList.remove("opened")
            document.querySelector(`#description${id}`).querySelector("img").src=svgTT;
        }

    });


/* */


/* adaptives */


if (window.innerHeight > window.innerWidth) { 
    let descriptions = document.querySelectorAll(".description")
    descriptions.forEach(description => {
        description.style.height="10vw";
        description.style.width="10vw";
        description.firstElementChild.style.height="5vw";
        description.firstElementChild.style.width="5vw";
    })

    let goIcons = document.querySelectorAll(".goIcon")
    goIcons.forEach(goIcon => {
        goIcon.style.height="10vw";
        goIcon.style.width="10vw";
        goIcon.firstElementChild.style.height="5vw";
        goIcon.firstElementChild.style.width="5vw";
    })

}



/* */



})
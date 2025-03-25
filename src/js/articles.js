import '../index.css';
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
import svgArrow from '../images/articles/arrow.svg';
import svgTT from '../images/articles/tt.svg';
import svgArrows from '../images/arrows.svg';
import svgArrowsOpened from '../images/arrowsOpened.svg'
import svgCross from '../images/articles/cross.svg' 

import svgLogo from '../images/preview/logo.svg'
import pngLogo from '../images/aboutUs/logoHeader.webp'
import { length } from 'three/examples/jsm/nodes/Nodes.js';

const images = {imgArt1, imgArt2, imgArt3, imgArt4, imgArt5, imgArt6, imgArt7, imgArt8, imgArt9, imgArt10, imgArt11, imgArt12}



document.addEventListener("DOMContentLoaded", (e) => {
    
    window.onload = function() { 
        setTimeout( () => {
            document.getElementById("preloader").style.opacity="0";
            document.getElementById("preloader").style.pointerEvents="none"
        }
        , 1200)
    };

    document.getElementById("arrows").src=svgArrows

    let sizes = {
        small: "24 22 1.1 0.8 100 120 0 0",
        middle: "32 35 1.2 1.2 100 120 0 0",
        big: "100 25 1.4 1.5 100 120 0 0"
    }

/* articles adaptive */

    if (window.innerHeight > window.innerWidth) {
        sizes = {
            small: "48 50 2.4 3 100 120 0 0",
            middle: "100 69 2.9 3 100 180 0 -20",
            big: "100 50 2.9 3 180 150 -50 -15"
        }

        // width% heightVw fontSizeVW lineHeightVw BackGroundSize1Vw BackGroundSize2Vw BackGroundPosition1Vw BackGroundPosition2Vw

      } else if (window.innerHeight <= window.innerWidth) {
        sizes = {
            small: "24 25 1.1 1.3 120 120 0 0",
            middle: "32 35 1.2 1.3 100 120 0 0",
            big: "100 25 1.4 1.4 100 120 0 0"
        }

    }

/* */


    let container = document.querySelector(".c_articlesContainer")


// generation of article cards

    let dataText = generationArticles()


    function generationArticles() {
        fetch("https://api.npoint.io/ebd355c8a0376b2c5439").then(function (response) {
            return response.json();
          }).then(function (dataa) {   
            const dataText = dataa[0].articles
            console.log(dataText)
        
            for (let elem in dataText) {
                const section = document.createElement('section');
                section.classList.add('w_articleCardAndTime');
                section.classList.add('showed');
                section.id=`articleCardAndTime${elem}`;
                container.append(section);
                let sizeName = (sizes[`${dataText[elem].size}`]).split(" ");
                section.style.width=`${sizeName[0]}%`;
        
                const div = document.createElement('div');
                div.classList.add('o_articleCard');
                div.style.height=`${sizeName[1]}vw`;
                div.id = `articleCard${elem}`;
        
                div.style.backgroundImage=`url('${images[dataText[elem].img]}')`;
                div.style.backgroundSize=`${sizeName[4]}% ${sizeName[5]}%`;
                div.style.backgroundPosition=`${sizeName[6]}vw ${sizeName[7]}vw`
        
                section.append(div);
                const goIcon = document.createElement('button');

                goIcon.addEventListener("click", (e)=> {
                    window.location.href = '../404.html';
                })

                goIcon.classList.add('a_articlesOpenButton');
                div.append(goIcon);
                goIcon.href=`${dataText[elem].link}`
                const goIconImg = document.createElement('img');
                goIconImg.classList.add("q_articlesOpenIcon")
                goIconImg.src=svgArrow;
                goIcon.append(goIconImg)
                const p = document.createElement('p');
                p.id=`articleName${elem}`;
                p.style.lineHeight="2vw";
                p.textContent=`${dataText[elem].name}`;
                p.style.fontSize=`${sizeName[2]}vw`;
                p.style.lineHeight=`${sizeName[3]}vw`;
                p.classList.add("a_articleName")
                div.append(p);
                const description = document.createElement('div');
                description.id = `description${elem}`
                description.classList.add('a_articlesDescriptionButton');
                div.append(description);
                const descriptionImg = document.createElement('img');
                descriptionImg.src=svgTT;
                descriptionImg.classList.add("q_articlesDescriptionIcon")
                descriptionImg.style.pointerEvents="none"
                description.append(descriptionImg);
                let time = document.createElement('p');
                time.id = `articleTime${elem}`;
                time.classList.add("a_articleTime")
                time.textContent=`${dataText[elem].time} мин`;
                section.append(time); 
            }
        })

    }


        

//

// phoneBurger

    if (window.innerHeight > window.innerWidth) { 
            console.log(1111111111111)
            document.querySelector("main").style.marginTop="20vw"
            document.querySelector("#mobileNav").style.display="block"
            let flagNav = false;
            const burger = document.querySelector("#burger");
            document.querySelector(".o_menubarContainer").style.display="none";
            burger.addEventListener("click", function() {
                burger.classList.toggle("open");
                if (!flagNav) {
                    flagNav = true;
                    document.querySelector("#mobileNav").style.backgroundColor="var(--blue)"
                    document.querySelector(".s_mobileNavigation").style.display="block"
                    setTimeout(()=> {
                        document.querySelector(".s_mobileNavigation").style.opacity="1";
                        document.querySelector("#mobileLogo").style.backgroundImage=`url("${svgLogo}")`
                        document.querySelector("#mobileLogo").style.backgroundSize="78% 78%";
                         document.querySelector("#mobileLogo").style.backgroundPosition="20% 50%"
                    }, 0)
                } else {
                    flagNav = false;
                    document.querySelector(".s_mobileNavigation").style.opacity="0";
                    document.querySelector("#mobileNav").style.backgroundColor="var(--white)"
                    document.querySelector("#mobileLogo").style.backgroundImage=`url("${pngLogo}")`
                    document.querySelector("#mobileLogo").style.backgroundSize="120% 100%"
                    setTimeout(()=> {
                        document.querySelector(".s_mobileNavigation").style.display="none"
                    }, 300)
                }
            });
    
    } else {
        document.querySelector("#pcNav").style.display="block"
    }

//


/* Articals description */

    fetch("https://api.npoint.io/ebd355c8a0376b2c5439").then(function (response) {
        return response.json();
      }).then(function (dataa) {   
        const dataText = dataa[0].articles
        console.log(dataText)
        const articles = Array.from(document.getElementsByClassName('a_articlesDescriptionButton'));

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
            backColor.classList.add('o_articleCardRotated');
            backColor.id=`articleCardRotated${id}`;
            document.getElementById(`articleCard${id}`).append(backColor);
            document.querySelector(`#description${id}`).querySelector("img").src=svgCross;

            const articlDescription = document.createElement('p');
            articlDescription.classList.add("a_articleDescription");
            articlDescription.textContent=dataText[id].text
            backColor.append(articlDescription);


            articlDescription.style.fontSize=`${sizes[dataText[id].size].split(" ")[2]}vw`
            articlDescription.style.lineHeight=`${sizes[dataText[id].size].split(" ")[3]}vw`

            const tagsContsiner = document.createElement("div");
            tagsContsiner.classList.add("c_tagsArticleCard"); 
            backColor.append(tagsContsiner);

            dataText[id].tags.forEach((elem) => {
                const tag = document.createElement("p");
                tag.classList.add("a_tagArticleCard");
                tag.textContent=elem;
                tag.style.fontSize=`${sizes[dataText[id].size].split(" ")[2]}vw`;
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


/* tagsGenerator */

generationTags()
function generationTags() {
    let allTags = []; 
    fetch("https://api.npoint.io/ebd355c8a0376b2c5439").then(function (response) {
        return response.json();
      }).then(function (dataa) {  
        const dataText = dataa[0].articles
        for (let elem in dataText) {
            for (let tag in dataText[elem].tags) {
                if (!(allTags.includes(dataText[elem].tags[tag]))) {
                   // console.log(dataText[elem].tags[tag])
                    allTags.push(dataText[elem].tags[tag])
                }
            }
        }
        console.log(allTags)
        
        for (let tag in allTags) {
            const div = document.createElement('button');
            div.classList.add('a_tagArticle');
            div.id = `tag${tag}`;
            div.textContent = allTags[tag]
            document.querySelector(`.c_tasBlock`).append(div);
        }
        
    })

}

/* */



/* tagsSwitch*/

    document.querySelector("#arrows").addEventListener("click", (e)=>{
        if (!(document.querySelector("#arrows").classList.contains("tagsOpen"))) {
            document.querySelector("#arrows").classList.add("tagsOpen");
            if (window.innerHeight > window.innerWidth) {
                document.querySelector(".w_articlesTas").style.height="28vw";
            } else {
                document.querySelector(".w_articlesTas").style.height="15vw";
            }
            document.querySelector("#arrows").src=`${svgArrowsOpened}`;
        } else {
            document.querySelector("#arrows").classList.remove("tagsOpen");
            document.querySelector(".w_articlesTas").style.height="0vw";
            document.querySelector("#arrows").src=`${svgArrows}`;
        }
    })


/* */


/* tagsChoose */

    let tagsChoosen = []

    document.querySelector(".c_tasBlock").addEventListener("click", (e)=> {
        if (e.target.className.includes("a_tagArticle")) {
            
            fetch("https://api.npoint.io/ebd355c8a0376b2c5439").then(function (response) {
                return response.json();
              }).then(function (dataa) {  
                const dataText = dataa[0].articles
                for (let i = 1; i <= Object.keys(dataText).length; i++) {
                    if (document.getElementById(`articleCard${i}`).classList.contains("opened")) {
                        document.getElementById(`articleCardRotated${i}`).remove();
                        document.getElementById(`articleCard${i}`).classList.remove("opened")
                        document.querySelector(`#description${i}`).querySelector("img").src=svgTT;
                    }
                }
            })

            chooseTags(e.target)
        }
    })

    function chooseTags(target) {
        if (tagsChoosen.length == 0) {
            tagsChoosen.push(target.textContent)
        } else if (tagsChoosen.length == 1 && tagsChoosen[0] == target.textContent) {
            tagsChoosen.pop()
        } else {
            if (!(tagsChoosen.includes(target.textContent))) {
                tagsChoosen.push(target.textContent)
            } else {
                tagsChoosen.splice(tagsChoosen.indexOf(target.textContent), 1);
            }
        }
        renderTags()
    }

    function renderTags() {
        let allTags = document.querySelectorAll(".a_tagArticle");
        allTags.forEach(tag => {
            if (tag.className.includes("activee")) {
                tag.classList.remove("activee")
            }
        })

        let allCards = document.querySelectorAll(".w_articleCardAndTime");
        allCards.forEach(card => {
            if (card.className.includes("showed")) {
                card.classList.remove("showed")
            } 

            if (card.className.includes("tagged")) {
                card.classList.remove("tagged")
            }
        })

        allTags.forEach(tag => {
            if (tagsChoosen.includes(tag.textContent)) {
                tag.classList.add("activee")
            }
        })

        renderTagsArticles()
    
    }


    function renderTagsArticles() {
        if (!(tagsChoosen.length == 0)) {
            fetch("https://api.npoint.io/ebd355c8a0376b2c5439").then(function (response) {
                return response.json();
              }).then(function (dataa) {   
                const dataText = dataa[0].articles;
                for (let elem in dataText) {
                    for (let tag in dataText[`${elem}`].tags) {
                        if (tagsChoosen.includes(dataText[`${elem}`].tags[tag])) {
                            if (!(document.querySelector(`#articleCardAndTime${elem}`).className.includes("showed"))) {
                                document.querySelector(`#articleCardAndTime${elem}`).classList.add("showed")
                                document.querySelector(`#articleCardAndTime${elem}`).classList.add("tagged")
                            }
                        }
                    }
                }
            })
        } else {

            document.querySelectorAll(".w_articleCardAndTime").forEach( elem => {
                elem.classList.add("showed")
            })
        }
    }


/* */



/* adaptives */


    if (window.innerHeight > window.innerWidth) { 
        let descriptions = document.querySelectorAll(".a_articlesDescriptionButton")
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

window.addEventListener('resize', function(event){
    setTimeout(function () {
        location.reload()
    }, 100);
});



})
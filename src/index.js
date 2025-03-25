import './index.css';
import imgArt1 from './images/aboutUs/article1.webp';
import imgArt2 from './images/aboutUs/article2.webp';
import imgArt3 from './images/aboutUs/article3.webp';
import imgArt4 from './images/aboutUs/article4.webp';
import imgArt5 from './images/aboutUs/article5.webp';

import svgLogo from './images/preview/logo.svg'
import pngLogo from './images/aboutUs/logoHeader.webp'

document.addEventListener("DOMContentLoaded", (e) => {

    window.onload = function() { 
        setTimeout( () => {
            document.getElementById("preloader").style.opacity="0";
            document.getElementById("preloader").style.pointerEvents="none"
        }
        , 1200)
    };
   
// factsAnimations

    let facts = document.querySelector(".s_factsContainer")

    /* defaultFact */

    if (screen.orientation.type == "landscape-primary" || screen.orientation.type == "landscape-secondary") {
        circleActive(document.querySelector("#btnCircle3"))
    }

    if (screen.orientation.type == "portrait-primary" || screen.orientation.type == "portrait-secondary") {
        circleActiveMobile(document.querySelector("#btnCircle2"))
    }

    /* */

    function circleActive(e) {
        let fact = e;
        if (fact.className == "a_factsButton") {

            for (let i = 1; i <= 6; i++) {
                document.getElementById(`factText${i}`).style.opacity="0";
                document.getElementById(`factText${i}`).style.display="none";
                if (document.querySelector(`#btnCircle${i}`).className.includes("bigCircle")) {
                    document.querySelector(`#btnCircle${i}`).classList.remove("bigCircle")
                    document.querySelector(`#btnText${i}`).classList.remove("biggerText")
                    document.querySelector(`#btnText${i}`).animate({
                        transform: "rotate(0deg)"
                    }, {
                        duration:1000,
                        fill: "forwards",
                        
                    })
                }
            }

            let num = fact.id.split("")[9]

            document.getElementById(`factText${num}`).style.display="block";
            document.getElementById(`factText${num}`).style.opacity="1";

            document.getElementById(`btnText${num}`).classList.add("biggerText");
            document.getElementById(`btnCircle${num}`).classList.add("bigCircle");

            document.querySelector(`#btnText${num}`).animate({
                transform: "rotate(4300deg)"  
            }, {
                duration:100000,
                fill: "forwards",
                
            })
        } 
    }


    function circleActiveMobile(e) {
        let fact = e;
        if (fact.className == "a_factsButton" ) {
            let num = fact.id.split("")[9]

            for (let i = 1; i <= 6; i++) {
                if (document.querySelector(`#btnCircle${i}`).className.includes("bigCircle")) {
                    document.querySelector(`#btnCircle${i}`).classList.remove("bigCircle");
                    document.querySelector(`#btnText${i}`).classList.remove("biggerText");
                    document.getElementById(`factText${i}`).style.opacity="0";
                    document.getElementById(`factText${i}`).style.display="none";

                }
            }

            
            document.getElementById(`factText${num}`).style.display="block";
            document.getElementById(`factText${num}`).style.opacity="1";

            document.getElementById(`btnText${num}`).classList.add("biggerText");
            document.getElementById(`btnCircle${num}`).classList.add("bigCircle");

            document.querySelector(`#btnText${num}`).animate({
                transform: "rotate(4300deg)"  
            }, {
                duration:100000,
                fill: "forwards",
                
            })
        } else  if (fact.className == "c_factCirclesRow") {
            for (let i = 1; i <= 6; i++) {
                document.getElementById(`factText${i}`).style.opacity="0";
                document.getElementById(`factText${i}`).style.display="none";
                if (document.querySelector(`#btnCircle${i}`).className.includes("bigCircle")) {
                    document.querySelector(`#btnCircle${i}`).classList.remove("bigCircle")
                    document.querySelector(`#btnText${i}`).classList.remove("biggerText")
                    document.querySelector(`#btnText${i}`).animate({
                        transform: "rotate(0deg)"
                    }, {
                        duration:1000,
                        fill: "forwards",
                        
                    })
                }
            }
        }

    }

    if (screen.orientation.type == "landscape-primary" || screen.orientation.type == "landscape-secondary") {
        facts.addEventListener("mouseover", (e) => {
            circleActive(e.target)
        })
    }

    if (screen.orientation.type == "portrait-primary" || screen.orientation.type == "portrait-secondary") {

        facts.addEventListener("click", (e) => {
            circleActiveMobile(e.target)
    
        })
    }

   
//

// articles swipe animation

    const articles = {
        1: {
            name: "Почему дети плохо спят?",
            img: imgArt1
        },

        2: {
            name: "Как помочь ребенку спать лучше?",
            img: imgArt2
        },

        3: {
            name: "Почему малыши не спят крепко?",
            img: imgArt3
        },

        4: {
            name: "Причины бессоницы",
            img: imgArt4
        },

        5: {
            name: "10 фактов о дневном сне",
            img: imgArt5
        }
    }

    let articlesContainer = document.querySelector(".o_articlesSlider");
    articlesContainer.addEventListener("click", (e) => {
        if (e.target.classList[0] == "a_arrowNavigation") {
            if (e.target.classList[1] == "arLeft") {
                document.querySelector(`.arLeft`).animate(
                    [
                        { transform: "translateX(0px)" },
                        { transform: "translateX(-30px)" },
                        { transform: "translateX(0px)" },
                    ]
                , {
                    duration:300,
                    fill: "forwards",
                    iterations: 1,
                    
                })
                previousArticle(Number(findActiveArticle()))
            } else {
                document.querySelector(`.arRight`).animate(
                    [
                        { transform: "translateX(0px)" },
                        { transform: "translateX(+30px)" },
                        { transform: "translateX(0px)" },
                    ]
                , {
                    duration:300,
                    fill: "forwards",
                    iterations: 1,
                    
                })
                nextArticle(Number(findActiveArticle()))
            }
        }
    })


   function findActiveArticle() {
    for (let i = 1; i <= 5; i++) {
        if (document.querySelector(`#circlePick${i}`).classList.contains("picked")) {
            return i
        }
    }
   }

    function previousArticle(n) {
        if (n > 1) {
            document.querySelector(`#circlePick${n}`).classList.remove("picked")
            n -= 1
            document.querySelector(`#circlePick${n}`).classList.add("picked")

            document.querySelector(".m_aboutUsArticleCard ").style.backgroundImage=`url('${articles[n].img}')`
            //document.querySelector(".articleInnerCardName").textContent=`${articles[n].name}`
        } else {
            document.querySelector(`#circlePick${n}`).classList.remove("picked")
            n = 5
            document.querySelector(`#circlePick${n}`).classList.add("picked")

            document.querySelector(".m_aboutUsArticleCard ").style.backgroundImage=`url('${articles[n].img}')`
            //document.querySelector(".articleInnerCardName").textContent=`${articles[n].name}`
        }
    }

    function nextArticle(n) {
        if (n < 5) {
            document.querySelector(`#circlePick${n}`).classList.remove("picked")
            n += 1
            document.querySelector(`#circlePick${n}`).classList.add("picked")

            document.querySelector(".m_aboutUsArticleCard ").style.backgroundImage=`url('${articles[n].img}')`
            //document.querySelector(".articleInnerCardName").textContent=`${articles[n].name}`
        } else {
            document.querySelector(`#circlePick${n}`).classList.remove("picked")
            n = 1
            document.querySelector(`#circlePick${n}`).classList.add("picked")

            document.querySelector(".m_aboutUsArticleCard ").style.backgroundImage=`url('${articles[n].img}')`
            //document.querySelector(".articleInnerCardName").textContent=`${articles[n].name}`
        }
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

// resize reload

    window.addEventListener('resize', function(event){
        location.reload()
    });

//

})
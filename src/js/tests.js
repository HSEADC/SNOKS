import '../index.css';
import svgLogo from '../images/preview/logo.svg';
import pngLogo from '../images/styleguideLogo4.webp'

import imgTest1 from '../images/tests/1.webp';
import imgTest2 from '../images/tests/2.webp';
import imgTest3 from '../images/tests/3.webp';
import imgTest4 from '../images/tests/4.webp';
import imgTest5 from '../images/tests/5.webp';
import imgTest6 from '../images/tests/6.webp';
import imgTest7 from '../images/tests/7.webp';
import imgTest8 from '../images/tests/8.webp';
import imgTest9 from '../images/tests/9.webp';
import svgArrow from '../images/articles/arrow.svg';

const imagesTests = {
    1: imgTest1,
    2: imgTest2,
    3: imgTest3,
    4: imgTest4,
    5: imgTest5,
    6: imgTest6,
    7: imgTest7,
    8: imgTest8,
    9: imgTest9,
}

localStorage.clear();

document.addEventListener("DOMContentLoaded", (e) => {


    window.onload = function() { 
        setTimeout( () => {
            document.getElementById("preloader").style.opacity="0";
            document.getElementById("preloader").style.pointerEvents="none"
        }
        , 1200)
    };

// phoneBurger
    
    if (window.innerHeight > window.innerWidth) { 
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
                        document.querySelector("#mobileLogo").style.backgroundSize="100% 100%"
                        setTimeout(()=> {
                            document.querySelector(".s_mobileNavigation").style.display="none"
                        }, 300)
                    }
                });
        
    } else {
        document.querySelector("#pcNav").style.display="block"
    }
    
//

/* test generation */

    const container = document.querySelector(".c_allTests")

    fetch("https://api.npoint.io/ea12fcabc7ed280ea97a").then(function (response) {
        return response.json();
    }).then(function (dataa) {   
        const dataText = dataa[0].tests.types

        if (window.innerHeight <= window.innerWidth && window.innerWidth > 700) {
            for (let elem in dataText) {
                const section = document.createElement('section');
                section.classList.add("s_testsType")
                section.classList.add(elem)
                container.append(section)
    
                for (let tests in dataText[elem]) {
                    if (tests == "name") {
                        let h = document.createElement("h2")
                        h.classList.add("a_testTypeName")
                        h.textContent=`${dataText[elem].name}`
                        section.append(h)
                    } else {
                        const div = document.createElement('div');
                        div.classList.add('o_testCard');
                        section.append(div);
                        div.id = `testCard${tests}`;
                        div.style.backgroundImage=`url('${imagesTests[tests]}')`;
    
                        const goIcon = document.createElement('div');
                        goIcon.classList.add('a_testsOpenButton');
                        goIcon.id = `goIcon${tests}`
                        div.append(goIcon);
                        const goIconImg = document.createElement('img');
                        goIconImg.src=svgArrow;
                        goIconImg.classList.add("q_testsOpenIcon")
                        goIcon.append(goIconImg);
                        goIcon.addEventListener("click", (e) => {  
                            let id = e.target.id.substr(6)
                            localStorage.setItem("test", JSON.stringify([dataText[elem][id], id, elem]));      
                            //window.location.href = '../SNOKS/test.html';
                            window.location.href = '../SNOKS/test.html';
                        })
    
                        const p = document.createElement('p');
                        p.classList.add("a_testName")
                        p.id=`testName${tests}`;
                        p.textContent=dataText[elem][tests].name;
                        div.append(p);
                    }
                }
            }
        } else {
            document.querySelector("#ArrLeft").style.display="block";
            document.querySelector("#ArrRight").style.display="block";
            document.querySelector(".c_allTests").classList.add("testsContainerMobile")
            const section = document.createElement('section');
            section.classList.add("c_mobileCardsLine")
            container.append(section)
            for (let elem in dataText) {
                for (let tests in dataText[elem]) {
                    if (tests != "name") {
                        const div = document.createElement('div');
                        div.classList.add('o_testCard');
                        section.append(div);
                        div.id = `testCard${tests}`;
                        div.style.backgroundImage=`url('${imagesTests[tests]}')`;

                        div.addEventListener("click", (e) => {  
                            let id = e.target.id.substr(8)
                            localStorage.setItem("test", JSON.stringify([dataText[elem][id], id, elem]));      
                            window.location.href = '../SNOKS/test.html';
                        })
    
                        const p = document.createElement('p');
                        p.classList.add("a_testName")
                        p.id=`testName${tests}`;
                        p.textContent=dataText[elem][tests].name;
                        div.append(p);
                    }
                }
            }

            /* TestsChooseMobile */

            let choosen = 1;
            const choosePos = {
                1: "15",
                2: "-61",
                3: "-137",
                4: "-213",
                5: "-289",
                6: "-365",
                7: "-441",
                8: "-517",
                9: "-593",
            }
            choose(choosen)
            
            function choose(id) {
                if (choosePos[id]) {
                    choosen = id;

                    document.querySelectorAll(".o_testCard").forEach(elem => {
                        if (elem.classList.contains("choosen")) {
                            elem.classList.remove("choosen")
                        }
                    });

                    document.querySelector(`#testCard${id}`).classList.add("choosen");
                    document.querySelector(".c_mobileCardsLine").style.left=`${choosePos[id]}vw`;
                }
            }

            document.querySelector("#ArrRight").addEventListener("click", (e)=>{choose(choosen+1)});
            document.querySelector("#ArrLeft").addEventListener("click", (e)=>{choose(choosen-1)});

        }

        /* */
    })

/* */

// resize reload

let saved_width = window.innerWidth;

window.addEventListener('resize', function(event){
    if (window.innerWidth != saved_width) {
        saved_width = window.innerWidth;
        setTimeout(function () {
            location.reload()
        }, 100);
    }
});

/* */

})
import '../tests.css';
import svgLogo from '../images/preview/logo.svg';
import pngLogo from '../images/aboutUs/logoHeader.webp';
import imgTest1 from '../images/tests/1.webp';
import imgTest2 from '../images/tests/2.webp';
import imgTest3 from '../images/tests/3.webp';
import imgTest4 from '../images/tests/4.webp';
import imgTest5 from '../images/tests/5.webp';
import imgTest6 from '../images/tests/6.webp';
import svgArrow from '../images/articles/arrow.svg';

const imagesTests = {
    1: imgTest1,
    2: imgTest2,
    3: imgTest3,
    4: imgTest4,
    5: imgTest5,
    6: imgTest6,
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
        document.querySelector("main").style.marginTop="25vw"
        document.querySelector("#mobileNav").style.display="block"
        let flagNav = false;
        const burger = document.querySelector(".burger");
        document.querySelector(".o_menubarContainer").style.display="none";
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

/* test generation */

    const container = document.querySelector(".c_allTests")

    fetch("https://api.npoint.io/e13c715d54b7e038e8bf").then(function (response) {
        return response.json();
    }).then(function (dataa) {   
        const dataText = dataa[0].tests.types
        console.log(dataText)

        if (window.innerHeight <= window.innerWidth && window.innerWidth > 700) {
            for (let elem in dataText) {
                console.log(elem)
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
            document.querySelector(".c_allTests").classList.add("testsContainerMobile")
            const section = document.createElement('section');
            section.classList.add("mobileCardsLine")
            container.append(section)
            for (let elem in dataText) {
                console.log(elem)

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
                            window.location.href = '../test.html';
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
                    document.querySelector(".mobileCardsLine").style.left=`${choosePos[id]}vw`;
                }
            }

            document.querySelector("#ArrRight").addEventListener("click", (e)=>{choose(choosen+1)});
            document.querySelector("#ArrLeft").addEventListener("click", (e)=>{choose(choosen-1)});

        }

        /* */
    })

/* */

// resize reload

 //   window.addEventListener('resize', function(event){
 //       location.reload()
//    });

//

})
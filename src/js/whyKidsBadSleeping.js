import '../index.css';
import svgLogo from '../images/preview/logo.svg'
import pngLogo from '../images/aboutUs/logoHeader.webp'

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
        document.querySelector("main").style.marginTop="15vw"
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


if (window.innerHeight > window.innerWidth) { 
    let styleNavFlag = false;
    document.querySelector(".c_articleNav ul").style.marginLeft="-40vw";
    document.querySelector(".c_articleNav").style.display="none";
    document.querySelector(".s_articleChoosenContent").style.width="85%";
    document.querySelector(".s_articleChoosenContent").style.marginLeft="14%";
    document.querySelector(".a_articlesOpenIcon").style.display="block"
    document.querySelector(".s_articleAndNav").style.height="362vw";

    document.querySelector(".a_articlesOpenIcon").addEventListener("click", (e) => {
        if (!styleNavFlag) {
            styleNavFlag = true;
            document.querySelector(".c_articleNav").style.display="block";
            setTimeout(()=> {
                document.querySelector(".c_articleNav ul").style.marginLeft="0";
                document.querySelector(".c_articleNav").style.width="80%";
                document.querySelector(".a_articlesOpenIcon").style.left="20vw"
                document.querySelector(".a_articlesOpenIcon").style.transform="rotate(180deg)"
                document.querySelector(".s_articleChoosenContent").style.width="70%";
                document.querySelector(".s_articleChoosenContent").style.marginLeft="28%";
                document.querySelector(".s_articleAndNav").style.height="352vw";
            }
            ,0)

        } else {
            styleNavFlag = false;
            document.querySelector(".c_articleNav ul").style.marginLeft="-40vw";
            setTimeout(()=> {
                document.querySelector(".c_articleNav").style.display="none";
                document.querySelector(".s_articleChoosenContent").style.width="85%";
                document.querySelector(".s_articleChoosenContent").style.marginLeft="11%";
            }, 300)
            document.querySelector(".a_articlesOpenIcon").style.left="4vw"
            document.querySelector(".a_articlesOpenIcon").style.transform="rotate(0deg)"
            document.querySelector(".s_articleAndNav").style.height="362vw";
        }
    })
}



let navigation = document.querySelector(".c_articleNav")

    navigation.addEventListener("click", (e)=> {
        if (e.target.className == "a_articleNavigation") {
            document.querySelector(`#guideTip${e.target.id.substr(6)}`).scrollIntoView({ behavior: 'smooth' });
        }
    })


document.addEventListener("scroll", (e) => {
    let sc = window.pageYOffset;
    let wv = window.innerWidth
    let a = sc * 100 / wv;
    if (a > 95 && a < 114) {
        for (let i = 1; i <= 6; i++) {
            if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                document.getElementById(`navTip${i}`).classList.remove("blueNav")
            }
        }
        document.getElementById("navTip1").classList.add("blueNav")

    } else if (a > 114 && a < 185) {
        for (let i = 1; i <= 6; i++) {
            if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                document.getElementById(`navTip${i}`).classList.remove("blueNav")
            }
        }
        document.getElementById("navTip2").classList.add("blueNav")

    } else if (a > 185 && a < 235) {
        for (let i = 1; i <= 6; i++) {
            if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                document.getElementById(`navTip${i}`).classList.remove("blueNav")
            }
        }
        document.getElementById("navTip3").classList.add("blueNav")

    } else if (a > 235 && a < 285) {
        for (let i = 1; i <= 6; i++) {
            if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                document.getElementById(`navTip${i}`).classList.remove("blueNav")
            }
        }
        document.getElementById("navTip4").classList.add("blueNav")

    } else if (a > 285 && a < 340) {
        for (let i = 1; i <= 6; i++) {
            if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                document.getElementById(`navTip${i}`).classList.remove("blueNav")
            }
        }
        document.getElementById("navTip5").classList.add("blueNav")

    } else if (a > 340 && a < 497) {
        for (let i = 1; i <= 6; i++) {
            if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                document.getElementById(`navTip${i}`).classList.remove("blueNav")
            }
        }
        document.getElementById("navTip6").classList.add("blueNav")
    }
})

/* */

/* rate */

    document.querySelector("#heart").addEventListener("click", (e) => {
        document.querySelector("#heart").classList.add("picked")
        if (document.getElementById("brokenHeart").classList.contains("picked")) {
            document.getElementById("brokenHeart").classList.remove("picked")
        }
    })

    document.querySelector("#brokenHeart").addEventListener("click", (e) => {
        document.querySelector("#brokenHeart").classList.add("picked")
        if (document.querySelector("#heart").classList.contains("picked")) {
            document.querySelector("#heart").classList.remove("picked")
        }
    })

/* */

/* anotherArticle */

document.querySelector(`#anotherArticleBtn1`).addEventListener("click", (e)=> {
    window.location.href = `../404.html`;
})
document.querySelector(`#anotherArticleBtn2`).addEventListener("click", (e)=> {
    window.location.href = `../404.html`;
})
document.querySelector(`#anotherArticleBtn3`).addEventListener("click", (e)=> {
    window.location.href = `../factsAboutSleepingInNature.html`;
})
document.querySelector(`#anotherArticleBtn4`).addEventListener("click", (e)=> {
    window.location.href = `../404.html`;
})

/* */

if (window.innerHeight > window.innerWidth) {

    document.querySelector(".q_timeIcon").addEventListener("click", (e) => {
        if (e.target.classList.contains("timed")) {
            e.target.classList.remove("timed")
        } else {
            e.target.classList.add("timed")
            document.addEventListener("click", (e) => {
                e.target.classList.remove("timed")
                document.removeEventListener("click", (e))
            })
        }
    }) 

 }



// resize reload

window.addEventListener('resize', function(event){
    setTimeout(function () {
        location.reload()
    }, 100);
});

//

})
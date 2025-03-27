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
        document.querySelector("main").style.marginTop="17vw"
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

/* rate */

    document.querySelector("#heart").addEventListener("click", (e) => {
        document.querySelector("#heart").classList.add("picked")
        console.log(document.getElementById("brokenHeart").className)
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
    window.location.href = `../SNOKS/404.html`;
})
document.querySelector(`#anotherArticleBtn2`).addEventListener("click", (e)=> {
    window.location.href = `../SNOKS/404.html`;
})
document.querySelector(`#anotherArticleBtn3`).addEventListener("click", (e)=> {
    window.location.href = `../SNOKS/whyKidsBadSleeping.html`;
})
document.querySelector(`#anotherArticleBtn4`).addEventListener("click", (e)=> {
    window.location.href = `../SNOKS/404.html`;
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


// resize reload

window.addEventListener('resize', function(event){
    setTimeout(function () {
        location.reload()
    }, 100);
});


//

})
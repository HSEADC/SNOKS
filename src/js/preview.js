import '../index.css';

import svgLogo from '../images/preview/logo.svg';
import pngLogo from '../images/styleguideLogo4.webp'


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
                    document.querySelector("#mobileNav").style.backgroundColor="transperent"
                    document.querySelector(".s_mobileNavigation").style.display="block"
                    setTimeout(()=> {
                        document.querySelector(".s_mobileNavigation").style.opacity="1";
                    }, 0)
                } else {
                    flagNav = false;
                    document.querySelector(".s_mobileNavigation").style.opacity="0";
                    document.querySelector("#mobileNav").style.backgroundColor="transperent"
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
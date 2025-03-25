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
            console.log(1111111111111)
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

})
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

    let navigation = document.querySelector(".c_styleguideNav")

    navigation.addEventListener("click", (e)=> {
        if (e.target.className == "a_styleguideNavigation") {
            document.querySelector(`#guideTip${e.target.id.substr(6)}`).scrollIntoView({ behavior: 'smooth' });
        }
    })

    document.addEventListener("scroll", (e) => {
        let sc = window.pageYOffset;
        let wv = window.innerWidth
        let a = sc * 100 / wv;
        if (a > 95 && a < 130) {
            for (let i = 1; i <= 11; i++) {
                if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                    document.getElementById(`navTip${i}`).classList.remove("blueNav")
                }
            }
            document.getElementById("navTip1").classList.add("blueNav")

        } else if (a > 130 && a < 199) {
            for (let i = 1; i <= 11; i++) {
                if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                    document.getElementById(`navTip${i}`).classList.remove("blueNav")
                }
            }
            document.getElementById("navTip2").classList.add("blueNav")

        } else if (a > 199 && a < 270) {
            for (let i = 1; i <= 11; i++) {
                if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                    document.getElementById(`navTip${i}`).classList.remove("blueNav")
                }
            }
            document.getElementById("navTip3").classList.add("blueNav")

        } else if (a > 270 && a < 384) {
            for (let i = 1; i <= 11; i++) {
                if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                    document.getElementById(`navTip${i}`).classList.remove("blueNav")
                }
            }
            document.getElementById("navTip4").classList.add("blueNav")

        } else if (a > 384 && a < 447) {
            for (let i = 1; i <= 11; i++) {
                if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                    document.getElementById(`navTip${i}`).classList.remove("blueNav")
                }
            }
            document.getElementById("navTip5").classList.add("blueNav")

        } else if (a > 447 && a < 497) {
            for (let i = 1; i <= 11; i++) {
                if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                    document.getElementById(`navTip${i}`).classList.remove("blueNav")
                }
            }
            document.getElementById("navTip6").classList.add("blueNav")

        } else if (a > 497 && a < 597) {
            for (let i = 1; i <= 11; i++) {
                if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                    document.getElementById(`navTip${i}`).classList.remove("blueNav")
                }
            }
            document.getElementById("navTip7").classList.add("blueNav")

        } else if (a > 597 && a < 676) {
            for (let i = 1; i <= 11; i++) {
                if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                    document.getElementById(`navTip${i}`).classList.remove("blueNav")
                }
            }
            document.getElementById("navTip8").classList.add("blueNav")

        } else if (a > 676 && a < 778) {
            for (let i = 1; i <= 11; i++) {
                if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                    document.getElementById(`navTip${i}`).classList.remove("blueNav")
                }
            }
            document.getElementById("navTip9").classList.add("blueNav")
        } else if (a > 778 && a < 836) {
            for (let i = 1; i <= 11; i++) {
                if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                    document.getElementById(`navTip${i}`).classList.remove("blueNav")
                }
            }
            document.getElementById("navTip10").classList.add("blueNav")
        } else if (a > 836 && a < 1212) {
            for (let i = 1; i <= 11; i++) {
                if (document.getElementById(`navTip${i}`).classList.contains("blueNav")) {
                    document.getElementById(`navTip${i}`).classList.remove("blueNav")
                }
            }
            document.getElementById("navTip11").classList.add("blueNav")
        }
    })



    if (window.innerHeight > window.innerWidth) { 
        let styleNavFlag = false;
        document.querySelector(".c_styleguideNav ul").style.marginLeft="-40vw";
        document.querySelector(".c_styleguideNav").style.display="none";
        document.querySelector(".o_styleGuide").style.width="95%";
        document.querySelector(".o_styleGuide").style.marginLeft="5%";
        document.querySelector(".a_articlesOpenIcon").style.display="block"
        document.querySelector(".o_styleguideAndNav").style.height="1250vw"

        document.querySelector(".a_articlesOpenIcon").addEventListener("click", (e) => {
            if (!styleNavFlag) {
                styleNavFlag = true;
                document.querySelector(".c_styleguideNav").style.display="block";
                setTimeout(()=> {
                    document.querySelector(".c_styleguideNav ul").style.marginLeft="0";
                    document.querySelector(".o_styleGuide").style.width="80%";
                    document.querySelector(".a_articlesOpenIcon").style.left="27vw"
                    document.querySelector(".a_articlesOpenIcon").style.transform="rotate(180deg)"
                    document.querySelector(".o_styleguideAndNav").style.height="1150vw"
                }
                ,0)

            } else {
                styleNavFlag = false;
                document.querySelector(".c_styleguideNav ul").style.marginLeft="-40vw";
                setTimeout(()=> {
                    document.querySelector(".c_styleguideNav").style.display="none";
                    document.querySelector(".o_styleGuide").style.width="95%";
                }, 300)
                document.querySelector(".a_articlesOpenIcon").style.left="4vw"
                document.querySelector(".a_articlesOpenIcon").style.transform="rotate(0deg)"
                document.querySelector(".o_styleguideAndNav").style.height="1250vw"
            }
        })
    }


// phoneBurger

    if (window.innerHeight > window.innerWidth) { 
        document.querySelector("main").style.marginTop="24vw"
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
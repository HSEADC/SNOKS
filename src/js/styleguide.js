import '../styleguide.css';

document.addEventListener("DOMContentLoaded", (e) => {

    window.onload = function() { 
        setTimeout( () => {
            document.getElementById("preloader").style.opacity="0";
            document.getElementById("preloader").style.pointerEvents="none"
        }
        , 1200)
    };

    let navigation = document.querySelector(".styleguideNav")

    navigation.addEventListener("click", (e)=> {
        if (e.target.className == "navTip") {
            console.log(e.target.id.substr(6))
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
})
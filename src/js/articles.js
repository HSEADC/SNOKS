import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

document.addEventListener("DOMContentLoaded", (e) => {
    let item = document.querySelector(".slider");

  window.addEventListener("wheel", function (e) {
    let cl = e.target.className
    console.log(e.deltaY)
    if (cl == "slider" || cl == "sliderBlock" || cl == "sliderInner" || cl == "slideBack" || cl == "slideH")  {
         if (e.deltaY > 0) {item.scrollLeft += 100;}
         else {item.scrollLeft -= 100;}
    }
  });

    document.querySelector(".articlesContainer").addEventListener("mousemove", (e) => {
        if (e.target.className.includes("articleImg")) {
            let idArt = Number(e.target.id.split("")[10]);
            for (let i = 1; i <= 7; i++) {
                if (i != idArt) {
                    document.getElementById(`articleImg${i}`).classList.add("passiveArt")
                }
            }
            document.getElementById(`articleImg${idArt}`).addEventListener("mouseleave", (e) => {
                for (let i = 1; i <= 7; i++) {
                    if (i != idArt) {
                        document.getElementById(`articleImg${i}`).classList.remove("passiveArt")
                    }
                }
                document.getElementById(`articleImg${idArt}`).removeEventListener("mouseleave", (e) => {})
            })
        }
    })

    

    document.querySelector(".articlesContainer").addEventListener("click", (e) => {
        if (e.target.className.includes("articleImg")) {
            let idArt = Number(e.target.id.split("")[10]);
            document.querySelector(".artBlock").style.left="50%";
            document.querySelector(".background").style.opacity="0.6";
            document.querySelector(".background").style.pointerEvents="all";
            document.querySelector(`.aArticle${idArt}`).style.display="block";
            document.querySelector(`.articlesBody`).style.overflow="hidden";
            document.querySelector(`.artBlock`).style.overflow="scroll";

            document.querySelector(".background").addEventListener("click",  (e) => {
                document.querySelector(".artBlock").style.left="100%";
                document.querySelector(".background").style.opacity="0";
                document.querySelector(".background").style.pointerEvents="none";
                document.querySelector(`.articlesBody`).style.overflow="scroll";
                document.querySelector(`.artBlock`).style.overflow="hidden";
                for (let i = 1; i <= 7; i++) {
                    document.querySelector(`.aArticle${i}`).style.display="none";
                }
                document.querySelector(".background").removeEventListener("click",  (e) => {})
            })
        }
    })

    window.addEventListener('scroll', (e) => {
        if (window.pageYOffset >= 0 && window.pageYOffset < 200) {
            document.querySelector(".mainTitle").style.fontSize=`${12 + window.pageYOffset / 18}vw`
        }
      });




    const interBubble = document.querySelector(".interactive");
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    
    function move() {
        curX += (tgX - curX) / 22
        curY +=  (tgY - curY) / 22
        interBubble.style.transform=`translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move()
        })
    }


    function back(x, timeFraction) {
        return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
      }

    document.querySelector(".mainNav").addEventListener("click", (e) => {
        let click = e.target;
        if (click.classList[0] == "navChoose") {
            navChoose(click.id)
        }
    })

    let cursorDot = document.querySelector(".cursorDot");
    let cursorOutline = document.querySelector(".cursorOutline");
    
    window.addEventListener("mousemove", (e) => {
        tgX = e.clientX;
        tgY = e.clientY;


        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left=`${posX}px`;
        cursorDot.style.top=`${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`,
        },
    {
        duration: 500, fill: "forwards"
    })

    })
    move()




    

    
})

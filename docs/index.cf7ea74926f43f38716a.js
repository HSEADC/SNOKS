/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/images/aboutUs/article1.webp
const article1_namespaceObject = __webpack_require__.p + "images/c759998b62c31a1054c6.webp";
;// ./src/images/aboutUs/article2.webp
const article2_namespaceObject = __webpack_require__.p + "images/a7e3199a5ea3627ce83d.webp";
;// ./src/images/aboutUs/article3.webp
const article3_namespaceObject = __webpack_require__.p + "images/fe83cf08177fad7035ad.webp";
;// ./src/images/aboutUs/article4.webp
const article4_namespaceObject = __webpack_require__.p + "images/180f78a15dd77eccfdc7.webp";
;// ./src/images/aboutUs/article5.webp
const article5_namespaceObject = __webpack_require__.p + "images/586c907768fcd456a940.webp";
;// ./src/images/preview/logo.svg
const logo_namespaceObject = __webpack_require__.p + "images/752f59445ba13b14576d.svg";
;// ./src/images/aboutUs/logoHeader.webp
const logoHeader_namespaceObject = __webpack_require__.p + "images/dfe2dfcce3cd6ec99721.webp";
;// ./src/index.js








document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };

  // factsAnimations

  var facts = document.querySelector(".s_factsContainer");

  /* defaultFact */

  if (screen.orientation.type == "landscape-primary" || screen.orientation.type == "landscape-secondary") {
    circleActive(document.querySelector("#btnCircle3"));
  }
  if (screen.orientation.type == "portrait-primary" || screen.orientation.type == "portrait-secondary") {
    circleActiveMobile(document.querySelector("#btnCircle2"));
  }

  /* */

  function circleActive(e) {
    var fact = e;
    if (fact.className == "a_factsButton") {
      for (var i = 1; i <= 6; i++) {
        document.getElementById("factText".concat(i)).style.opacity = "0";
        document.getElementById("factText".concat(i)).style.display = "none";
        if (document.querySelector("#btnCircle".concat(i)).className.includes("bigCircle")) {
          document.querySelector("#btnCircle".concat(i)).classList.remove("bigCircle");
          document.querySelector("#btnText".concat(i)).classList.remove("biggerText");
          document.querySelector("#btnText".concat(i)).animate({
            transform: "rotate(0deg)"
          }, {
            duration: 1000,
            fill: "forwards"
          });
        }
      }
      var num = fact.id.split("")[9];
      document.getElementById("factText".concat(num)).style.display = "block";
      document.getElementById("factText".concat(num)).style.opacity = "1";
      document.getElementById("btnText".concat(num)).classList.add("biggerText");
      document.getElementById("btnCircle".concat(num)).classList.add("bigCircle");
      document.querySelector("#btnText".concat(num)).animate({
        transform: "rotate(4300deg)"
      }, {
        duration: 100000,
        fill: "forwards"
      });
    }
  }
  function circleActiveMobile(e) {
    var fact = e;
    if (fact.className == "a_factsButton") {
      var num = fact.id.split("")[9];
      for (var i = 1; i <= 6; i++) {
        if (document.querySelector("#btnCircle".concat(i)).className.includes("bigCircle")) {
          document.querySelector("#btnCircle".concat(i)).classList.remove("bigCircle");
          document.querySelector("#btnText".concat(i)).classList.remove("biggerText");
          document.getElementById("factText".concat(i)).style.opacity = "0";
          document.getElementById("factText".concat(i)).style.display = "none";
        }
      }
      document.getElementById("factText".concat(num)).style.display = "block";
      document.getElementById("factText".concat(num)).style.opacity = "1";
      document.getElementById("btnText".concat(num)).classList.add("biggerText");
      document.getElementById("btnCircle".concat(num)).classList.add("bigCircle");
      document.querySelector("#btnText".concat(num)).animate({
        transform: "rotate(4300deg)"
      }, {
        duration: 100000,
        fill: "forwards"
      });
    } else if (fact.className == "c_factCirclesRow") {
      for (var _i = 1; _i <= 6; _i++) {
        document.getElementById("factText".concat(_i)).style.opacity = "0";
        document.getElementById("factText".concat(_i)).style.display = "none";
        if (document.querySelector("#btnCircle".concat(_i)).className.includes("bigCircle")) {
          document.querySelector("#btnCircle".concat(_i)).classList.remove("bigCircle");
          document.querySelector("#btnText".concat(_i)).classList.remove("biggerText");
          document.querySelector("#btnText".concat(_i)).animate({
            transform: "rotate(0deg)"
          }, {
            duration: 1000,
            fill: "forwards"
          });
        }
      }
    }
  }
  if (screen.orientation.type == "landscape-primary" || screen.orientation.type == "landscape-secondary") {
    facts.addEventListener("mouseover", function (e) {
      circleActive(e.target);
    });
  }
  if (screen.orientation.type == "portrait-primary" || screen.orientation.type == "portrait-secondary") {
    facts.addEventListener("click", function (e) {
      circleActiveMobile(e.target);
    });
  }

  //

  // articles swipe animation

  var articles = {
    1: {
      name: "Почему дети плохо спят?",
      img: article1_namespaceObject
    },
    2: {
      name: "Как помочь ребенку спать лучше?",
      img: article2_namespaceObject
    },
    3: {
      name: "Почему малыши не спят крепко?",
      img: article3_namespaceObject
    },
    4: {
      name: "Причины бессоницы",
      img: article4_namespaceObject
    },
    5: {
      name: "10 фактов о дневном сне",
      img: article5_namespaceObject
    }
  };
  var articlesContainer = document.querySelector(".o_articlesSlider");
  articlesContainer.addEventListener("click", function (e) {
    if (e.target.classList[0] == "a_arrowNavigation") {
      if (e.target.classList[1] == "arLeft") {
        document.querySelector(".arLeft").animate([{
          transform: "translateX(0px)"
        }, {
          transform: "translateX(-30px)"
        }, {
          transform: "translateX(0px)"
        }], {
          duration: 300,
          fill: "forwards",
          iterations: 1
        });
        previousArticle(Number(findActiveArticle()));
      } else {
        document.querySelector(".arRight").animate([{
          transform: "translateX(0px)"
        }, {
          transform: "translateX(+30px)"
        }, {
          transform: "translateX(0px)"
        }], {
          duration: 300,
          fill: "forwards",
          iterations: 1
        });
        nextArticle(Number(findActiveArticle()));
      }
    }
  });
  function findActiveArticle() {
    for (var i = 1; i <= 5; i++) {
      if (document.querySelector("#circlePick".concat(i)).classList.contains("picked")) {
        return i;
      }
    }
  }
  function previousArticle(n) {
    if (n > 1) {
      document.querySelector("#circlePick".concat(n)).classList.remove("picked");
      n -= 1;
      document.querySelector("#circlePick".concat(n)).classList.add("picked");
      document.querySelector(".m_aboutUsArticleCard ").style.backgroundImage = "url('".concat(articles[n].img, "')");
      //document.querySelector(".articleInnerCardName").textContent=`${articles[n].name}`
    } else {
      document.querySelector("#circlePick".concat(n)).classList.remove("picked");
      n = 5;
      document.querySelector("#circlePick".concat(n)).classList.add("picked");
      document.querySelector(".m_aboutUsArticleCard ").style.backgroundImage = "url('".concat(articles[n].img, "')");
      //document.querySelector(".articleInnerCardName").textContent=`${articles[n].name}`
    }
  }
  function nextArticle(n) {
    if (n < 5) {
      document.querySelector("#circlePick".concat(n)).classList.remove("picked");
      n += 1;
      document.querySelector("#circlePick".concat(n)).classList.add("picked");
      document.querySelector(".m_aboutUsArticleCard ").style.backgroundImage = "url('".concat(articles[n].img, "')");
      //document.querySelector(".articleInnerCardName").textContent=`${articles[n].name}`
    } else {
      document.querySelector("#circlePick".concat(n)).classList.remove("picked");
      n = 1;
      document.querySelector("#circlePick".concat(n)).classList.add("picked");
      document.querySelector(".m_aboutUsArticleCard ").style.backgroundImage = "url('".concat(articles[n].img, "')");
      //document.querySelector(".articleInnerCardName").textContent=`${articles[n].name}`
    }
  }

  //

  // phoneBurger

  if (window.innerHeight > window.innerWidth) {
    console.log(1111111111111);
    document.querySelector("main").style.marginTop = "20vw";
    document.querySelector("#mobileNav").style.display = "block";
    var flagNav = false;
    var burger = document.querySelector("#burger");
    document.querySelector(".o_menubarContainer").style.display = "none";
    burger.addEventListener("click", function () {
      burger.classList.toggle("open");
      if (!flagNav) {
        flagNav = true;
        document.querySelector("#mobileNav").style.backgroundColor = "var(--blue)";
        document.querySelector(".s_mobileNavigation").style.display = "block";
        setTimeout(function () {
          document.querySelector(".s_mobileNavigation").style.opacity = "1";
          document.querySelector("#mobileLogo").style.backgroundImage = "url(\"".concat(logo_namespaceObject, "\")");
          document.querySelector("#mobileLogo").style.backgroundSize = "78% 78%";
          document.querySelector("#mobileLogo").style.backgroundPosition = "20% 50%";
        }, 0);
      } else {
        flagNav = false;
        document.querySelector(".s_mobileNavigation").style.opacity = "0";
        document.querySelector("#mobileNav").style.backgroundColor = "var(--white)";
        document.querySelector("#mobileLogo").style.backgroundImage = "url(\"".concat(logoHeader_namespaceObject, "\")");
        document.querySelector("#mobileLogo").style.backgroundSize = "120% 100%";
        setTimeout(function () {
          document.querySelector(".s_mobileNavigation").style.display = "none";
        }, 300);
      }
    });
  } else {
    document.querySelector("#pcNav").style.display = "block";
  }

  //

  // resize reload

  window.addEventListener('resize', function (event) {
    location.reload();
  });

  //
});
/******/ })()
;
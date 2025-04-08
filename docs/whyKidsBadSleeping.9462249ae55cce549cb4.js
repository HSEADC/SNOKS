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

;// ./src/images/preview/logo.svg
const logo_namespaceObject = __webpack_require__.p + "images/752f59445ba13b14576d.svg";
;// ./src/images/styleguideLogo4.webp
const styleguideLogo4_namespaceObject = __webpack_require__.p + "images/67da518f863ea8300aaa.webp";
;// ./src/js/whyKidsBadSleeping.js



document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };

  // phoneBurger

  if (window.innerHeight > window.innerWidth) {
    document.querySelector("main").style.marginTop = "15vw";
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
        document.querySelector("#mobileLogo").style.backgroundImage = "url(\"".concat(styleguideLogo4_namespaceObject, "\")");
        document.querySelector("#mobileLogo").style.backgroundSize = "100% 100%";
        setTimeout(function () {
          document.querySelector(".s_mobileNavigation").style.display = "none";
        }, 300);
      }
    });
  } else {
    document.querySelector("#pcNav").style.display = "block";
  }

  //

  if (window.innerHeight > window.innerWidth) {
    var styleNavFlag = false;
    document.querySelector(".c_articleNav ul").style.marginLeft = "-40vw";
    document.querySelector(".c_articleNav").style.display = "none";
    document.querySelector(".s_articleChoosenContent").style.width = "85%";
    document.querySelector(".s_articleChoosenContent").style.marginLeft = "14%";
    document.querySelector(".a_articlesOpenIcon").style.display = "block";
    document.querySelector(".s_articleAndNav").style.height = "362vw";
    document.querySelector(".a_articlesOpenIcon").addEventListener("click", function (e) {
      if (!styleNavFlag) {
        styleNavFlag = true;
        document.querySelector(".c_articleNav").style.display = "block";
        setTimeout(function () {
          document.querySelector(".c_articleNav ul").style.marginLeft = "0";
          document.querySelector(".c_articleNav").style.width = "80%";
          document.querySelector(".a_articlesOpenIcon").style.left = "20vw";
          document.querySelector(".a_articlesOpenIcon").style.transform = "rotate(180deg)";
          document.querySelector(".s_articleChoosenContent").style.width = "70%";
          document.querySelector(".s_articleChoosenContent").style.marginLeft = "28%";
          document.querySelector(".s_articleAndNav").style.height = "352vw";
        }, 0);
      } else {
        styleNavFlag = false;
        document.querySelector(".c_articleNav ul").style.marginLeft = "-40vw";
        setTimeout(function () {
          document.querySelector(".c_articleNav").style.display = "none";
          document.querySelector(".s_articleChoosenContent").style.width = "85%";
          document.querySelector(".s_articleChoosenContent").style.marginLeft = "11%";
        }, 300);
        document.querySelector(".a_articlesOpenIcon").style.left = "4vw";
        document.querySelector(".a_articlesOpenIcon").style.transform = "rotate(0deg)";
        document.querySelector(".s_articleAndNav").style.height = "362vw";
      }
    });
  }
  var navigation = document.querySelector(".c_articleNav");
  navigation.addEventListener("click", function (e) {
    if (e.target.className == "a_articleNavigation") {
      document.querySelector("#guideTip".concat(e.target.id.substr(6))).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
  document.addEventListener("scroll", function (e) {
    var sc = window.pageYOffset;
    var wv = window.innerWidth;
    var a = sc * 100 / wv;
    if (a > 95 && a < 114) {
      for (var i = 1; i <= 6; i++) {
        if (document.getElementById("navTip".concat(i)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(i)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip1").classList.add("blueNav");
    } else if (a > 114 && a < 185) {
      for (var _i = 1; _i <= 6; _i++) {
        if (document.getElementById("navTip".concat(_i)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip2").classList.add("blueNav");
    } else if (a > 185 && a < 235) {
      for (var _i2 = 1; _i2 <= 6; _i2++) {
        if (document.getElementById("navTip".concat(_i2)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i2)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip3").classList.add("blueNav");
    } else if (a > 235 && a < 285) {
      for (var _i3 = 1; _i3 <= 6; _i3++) {
        if (document.getElementById("navTip".concat(_i3)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i3)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip4").classList.add("blueNav");
    } else if (a > 285 && a < 340) {
      for (var _i4 = 1; _i4 <= 6; _i4++) {
        if (document.getElementById("navTip".concat(_i4)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i4)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip5").classList.add("blueNav");
    } else if (a > 340 && a < 497) {
      for (var _i5 = 1; _i5 <= 6; _i5++) {
        if (document.getElementById("navTip".concat(_i5)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i5)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip6").classList.add("blueNav");
    }
  });

  /* */

  /* rate */

  document.querySelector("#heart").addEventListener("click", function (e) {
    document.querySelector("#heart").classList.add("picked");
    if (document.getElementById("brokenHeart").classList.contains("picked")) {
      document.getElementById("brokenHeart").classList.remove("picked");
    }
  });
  document.querySelector("#brokenHeart").addEventListener("click", function (e) {
    document.querySelector("#brokenHeart").classList.add("picked");
    if (document.querySelector("#heart").classList.contains("picked")) {
      document.querySelector("#heart").classList.remove("picked");
    }
  });

  /* */

  /* anotherArticle */

  document.querySelector("#anotherArticleBtn1").addEventListener("click", function (e) {
    window.location.href = "../SNOKS/404.html";
  });
  document.querySelector("#anotherArticleBtn2").addEventListener("click", function (e) {
    window.location.href = "../SNOKS/404.html";
  });
  document.querySelector("#anotherArticleBtn3").addEventListener("click", function (e) {
    window.location.href = "../SNOKS/factsAboutSleepingInNature.html";
  });
  document.querySelector("#anotherArticleBtn4").addEventListener("click", function (e) {
    window.location.href = "../SNOKS/404.html";
  });

  /* */

  if (window.innerHeight > window.innerWidth) {
    document.querySelector(".q_timeIcon").addEventListener("click", function (e) {
      if (e.target.classList.contains("timed")) {
        e.target.classList.remove("timed");
      } else {
        e.target.classList.add("timed");
        document.addEventListener("click", function (e) {
          e.target.classList.remove("timed");
          document.removeEventListener("click", e);
        });
      }
    });
  }

  // resize reload

  var saved_width = window.innerWidth;
  window.addEventListener('resize', function (event) {
    if (window.innerWidth != saved_width) {
      saved_width = window.innerWidth;
      setTimeout(function () {
        location.reload();
      }, 100);
    }
  });

  /* */
});
/******/ })()
;
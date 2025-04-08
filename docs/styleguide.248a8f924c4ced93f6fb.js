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
;// ./src/js/styleguide.js



document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };
  var navigation = document.querySelector(".c_styleguideNav");
  navigation.addEventListener("click", function (e) {
    if (e.target.className == "a_styleguideNavigation") {
      document.querySelector("#guideTip".concat(e.target.id.substr(6))).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
  document.addEventListener("scroll", function (e) {
    var sc = window.pageYOffset;
    var wv = window.innerWidth;
    var a = sc * 100 / wv;
    if (a > 95 && a < 130) {
      for (var i = 1; i <= 11; i++) {
        if (document.getElementById("navTip".concat(i)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(i)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip1").classList.add("blueNav");
    } else if (a > 130 && a < 199) {
      for (var _i = 1; _i <= 11; _i++) {
        if (document.getElementById("navTip".concat(_i)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip2").classList.add("blueNav");
    } else if (a > 199 && a < 270) {
      for (var _i2 = 1; _i2 <= 11; _i2++) {
        if (document.getElementById("navTip".concat(_i2)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i2)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip3").classList.add("blueNav");
    } else if (a > 270 && a < 384) {
      for (var _i3 = 1; _i3 <= 11; _i3++) {
        if (document.getElementById("navTip".concat(_i3)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i3)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip4").classList.add("blueNav");
    } else if (a > 384 && a < 447) {
      for (var _i4 = 1; _i4 <= 11; _i4++) {
        if (document.getElementById("navTip".concat(_i4)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i4)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip5").classList.add("blueNav");
    } else if (a > 447 && a < 497) {
      for (var _i5 = 1; _i5 <= 11; _i5++) {
        if (document.getElementById("navTip".concat(_i5)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i5)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip6").classList.add("blueNav");
    } else if (a > 497 && a < 597) {
      for (var _i6 = 1; _i6 <= 11; _i6++) {
        if (document.getElementById("navTip".concat(_i6)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i6)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip7").classList.add("blueNav");
    } else if (a > 597 && a < 676) {
      for (var _i7 = 1; _i7 <= 11; _i7++) {
        if (document.getElementById("navTip".concat(_i7)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i7)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip8").classList.add("blueNav");
    } else if (a > 676 && a < 778) {
      for (var _i8 = 1; _i8 <= 11; _i8++) {
        if (document.getElementById("navTip".concat(_i8)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i8)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip9").classList.add("blueNav");
    } else if (a > 778 && a < 836) {
      for (var _i9 = 1; _i9 <= 11; _i9++) {
        if (document.getElementById("navTip".concat(_i9)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i9)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip10").classList.add("blueNav");
    } else if (a > 836 && a < 1212) {
      for (var _i10 = 1; _i10 <= 11; _i10++) {
        if (document.getElementById("navTip".concat(_i10)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i10)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip11").classList.add("blueNav");
    }
  });
  if (window.innerHeight > window.innerWidth) {
    var styleNavFlag = false;
    document.querySelector(".c_styleguideNav ul").style.marginLeft = "-40vw";
    document.querySelector(".c_styleguideNav").style.display = "none";
    document.querySelector(".o_styleGuide").style.width = "95%";
    document.querySelector(".o_styleGuide").style.marginLeft = "5%";
    document.querySelector(".a_articlesOpenIcon").style.display = "block";
    document.querySelector(".o_styleguideAndNav").style.height = "1250vw";
    document.querySelector(".a_articlesOpenIcon").addEventListener("click", function (e) {
      if (!styleNavFlag) {
        styleNavFlag = true;
        document.querySelector(".c_styleguideNav").style.display = "block";
        setTimeout(function () {
          document.querySelector(".c_styleguideNav ul").style.marginLeft = "0";
          document.querySelector(".o_styleGuide").style.width = "80%";
          document.querySelector(".a_articlesOpenIcon").style.left = "27vw";
          document.querySelector(".a_articlesOpenIcon").style.transform = "rotate(180deg)";
          document.querySelector(".o_styleguideAndNav").style.height = "1150vw";
        }, 0);
      } else {
        styleNavFlag = false;
        document.querySelector(".c_styleguideNav ul").style.marginLeft = "-40vw";
        setTimeout(function () {
          document.querySelector(".c_styleguideNav").style.display = "none";
          document.querySelector(".o_styleGuide").style.width = "95%";
        }, 300);
        document.querySelector(".a_articlesOpenIcon").style.left = "4vw";
        document.querySelector(".a_articlesOpenIcon").style.transform = "rotate(0deg)";
        document.querySelector(".o_styleguideAndNav").style.height = "1250vw";
      }
    });
  }

  // phoneBurger

  if (window.innerHeight > window.innerWidth) {
    document.querySelector("main").style.marginTop = "24vw";
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
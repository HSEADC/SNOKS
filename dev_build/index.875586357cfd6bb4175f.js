/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/aboutUs/article1.webp":
/*!******************************************!*\
  !*** ./src/images/aboutUs/article1.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c759998b62c31a1054c6.webp";

/***/ }),

/***/ "./src/images/aboutUs/article2.webp":
/*!******************************************!*\
  !*** ./src/images/aboutUs/article2.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/a7e3199a5ea3627ce83d.webp";

/***/ }),

/***/ "./src/images/aboutUs/article3.webp":
/*!******************************************!*\
  !*** ./src/images/aboutUs/article3.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/fe83cf08177fad7035ad.webp";

/***/ }),

/***/ "./src/images/aboutUs/article4.webp":
/*!******************************************!*\
  !*** ./src/images/aboutUs/article4.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/180f78a15dd77eccfdc7.webp";

/***/ }),

/***/ "./src/images/aboutUs/article5.webp":
/*!******************************************!*\
  !*** ./src/images/aboutUs/article5.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/586c907768fcd456a940.webp";

/***/ }),

/***/ "./src/images/aboutUs/logoHeader.webp":
/*!********************************************!*\
  !*** ./src/images/aboutUs/logoHeader.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/dfe2dfcce3cd6ec99721.webp";

/***/ }),

/***/ "./src/images/preview/logo.svg":
/*!*************************************!*\
  !*** ./src/images/preview/logo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/752f59445ba13b14576d.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _images_aboutUs_article1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/aboutUs/article1.webp */ "./src/images/aboutUs/article1.webp");
/* harmony import */ var _images_aboutUs_article2_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/aboutUs/article2.webp */ "./src/images/aboutUs/article2.webp");
/* harmony import */ var _images_aboutUs_article3_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/aboutUs/article3.webp */ "./src/images/aboutUs/article3.webp");
/* harmony import */ var _images_aboutUs_article4_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/aboutUs/article4.webp */ "./src/images/aboutUs/article4.webp");
/* harmony import */ var _images_aboutUs_article5_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/aboutUs/article5.webp */ "./src/images/aboutUs/article5.webp");
/* harmony import */ var _images_preview_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/preview/logo.svg */ "./src/images/preview/logo.svg");
/* harmony import */ var _images_aboutUs_logoHeader_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/aboutUs/logoHeader.webp */ "./src/images/aboutUs/logoHeader.webp");








document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };

  // factsAnimations

  var facts = document.querySelector(".factsContainer");
  if (screen.orientation.type == "landscape-primary" || screen.orientation.type == "landscape-secondary") {
    facts.addEventListener("mouseover", function (e) {
      var fact = e.target;
      if (fact.className == "btnCircle") {
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
      } else {
        for (var i = 1; i <= 5; i++) {
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
      }
    });
  }
  if (screen.orientation.type == "portrait-primary" || screen.orientation.type == "portrait-secondary") {
    facts.addEventListener("click", function (e) {
      var fact = e.target;
      if (fact.className == "btnCircle") {
        var num = fact.id.split("")[9];
        for (var i = 1; i <= 5; i++) {
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
      } else {
        for (var _i = 1; _i <= 5; _i++) {
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
    });
  }

  //

  // articles swipe animation

  var articles = {
    1: {
      name: "Почему дети плохо спят?",
      img: _images_aboutUs_article1_webp__WEBPACK_IMPORTED_MODULE_1__
    },
    2: {
      name: "Как помочь ребенку спать лучше?",
      img: _images_aboutUs_article2_webp__WEBPACK_IMPORTED_MODULE_2__
    },
    3: {
      name: "Почему малыши не спят крепко?",
      img: _images_aboutUs_article3_webp__WEBPACK_IMPORTED_MODULE_3__
    },
    4: {
      name: "Причины бессоницы",
      img: _images_aboutUs_article4_webp__WEBPACK_IMPORTED_MODULE_4__
    },
    5: {
      name: "10 фактов о дневном сне",
      img: _images_aboutUs_article5_webp__WEBPACK_IMPORTED_MODULE_5__
    }
  };
  var articlesContainer = document.querySelector(".articlesContainer");
  articlesContainer.addEventListener("click", function (e) {
    if (e.target.classList[0] == "arrow") {
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
      document.querySelector(".articleCard").style.backgroundImage = "url('".concat(articles[n].img, "')");
      document.querySelector(".articleInnerCardName").textContent = "".concat(articles[n].name);
    } else {
      document.querySelector("#circlePick".concat(n)).classList.remove("picked");
      n = 5;
      document.querySelector("#circlePick".concat(n)).classList.add("picked");
      document.querySelector(".articleCard").style.backgroundImage = "url('".concat(articles[n].img, "')");
      document.querySelector(".articleInnerCardName").textContent = "".concat(articles[n].name);
    }
  }
  function nextArticle(n) {
    if (n < 5) {
      document.querySelector("#circlePick".concat(n)).classList.remove("picked");
      n += 1;
      document.querySelector("#circlePick".concat(n)).classList.add("picked");
      document.querySelector(".articleCard").style.backgroundImage = "url('".concat(articles[n].img, "')");
      document.querySelector(".articleInnerCardName").textContent = "".concat(articles[n].name);
    } else {
      document.querySelector("#circlePick".concat(n)).classList.remove("picked");
      n = 1;
      document.querySelector("#circlePick".concat(n)).classList.add("picked");
      document.querySelector(".articleCard").style.backgroundImage = "url('".concat(articles[n].img, "')");
      document.querySelector(".articleInnerCardName").textContent = "".concat(articles[n].name);
    }
  }

  //

  // phoneBurger

  if (window.innerHeight > window.innerWidth) {
    document.querySelector("main").style.marginTop = "20vw";
    document.querySelector("#mobileNav").style.display = "block";
    var flagNav = false;
    var burger = document.querySelector(".burger");
    document.querySelector(".navigation").style.display = "none";
    burger.addEventListener("click", function () {
      burger.classList.toggle("open");
      if (!flagNav) {
        flagNav = true;
        document.querySelector("#mobileNav").style.backgroundColor = "var(--blue)";
        document.querySelector(".burgerNav").style.display = "block";
        setTimeout(function () {
          document.querySelector(".burgerNav").style.opacity = "1";
          document.querySelector("#mobileLogo").style.backgroundImage = "url(\"".concat(_images_preview_logo_svg__WEBPACK_IMPORTED_MODULE_6__, "\")");
          document.querySelector("#mobileLogo").style.backgroundSize = "78% 78%";
          document.querySelector("#mobileLogo").style.backgroundPosition = "20% 50%";
        }, 0);
      } else {
        flagNav = false;
        document.querySelector(".burgerNav").style.opacity = "0";
        document.querySelector("#mobileNav").style.backgroundColor = "var(--white)";
        document.querySelector("#mobileLogo").style.backgroundImage = "url(\"".concat(_images_aboutUs_logoHeader_webp__WEBPACK_IMPORTED_MODULE_7__, "\")");
        document.querySelector("#mobileLogo").style.backgroundSize = "120% 100%";
        setTimeout(function () {
          document.querySelector(".burgerNav").style.display = "none";
        }, 300);
      }
    });
  } else {
    document.querySelector("#pcNav").style.display = "block";
  }

  //

  // resize reload

  //  window.addEventListener('resize', function(event){
  //     location.reload()
  //   });

  //
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguODc1NTg2MzU3Y2ZkNmJiNDE3NWYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnFCO0FBQ2dDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTjtBQUNPO0FBRXRETyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFHLFVBQUFDLENBQUMsRUFBSztFQUVqREMsTUFBTSxDQUFDQyxNQUFNLEdBQUcsWUFBVztJQUN2QkMsVUFBVSxDQUFFLFlBQU07TUFDZEwsUUFBUSxDQUFDTSxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFDLEdBQUc7TUFDdERSLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxLQUFLLENBQUNFLGFBQWEsR0FBQyxNQUFNO0lBQ25FLENBQUMsRUFDQyxJQUFJLENBQUM7RUFDVCxDQUFDOztFQUVQOztFQUVJLElBQUlDLEtBQUssR0FBR1YsUUFBUSxDQUFDVyxhQUFhLENBQUMsaUJBQWlCLENBQUM7RUFFckQsSUFB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QyxhQUFhLENBQUMsQ0FBQ0osS0FBSyxDQUFDOEMsa0JBQWtCLEdBQUMsU0FBUztRQUM3RSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ1QsQ0FBQyxNQUFNO1FBQ0hMLE9BQU8sR0FBRyxLQUFLO1FBQ2ZoRCxRQUFRLENBQUNXLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ0osS0FBSyxDQUFDQyxPQUFPLEdBQUMsR0FBRztRQUN0RFIsUUFBUSxDQUFDVyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNKLEtBQUssQ0FBQzRDLGVBQWUsR0FBQyxjQUFjO1FBQ3pFbkQsUUFBUSxDQUFDVyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUNKLEtBQUssQ0FBQ29DLGVBQWUsWUFBQXRCLE1BQUEsQ0FBU3RCLDREQUFPLFFBQUk7UUFDL0VDLFFBQVEsQ0FBQ1csYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDSixLQUFLLENBQUM2QyxjQUFjLEdBQUMsV0FBVztRQUN0RS9DLFVBQVUsQ0FBQyxZQUFLO1VBQ1pMLFFBQVEsQ0FBQ1csYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDSixLQUFLLENBQUNlLE9BQU8sR0FBQyxNQUFNO1FBQzdELENBQUMsRUFBRSxHQUFHLENBQUM7TUFDWDtJQUNKLENBQUMsQ0FBQztFQUVOLENBQUMsTUFBTTtJQUNIdEIsUUFBUSxDQUFDVyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUNKLEtBQUssQ0FBQ2UsT0FBTyxHQUFDLE9BQU87RUFDMUQ7O0VBRUo7O0VBRUE7O0VBRUU7RUFDQztFQUNBOztFQUVIO0FBRUEsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgaW1nQXJ0MSBmcm9tICcuL2ltYWdlcy9hYm91dFVzL2FydGljbGUxLndlYnAnO1xyXG5pbXBvcnQgaW1nQXJ0MiBmcm9tICcuL2ltYWdlcy9hYm91dFVzL2FydGljbGUyLndlYnAnO1xyXG5pbXBvcnQgaW1nQXJ0MyBmcm9tICcuL2ltYWdlcy9hYm91dFVzL2FydGljbGUzLndlYnAnO1xyXG5pbXBvcnQgaW1nQXJ0NCBmcm9tICcuL2ltYWdlcy9hYm91dFVzL2FydGljbGU0LndlYnAnO1xyXG5pbXBvcnQgaW1nQXJ0NSBmcm9tICcuL2ltYWdlcy9hYm91dFVzL2FydGljbGU1LndlYnAnO1xyXG5cclxuaW1wb3J0IHN2Z0xvZ28gZnJvbSAnLi9pbWFnZXMvcHJldmlldy9sb2dvLnN2ZydcclxuaW1wb3J0IHBuZ0xvZ28gZnJvbSAnLi9pbWFnZXMvYWJvdXRVcy9sb2dvSGVhZGVyLndlYnAnXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZSkgPT4ge1xyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWxvYWRlclwiKS5zdHlsZS5vcGFjaXR5PVwiMFwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWxvYWRlclwiKS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgICwgMTIwMClcclxuICAgICAgfTtcclxuICAgIFxyXG4vLyBmYWN0c0FuaW1hdGlvbnNcclxuXHJcbiAgICBsZXQgZmFjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhY3RzQ29udGFpbmVyXCIpXHJcblxyXG4gICAgaWYgKHNjcmVlbi5vcmllbnRhdGlvbi50eXBlID09IFwibGFuZHNjYXBlLXByaW1hcnlcIiB8fCBzY3JlZW4ub3JpZW50YXRpb24udHlwZSA9PSBcImxhbmRzY2FwZS1zZWNvbmRhcnlcIikge1xyXG4gICAgICAgIGZhY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZhY3QgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgaWYgKGZhY3QuY2xhc3NOYW1lID09IFwiYnRuQ2lyY2xlXCIgKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gZmFjdC5pZC5zcGxpdChcIlwiKVs5XVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmYWN0VGV4dCR7bnVtfWApLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZhY3RUZXh0JHtudW19YCkuc3R5bGUub3BhY2l0eT1cIjFcIjtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJ0blRleHQke251bX1gKS5jbGFzc0xpc3QuYWRkKFwiYmlnZ2VyVGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBidG5DaXJjbGUke251bX1gKS5jbGFzc0xpc3QuYWRkKFwiYmlnQ2lyY2xlXCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnRuVGV4dCR7bnVtfWApLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoNDMwMGRlZylcIiAgXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246MTAwMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiZm9yd2FyZHNcIixcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZmFjdFRleHQke2l9YCkuc3R5bGUub3BhY2l0eT1cIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZmFjdFRleHQke2l9YCkuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J0bkNpcmNsZSR7aX1gKS5jbGFzc05hbWUuaW5jbHVkZXMoXCJiaWdDaXJjbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J0bkNpcmNsZSR7aX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmlnQ2lyY2xlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG5UZXh0JHtpfWApLmNsYXNzTGlzdC5yZW1vdmUoXCJiaWdnZXJUZXh0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG5UZXh0JHtpfWApLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgwZGVnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOjEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcImZvcndhcmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2NyZWVuLm9yaWVudGF0aW9uLnR5cGUgPT0gXCJwb3J0cmFpdC1wcmltYXJ5XCIgfHwgc2NyZWVuLm9yaWVudGF0aW9uLnR5cGUgPT0gXCJwb3J0cmFpdC1zZWNvbmRhcnlcIikge1xyXG5cclxuICAgICAgICBmYWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZhY3QgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgaWYgKGZhY3QuY2xhc3NOYW1lID09IFwiYnRuQ2lyY2xlXCIgKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gZmFjdC5pZC5zcGxpdChcIlwiKVs5XVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnRuQ2lyY2xlJHtpfWApLmNsYXNzTmFtZS5pbmNsdWRlcyhcImJpZ0NpcmNsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnRuQ2lyY2xlJHtpfWApLmNsYXNzTGlzdC5yZW1vdmUoXCJiaWdDaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG5UZXh0JHtpfWApLmNsYXNzTGlzdC5yZW1vdmUoXCJiaWdnZXJUZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZmFjdFRleHQke2l9YCkuc3R5bGUub3BhY2l0eT1cIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZhY3RUZXh0JHtpfWApLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZmFjdFRleHQke251bX1gKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmYWN0VGV4dCR7bnVtfWApLnN0eWxlLm9wYWNpdHk9XCIxXCI7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBidG5UZXh0JHtudW19YCkuY2xhc3NMaXN0LmFkZChcImJpZ2dlclRleHRcIik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnRuQ2lyY2xlJHtudW19YCkuY2xhc3NMaXN0LmFkZChcImJpZ0NpcmNsZVwiKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J0blRleHQke251bX1gKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDQzMDBkZWcpXCIgIFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOjEwMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBcImZvcndhcmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZhY3RUZXh0JHtpfWApLnN0eWxlLm9wYWNpdHk9XCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZhY3RUZXh0JHtpfWApLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG5DaXJjbGUke2l9YCkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYmlnQ2lyY2xlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG5DaXJjbGUke2l9YCkuY2xhc3NMaXN0LnJlbW92ZShcImJpZ0NpcmNsZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnRuVGV4dCR7aX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmlnZ2VyVGV4dFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnRuVGV4dCR7aX1gKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMGRlZylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjoxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJmb3J3YXJkc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgXHJcbiAgICAgICAgfSlcclxuICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgIFxyXG4vL1xyXG5cclxuLy8gYXJ0aWNsZXMgc3dpcGUgYW5pbWF0aW9uXHJcblxyXG4gICAgY29uc3QgYXJ0aWNsZXMgPSB7XHJcbiAgICAgICAgMToge1xyXG4gICAgICAgICAgICBuYW1lOiBcItCf0L7Rh9C10LzRgyDQtNC10YLQuCDQv9C70L7RhdC+INGB0L/Rj9GCP1wiLFxyXG4gICAgICAgICAgICBpbWc6IGltZ0FydDFcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAyOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwi0JrQsNC6INC/0L7QvNC+0YfRjCDRgNC10LHQtdC90LrRgyDRgdC/0LDRgtGMINC70YPRh9GI0LU/XCIsXHJcbiAgICAgICAgICAgIGltZzogaW1nQXJ0MlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIDM6IHtcclxuICAgICAgICAgICAgbmFtZTogXCLQn9C+0YfQtdC80YMg0LzQsNC70YvRiNC4INC90LUg0YHQv9GP0YIg0LrRgNC10L/QutC+P1wiLFxyXG4gICAgICAgICAgICBpbWc6IGltZ0FydDNcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICA0OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwi0J/RgNC40YfQuNC90Ysg0LHQtdGB0YHQvtC90LjRhtGLXCIsXHJcbiAgICAgICAgICAgIGltZzogaW1nQXJ0NFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIDU6IHtcclxuICAgICAgICAgICAgbmFtZTogXCIxMCDRhNCw0LrRgtC+0LIg0L4g0LTQvdC10LLQvdC+0Lwg0YHQvdC1XCIsXHJcbiAgICAgICAgICAgIGltZzogaW1nQXJ0NVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgYXJ0aWNsZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFydGljbGVzQ29udGFpbmVyXCIpO1xyXG4gICAgYXJ0aWNsZXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PSBcImFycm93XCIpIHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFsxXSA9PSBcImFyTGVmdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYXJMZWZ0YCkuYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMHB4KVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTMwcHgpXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwcHgpXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAsIHtcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjozMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJmb3J3YXJkc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNBcnRpY2xlKE51bWJlcihmaW5kQWN0aXZlQXJ0aWNsZSgpKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hclJpZ2h0YCkuYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMHB4KVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoKzMwcHgpXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwcHgpXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAsIHtcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjozMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogXCJmb3J3YXJkc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgbmV4dEFydGljbGUoTnVtYmVyKGZpbmRBY3RpdmVBcnRpY2xlKCkpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gICBmdW5jdGlvbiBmaW5kQWN0aXZlQXJ0aWNsZSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2lyY2xlUGljayR7aX1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJwaWNrZWRcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcmV2aW91c0FydGljbGUobikge1xyXG4gICAgICAgIGlmIChuID4gMSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2lyY2xlUGljayR7bn1gKS5jbGFzc0xpc3QucmVtb3ZlKFwicGlja2VkXCIpXHJcbiAgICAgICAgICAgIG4gLT0gMVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2lyY2xlUGljayR7bn1gKS5jbGFzc0xpc3QuYWRkKFwicGlja2VkXCIpXHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFydGljbGVDYXJkXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1gdXJsKCcke2FydGljbGVzW25dLmltZ30nKWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnRpY2xlSW5uZXJDYXJkTmFtZVwiKS50ZXh0Q29udGVudD1gJHthcnRpY2xlc1tuXS5uYW1lfWBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2lyY2xlUGljayR7bn1gKS5jbGFzc0xpc3QucmVtb3ZlKFwicGlja2VkXCIpXHJcbiAgICAgICAgICAgIG4gPSA1XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaXJjbGVQaWNrJHtufWApLmNsYXNzTGlzdC5hZGQoXCJwaWNrZWRcIilcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJ0aWNsZUNhcmRcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlPWB1cmwoJyR7YXJ0aWNsZXNbbl0uaW1nfScpYFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFydGljbGVJbm5lckNhcmROYW1lXCIpLnRleHRDb250ZW50PWAke2FydGljbGVzW25dLm5hbWV9YFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBuZXh0QXJ0aWNsZShuKSB7XHJcbiAgICAgICAgaWYgKG4gPCA1KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaXJjbGVQaWNrJHtufWApLmNsYXNzTGlzdC5yZW1vdmUoXCJwaWNrZWRcIilcclxuICAgICAgICAgICAgbiArPSAxXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaXJjbGVQaWNrJHtufWApLmNsYXNzTGlzdC5hZGQoXCJwaWNrZWRcIilcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJ0aWNsZUNhcmRcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlPWB1cmwoJyR7YXJ0aWNsZXNbbl0uaW1nfScpYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFydGljbGVJbm5lckNhcmROYW1lXCIpLnRleHRDb250ZW50PWAke2FydGljbGVzW25dLm5hbWV9YFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaXJjbGVQaWNrJHtufWApLmNsYXNzTGlzdC5yZW1vdmUoXCJwaWNrZWRcIilcclxuICAgICAgICAgICAgbiA9IDFcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NpcmNsZVBpY2ske259YCkuY2xhc3NMaXN0LmFkZChcInBpY2tlZFwiKVxyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnRpY2xlQ2FyZFwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9YHVybCgnJHthcnRpY2xlc1tuXS5pbWd9JylgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJ0aWNsZUlubmVyQ2FyZE5hbWVcIikudGV4dENvbnRlbnQ9YCR7YXJ0aWNsZXNbbl0ubmFtZX1gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuLy9cclxuXHJcblxyXG4vLyBwaG9uZUJ1cmdlclxyXG5cclxuICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPiB3aW5kb3cuaW5uZXJXaWR0aCkgeyBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5zdHlsZS5tYXJnaW5Ub3A9XCIyMHZ3XCJcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZU5hdlwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgIGxldCBmbGFnTmF2ID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uXCIpLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XHJcbiAgICAgICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICBpZiAoIWZsYWdOYXYpIHtcclxuICAgICAgICAgICAgICAgIGZsYWdOYXYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVOYXZcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwidmFyKC0tYmx1ZSlcIlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJOYXZcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJOYXZcIikuc3R5bGUub3BhY2l0eT1cIjFcIjtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZUxvZ29cIikuc3R5bGUuYmFja2dyb3VuZEltYWdlPWB1cmwoXCIke3N2Z0xvZ299XCIpYFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTG9nb1wiKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIjc4JSA3OCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVMb2dvXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIjIwJSA1MCVcIlxyXG4gICAgICAgICAgICAgICAgfSwgMClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZsYWdOYXYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyTmF2XCIpLnN0eWxlLm9wYWNpdHk9XCIwXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZU5hdlwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJ2YXIoLS13aGl0ZSlcIlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVMb2dvXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1gdXJsKFwiJHtwbmdMb2dvfVwiKWBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTG9nb1wiKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIjEyMCUgMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIH0sIDMwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwY05hdlwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgfVxyXG5cclxuLy9cclxuXHJcbi8vIHJlc2l6ZSByZWxvYWRcclxuXHJcbiAgLy8gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgIC8vICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAvLyAgIH0pO1xyXG5cclxuLy9cclxuXHJcbn0pIl0sIm5hbWVzIjpbImltZ0FydDEiLCJpbWdBcnQyIiwiaW1nQXJ0MyIsImltZ0FydDQiLCJpbWdBcnQ1Iiwic3ZnTG9nbyIsInBuZ0xvZ28iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwid2luZG93Iiwib25sb2FkIiwic2V0VGltZW91dCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsImZhY3RzIiwicXVlcnlTZWxlY3RvciIsInNjcmVlbiIsIm9yaWVudGF0aW9uIiwidHlwZSIsImZhY3QiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJudW0iLCJpZCIsInNwbGl0IiwiY29uY2F0IiwiZGlzcGxheSIsImNsYXNzTGlzdCIsImFkZCIsImFuaW1hdGUiLCJ0cmFuc2Zvcm0iLCJkdXJhdGlvbiIsImZpbGwiLCJpIiwiaW5jbHVkZXMiLCJyZW1vdmUiLCJhcnRpY2xlcyIsIm5hbWUiLCJpbWciLCJhcnRpY2xlc0NvbnRhaW5lciIsIml0ZXJhdGlvbnMiLCJwcmV2aW91c0FydGljbGUiLCJOdW1iZXIiLCJmaW5kQWN0aXZlQXJ0aWNsZSIsIm5leHRBcnRpY2xlIiwiY29udGFpbnMiLCJuIiwiYmFja2dyb3VuZEltYWdlIiwidGV4dENvbnRlbnQiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJtYXJnaW5Ub3AiLCJmbGFnTmF2IiwiYnVyZ2VyIiwidG9nZ2xlIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9
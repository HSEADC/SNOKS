/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/test.css":
/*!**********************!*\
  !*** ./src/test.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ }),

/***/ "./src/images/tests/1.webp":
/*!*********************************!*\
  !*** ./src/images/tests/1.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6dba095370c3d784f775.webp";

/***/ }),

/***/ "./src/images/tests/2.webp":
/*!*********************************!*\
  !*** ./src/images/tests/2.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/e04057da52fc5dd6bae1.webp";

/***/ }),

/***/ "./src/images/tests/3.webp":
/*!*********************************!*\
  !*** ./src/images/tests/3.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/8496346dca1c678f01b6.webp";

/***/ }),

/***/ "./src/images/tests/4.webp":
/*!*********************************!*\
  !*** ./src/images/tests/4.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/a324afd9ed3e82e90fe8.webp";

/***/ }),

/***/ "./src/images/tests/5.webp":
/*!*********************************!*\
  !*** ./src/images/tests/5.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c908890d71bb93bc4118.webp";

/***/ }),

/***/ "./src/images/tests/6.webp":
/*!*********************************!*\
  !*** ./src/images/tests/6.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/677749a58ab0def621a5.webp";

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
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test.css */ "./src/test.css");
/* harmony import */ var _images_preview_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/preview/logo.svg */ "./src/images/preview/logo.svg");
/* harmony import */ var _images_aboutUs_logoHeader_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/aboutUs/logoHeader.webp */ "./src/images/aboutUs/logoHeader.webp");
/* harmony import */ var _images_tests_1_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/tests/1.webp */ "./src/images/tests/1.webp");
/* harmony import */ var _images_tests_2_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/tests/2.webp */ "./src/images/tests/2.webp");
/* harmony import */ var _images_tests_3_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/tests/3.webp */ "./src/images/tests/3.webp");
/* harmony import */ var _images_tests_4_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/tests/4.webp */ "./src/images/tests/4.webp");
/* harmony import */ var _images_tests_5_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/tests/5.webp */ "./src/images/tests/5.webp");
/* harmony import */ var _images_tests_6_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/tests/6.webp */ "./src/images/tests/6.webp");









var imagesTests = {
  1: _images_tests_1_webp__WEBPACK_IMPORTED_MODULE_3__,
  2: _images_tests_2_webp__WEBPACK_IMPORTED_MODULE_4__,
  3: _images_tests_3_webp__WEBPACK_IMPORTED_MODULE_5__,
  4: _images_tests_4_webp__WEBPACK_IMPORTED_MODULE_6__,
  5: _images_tests_5_webp__WEBPACK_IMPORTED_MODULE_7__,
  6: _images_tests_6_webp__WEBPACK_IMPORTED_MODULE_8__
};
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };

  /* phoneBurger */

  if (window.innerHeight > window.innerWidth) {
    document.querySelector("main").style.marginTop = "25vw";
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
          document.querySelector("#mobileLogo").style.backgroundImage = "url(\"".concat(_images_preview_logo_svg__WEBPACK_IMPORTED_MODULE_1__, "\")");
          document.querySelector("#mobileLogo").style.backgroundSize = "78% 78%";
          document.querySelector("#mobileLogo").style.backgroundPosition = "20% 50%";
        }, 0);
      } else {
        flagNav = false;
        document.querySelector(".burgerNav").style.opacity = "0";
        document.querySelector("#mobileNav").style.backgroundColor = "var(--white)";
        document.querySelector("#mobileLogo").style.backgroundImage = "url(\"".concat(_images_aboutUs_logoHeader_webp__WEBPACK_IMPORTED_MODULE_2__, "\")");
        document.querySelector("#mobileLogo").style.backgroundSize = "120% 100%";
        setTimeout(function () {
          document.querySelector(".burgerNav").style.display = "none";
        }, 300);
      }
    });
  } else {
    document.querySelector("#pcNav").style.display = "block";
  }

  /* */

  /* generateQuestion */

  var testData;
  if (localStorage.getItem('test')) {
    testData = JSON.parse(localStorage.getItem('test'));
    document.querySelector(".testCard").style.backgroundImage = "url(".concat(imagesTests[testData[1]], ")");
    document.querySelector(".testName").textContent = "".concat(testData[0].name);
    document.querySelector("h1").textContent = "".concat(testData[0].name);
    document.querySelector("#goIcon").addEventListener("click", function (e) {
      window.location.href = '../tests.html';
    });
  }
  console.log(testData);
  var answers = {};
  for (var elem in testData[0].questions) {
    answers[elem.substr(8)] = 0;
  }

  /* testUIShow */

  document.querySelector(".startTest").addEventListener("click", function (e) {
    document.getElementById("testUI").style.display = "flex";
    document.getElementById("testTitle").style.display = "none";
    var id = 1;
    document.querySelector(".answers").addEventListener("click", function (e) {
      if (e.target.classList.contains("answer")) {
        btnClicked([e.target.id, answers, id]);
      }
    });
    document.querySelector(".navigationCircles").addEventListener("click", function (e) {
      if (e.target.id == "prev") {
        id -= 1;
        generateQuestion(testData[0].questions["question".concat(id)], id, answers);
      } else if (e.target.id == "next") {
        console.log(Object.keys(testData[0].questions).length);
        id += 1;
        generateQuestion(testData[0].questions["question".concat(id)], id, answers);
      }
    });

    /* */

    generateQuestion(testData[0].questions["question".concat(id)], id, answers);
    function generateQuestion(answers, id, clicked) {
      resetAnswers();
      document.querySelector(".num").textContent = "".concat(id, "/").concat(Object.keys(testData[0].questions).length);
      document.querySelector(".question").textContent = "".concat(answers.text);
      var container = document.querySelector(".answers");
      var count = 0;
      for (var _elem in answers.answers) {
        var btn = document.createElement("button");
        btn.classList.add("answer");
        btn.id = "".concat(alphabet[count]);
        container.append(btn);
        var answer = document.createElement("p");
        answer.textContent = "".concat(answers.answers[_elem]);
        btn.append(answer);
        var tip = document.createElement('p');
        tip.classList.add("answerTip");
        tip.textContent = "".concat(alphabet.split("")[count]);
        btn.append(tip);
        count++;
      }
      if (clicked[id] != 0) {
        document.getElementById(clicked[id]).classList.add("clicked");
      }

      /* navCircles */

      if (id == 1 && id != Object.keys(testData[0].questions).length) {
        document.getElementById("next").style.opacity = "1";
        document.getElementById("next").style.pointerEvents = "all";
        document.getElementById("prev").style.opacity = "0";
        document.getElementById("prev").style.pointerEvents = "none";
      } else if (id == Object.keys(testData[0].questions).length && id != 1) {
        document.getElementById("next").style.opacity = "0";
        document.getElementById("next").style.pointerEvents = "none";
        document.getElementById("prev").style.opacity = "1";
        document.getElementById("prev").style.pointerEvents = "all";
      } else {
        document.getElementById("prev").style.opacity = "1";
        document.getElementById("prev").style.pointerEvents = "all";
        document.getElementById("next").style.opacity = "1";
        document.getElementById("next").style.pointerEvents = "all";
      }
      if (id == Object.keys(testData[0].questions).length) {
        document.getElementById("result").style.display = "block";
      } else {
        document.getElementById("result").style.display = "none";
      }

      /* */
    }
    function btnClicked(a) {
      var id = a[0];
      var answers = a[1];
      var question = a[2];
      answers[question] = id;
      console.log(a);
      document.querySelectorAll(".answer").forEach(function (answer) {
        if (answer.classList.contains("clicked")) {
          answer.classList.remove("clicked");
        }
      });
      document.querySelector("#".concat(id)).classList.add("clicked");
    }
    function resetAnswers() {
      document.querySelectorAll(".answer").forEach(function (answer) {
        document.querySelector(".answers").removeChild(answer);
      });
    }
  });

  /* */

  // resize reload

  //   window.addEventListener('resize', function(event){
  //       location.reload()
  //  });

  //
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5kZmQyZmUzOWM3YmZkODQ1YTc3ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxQjtBQUM0QjtBQUNPO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRTlDLElBQU1RLFdBQVcsR0FBRztFQUNoQixDQUFDLEVBQUVOLGlEQUFRO0VBQ1gsQ0FBQyxFQUFFQyxpREFBUTtFQUNYLENBQUMsRUFBRUMsaURBQVE7RUFDWCxDQUFDLEVBQUVDLGlEQUFRO0VBQ1gsQ0FBQyxFQUFFQyxpREFBUTtFQUNYLENBQUMsRUFBRUMsaURBQVFBO0FBQ2YsQ0FBQztBQUVELElBQU1FLFFBQVEsR0FBRyw0QkFBNEI7QUFHN0NDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUcsVUFBQUMsQ0FBQyxFQUFLO0VBRWpEQyxNQUFNLENBQUNDLE1BQU0sR0FBRyxZQUFXO0lBQ3ZCQyxVQUFVLENBQUUsWUFBTTtNQUNkTCxRQUFRLENBQUNNLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUMsR0FBRztNQUN0RFIsUUFBUSxDQUFDTSxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUNDLEtBQUssQ0FBQ0UsYUFBYSxHQUFDLE1BQU07SUFDbkUsQ0FBQyxFQUNDLElBQUksQ0FBQztFQUNYLENBQUM7O0VBRUw7O0VBRUksSUFBSU4sTUFBTSxDQUFDTyxXQUFXLEdBQUdQLE1BQU0sQ0FBQ1EsVUFBVSxFQUFFO0lBQ3hDWCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ0wsS0FBSyxDQUFDTSxTQUFTLEdBQUMsTUFBTTtJQUNyRGIsUUFBUSxDQUFDWSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNMLEtBQUssQ0FBQ08sT0FBTyxHQUFDLE9BQU87SUFDMUQsSUFBSUMsT0FBTyxHQUFHLEtBQUs7SUFDbkIsSUFBTUMsTUFBTSxHQUFHaEIsUUFBUSxDQUFDWSxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ2hEWixRQUFRLENBQUNZLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQ0wsS0FBSyxDQUFDTyxPQUFPLEdBQUMsTUFBTTtJQUMxREUsTUFBTSxDQUFDZixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztNQUN4Q2UsTUFBTSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUM7TUFDL0IsSUFBSSxDQUFDSCxPQUFPLEVBQUU7UUFDVkEsT0FBTyxHQUFHLElBQUk7UUFDZGYsUUFBUSxDQUFDWSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNMLEtBQUssQ0FBQ1ksZUFBZSxHQUFDLGFBQWE7UUFDeEVuQixRQUFRLENBQUNZLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ0wsS0FBSyxDQUFDTyxPQUFPLEdBQUMsT0FBTztRQUMxRFQsVUFBVSxDQUFDLFlBQUs7VUFDWkwsUUFBUSxDQUFDWSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNMLEtBQUssQ0FBQ0MsT0FBTyxHQUFDLEdBQUc7VUFDdERSLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDTCxLQUFLLENBQUNhLGVBQWUsWUFBQUMsTUFBQSxDQUFTL0IscURBQU8sUUFBSTtVQUMvRVUsUUFBUSxDQUFDWSxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUNMLEtBQUssQ0FBQ2UsY0FBYyxHQUFDLFNBQVM7VUFDcEV0QixRQUFRLENBQUNZLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQ0wsS0FBSyxDQUFDZ0Isa0JBQWtCLEdBQUMsU0FBUztRQUM1RSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ1QsQ0FBQyxNQUFNO1FBQ0hSLE9BQU8sR0FBRyxLQUFLO1FBQ2ZmLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDTCxLQUFLLENBQUNDLE9BQU8sR0FBQyxHQUFHO1FBQ3REUixRQUFRLENBQUNZLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ0wsS0FBSyxDQUFDWSxlQUFlLEdBQUMsY0FBYztRQUN6RW5CLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDTCxLQUFLLENBQUNhLGVBQWUsWUFBQUMsTUFBQSxDQUFTOUIsNERBQU8sUUFBSTtRQUMvRVMsUUFBUSxDQUFDWSxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUNMLEtBQUssQ0FBQ2UsY0FBYyxHQUFDLFdBQVc7UUFDdEVqQixVQUFVLENBQUMsWUFBSztVQUNaTCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ0wsS0FBSyxDQUFDTyxPQUFPLEdBQUMsTUFBTTtRQUM3RCxDQUFDLEVBQUUsR0FBRyxDQUFDO01BQ1g7SUFDSixDQUFDLENBQUM7RUFHTixDQUFDLE1BQU07SUFDSGQsUUFBUSxDQUFDWSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUNMLEtBQUssQ0FBQ08sT0FBTyxHQUFDLE9BQU87RUFDMUQ7O0VBRUo7O0VBSUE7O0VBR0ksSUFBSVUsUUFBUTtFQUNaLElBQUlDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0lBQzlCRixRQUFRLEdBQUdHLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRDFCLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDTCxLQUFLLENBQUNhLGVBQWUsVUFBQUMsTUFBQSxDQUFRdkIsV0FBVyxDQUFDMEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQUc7SUFDNUZ4QixRQUFRLENBQUNZLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ2lCLFdBQVcsTUFBQVIsTUFBQSxDQUFJRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNNLElBQUksQ0FBRTtJQUNyRTlCLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDaUIsV0FBVyxNQUFBUixNQUFBLENBQUlHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ00sSUFBSSxDQUFFO0lBRTlEOUIsUUFBUSxDQUFDWSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNYLGdCQUFnQixDQUFDLE9BQU8sRUFBRyxVQUFBQyxDQUFDLEVBQUs7TUFDL0RDLE1BQU0sQ0FBQzRCLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLGVBQWU7SUFDMUMsQ0FBQyxDQUFDO0VBQ047RUFFQUMsT0FBTyxDQUFDQyxHQUFHLENBQUNWLFFBQVEsQ0FBQztFQUVyQixJQUFJVyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0VBQ2hCLEtBQUssSUFBSUMsSUFBSSxJQUFJWixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNhLFNBQVMsRUFBRTtJQUNwQ0YsT0FBTyxDQUFDQyxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDL0I7O0VBRUE7O0VBRUF0QyxRQUFRLENBQUNZLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ1gsZ0JBQWdCLENBQUMsT0FBTyxFQUFHLFVBQUFDLENBQUMsRUFBSztJQUNsRUYsUUFBUSxDQUFDTSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQ08sT0FBTyxHQUFDLE1BQU07SUFDdERkLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxLQUFLLENBQUNPLE9BQU8sR0FBQyxNQUFNO0lBRXpELElBQUl5QixFQUFFLEdBQUcsQ0FBQztJQUVWdkMsUUFBUSxDQUFDWSxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUNYLGdCQUFnQixDQUFDLE9BQU8sRUFBRyxVQUFBQyxDQUFDLEVBQUs7TUFDaEUsSUFBSUEsQ0FBQyxDQUFDc0MsTUFBTSxDQUFDdkIsU0FBUyxDQUFDd0IsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3ZDQyxVQUFVLENBQUMsQ0FBQ3hDLENBQUMsQ0FBQ3NDLE1BQU0sQ0FBQ0QsRUFBRSxFQUFFSixPQUFPLEVBQUVJLEVBQUUsQ0FBQyxDQUFDO01BQzFDO0lBQ0osQ0FBQyxDQUFDO0lBR0Z2QyxRQUFRLENBQUNZLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDWCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUcsVUFBQUMsQ0FBQyxFQUFLO01BRzFFLElBQUlBLENBQUMsQ0FBQ3NDLE1BQU0sQ0FBQ0QsRUFBRSxJQUFJLE1BQU0sRUFBRTtRQUN2QkEsRUFBRSxJQUFJLENBQUM7UUFDUEksZ0JBQWdCLENBQUNuQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNhLFNBQVMsWUFBQWhCLE1BQUEsQ0FBWWtCLEVBQUUsRUFBRyxFQUFFQSxFQUFFLEVBQUVKLE9BQU8sQ0FBQztNQUN6RSxDQUFDLE1BQU0sSUFBSWpDLENBQUMsQ0FBQ3NDLE1BQU0sQ0FBQ0QsRUFBRSxJQUFJLE1BQU0sRUFBRTtRQUM5Qk4sT0FBTyxDQUFDQyxHQUFHLENBQUNVLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDckIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDYSxTQUFTLENBQUMsQ0FBQ1MsTUFBTSxDQUFDO1FBQ3REUCxFQUFFLElBQUksQ0FBQztRQUNQSSxnQkFBZ0IsQ0FBQ25CLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ2EsU0FBUyxZQUFBaEIsTUFBQSxDQUFZa0IsRUFBRSxFQUFHLEVBQUVBLEVBQUUsRUFBRUosT0FBTyxDQUFDO01BQ3pFO0lBQ0osQ0FBQyxDQUFDOztJQUVOOztJQUdJUSxnQkFBZ0IsQ0FBQ25CLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ2EsU0FBUyxZQUFBaEIsTUFBQSxDQUFZa0IsRUFBRSxFQUFHLEVBQUVBLEVBQUUsRUFBRUosT0FBTyxDQUFDO0lBRXJFLFNBQVNRLGdCQUFnQkEsQ0FBQ1IsT0FBTyxFQUFFSSxFQUFFLEVBQUVRLE9BQU8sRUFBRTtNQUM1Q0MsWUFBWSxDQUFDLENBQUM7TUFFZGhELFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDaUIsV0FBVyxNQUFBUixNQUFBLENBQUlrQixFQUFFLE9BQUFsQixNQUFBLENBQUl1QixNQUFNLENBQUNDLElBQUksQ0FBQ3JCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ2EsU0FBUyxDQUFDLENBQUNTLE1BQU0sQ0FBRTtNQUUvRjlDLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDaUIsV0FBVyxNQUFBUixNQUFBLENBQUljLE9BQU8sQ0FBQ2MsSUFBSSxDQUFFO01BRWpFLElBQU1DLFNBQVMsR0FBR2xELFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFVBQVUsQ0FBQztNQUNwRCxJQUFJdUMsS0FBSyxHQUFHLENBQUM7TUFDYixLQUFLLElBQUlmLEtBQUksSUFBSUQsT0FBTyxDQUFDQSxPQUFPLEVBQUU7UUFDOUIsSUFBTWlCLEdBQUcsR0FBR3BELFFBQVEsQ0FBQ3FELGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDNUNELEdBQUcsQ0FBQ25DLFNBQVMsQ0FBQ3FDLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDM0JGLEdBQUcsQ0FBQ2IsRUFBRSxNQUFBbEIsTUFBQSxDQUFNdEIsUUFBUSxDQUFDb0QsS0FBSyxDQUFDLENBQUU7UUFDN0JELFNBQVMsQ0FBQ0ssTUFBTSxDQUFDSCxHQUFHLENBQUM7UUFDckIsSUFBTUksTUFBTSxHQUFHeEQsUUFBUSxDQUFDcUQsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUMxQ0csTUFBTSxDQUFDM0IsV0FBVyxNQUFBUixNQUFBLENBQUljLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDQyxLQUFJLENBQUMsQ0FBRTtRQUM3Q2dCLEdBQUcsQ0FBQ0csTUFBTSxDQUFDQyxNQUFNLENBQUM7UUFFbEIsSUFBTUMsR0FBRyxHQUFHekQsUUFBUSxDQUFDcUQsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUN2Q0ksR0FBRyxDQUFDeEMsU0FBUyxDQUFDcUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUM5QkcsR0FBRyxDQUFDNUIsV0FBVyxNQUFBUixNQUFBLENBQUl0QixRQUFRLENBQUMyRCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUNQLEtBQUssQ0FBQyxDQUFFO1FBQzlDQyxHQUFHLENBQUNHLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDO1FBRWZOLEtBQUssRUFBRTtNQUNYO01BRUEsSUFBSUosT0FBTyxDQUFDUixFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDbEJ2QyxRQUFRLENBQUNNLGNBQWMsQ0FBQ3lDLE9BQU8sQ0FBQ1IsRUFBRSxDQUFDLENBQUMsQ0FBQ3RCLFNBQVMsQ0FBQ3FDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDakU7O01BR1g7O01BRVcsSUFBSWYsRUFBRSxJQUFJLENBQUMsSUFBSUEsRUFBRSxJQUFJSyxNQUFNLENBQUNDLElBQUksQ0FBQ3JCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ2EsU0FBUyxDQUFDLENBQUNTLE1BQU0sRUFBRTtRQUM1RDlDLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBQyxHQUFHO1FBQ2pEUixRQUFRLENBQUNNLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsS0FBSyxDQUFDRSxhQUFhLEdBQUMsS0FBSztRQUV6RFQsUUFBUSxDQUFDTSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFDLEdBQUc7UUFDakRSLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLLENBQUNFLGFBQWEsR0FBQyxNQUFNO01BQzlELENBQUMsTUFBTSxJQUFJOEIsRUFBRSxJQUFJSyxNQUFNLENBQUNDLElBQUksQ0FBQ3JCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ2EsU0FBUyxDQUFDLENBQUNTLE1BQU0sSUFBSVAsRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNuRXZDLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBQyxHQUFHO1FBQ2pEUixRQUFRLENBQUNNLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsS0FBSyxDQUFDRSxhQUFhLEdBQUMsTUFBTTtRQUUxRFQsUUFBUSxDQUFDTSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFDLEdBQUc7UUFDakRSLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLLENBQUNFLGFBQWEsR0FBQyxLQUFLO01BQzdELENBQUMsTUFBTTtRQUNIVCxRQUFRLENBQUNNLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUMsR0FBRztRQUNqRFIsUUFBUSxDQUFDTSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUNDLEtBQUssQ0FBQ0UsYUFBYSxHQUFDLEtBQUs7UUFDekRULFFBQVEsQ0FBQ00sY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBQyxHQUFHO1FBQ2pEUixRQUFRLENBQUNNLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsS0FBSyxDQUFDRSxhQUFhLEdBQUMsS0FBSztNQUM3RDtNQUVBLElBQUk4QixFQUFFLElBQUlLLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDckIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDYSxTQUFTLENBQUMsQ0FBQ1MsTUFBTSxFQUFFO1FBQ2pEOUMsUUFBUSxDQUFDTSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQ08sT0FBTyxHQUFDLE9BQU87TUFDM0QsQ0FBQyxNQUFNO1FBQ0hkLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUNPLE9BQU8sR0FBQyxNQUFNO01BQzFEOztNQUVaO0lBQ1E7SUFFQSxTQUFTNEIsVUFBVUEsQ0FBQ2lCLENBQUMsRUFBRTtNQUNuQixJQUFJcEIsRUFBRSxHQUFHb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNiLElBQUl4QixPQUFPLEdBQUd3QixDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2xCLElBQUlDLFFBQVEsR0FBR0QsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNuQnhCLE9BQU8sQ0FBQ3lCLFFBQVEsQ0FBQyxHQUFHckIsRUFBRTtNQUN0Qk4sT0FBTyxDQUFDQyxHQUFHLENBQUN5QixDQUFDLENBQUM7TUFFZDNELFFBQVEsQ0FBQzZELGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQU4sTUFBTSxFQUFJO1FBQ25ELElBQUlBLE1BQU0sQ0FBQ3ZDLFNBQVMsQ0FBQ3dCLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtVQUN0Q2UsTUFBTSxDQUFDdkMsU0FBUyxDQUFDOEMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUN0QztNQUNKLENBQUMsQ0FBQztNQUVGL0QsUUFBUSxDQUFDWSxhQUFhLEtBQUFTLE1BQUEsQ0FBS2tCLEVBQUUsQ0FBRSxDQUFDLENBQUN0QixTQUFTLENBQUNxQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQzdEO0lBRUEsU0FBU04sWUFBWUEsQ0FBQSxFQUFHO01BQ3BCaEQsUUFBUSxDQUFDNkQsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBTixNQUFNLEVBQUk7UUFDbkR4RCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ29ELFdBQVcsQ0FBQ1IsTUFBTSxDQUFDO01BQzFELENBQUMsQ0FBQztJQUNOO0VBRUosQ0FBQyxDQUFDOztFQUdOOztFQUdBOztFQUVDO0VBQ0E7RUFDQzs7RUFFRjtBQUdBLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvLi9zcmMvdGVzdC5jc3MiLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0Ly4vc3JjL2pzL3Rlc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuLi90ZXN0LmNzcyc7XHJcbmltcG9ydCBzdmdMb2dvIGZyb20gJy4uL2ltYWdlcy9wcmV2aWV3L2xvZ28uc3ZnJztcclxuaW1wb3J0IHBuZ0xvZ28gZnJvbSAnLi4vaW1hZ2VzL2Fib3V0VXMvbG9nb0hlYWRlci53ZWJwJztcclxuaW1wb3J0IGltZ1Rlc3QxIGZyb20gJy4uL2ltYWdlcy90ZXN0cy8xLndlYnAnO1xyXG5pbXBvcnQgaW1nVGVzdDIgZnJvbSAnLi4vaW1hZ2VzL3Rlc3RzLzIud2VicCc7XHJcbmltcG9ydCBpbWdUZXN0MyBmcm9tICcuLi9pbWFnZXMvdGVzdHMvMy53ZWJwJztcclxuaW1wb3J0IGltZ1Rlc3Q0IGZyb20gJy4uL2ltYWdlcy90ZXN0cy80LndlYnAnO1xyXG5pbXBvcnQgaW1nVGVzdDUgZnJvbSAnLi4vaW1hZ2VzL3Rlc3RzLzUud2VicCc7XHJcbmltcG9ydCBpbWdUZXN0NiBmcm9tICcuLi9pbWFnZXMvdGVzdHMvNi53ZWJwJztcclxuXHJcbmNvbnN0IGltYWdlc1Rlc3RzID0ge1xyXG4gICAgMTogaW1nVGVzdDEsXHJcbiAgICAyOiBpbWdUZXN0MixcclxuICAgIDM6IGltZ1Rlc3QzLFxyXG4gICAgNDogaW1nVGVzdDQsXHJcbiAgICA1OiBpbWdUZXN0NSxcclxuICAgIDY6IGltZ1Rlc3Q2LFxyXG59XHJcblxyXG5jb25zdCBhbHBoYWJldCA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIlxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChlKSA9PiB7XHJcbiBcclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWxvYWRlclwiKS5zdHlsZS5vcGFjaXR5PVwiMFwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWxvYWRlclwiKS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgICwgMTIwMClcclxuICAgIH07XHJcblxyXG4vKiBwaG9uZUJ1cmdlciAqL1xyXG4gICAgXHJcbiAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID4gd2luZG93LmlubmVyV2lkdGgpIHsgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuc3R5bGUubWFyZ2luVG9wPVwiMjV2d1wiXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVOYXZcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICBsZXQgZmxhZ05hdiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvblwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgICAgICAgICAgaWYgKCFmbGFnTmF2KSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnTmF2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTmF2XCIpLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInZhcigtLWJsdWUpXCJcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyTmF2XCIpLnN0eWxlLm9wYWNpdHk9XCIxXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVMb2dvXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1gdXJsKFwiJHtzdmdMb2dvfVwiKWBcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZUxvZ29cIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCI3OCUgNzglXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVMb2dvXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIjIwJSA1MCVcIlxyXG4gICAgICAgICAgICAgICAgfSwgMClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZsYWdOYXYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyTmF2XCIpLnN0eWxlLm9wYWNpdHk9XCIwXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZU5hdlwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJ2YXIoLS13aGl0ZSlcIlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVMb2dvXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1gdXJsKFwiJHtwbmdMb2dvfVwiKWBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTG9nb1wiKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIjEyMCUgMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIH0sIDMwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwY05hdlwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgfVxyXG4gICAgXHJcbi8qICovXHJcblxyXG5cclxuXHJcbi8qIGdlbmVyYXRlUXVlc3Rpb24gKi9cclxuXHJcblxyXG4gICAgbGV0IHRlc3REYXRhO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpIHtcclxuICAgICAgICB0ZXN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXN0Q2FyZFwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9YHVybCgke2ltYWdlc1Rlc3RzW3Rlc3REYXRhWzFdXX0pYDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlc3ROYW1lXCIpLnRleHRDb250ZW50PWAke3Rlc3REYXRhWzBdLm5hbWV9YDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIikudGV4dENvbnRlbnQ9YCR7dGVzdERhdGFbMF0ubmFtZX1gO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dvSWNvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi4vdGVzdHMuaHRtbCc7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0ZXN0RGF0YSlcclxuXHJcbiAgICBsZXQgYW5zd2VycyA9IHt9XHJcbiAgICBmb3IgKGxldCBlbGVtIGluIHRlc3REYXRhWzBdLnF1ZXN0aW9ucykge1xyXG4gICAgICAgIGFuc3dlcnNbZWxlbS5zdWJzdHIoOCldID0gMFxyXG4gICAgfVxyXG5cclxuICAgIC8qIHRlc3RVSVNob3cgKi9cclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0VGVzdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RVSVwiKS5zdHlsZS5kaXNwbGF5PVwiZmxleFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVzdFRpdGxlXCIpLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XHJcblxyXG4gICAgICAgIGxldCBpZCA9IDE7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW5zd2Vyc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFuc3dlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgYnRuQ2xpY2tlZChbZS50YXJnZXQuaWQsIGFuc3dlcnMsIGlkXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25DaXJjbGVzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSBcInByZXZcIikge1xyXG4gICAgICAgICAgICAgICAgaWQgLT0gMVxyXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVRdWVzdGlvbih0ZXN0RGF0YVswXS5xdWVzdGlvbnNbYHF1ZXN0aW9uJHtpZH1gXSwgaWQsIGFuc3dlcnMpIFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyh0ZXN0RGF0YVswXS5xdWVzdGlvbnMpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIGlkICs9IDFcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRlUXVlc3Rpb24odGVzdERhdGFbMF0ucXVlc3Rpb25zW2BxdWVzdGlvbiR7aWR9YF0sIGlkLCBhbnN3ZXJzKSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgLyogKi9cclxuXHJcblxyXG4gICAgICAgIGdlbmVyYXRlUXVlc3Rpb24odGVzdERhdGFbMF0ucXVlc3Rpb25zW2BxdWVzdGlvbiR7aWR9YF0sIGlkLCBhbnN3ZXJzKSBcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVRdWVzdGlvbihhbnN3ZXJzLCBpZCwgY2xpY2tlZCkge1xyXG4gICAgICAgICAgICByZXNldEFuc3dlcnMoKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5udW1cIikudGV4dENvbnRlbnQ9YCR7aWR9LyR7T2JqZWN0LmtleXModGVzdERhdGFbMF0ucXVlc3Rpb25zKS5sZW5ndGh9YFxyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdGlvblwiKS50ZXh0Q29udGVudD1gJHthbnN3ZXJzLnRleHR9YFxyXG5cclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbnN3ZXJzXCIpXHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsZW0gaW4gYW5zd2Vycy5hbnN3ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhbnN3ZXJcIik7XHJcbiAgICAgICAgICAgICAgICBidG4uaWQgPSBgJHthbHBoYWJldFtjb3VudF19YDtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoYnRuKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuc3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgYW5zd2VyLnRleHRDb250ZW50PWAke2Fuc3dlcnMuYW5zd2Vyc1tlbGVtXX1gXHJcbiAgICAgICAgICAgICAgICBidG4uYXBwZW5kKGFuc3dlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoXCJhbnN3ZXJUaXBcIik7XHJcbiAgICAgICAgICAgICAgICB0aXAudGV4dENvbnRlbnQ9YCR7YWxwaGFiZXQuc3BsaXQoXCJcIilbY291bnRdfWBcclxuICAgICAgICAgICAgICAgIGJ0bi5hcHBlbmQodGlwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjbGlja2VkW2lkXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjbGlja2VkW2lkXSkuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIilcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAvKiBuYXZDaXJjbGVzICovXHJcblxyXG4gICAgICAgICAgICBpZiAoaWQgPT0gMSAmJiBpZCAhPSBPYmplY3Qua2V5cyh0ZXN0RGF0YVswXS5xdWVzdGlvbnMpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0XCIpLnN0eWxlLm9wYWNpdHk9XCIxXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIikuc3R5bGUucG9pbnRlckV2ZW50cz1cImFsbFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldlwiKS5zdHlsZS5vcGFjaXR5PVwiMFwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2XCIpLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaWQgPT0gT2JqZWN0LmtleXModGVzdERhdGFbMF0ucXVlc3Rpb25zKS5sZW5ndGggJiYgaWQgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0XCIpLnN0eWxlLm9wYWNpdHk9XCIwXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIikuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZcIikuc3R5bGUub3BhY2l0eT1cIjFcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldlwiKS5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZcIikuc3R5bGUub3BhY2l0eT1cIjFcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldlwiKS5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIikuc3R5bGUub3BhY2l0eT1cIjFcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dFwiKS5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpZCA9PSBPYmplY3Qua2V5cyh0ZXN0RGF0YVswXS5xdWVzdGlvbnMpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4vKiAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYnRuQ2xpY2tlZChhKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IGFbMF07XHJcbiAgICAgICAgICAgIGxldCBhbnN3ZXJzID0gYVsxXVxyXG4gICAgICAgICAgICBsZXQgcXVlc3Rpb24gPSBhWzJdXHJcbiAgICAgICAgICAgIGFuc3dlcnNbcXVlc3Rpb25dID0gaWRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYSlcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYW5zd2VyXCIpLmZvckVhY2goYW5zd2VyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xpY2tlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuc3dlci5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc2V0QW5zd2VycygpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbnN3ZXJcIikuZm9yRWFjaChhbnN3ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbnN3ZXJzXCIpLnJlbW92ZUNoaWxkKGFuc3dlcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IFxyXG5cclxuICAgIH0pXHJcblxyXG5cclxuLyogKi9cclxuXHJcblxyXG4vLyByZXNpemUgcmVsb2FkXHJcblxyXG4gLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gLy8gICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAvLyAgfSk7XHJcblxyXG4vL1xyXG5cclxuXHJcbn0pIl0sIm5hbWVzIjpbInN2Z0xvZ28iLCJwbmdMb2dvIiwiaW1nVGVzdDEiLCJpbWdUZXN0MiIsImltZ1Rlc3QzIiwiaW1nVGVzdDQiLCJpbWdUZXN0NSIsImltZ1Rlc3Q2IiwiaW1hZ2VzVGVzdHMiLCJhbHBoYWJldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJzZXRUaW1lb3V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwicXVlcnlTZWxlY3RvciIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJmbGFnTmF2IiwiYnVyZ2VyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwiY29uY2F0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ0ZXN0RGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ0ZXh0Q29udGVudCIsIm5hbWUiLCJsb2NhdGlvbiIsImhyZWYiLCJjb25zb2xlIiwibG9nIiwiYW5zd2VycyIsImVsZW0iLCJxdWVzdGlvbnMiLCJzdWJzdHIiLCJpZCIsInRhcmdldCIsImNvbnRhaW5zIiwiYnRuQ2xpY2tlZCIsImdlbmVyYXRlUXVlc3Rpb24iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY2xpY2tlZCIsInJlc2V0QW5zd2VycyIsInRleHQiLCJjb250YWluZXIiLCJjb3VudCIsImJ0biIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJhcHBlbmQiLCJhbnN3ZXIiLCJ0aXAiLCJzcGxpdCIsImEiLCJxdWVzdGlvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9
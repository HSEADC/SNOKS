/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tests.css":
/*!***********************!*\
  !*** ./src/tests.css ***!
  \***********************/
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

/***/ "./src/images/articles/arrow.svg":
/*!***************************************!*\
  !*** ./src/images/articles/arrow.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c1fdab9d045a9ea228e1.svg";

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
/*!*************************!*\
  !*** ./src/js/tests.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tests_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tests.css */ "./src/tests.css");
/* harmony import */ var _images_preview_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/preview/logo.svg */ "./src/images/preview/logo.svg");
/* harmony import */ var _images_aboutUs_logoHeader_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/aboutUs/logoHeader.webp */ "./src/images/aboutUs/logoHeader.webp");
/* harmony import */ var _images_tests_1_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/tests/1.webp */ "./src/images/tests/1.webp");
/* harmony import */ var _images_tests_2_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/tests/2.webp */ "./src/images/tests/2.webp");
/* harmony import */ var _images_tests_3_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/tests/3.webp */ "./src/images/tests/3.webp");
/* harmony import */ var _images_tests_4_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/tests/4.webp */ "./src/images/tests/4.webp");
/* harmony import */ var _images_tests_5_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/tests/5.webp */ "./src/images/tests/5.webp");
/* harmony import */ var _images_tests_6_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/tests/6.webp */ "./src/images/tests/6.webp");
/* harmony import */ var _images_articles_arrow_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/articles/arrow.svg */ "./src/images/articles/arrow.svg");










var imagesTests = {
  1: _images_tests_1_webp__WEBPACK_IMPORTED_MODULE_3__,
  2: _images_tests_2_webp__WEBPACK_IMPORTED_MODULE_4__,
  3: _images_tests_3_webp__WEBPACK_IMPORTED_MODULE_5__,
  4: _images_tests_4_webp__WEBPACK_IMPORTED_MODULE_6__,
  5: _images_tests_5_webp__WEBPACK_IMPORTED_MODULE_7__,
  6: _images_tests_6_webp__WEBPACK_IMPORTED_MODULE_8__
};
document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };

  // phoneBurger

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

  //

  /* test generation */

  var container = document.querySelector(".testsContainer");
  fetch("https://api.npoint.io/e162c16cda608e07f333").then(function (response) {
    return response.json();
  }).then(function (dataa) {
    var dataText = dataa[0].tests;
    console.log(dataText);
    for (var elem in dataText) {
      console.log(elem);
      var div = document.createElement('div');
      div.classList.add('testCard');
      container.append(div);
      div.id = "testCard".concat(elem);
      div.style.backgroundImage = "url('".concat(imagesTests[elem], "')");
      var goIcon = document.createElement('div');
      goIcon.classList.add('goIcon');
      goIcon.id = "goIcon".concat(elem);
      div.append(goIcon);
      var goIconImg = document.createElement('img');
      goIconImg.src = _images_articles_arrow_svg__WEBPACK_IMPORTED_MODULE_9__;
      goIcon.append(goIconImg);
      goIcon.addEventListener("click", function (e) {
        var id = e.target.id.substr(6);
        localStorage.setItem("test", JSON.stringify([dataText[id], id]));
        window.location.href = '../test.html';
      });
      var p = document.createElement('p');
      p.id = "articleName".concat(elem);
      p.textContent = dataText[elem].name;
      div.append(p);
    }
  });

  /* */

  // resize reload

  //   window.addEventListener('resize', function(event){
  //       location.reload()
  //    });

  //
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxFQUFHLFVBQUFDLENBQUMsRUFBSztRQUNwQyxJQUFJcUMsRUFBRSxHQUFHckMsQ0FBQyxDQUFDeUMsTUFBTSxDQUFDSixFQUFFLENBQUNLLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUJDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQ2xCLFFBQVEsQ0FBQ1MsRUFBRSxDQUFDLEVBQUVBLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEVwQyxNQUFNLENBQUM4QyxRQUFRLENBQUNDLElBQUksR0FBRyxjQUFjO01BQ3pDLENBQUMsQ0FBQztNQUVGLElBQU1DLENBQUMsR0FBR25ELFFBQVEsQ0FBQ29DLGFBQWEsQ0FBQyxHQUFHLENBQUM7TUFDckNlLENBQUMsQ0FBQ1osRUFBRSxpQkFBQWxCLE1BQUEsQ0FBZWEsSUFBSSxDQUFFO01BQ3pCaUIsQ0FBQyxDQUFDQyxXQUFXLEdBQUN0QixRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDbUIsSUFBSTtNQUNqQ2xCLEdBQUcsQ0FBQ0csTUFBTSxDQUFDYSxDQUFDLENBQUM7SUFDakI7RUFDSixDQUFDLENBQUM7O0VBRU47O0VBRUE7O0VBRUM7RUFDQTtFQUNEOztFQUVBO0FBRUEsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC8uL3NyYy90ZXN0cy5jc3MiLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0Ly4vc3JjL2pzL3Rlc3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi4vdGVzdHMuY3NzJztcclxuaW1wb3J0IHN2Z0xvZ28gZnJvbSAnLi4vaW1hZ2VzL3ByZXZpZXcvbG9nby5zdmcnO1xyXG5pbXBvcnQgcG5nTG9nbyBmcm9tICcuLi9pbWFnZXMvYWJvdXRVcy9sb2dvSGVhZGVyLndlYnAnO1xyXG5pbXBvcnQgaW1nVGVzdDEgZnJvbSAnLi4vaW1hZ2VzL3Rlc3RzLzEud2VicCc7XHJcbmltcG9ydCBpbWdUZXN0MiBmcm9tICcuLi9pbWFnZXMvdGVzdHMvMi53ZWJwJztcclxuaW1wb3J0IGltZ1Rlc3QzIGZyb20gJy4uL2ltYWdlcy90ZXN0cy8zLndlYnAnO1xyXG5pbXBvcnQgaW1nVGVzdDQgZnJvbSAnLi4vaW1hZ2VzL3Rlc3RzLzQud2VicCc7XHJcbmltcG9ydCBpbWdUZXN0NSBmcm9tICcuLi9pbWFnZXMvdGVzdHMvNS53ZWJwJztcclxuaW1wb3J0IGltZ1Rlc3Q2IGZyb20gJy4uL2ltYWdlcy90ZXN0cy82LndlYnAnO1xyXG5pbXBvcnQgc3ZnQXJyb3cgZnJvbSAnLi4vaW1hZ2VzL2FydGljbGVzL2Fycm93LnN2Zyc7XHJcblxyXG5jb25zdCBpbWFnZXNUZXN0cyA9IHtcclxuICAgIDE6IGltZ1Rlc3QxLFxyXG4gICAgMjogaW1nVGVzdDIsXHJcbiAgICAzOiBpbWdUZXN0MyxcclxuICAgIDQ6IGltZ1Rlc3Q0LFxyXG4gICAgNTogaW1nVGVzdDUsXHJcbiAgICA2OiBpbWdUZXN0NixcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGUpID0+IHtcclxuXHJcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7IFxyXG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVsb2FkZXJcIikuc3R5bGUub3BhY2l0eT1cIjBcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVsb2FkZXJcIikuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIlxyXG4gICAgICAgIH1cclxuICAgICAgICAsIDEyMDApXHJcbiAgICB9O1xyXG5cclxuLy8gcGhvbmVCdXJnZXJcclxuICAgIFxyXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7IFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLnN0eWxlLm1hcmdpblRvcD1cIjI1dndcIlxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgICAgbGV0IGZsYWdOYXYgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcclxuICAgICAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICAgICAgICAgIGlmICghZmxhZ05hdikge1xyXG4gICAgICAgICAgICAgICAgZmxhZ05hdiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZU5hdlwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJ2YXIoLS1ibHVlKVwiXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlck5hdlwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlck5hdlwiKS5zdHlsZS5vcGFjaXR5PVwiMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTG9nb1wiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9YHVybChcIiR7c3ZnTG9nb31cIilgXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVMb2dvXCIpLnN0eWxlLmJhY2tncm91bmRTaXplPVwiNzglIDc4JVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTG9nb1wiKS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCIyMCUgNTAlXCJcclxuICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnTmF2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlck5hdlwiKS5zdHlsZS5vcGFjaXR5PVwiMFwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVOYXZcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwidmFyKC0td2hpdGUpXCJcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTG9nb1wiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9YHVybChcIiR7cG5nTG9nb31cIilgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZUxvZ29cIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCIxMjAlIDEwMCVcIlxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlck5hdlwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICB9LCAzMDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGNOYXZcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuICAgIH1cclxuICAgIFxyXG4vL1xyXG5cclxuLyogdGVzdCBnZW5lcmF0aW9uICovXHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXN0c0NvbnRhaW5lclwiKVxyXG5cclxuICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkubnBvaW50LmlvL2UxNjJjMTZjZGE2MDhlMDdmMzMzXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGFhKSB7ICAgXHJcbiAgICAgICAgY29uc3QgZGF0YVRleHQgPSBkYXRhYVswXS50ZXN0c1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFUZXh0KVxyXG4gICAgICAgIGZvciAobGV0IGVsZW0gaW4gZGF0YVRleHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbSlcclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXN0Q2FyZCcpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgIGRpdi5pZCA9IGB0ZXN0Q2FyZCR7ZWxlbX1gO1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlPWB1cmwoJyR7aW1hZ2VzVGVzdHNbZWxlbV19JylgO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZ29JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGdvSWNvbi5jbGFzc0xpc3QuYWRkKCdnb0ljb24nKTtcclxuICAgICAgICAgICAgZ29JY29uLmlkID0gYGdvSWNvbiR7ZWxlbX1gXHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmQoZ29JY29uKTtcclxuICAgICAgICAgICAgY29uc3QgZ29JY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGdvSWNvbkltZy5zcmM9c3ZnQXJyb3dcclxuICAgICAgICAgICAgZ29JY29uLmFwcGVuZChnb0ljb25JbWcpXHJcbiAgICAgICAgICAgIGdvSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZS50YXJnZXQuaWQuc3Vic3RyKDYpXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRlc3RcIiwgSlNPTi5zdHJpbmdpZnkoW2RhdGFUZXh0W2lkXSwgaWRdKSk7ICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuLi90ZXN0Lmh0bWwnO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgcC5pZD1gYXJ0aWNsZU5hbWUke2VsZW19YDtcclxuICAgICAgICAgICAgcC50ZXh0Q29udGVudD1kYXRhVGV4dFtlbGVtXS5uYW1lO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kKHApO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4vKiAqL1xyXG5cclxuLy8gcmVzaXplIHJlbG9hZFxyXG5cclxuIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKGV2ZW50KXtcclxuIC8vICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbi8vICAgIH0pO1xyXG5cclxuLy9cclxuXHJcbn0pIl0sIm5hbWVzIjpbInN2Z0xvZ28iLCJwbmdMb2dvIiwiaW1nVGVzdDEiLCJpbWdUZXN0MiIsImltZ1Rlc3QzIiwiaW1nVGVzdDQiLCJpbWdUZXN0NSIsImltZ1Rlc3Q2Iiwic3ZnQXJyb3ciLCJpbWFnZXNUZXN0cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJzZXRUaW1lb3V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwicXVlcnlTZWxlY3RvciIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJmbGFnTmF2IiwiYnVyZ2VyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwiY29uY2F0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJjb250YWluZXIiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhYSIsImRhdGFUZXh0IiwidGVzdHMiLCJjb25zb2xlIiwibG9nIiwiZWxlbSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJhcHBlbmQiLCJpZCIsImdvSWNvbiIsImdvSWNvbkltZyIsInNyYyIsInRhcmdldCIsInN1YnN0ciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYXRpb24iLCJocmVmIiwicCIsInRleHRDb250ZW50IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=
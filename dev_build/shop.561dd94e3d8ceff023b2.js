/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/shop.css":
/*!**********************!*\
  !*** ./src/shop.css ***!
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
  !*** ./src/js/shop.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shop_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shop.css */ "./src/shop.css");
/* harmony import */ var _images_preview_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/preview/logo.svg */ "./src/images/preview/logo.svg");
/* harmony import */ var _images_aboutUs_logoHeader_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/aboutUs/logoHeader.webp */ "./src/images/aboutUs/logoHeader.webp");



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

  // resize reload

  //   window.addEventListener('resize', function(event){
  //       location.reload()
  //  });

  //
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQ0wsS0FBSyxDQUFDQyxPQUFPLEdBQUMsR0FBRztRQUN0RFIsUUFBUSxDQUFDWSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNMLEtBQUssQ0FBQ1ksZUFBZSxHQUFDLGNBQWM7UUFDekVuQixRQUFRLENBQUNZLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQ0wsS0FBSyxDQUFDYSxlQUFlLFlBQUFDLE1BQUEsQ0FBU3RCLDREQUFPLFFBQUk7UUFDL0VDLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDTCxLQUFLLENBQUNlLGNBQWMsR0FBQyxXQUFXO1FBQ3RFakIsVUFBVSxDQUFDLFlBQUs7VUFDWkwsUUFBUSxDQUFDWSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNMLEtBQUssQ0FBQ08sT0FBTyxHQUFDLE1BQU07UUFDN0QsQ0FBQyxFQUFFLEdBQUcsQ0FBQztNQUNYO0lBQ0osQ0FBQyxDQUFDO0VBR04sQ0FBQyxNQUFNO0lBQ0hkLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDTCxLQUFLLENBQUNPLE9BQU8sR0FBQyxPQUFPO0VBQzFEOztFQUVKOztFQUdBOztFQUVDO0VBQ0E7RUFDQzs7RUFFRjtBQUNBLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvLi9zcmMvc2hvcC5jc3MiLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0Ly4vc3JjL2pzL3Nob3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuLi9zaG9wLmNzcyc7XHJcbmltcG9ydCBzdmdMb2dvIGZyb20gJy4uL2ltYWdlcy9wcmV2aWV3L2xvZ28uc3ZnJ1xyXG5pbXBvcnQgcG5nTG9nbyBmcm9tICcuLi9pbWFnZXMvYWJvdXRVcy9sb2dvSGVhZGVyLndlYnAnXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZSkgPT4ge1xyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWxvYWRlclwiKS5zdHlsZS5vcGFjaXR5PVwiMFwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWxvYWRlclwiKS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgICwgMTIwMClcclxuICAgIH07XHJcblxyXG4vLyBwaG9uZUJ1cmdlclxyXG4gICAgXHJcbiAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID4gd2luZG93LmlubmVyV2lkdGgpIHsgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuc3R5bGUubWFyZ2luVG9wPVwiMjV2d1wiXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVOYXZcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICBsZXQgZmxhZ05hdiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvblwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgICAgICAgICAgaWYgKCFmbGFnTmF2KSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnTmF2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTmF2XCIpLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInZhcigtLWJsdWUpXCJcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyTmF2XCIpLnN0eWxlLm9wYWNpdHk9XCIxXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVMb2dvXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1gdXJsKFwiJHtzdmdMb2dvfVwiKWBcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZUxvZ29cIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCI3OCUgNzglXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVMb2dvXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbj1cIjIwJSA1MCVcIlxyXG4gICAgICAgICAgICAgICAgfSwgMClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZsYWdOYXYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyTmF2XCIpLnN0eWxlLm9wYWNpdHk9XCIwXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZU5hdlwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJ2YXIoLS13aGl0ZSlcIlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVMb2dvXCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZT1gdXJsKFwiJHtwbmdMb2dvfVwiKWBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTG9nb1wiKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT1cIjEyMCUgMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIH0sIDMwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwY05hdlwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgfVxyXG4gICAgXHJcbi8vXHJcblxyXG5cclxuLy8gcmVzaXplIHJlbG9hZFxyXG5cclxuIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKGV2ZW50KXtcclxuIC8vICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgLy8gIH0pO1xyXG5cclxuLy9cclxufSkiXSwibmFtZXMiOlsic3ZnTG9nbyIsInBuZ0xvZ28iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwid2luZG93Iiwib25sb2FkIiwic2V0VGltZW91dCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInF1ZXJ5U2VsZWN0b3IiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiZmxhZ05hdiIsImJ1cmdlciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsImNvbmNhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dreambook.css":
/*!***************************!*\
  !*** ./src/dreambook.css ***!
  \***************************/
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
/*!*****************************!*\
  !*** ./src/js/dreambook.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dreambook_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dreambook.css */ "./src/dreambook.css");
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
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksQ0FBQyxDQUFDTCxLQUFLLENBQUNDLE9BQU8sR0FBQyxHQUFHO1FBQ3REUixRQUFRLENBQUNZLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ0wsS0FBSyxDQUFDWSxlQUFlLEdBQUMsY0FBYztRQUN6RW5CLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDTCxLQUFLLENBQUNhLGVBQWUsWUFBQUMsTUFBQSxDQUFTdEIsNERBQU8sUUFBSTtRQUMvRUMsUUFBUSxDQUFDWSxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUNMLEtBQUssQ0FBQ2UsY0FBYyxHQUFDLFdBQVc7UUFDdEVqQixVQUFVLENBQUMsWUFBSztVQUNaTCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ0wsS0FBSyxDQUFDTyxPQUFPLEdBQUMsTUFBTTtRQUM3RCxDQUFDLEVBQUUsR0FBRyxDQUFDO01BQ1g7SUFDSixDQUFDLENBQUM7RUFHTixDQUFDLE1BQU07SUFDSGQsUUFBUSxDQUFDWSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUNMLEtBQUssQ0FBQ08sT0FBTyxHQUFDLE9BQU87RUFDMUQ7O0VBRUo7QUFFQSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0Ly4vc3JjL2RyZWFtYm9vay5jc3MiLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0Ly4vc3JjL2pzL2RyZWFtYm9vay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4uL2RyZWFtYm9vay5jc3MnO1xyXG5pbXBvcnQgc3ZnTG9nbyBmcm9tICcuLi9pbWFnZXMvcHJldmlldy9sb2dvLnN2ZydcclxuaW1wb3J0IHBuZ0xvZ28gZnJvbSAnLi4vaW1hZ2VzL2Fib3V0VXMvbG9nb0hlYWRlci53ZWJwJ1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGUpID0+IHtcclxuXHJcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7IFxyXG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVsb2FkZXJcIikuc3R5bGUub3BhY2l0eT1cIjBcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVsb2FkZXJcIikuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIlxyXG4gICAgICAgIH1cclxuICAgICAgICAsIDEyMDApXHJcbiAgICB9O1xyXG5cclxuLy8gcGhvbmVCdXJnZXJcclxuICAgIFxyXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7IFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLnN0eWxlLm1hcmdpblRvcD1cIjI1dndcIlxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgICAgbGV0IGZsYWdOYXYgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcclxuICAgICAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICAgICAgICAgIGlmICghZmxhZ05hdikge1xyXG4gICAgICAgICAgICAgICAgZmxhZ05hdiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZU5hdlwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJ2YXIoLS1ibHVlKVwiXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlck5hdlwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlck5hdlwiKS5zdHlsZS5vcGFjaXR5PVwiMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTG9nb1wiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9YHVybChcIiR7c3ZnTG9nb31cIilgXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVMb2dvXCIpLnN0eWxlLmJhY2tncm91bmRTaXplPVwiNzglIDc4JVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTG9nb1wiKS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb249XCIyMCUgNTAlXCJcclxuICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnTmF2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlck5hdlwiKS5zdHlsZS5vcGFjaXR5PVwiMFwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVOYXZcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwidmFyKC0td2hpdGUpXCJcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTG9nb1wiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9YHVybChcIiR7cG5nTG9nb31cIilgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZUxvZ29cIikuc3R5bGUuYmFja2dyb3VuZFNpemU9XCIxMjAlIDEwMCVcIlxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlck5hdlwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICB9LCAzMDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGNOYXZcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcclxuICAgIH1cclxuICAgIFxyXG4vL1xyXG5cclxufSkiXSwibmFtZXMiOlsic3ZnTG9nbyIsInBuZ0xvZ28iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwid2luZG93Iiwib25sb2FkIiwic2V0VGltZW91dCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInF1ZXJ5U2VsZWN0b3IiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiZmxhZ05hdiIsImJ1cmdlciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsImNvbmNhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==
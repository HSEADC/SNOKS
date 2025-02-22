/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/preview.css":
/*!*************************!*\
  !*** ./src/preview.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/js/preview.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../preview.css */ "./src/preview.css");

document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };

  // phoneBurger

  if (window.innerHeight > window.innerWidth) {
    document.querySelector("#mobileNav").style.display = "block";
    var flagNav = false;
    var burger = document.querySelector(".burger");
    document.querySelector(".navigation").style.display = "none";
    burger.addEventListener("click", function () {
      burger.classList.toggle("open");
      if (!flagNav) {
        flagNav = true;
        document.querySelector(".burgerNav").style.display = "block";
        setTimeout(function () {
          document.querySelector("#mobileNav").style.backgroundColor = "var(--blue)";
          document.querySelector(".burgerNav").style.opacity = "1";
        }, 0);
      } else {
        flagNav = false;
        document.querySelector("#mobileNav").style.backgroundColor = "transparent";
        document.querySelector(".burgerNav").style.opacity = "0";
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
  //      location.reload()
  //  });

  //
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5jOTZhYmFkZjY4N2E1MGYzNjI1My5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOd0I7QUFHeEJBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUcsVUFBQUMsQ0FBQyxFQUFLO0VBRWpEQyxNQUFNLENBQUNDLE1BQU0sR0FBRyxZQUFXO0lBQ3ZCQyxVQUFVLENBQUUsWUFBTTtNQUNkTCxRQUFRLENBQUNNLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUMsR0FBRztNQUN0RFIsUUFBUSxDQUFDTSxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUNDLEtBQUssQ0FBQ0UsYUFBYSxHQUFDLE1BQU07SUFDbkUsQ0FBQyxFQUNDLElBQUksQ0FBQztFQUNYLENBQUM7O0VBRUQ7O0VBRUksSUFBSU4sTUFBTSxDQUFDTyxXQUFXLEdBQUdQLE1BQU0sQ0FBQ1EsVUFBVSxFQUFFO0lBQ3hDWCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ0wsS0FBSyxDQUFDTSxPQUFPLEdBQUMsT0FBTztJQUMxRCxJQUFJQyxPQUFPLEdBQUcsS0FBSztJQUNuQixJQUFNQyxNQUFNLEdBQUdmLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUNoRFosUUFBUSxDQUFDWSxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUNMLEtBQUssQ0FBQ00sT0FBTyxHQUFDLE1BQU07SUFDMURFLE1BQU0sQ0FBQ2QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7TUFDeENjLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO01BQy9CLElBQUksQ0FBQ0gsT0FBTyxFQUFFO1FBQ1ZBLE9BQU8sR0FBRyxJQUFJO1FBQ2RkLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDTCxLQUFLLENBQUNNLE9BQU8sR0FBQyxPQUFPO1FBQzFEUixVQUFVLENBQUMsWUFBSztVQUNaTCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ0wsS0FBSyxDQUFDVyxlQUFlLEdBQUMsYUFBYTtVQUN4RWxCLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDTCxLQUFLLENBQUNDLE9BQU8sR0FBQyxHQUFHO1FBQzFELENBQUMsRUFBRSxDQUFDLENBQUM7TUFDVCxDQUFDLE1BQU07UUFDSE0sT0FBTyxHQUFHLEtBQUs7UUFDZmQsUUFBUSxDQUFDWSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNMLEtBQUssQ0FBQ1csZUFBZSxHQUFDLGFBQWE7UUFDeEVsQixRQUFRLENBQUNZLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ0wsS0FBSyxDQUFDQyxPQUFPLEdBQUMsR0FBRztRQUN0REgsVUFBVSxDQUFDLFlBQUs7VUFDWkwsUUFBUSxDQUFDWSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNMLEtBQUssQ0FBQ00sT0FBTyxHQUFDLE1BQU07UUFDN0QsQ0FBQyxFQUFFLEdBQUcsQ0FBQztNQUNYO0lBQ0osQ0FBQyxDQUFDO0VBR04sQ0FBQyxNQUFNO0lBQ0hiLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDTCxLQUFLLENBQUNNLE9BQU8sR0FBQyxPQUFPO0VBQzFEOztFQUVKOztFQUVKOztFQUVFO0VBQ0E7RUFDQTs7RUFFRjtBQUNBLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvLi9zcmMvcHJldmlldy5jc3MiLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC8uL3NyYy9qcy9wcmV2aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3ByZXZpZXcuY3NzJztcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZSkgPT4ge1xyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWxvYWRlclwiKS5zdHlsZS5vcGFjaXR5PVwiMFwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWxvYWRlclwiKS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgICwgMTIwMClcclxuICAgIH07XHJcblxyXG4gICAgLy8gcGhvbmVCdXJnZXJcclxuICAgICAgICBcclxuICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID4gd2luZG93LmlubmVyV2lkdGgpIHsgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgICAgICAgIGxldCBmbGFnTmF2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcclxuICAgICAgICAgICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgICAgICAgICAgICAgIGlmICghZmxhZ05hdikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWdOYXYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVOYXZcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwidmFyKC0tYmx1ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlck5hdlwiKS5zdHlsZS5vcGFjaXR5PVwiMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWdOYXYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZU5hdlwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJOYXZcIikuc3R5bGUub3BhY2l0eT1cIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlck5hdlwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BjTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgLy9cclxuXHJcbi8vIHJlc2l6ZSByZWxvYWRcclxuXHJcbiAgLy8gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgLy8gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gIC8vICB9KTtcclxuXHJcbi8vXHJcbn0pIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJzZXRUaW1lb3V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwicXVlcnlTZWxlY3RvciIsImRpc3BsYXkiLCJmbGFnTmF2IiwiYnVyZ2VyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==
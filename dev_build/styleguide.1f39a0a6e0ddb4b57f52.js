/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styleguide.css":
/*!****************************!*\
  !*** ./src/styleguide.css ***!
  \****************************/
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
/*!******************************!*\
  !*** ./src/js/styleguide.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styleguide_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styleguide.css */ "./src/styleguide.css");
/* harmony import */ var _images_preview_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/preview/logo.svg */ "./src/images/preview/logo.svg");
/* harmony import */ var _images_aboutUs_logoHeader_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/aboutUs/logoHeader.webp */ "./src/images/aboutUs/logoHeader.webp");



document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };
  var navigation = document.querySelector(".styleguideNav");
  navigation.addEventListener("click", function (e) {
    if (e.target.className == "navTip") {
      console.log(e.target.id.substr(6));
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
    document.querySelector(".styleguideNav ul").style.marginLeft = "-40vw";
    document.querySelector(".styleguideNav").style.display = "none";
    document.querySelector(".styleguideContainer").style.width = "95%";
    document.querySelector(".styleguideContainer").style.marginLeft = "5%";
    document.querySelector(".styleguideBtn").style.display = "block";
    document.querySelector(".styleguideBtn").addEventListener("click", function (e) {
      if (!styleNavFlag) {
        styleNavFlag = true;
        document.querySelector(".styleguideNav").style.display = "block";
        setTimeout(function () {
          document.querySelector(".styleguideNav ul").style.marginLeft = "0";
          document.querySelector(".styleguideContainer").style.width = "80%";
          document.querySelector(".styleguideBtn").style.left = "27vw";
          document.querySelector(".styleguideBtn").style.transform = "rotate(180deg)";
        }, 0);
      } else {
        styleNavFlag = false;
        document.querySelector(".styleguideNav ul").style.marginLeft = "-40vw";
        setTimeout(function () {
          document.querySelector(".styleguideNav").style.display = "none";
          document.querySelector(".styleguideContainer").style.width = "95%";
        }, 300);
        document.querySelector(".styleguideBtn").style.left = "4vw";
        document.querySelector(".styleguideBtn").style.transform = "rotate(0deg)";
      }
    });
  }

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

  //  window.addEventListener('resize', function(event){
  //      location.reload()
  //   });

  //
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEdBQUcsR0FBRyxJQUFJQSxDQUFDLEdBQUcsR0FBRyxFQUFFO01BQzNCLEtBQUssSUFBSUMsRUFBQyxHQUFHLENBQUMsRUFBRUEsRUFBQyxJQUFJLEVBQUUsRUFBRUEsRUFBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSTFCLFFBQVEsQ0FBQ00sY0FBYyxVQUFBWSxNQUFBLENBQVVRLEVBQUMsQ0FBRSxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1VBQ3JFNUIsUUFBUSxDQUFDTSxjQUFjLFVBQUFZLE1BQUEsQ0FBVVEsRUFBQyxDQUFFLENBQUMsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JFO01BQ0o7TUFDQTdCLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUIsU0FBUyxDQUFDRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRS9ELENBQUMsTUFBTSxJQUFJTCxDQUFDLEdBQUcsR0FBRyxJQUFJQSxDQUFDLEdBQUcsR0FBRyxFQUFFO01BQzNCLEtBQUssSUFBSUMsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxJQUFJLEVBQUUsRUFBRUEsR0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSTFCLFFBQVEsQ0FBQ00sY0FBYyxVQUFBWSxNQUFBLENBQVVRLEdBQUMsQ0FBRSxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1VBQ3JFNUIsUUFBUSxDQUFDTSxjQUFjLFVBQUFZLE1BQUEsQ0FBVVEsR0FBQyxDQUFFLENBQUMsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JFO01BQ0o7TUFDQTdCLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUIsU0FBUyxDQUFDRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRS9ELENBQUMsTUFBTSxJQUFJTCxDQUFDLEdBQUcsR0FBRyxJQUFJQSxDQUFDLEdBQUcsR0FBRyxFQUFFO01BQzNCLEtBQUssSUFBSUMsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxJQUFJLEVBQUUsRUFBRUEsR0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSTFCLFFBQVEsQ0FBQ00sY0FBYyxVQUFBWSxNQUFBLENBQVVRLEdBQUMsQ0FBRSxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1VBQ3JFNUIsUUFBUSxDQUFDTSxjQUFjLFVBQUFZLE1BQUEsQ0FBVVEsR0FBQyxDQUFFLENBQUMsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JFO01BQ0o7TUFDQTdCLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUIsU0FBUyxDQUFDRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRS9ELENBQUMsTUFBTSxJQUFJTCxDQUFDLEdBQUcsR0FBRyxJQUFJQSxDQUFDLEdBQUcsR0FBRyxFQUFFO01BQzNCLEtBQUssSUFBSUMsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxJQUFJLEVBQUUsRUFBRUEsR0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSTFCLFFBQVEsQ0FBQ00sY0FBYyxVQUFBWSxNQUFBLENBQVVRLEdBQUMsQ0FBRSxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1VBQ3JFNUIsUUFBUSxDQUFDTSxjQUFjLFVBQUFZLE1BQUEsQ0FBVVEsR0FBQyxDQUFFLENBQUMsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JFO01BQ0o7TUFDQTdCLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUIsU0FBUyxDQUFDRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRS9ELENBQUMsTUFBTSxJQUFJTCxDQUFDLEdBQUcsR0FBRyxJQUFJQSxDQUFDLEdBQUcsR0FBRyxFQUFFO01BQzNCLEtBQUssSUFBSUMsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxJQUFJLEVBQUUsRUFBRUEsR0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSTFCLFFBQVEsQ0FBQ00sY0FBYyxVQUFBWSxNQUFBLENBQVVRLEdBQUMsQ0FBRSxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1VBQ3JFNUIsUUFBUSxDQUFDTSxjQUFjLFVBQUFZLE1BQUEsQ0FBVVEsR0FBQyxDQUFFLENBQUMsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JFO01BQ0o7TUFDQTdCLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUIsU0FBUyxDQUFDRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRS9ELENBQUMsTUFBTSxJQUFJTCxDQUFDLEdBQUcsR0FBRyxJQUFJQSxDQUFDLEdBQUcsR0FBRyxFQUFFO01BQzNCLEtBQUssSUFBSUMsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxJQUFJLEVBQUUsRUFBRUEsR0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSTFCLFFBQVEsQ0FBQ00sY0FBYyxVQUFBWSxNQUFBLENBQVVRLEdBQUMsQ0FBRSxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1VBQ3JFNUIsUUFBUSxDQUFDTSxjQUFjLFVBQUFZLE1BQUEsQ0FBVVEsR0FBQyxDQUFFLENBQUMsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JFO01BQ0o7TUFDQTdCLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUIsU0FBUyxDQUFDRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRS9ELENBQUMsTUFBTSxJQUFJTCxDQUFDLEdBQUcsR0FBRyxJQUFJQSxDQUFDLEdBQUcsR0FBRyxFQUFFO01BQzNCLEtBQUssSUFBSUMsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxJQUFJLEVBQUUsRUFBRUEsR0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSTFCLFFBQVEsQ0FBQ00sY0FBYyxVQUFBWSxNQUFBLENBQVVRLEdBQUMsQ0FBRSxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1VBQ3JFNUIsUUFBUSxDQUFDTSxjQUFjLFVBQUFZLE1BQUEsQ0FBVVEsR0FBQyxDQUFFLENBQUMsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JFO01BQ0o7TUFDQTdCLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUIsU0FBUyxDQUFDRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRS9ELENBQUMsTUFBTSxJQUFJTCxDQUFDLEdBQUcsR0FBRyxJQUFJQSxDQUFDLEdBQUcsR0FBRyxFQUFFO01BQzNCLEtBQUssSUFBSUMsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxJQUFJLEVBQUUsRUFBRUEsR0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSTFCLFFBQVEsQ0FBQ00sY0FBYyxVQUFBWSxNQUFBLENBQVVRLEdBQUMsQ0FBRSxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1VBQ3JFNUIsUUFBUSxDQUFDTSxjQUFjLFVBQUFZLE1BQUEsQ0FBVVEsR0FBQyxDQUFFLENBQUMsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JFO01BQ0o7TUFDQTdCLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUIsU0FBUyxDQUFDRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQy9ELENBQUMsTUFBTSxJQUFJTCxDQUFDLEdBQUcsR0FBRyxJQUFJQSxDQUFDLEdBQUcsR0FBRyxFQUFFO01BQzNCLEtBQUssSUFBSUMsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxJQUFJLEVBQUUsRUFBRUEsR0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSTFCLFFBQVEsQ0FBQ00sY0FBYyxVQUFBWSxNQUFBLENBQVVRLEdBQUMsQ0FBRSxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1VBQ3JFNUIsUUFBUSxDQUFDTSxjQUFj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QUFhLENBQUMsUUFBUSxDQUFDLENBQUNKLEtBQUssQ0FBQzJCLE9BQU8sR0FBQyxPQUFPO0VBQzFEOztFQUVKOztFQUVBOztFQUVFO0VBQ0E7RUFDRDs7RUFFRDtBQUNBLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvLi9zcmMvc3R5bGVndWlkZS5jc3MiLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0Ly4vc3JjL2pzL3N0eWxlZ3VpZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuLi9zdHlsZWd1aWRlLmNzcyc7XHJcbmltcG9ydCBzdmdMb2dvIGZyb20gJy4uL2ltYWdlcy9wcmV2aWV3L2xvZ28uc3ZnJ1xyXG5pbXBvcnQgcG5nTG9nbyBmcm9tICcuLi9pbWFnZXMvYWJvdXRVcy9sb2dvSGVhZGVyLndlYnAnXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZSkgPT4ge1xyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWxvYWRlclwiKS5zdHlsZS5vcGFjaXR5PVwiMFwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWxvYWRlclwiKS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgICwgMTIwMClcclxuICAgIH07XHJcblxyXG4gICAgbGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0eWxlZ3VpZGVOYXZcIilcclxuXHJcbiAgICBuYXZpZ2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcIm5hdlRpcFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkLnN1YnN0cig2KSlcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2d1aWRlVGlwJHtlLnRhcmdldC5pZC5zdWJzdHIoNil9YCkuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IHNjID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIGxldCB3diA9IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICAgICAgbGV0IGEgPSBzYyAqIDEwMCAvIHd2O1xyXG4gICAgICAgIGlmIChhID4gOTUgJiYgYSA8IDEzMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJibHVlTmF2XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ZU5hdlwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2VGlwMVwiKS5jbGFzc0xpc3QuYWRkKFwiYmx1ZU5hdlwiKVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGEgPiAxMzAgJiYgYSA8IDE5OSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJibHVlTmF2XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ZU5hdlwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2VGlwMlwiKS5jbGFzc0xpc3QuYWRkKFwiYmx1ZU5hdlwiKVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGEgPiAxOTkgJiYgYSA8IDI3MCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJibHVlTmF2XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ZU5hdlwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2VGlwM1wiKS5jbGFzc0xpc3QuYWRkKFwiYmx1ZU5hdlwiKVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGEgPiAyNzAgJiYgYSA8IDM4NCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJibHVlTmF2XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ZU5hdlwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2VGlwNFwiKS5jbGFzc0xpc3QuYWRkKFwiYmx1ZU5hdlwiKVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGEgPiAzODQgJiYgYSA8IDQ0Nykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJibHVlTmF2XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ZU5hdlwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2VGlwNVwiKS5jbGFzc0xpc3QuYWRkKFwiYmx1ZU5hdlwiKVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGEgPiA0NDcgJiYgYSA8IDQ5Nykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJibHVlTmF2XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ZU5hdlwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2VGlwNlwiKS5jbGFzc0xpc3QuYWRkKFwiYmx1ZU5hdlwiKVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGEgPiA0OTcgJiYgYSA8IDU5Nykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJibHVlTmF2XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ZU5hdlwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2VGlwN1wiKS5jbGFzc0xpc3QuYWRkKFwiYmx1ZU5hdlwiKVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGEgPiA1OTcgJiYgYSA8IDY3Nikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJibHVlTmF2XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ZU5hdlwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2VGlwOFwiKS5jbGFzc0xpc3QuYWRkKFwiYmx1ZU5hdlwiKVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGEgPiA2NzYgJiYgYSA8IDc3OCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJibHVlTmF2XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ZU5hdlwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2VGlwOVwiKS5jbGFzc0xpc3QuYWRkKFwiYmx1ZU5hdlwiKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYSA+IDc3OCAmJiBhIDwgODM2KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDExOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbmF2VGlwJHtpfWApLmNsYXNzTGlzdC5jb250YWlucyhcImJsdWVOYXZcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbmF2VGlwJHtpfWApLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVlTmF2XCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZUaXAxMFwiKS5jbGFzc0xpc3QuYWRkKFwiYmx1ZU5hdlwiKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYSA+IDgzNiAmJiBhIDwgMTIxMikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QuY29udGFpbnMoXCJibHVlTmF2XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG5hdlRpcCR7aX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ZU5hdlwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2VGlwMTFcIikuY2xhc3NMaXN0LmFkZChcImJsdWVOYXZcIilcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7IFxyXG4gICAgICAgIGxldCBzdHlsZU5hdkZsYWcgPSBmYWxzZTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0eWxlZ3VpZGVOYXYgdWxcIikuc3R5bGUubWFyZ2luTGVmdD1cIi00MHZ3XCI7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdHlsZWd1aWRlTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdHlsZWd1aWRlQ29udGFpbmVyXCIpLnN0eWxlLndpZHRoPVwiOTUlXCI7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdHlsZWd1aWRlQ29udGFpbmVyXCIpLnN0eWxlLm1hcmdpbkxlZnQ9XCI1JVwiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3R5bGVndWlkZUJ0blwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0eWxlZ3VpZGVCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3R5bGVOYXZGbGFnKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZU5hdkZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdHlsZWd1aWRlTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0eWxlZ3VpZGVOYXYgdWxcIikuc3R5bGUubWFyZ2luTGVmdD1cIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0eWxlZ3VpZGVDb250YWluZXJcIikuc3R5bGUud2lkdGg9XCI4MCVcIjtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0eWxlZ3VpZGVCdG5cIikuc3R5bGUubGVmdD1cIjI3dndcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3R5bGVndWlkZUJ0blwiKS5zdHlsZS50cmFuc2Zvcm09XCJyb3RhdGUoMTgwZGVnKVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAsMClcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZU5hdkZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3R5bGVndWlkZU5hdiB1bFwiKS5zdHlsZS5tYXJnaW5MZWZ0PVwiLTQwdndcIjtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdHlsZWd1aWRlTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdHlsZWd1aWRlQ29udGFpbmVyXCIpLnN0eWxlLndpZHRoPVwiOTUlXCI7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDApXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0eWxlZ3VpZGVCdG5cIikuc3R5bGUubGVmdD1cIjR2d1wiXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0eWxlZ3VpZGVCdG5cIikuc3R5bGUudHJhbnNmb3JtPVwicm90YXRlKDBkZWcpXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuLy8gcGhvbmVCdXJnZXJcclxuICAgIFxyXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7IFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLnN0eWxlLm1hcmdpblRvcD1cIjI1dndcIlxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgICAgbGV0IGZsYWdOYXYgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcclxuICAgICAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICAgICAgICAgIGlmICghZmxhZ05hdikge1xyXG4gICAgICAgICAgICAgICAgZmxhZ05hdiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZU5hdlwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJ2YXIoLS1ibHVlKVwiXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlck5hdlwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlck5hdlwiKS5zdHlsZS5vcGFjaXR5PVwiMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTG9nb1wiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9YHVybChcIiR7c3ZnTG9nb31cIilgXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVMb2dvXCIpLnN0eWxlLmJhY2tncm91bmRTaXplPVwiNzglIDc4JVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZUxvZ29cIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uPVwiMjAlIDUwJVwiXHJcbiAgICAgICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmxhZ05hdiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJOYXZcIikuc3R5bGUub3BhY2l0eT1cIjBcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlTmF2XCIpLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cInZhcigtLXdoaXRlKVwiXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZUxvZ29cIikuc3R5bGUuYmFja2dyb3VuZEltYWdlPWB1cmwoXCIke3BuZ0xvZ299XCIpYFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2JpbGVMb2dvXCIpLnN0eWxlLmJhY2tncm91bmRTaXplPVwiMTIwJSAxMDAlXCJcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJOYXZcIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgfSwgMzAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BjTmF2XCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICB9XHJcbiAgICBcclxuLy9cclxuXHJcbi8vIHJlc2l6ZSByZWxvYWRcclxuXHJcbiAgLy8gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgLy8gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gLy8gICB9KTtcclxuXHJcbi8vXHJcbn0pIl0sIm5hbWVzIjpbInN2Z0xvZ28iLCJwbmdMb2dvIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIndpbmRvdyIsIm9ubG9hZCIsInNldFRpbWVvdXQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwib3BhY2l0eSIsInBvaW50ZXJFdmVudHMiLCJuYXZpZ2F0aW9uIiwicXVlcnlTZWxlY3RvciIsInRhcmdldCIsImNsYXNzTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInN1YnN0ciIsImNvbmNhdCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJzYyIsInBhZ2VZT2Zmc2V0Iiwid3YiLCJpbm5lcldpZHRoIiwiYSIsImkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsImlubmVySGVpZ2h0Iiwic3R5bGVOYXZGbGFnIiwibWFyZ2luTGVmdCIsImRpc3BsYXkiLCJ3aWR0aCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJtYXJnaW5Ub3AiLCJmbGFnTmF2IiwiYnVyZ2VyIiwidG9nZ2xlIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9
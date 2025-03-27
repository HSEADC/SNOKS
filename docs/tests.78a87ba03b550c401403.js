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
;// ./src/images/aboutUs/logoHeader.webp
const logoHeader_namespaceObject = __webpack_require__.p + "images/dfe2dfcce3cd6ec99721.webp";
;// ./src/images/tests/1.webp
const _1_namespaceObject = __webpack_require__.p + "images/fa81fb20078f0a535639.webp";
;// ./src/images/tests/2.webp
const _2_namespaceObject = __webpack_require__.p + "images/623a2be48e362d885992.webp";
;// ./src/images/tests/3.webp
const _3_namespaceObject = __webpack_require__.p + "images/e322c97d16c48ef02189.webp";
;// ./src/images/tests/4.webp
const _4_namespaceObject = __webpack_require__.p + "images/c8ddee5fc056ceb5e777.webp";
;// ./src/images/tests/5.webp
const _5_namespaceObject = __webpack_require__.p + "images/348963d76367cda9b26e.webp";
;// ./src/images/tests/6.webp
const _6_namespaceObject = __webpack_require__.p + "images/303e3dc2555b1ade1e4e.webp";
;// ./src/images/tests/7.webp
const _7_namespaceObject = __webpack_require__.p + "images/d547d5829858ca78d4a2.webp";
;// ./src/images/tests/8.webp
const _8_namespaceObject = __webpack_require__.p + "images/9dc4a80c519778440411.webp";
;// ./src/images/tests/9.webp
const _9_namespaceObject = __webpack_require__.p + "images/d59bf02407ebf658afb6.webp";
;// ./src/images/articles/arrow.svg
const arrow_namespaceObject = __webpack_require__.p + "images/c1fdab9d045a9ea228e1.svg";
;// ./src/js/tests.js













var imagesTests = {
  1: _1_namespaceObject,
  2: _2_namespaceObject,
  3: _3_namespaceObject,
  4: _4_namespaceObject,
  5: _5_namespaceObject,
  6: _6_namespaceObject,
  7: _7_namespaceObject,
  8: _8_namespaceObject,
  9: _9_namespaceObject
};
localStorage.clear();
document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };

  // phoneBurger

  if (window.innerHeight > window.innerWidth) {
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

  /* test generation */

  var container = document.querySelector(".c_allTests");
  fetch("https://api.npoint.io/ea12fcabc7ed280ea97a").then(function (response) {
    return response.json();
  }).then(function (dataa) {
    var dataText = dataa[0].tests.types;
    if (window.innerHeight <= window.innerWidth && window.innerWidth > 700) {
      var _loop = function _loop(elem) {
        var section = document.createElement('section');
        section.classList.add("s_testsType");
        section.classList.add(elem);
        container.append(section);
        for (var tests in dataText[elem]) {
          if (tests == "name") {
            var h = document.createElement("h2");
            h.classList.add("a_testTypeName");
            h.textContent = "".concat(dataText[elem].name);
            section.append(h);
          } else {
            var div = document.createElement('div');
            div.classList.add('o_testCard');
            section.append(div);
            div.id = "testCard".concat(tests);
            div.style.backgroundImage = "url('".concat(imagesTests[tests], "')");
            var goIcon = document.createElement('div');
            goIcon.classList.add('a_testsOpenButton');
            goIcon.id = "goIcon".concat(tests);
            div.append(goIcon);
            var goIconImg = document.createElement('img');
            goIconImg.src = arrow_namespaceObject;
            goIconImg.classList.add("q_testsOpenIcon");
            goIcon.append(goIconImg);
            goIcon.addEventListener("click", function (e) {
              var id = e.target.id.substr(6);
              localStorage.setItem("test", JSON.stringify([dataText[elem][id], id, elem]));
              //window.location.href = '../SNOKS/test.html';
              window.location.href = '../SNOKS/test.html';
            });
            var p = document.createElement('p');
            p.classList.add("a_testName");
            p.id = "testName".concat(tests);
            p.textContent = dataText[elem][tests].name;
            div.append(p);
          }
        }
      };
      for (var elem in dataText) {
        _loop(elem);
      }
    } else {
      var choose = function choose(id) {
        if (choosePos[id]) {
          choosen = id;
          document.querySelectorAll(".o_testCard").forEach(function (elem) {
            if (elem.classList.contains("choosen")) {
              elem.classList.remove("choosen");
            }
          });
          document.querySelector("#testCard".concat(id)).classList.add("choosen");
          document.querySelector(".c_mobileCardsLine").style.left = "".concat(choosePos[id], "vw");
        }
      };
      document.querySelector("#ArrLeft").style.display = "block";
      document.querySelector("#ArrRight").style.display = "block";
      document.querySelector(".c_allTests").classList.add("testsContainerMobile");
      var section = document.createElement('section');
      section.classList.add("c_mobileCardsLine");
      container.append(section);
      var _loop2 = function _loop2(_elem) {
        for (var tests in dataText[_elem]) {
          if (tests != "name") {
            var div = document.createElement('div');
            div.classList.add('o_testCard');
            section.append(div);
            div.id = "testCard".concat(tests);
            div.style.backgroundImage = "url('".concat(imagesTests[tests], "')");
            div.addEventListener("click", function (e) {
              var id = e.target.id.substr(8);
              localStorage.setItem("test", JSON.stringify([dataText[_elem][id], id, _elem]));
              window.location.href = '../SNOKS/test.html';
            });
            var p = document.createElement('p');
            p.classList.add("a_testName");
            p.id = "testName".concat(tests);
            p.textContent = dataText[_elem][tests].name;
            div.append(p);
          }
        }
      };
      for (var _elem in dataText) {
        _loop2(_elem);
      }

      /* TestsChooseMobile */

      var choosen = 1;
      var choosePos = {
        1: "15",
        2: "-61",
        3: "-137",
        4: "-213",
        5: "-289",
        6: "-365",
        7: "-441",
        8: "-517",
        9: "-593"
      };
      choose(choosen);
      document.querySelector("#ArrRight").addEventListener("click", function (e) {
        choose(choosen + 1);
      });
      document.querySelector("#ArrLeft").addEventListener("click", function (e) {
        choose(choosen - 1);
      });
    }

    /* */
  });

  /* */

  // resize reload

  window.addEventListener('resize', function (event) {
    setTimeout(function () {
      location.reload();
    }, 100);
  });

  //
});
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/articles.css":
/*!**************************!*\
  !*** ./src/articles.css ***!
  \**************************/
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
/*!****************************!*\
  !*** ./src/js/articles.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _articles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../articles.css */ "./src/articles.css");

document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };
  var data = {
    1: {
      name: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0434\u0435\u0442\u0438 \r\n \u043F\u043B\u043E\u0445\u043E \u0441\u043F\u044F\u0442?",
      time: "3 — 5",
      text: "Нарушения режима сна у детей — частая проблема для родителей. Узнай, какие факторы могут мешать  ребёнку спокойно засыпать и как можно справиться с ними!",
      size: "middle",
      tag: ["дети", "сон"]
    },
    2: {
      name: "Как помочь ребенку спать лучше??",
      time: "6 — 7",
      text: "Качественный сон — залог здоровья ребёнка. Разбираем эффективные подходы, чтобы малыш засыпал быстро и спал крепко всю ночь.",
      size: "middle",
      tag: ["дети", "сон"]
    },
    3: {
      name: "Нужен ли ребёнку дневной сон?",
      time: "3 — 5",
      text: "Дневной сон может быть важным в развитии ребёнка. Однако когда он необходим, а когда можно отказаться от него? Попробуем разобраться!",
      size: "middle",
      tag: ["дети", "сон"]
    },
    4: {
      name: "Что делать, если ребёнок боится засыпать один?",
      time: "5 — 7",
      text: "Многие дети боятся оставаться одни в темноте, и это абсолютно нормально. В этой статье вы узнаете, как создать спокойную атмосферу перед сном, научить ребёнка справляться с тревогой и сделать процесс засыпания комфортным.",
      size: "big",
      tag: ["дети", "сон"]
    },
    5: {
      name: "\u041F\u0440\u0438\u0447\u0438\u043D\u044B \u0431\u0435\u0441\u0441\u043E\u043D\u0438\u0446\u044B",
      time: "3 — 5",
      text: "Разбираем самые распространённые факторы, которые лишают нас сна: от кофеина и гаджетов до тревожных мыслей, и делимся советами по их устранению.",
      size: "small",
      tag: ["здоровье"]
    },
    6: {
      name: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0434\u0435\u0442\u0438 \r\n \u043F\u043B\u043E\u0445\u043E \u0441\u043F\u044F\u0442?",
      time: "3 — 5",
      text: "Дневной сон бывает полезен не только детям!Мы собрали неожиданные факты о том, как короткий отдых может влиять на здоровье и настроение.",
      size: "small",
      tag: ["дети", "сон"]
    },
    7: {
      name: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0434\u0435\u0442\u0438 \r\n \u043F\u043B\u043E\u0445\u043E \u0441\u043F\u044F\u0442?",
      time: "3 — 5",
      text: "Нарушения режима сна у детей — частая проблема для родителей. Узнай, какие факторы могут мешать  ребёнку спокойно засыпать и как можно справиться с ними!",
      size: "small",
      tag: ["дети", "сон"]
    },
    8: {
      name: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0434\u0435\u0442\u0438 \r\n \u043F\u043B\u043E\u0445\u043E \u0441\u043F\u044F\u0442?",
      time: "3 — 5",
      text: "Нарушения режима сна у детей — частая проблема для родителей. Узнай, какие факторы могут мешать  ребёнку спокойно засыпать и как можно справиться с ними!",
      size: "small",
      tag: ["дети", "сон"]
    },
    9: {
      name: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043B\u0443\u043D\u0430\u0442\u0438\u0437\u043C\u0438 \u043F\u043E\u0447\u0435\u043C\u0443 \u043E\u043D \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u0435\u0442?",
      time: "5 — 7",
      text: "Лунатизм или сомнамбулизм — это состояние, при котором человек выполняет действия во сне, часто не осознавая этого. В этой статье мы расскажем о том, как именно возникает лунатизм, какие факторы способствуют его появлению, и как это связано с нарушениями фаз сна. ",
      size: "big",
      tag: ["здоровье", "сон"]
    },
    10: {
      name: "\u0421\u043E\u0432\u044B \u0438 \u0436\u0430\u0432\u043E\u0440\u043E\u043D\u043A\u0438:\u043A\u0442\u043E \u044D\u0442\u043E?",
      time: "3 — 5",
      text: "Почему одни люди продуктивнее утром, а другие — вечером? В этой статье мы расскажем, что такое хронотипы и как они связаны с нашими привычками.",
      size: "middle",
      tag: ["иследование", "сон"]
    },
    11: {
      name: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0432\u0440\u0435\u043C\u044F \u0432\u043E \u0441\u043D\u0430\u0445 \u0431\u044B\u0432\u0430\u0435\u0442 \u0438\u0441\u043A\u0430\u0436\u0435\u043D\u043E?",
      time: "3 — 5",
      text: "Время во снах часто воспринимается иначе, чем в реальной жизни. В этой статье мы исследуем, почему наше восприятие времени во время сна искажено, что происходит с мозгом в процессе сновидений и как различные стадии сна могут влиять на это.",
      size: "middle",
      tag: ["иследование", "сон"]
    },
    12: {
      name: "7 \u0441\u043E\u0432\u0435\u0442\u043E\u0432 \u0434\u043B\u044F \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u0441\u043D\u0430",
      time: "3 — 5",
      text: "Мечтаешь высыпаться лучше? Мы подготовили простые и действенные советы, которые помогут сделать твой сон более восстанавливающим.",
      size: "middle",
      tag: ["советы", "сон"]
    }
  };
  var sizes = {
    small: "24 22 1.1",
    middle: "32 35 1.2",
    big: "100 23 1.4"
  };
  var container = document.querySelector(".articlesBlock");

  // generation of article cards

  for (var elem in data) {
    var section = document.createElement('section');
    section.classList.add('articleCardAndTime');
    container.append(section);
    var sizeName = sizes["".concat(data[elem].size)].split(" ");
    section.style.width = "".concat(sizeName[0], "%");
    var div = document.createElement('div');
    div.classList.add('articleCard');
    div.style.height = "".concat(sizeName[1], "vw");
    div.id = "articleCard".concat(elem);
    var imgWay = "url('" + "../images/articles/article" + elem + ".webp" + "')";
    div.style.backgroundImage = imgWay;
    section.append(div);
    var goIcon = document.createElement('div');
    goIcon.classList.add('goIcon');
    div.append(goIcon);
    var goIconImg = document.createElement('img');
    goIconImg.src = "../images/articles/arrow.svg";
    goIcon.append(goIconImg);
    var p = document.createElement('p');
    p.id = "articleName".concat(elem);
    p.textContent = "".concat(data[elem].name);
    p.style.fontSize = "".concat(sizeName[2], "vw");
    div.append(p);
    var description = document.createElement('div');
    description.classList.add('description');
    div.append(description);
    var descriptionImg = document.createElement('img');
    descriptionImg.src = "/tt.svg";
    description.append(descriptionImg);
    var time = document.createElement('p');
    time.id = "articleTime".concat(elem);
    time.textContent = "".concat(data[elem].time, " \u043C\u0438\u043D");
    section.append(time);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsQ0FBQztJQUNyQ2dCLENBQUMsQ0FBQ04sRUFBRSxpQkFBQUwsTUFBQSxDQUFlUCxJQUFJLENBQUU7SUFDekJrQixDQUFDLENBQUNDLFdBQVcsTUFBQVosTUFBQSxDQUFJbkIsSUFBSSxDQUFDWSxJQUFJLENBQUMsQ0FBQ1gsSUFBSSxDQUFFO0lBQ2xDNkIsQ0FBQyxDQUFDakMsS0FBSyxDQUFDbUMsUUFBUSxNQUFBYixNQUFBLENBQUlELFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBSTtJQUNuQ0ksR0FBRyxDQUFDTCxNQUFNLENBQUNhLENBQUMsQ0FBQztJQUNiLElBQU1HLFdBQVcsR0FBRzNDLFFBQVEsQ0FBQ3dCLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDakRtQixXQUFXLENBQUNsQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDeENNLEdBQUcsQ0FBQ0wsTUFBTSxDQUFDZ0IsV0FBVyxDQUFDO0lBQ3ZCLElBQU1DLGNBQWMsR0FBRzVDLFFBQVEsQ0FBQ3dCLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDcERvQixjQUFjLENBQUNMLEdBQUcsR0FBQyxTQUFTO0lBQzVCSSxXQUFXLENBQUNoQixNQUFNLENBQUNpQixjQUFjLENBQUM7SUFDbEMsSUFBSWhDLElBQUksR0FBR1osUUFBUSxDQUFDd0IsYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUN0Q1osSUFBSSxDQUFDc0IsRUFBRSxpQkFBQUwsTUFBQSxDQUFpQlAsSUFBSSxDQUFFO0lBQzlCVixJQUFJLENBQUM2QixXQUFXLE1BQUFaLE1BQUEsQ0FBSW5CLElBQUksQ0FBQ1ksSUFBSSxDQUFDLENBQUNWLElBQUksd0JBQU07SUFDekNXLE9BQU8sQ0FBQ0ksTUFBTSxDQUFDZixJQUFJLENBQUM7RUFDdEI7QUFFQSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0Ly4vc3JjL2FydGljbGVzLmNzcyIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0Ly4vc3JjL2pzL2FydGljbGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL2FydGljbGVzLmNzcyc7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGUpID0+IHtcclxuICAgIFxyXG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkgeyBcclxuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlbG9hZGVyXCIpLnN0eWxlLm9wYWNpdHk9XCIwXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlbG9hZGVyXCIpLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgLCAxMjAwKVxyXG4gICAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgMToge1xyXG4gICAgICAgICAgICBuYW1lOiBg0J/QvtGH0LXQvNGDINC00LXRgtC4IFxcclxcbiDQv9C70L7RhdC+INGB0L/Rj9GCP2AsXHJcbiAgICAgICAgICAgIHRpbWU6IFwiMyDigJQgNVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcItCd0LDRgNGD0YjQtdC90LjRjyDRgNC10LbQuNC80LAg0YHQvdCwINGDINC00LXRgtC10Lkg4oCUINGH0LDRgdGC0LDRjyDQv9GA0L7QsdC70LXQvNCwINC00LvRjyDRgNC+0LTQuNGC0LXQu9C10LkuINCj0LfQvdCw0LksINC60LDQutC40LUg0YTQsNC60YLQvtGA0Ysg0LzQvtCz0YPRgiDQvNC10YjQsNGC0YwgINGA0LXQsdGR0L3QutGDINGB0L/QvtC60L7QudC90L4g0LfQsNGB0YvQv9Cw0YLRjCDQuCDQutCw0Log0LzQvtC20L3QviDRgdC/0YDQsNCy0LjRgtGM0YHRjyDRgSDQvdC40LzQuCFcIixcclxuICAgICAgICAgICAgc2l6ZTogXCJtaWRkbGVcIixcclxuICAgICAgICAgICAgdGFnOiBbXCLQtNC10YLQuFwiLCBcItGB0L7QvVwiXSxcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgMjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcItCa0LDQuiDQv9C+0LzQvtGH0Ywg0YDQtdCx0LXQvdC60YMg0YHQv9Cw0YLRjCDQu9GD0YfRiNC1Pz9cIixcclxuICAgICAgICAgICAgdGltZTogXCI2IOKAlCA3XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwi0JrQsNGH0LXRgdGC0LLQtdC90L3Ri9C5INGB0L7QvSDigJQg0LfQsNC70L7QsyDQt9C00L7RgNC+0LLRjNGPINGA0LXQsdGR0L3QutCwLiDQoNCw0LfQsdC40YDQsNC10Lwg0Y3RhNGE0LXQutGC0LjQstC90YvQtSDQv9C+0LTRhdC+0LTRiywg0YfRgtC+0LHRiyDQvNCw0LvRi9GIINC30LDRgdGL0L/QsNC7INCx0YvRgdGC0YDQviDQuCDRgdC/0LDQuyDQutGA0LXQv9C60L4g0LLRgdGOINC90L7Rh9GMLlwiLFxyXG4gICAgICAgICAgICBzaXplOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgICAgICB0YWc6IFtcItC00LXRgtC4XCIsIFwi0YHQvtC9XCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgICAgICAzOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwi0J3Rg9C20LXQvSDQu9C4INGA0LXQsdGR0L3QutGDINC00L3QtdCy0L3QvtC5INGB0L7QvT9cIixcclxuICAgICAgICAgICAgdGltZTogXCIzIOKAlCA1XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwi0JTQvdC10LLQvdC+0Lkg0YHQvtC9INC80L7QttC10YIg0LHRi9GC0Ywg0LLQsNC20L3Ri9C8INCyINGA0LDQt9Cy0LjRgtC40Lgg0YDQtdCx0ZHQvdC60LAuINCe0LTQvdCw0LrQviDQutC+0LPQtNCwINC+0L0g0L3QtdC+0LHRhdC+0LTQuNC8LCDQsCDQutC+0LPQtNCwINC80L7QttC90L4g0L7RgtC60LDQt9Cw0YLRjNGB0Y8g0L7RgiDQvdC10LPQvj8g0J/QvtC/0YDQvtCx0YPQtdC8INGA0LDQt9C+0LHRgNCw0YLRjNGB0Y8hXCIsXHJcbiAgICAgICAgICAgIHNpemU6IFwibWlkZGxlXCIsXHJcbiAgICAgICAgICAgIHRhZzogW1wi0LTQtdGC0LhcIiwgXCLRgdC+0L1cIl0sXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgIDQ6IHtcclxuICAgICAgICAgICAgbmFtZTogXCLQp9GC0L4g0LTQtdC70LDRgtGMLCDQtdGB0LvQuCDRgNC10LHRkdC90L7QuiDQsdC+0LjRgtGB0Y8g0LfQsNGB0YvQv9Cw0YLRjCDQvtC00LjQvT9cIixcclxuICAgICAgICAgICAgdGltZTogXCI1IOKAlCA3XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwi0JzQvdC+0LPQuNC1INC00LXRgtC4INCx0L7Rj9GC0YHRjyDQvtGB0YLQsNCy0LDRgtGM0YHRjyDQvtC00L3QuCDQsiDRgtC10LzQvdC+0YLQtSwg0Lgg0Y3RgtC+INCw0LHRgdC+0LvRjtGC0L3QviDQvdC+0YDQvNCw0LvRjNC90L4uINCSINGN0YLQvtC5INGB0YLQsNGC0YzQtSDQstGLINGD0LfQvdCw0LXRgtC1LCDQutCw0Log0YHQvtC30LTQsNGC0Ywg0YHQv9C+0LrQvtC50L3Rg9GOINCw0YLQvNC+0YHRhNC10YDRgyDQv9C10YDQtdC0INGB0L3QvtC8LCDQvdCw0YPRh9C40YLRjCDRgNC10LHRkdC90LrQsCDRgdC/0YDQsNCy0LvRj9GC0YzRgdGPINGBINGC0YDQtdCy0L7Qs9C+0Lkg0Lgg0YHQtNC10LvQsNGC0Ywg0L/RgNC+0YbQtdGB0YEg0LfQsNGB0YvQv9Cw0L3QuNGPINC60L7QvNGE0L7RgNGC0L3Ri9C8LlwiLFxyXG4gICAgICAgICAgICBzaXplOiBcImJpZ1wiLFxyXG4gICAgICAgICAgICB0YWc6IFtcItC00LXRgtC4XCIsIFwi0YHQvtC9XCJdLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIDU6IHtcclxuICAgICAgICAgICAgbmFtZTogYNCf0YDQuNGH0LjQvdGLINCx0LXRgdGB0L7QvdC40YbRi2AsXHJcbiAgICAgICAgICAgIHRpbWU6IFwiMyDigJQgNVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcItCg0LDQt9Cx0LjRgNCw0LXQvCDRgdCw0LzRi9C1INGA0LDRgdC/0YDQvtGB0YLRgNCw0L3RkdC90L3Ri9C1INGE0LDQutGC0L7RgNGLLCDQutC+0YLQvtGA0YvQtSDQu9C40YjQsNGO0YIg0L3QsNGBINGB0L3QsDog0L7RgiDQutC+0YTQtdC40L3QsCDQuCDQs9Cw0LTQttC10YLQvtCyINC00L4g0YLRgNC10LLQvtC20L3Ri9GFINC80YvRgdC70LXQuSwg0Lgg0LTQtdC70LjQvNGB0Y8g0YHQvtCy0LXRgtCw0LzQuCDQv9C+INC40YUg0YPRgdGC0YDQsNC90LXQvdC40Y4uXCIsXHJcbiAgICAgICAgICAgIHNpemU6IFwic21hbGxcIixcclxuICAgICAgICAgICAgdGFnOiBbXCLQt9C00L7RgNC+0LLRjNC1XCJdLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIDY6IHtcclxuICAgICAgICAgICAgbmFtZTogYNCf0L7Rh9C10LzRgyDQtNC10YLQuCBcXHJcXG4g0L/Qu9C+0YXQviDRgdC/0Y/Rgj9gLFxyXG4gICAgICAgICAgICB0aW1lOiBcIjMg4oCUIDVcIixcclxuICAgICAgICAgICAgdGV4dDogXCLQlNC90LXQstC90L7QuSDRgdC+0L0g0LHRi9Cy0LDQtdGCINC/0L7Qu9C10LfQtdC9INC90LUg0YLQvtC70YzQutC+INC00LXRgtGP0Lwh0JzRiyDRgdC+0LHRgNCw0LvQuCDQvdC10L7QttC40LTQsNC90L3Ri9C1INGE0LDQutGC0Ysg0L4g0YLQvtC8LCDQutCw0Log0LrQvtGA0L7RgtC60LjQuSDQvtGC0LTRi9GFINC80L7QttC10YIg0LLQu9C40Y/RgtGMINC90LAg0LfQtNC+0YDQvtCy0YzQtSDQuCDQvdCw0YHRgtGA0L7QtdC90LjQtS5cIixcclxuICAgICAgICAgICAgc2l6ZTogXCJzbWFsbFwiLFxyXG4gICAgICAgICAgICB0YWc6IFtcItC00LXRgtC4XCIsIFwi0YHQvtC9XCJdLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIDc6IHtcclxuICAgICAgICAgICAgbmFtZTogYNCf0L7Rh9C10LzRgyDQtNC10YLQuCBcXHJcXG4g0L/Qu9C+0YXQviDRgdC/0Y/Rgj9gLFxyXG4gICAgICAgICAgICB0aW1lOiBcIjMg4oCUIDVcIixcclxuICAgICAgICAgICAgdGV4dDogXCLQndCw0YDRg9GI0LXQvdC40Y8g0YDQtdC20LjQvNCwINGB0L3QsCDRgyDQtNC10YLQtdC5IOKAlCDRh9Cw0YHRgtCw0Y8g0L/RgNC+0LHQu9C10LzQsCDQtNC70Y8g0YDQvtC00LjRgtC10LvQtdC5LiDQo9C30L3QsNC5LCDQutCw0LrQuNC1INGE0LDQutGC0L7RgNGLINC80L7Qs9GD0YIg0LzQtdGI0LDRgtGMICDRgNC10LHRkdC90LrRgyDRgdC/0L7QutC+0LnQvdC+INC30LDRgdGL0L/QsNGC0Ywg0Lgg0LrQsNC6INC80L7QttC90L4g0YHQv9GA0LDQstC40YLRjNGB0Y8g0YEg0L3QuNC80LghXCIsXHJcbiAgICAgICAgICAgIHNpemU6IFwic21hbGxcIixcclxuICAgICAgICAgICAgdGFnOiBbXCLQtNC10YLQuFwiLCBcItGB0L7QvVwiXSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICA4OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGDQn9C+0YfQtdC80YMg0LTQtdGC0LggXFxyXFxuINC/0LvQvtGF0L4g0YHQv9GP0YI/YCxcclxuICAgICAgICAgICAgdGltZTogXCIzIOKAlCA1XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwi0J3QsNGA0YPRiNC10L3QuNGPINGA0LXQttC40LzQsCDRgdC90LAg0YMg0LTQtdGC0LXQuSDigJQg0YfQsNGB0YLQsNGPINC/0YDQvtCx0LvQtdC80LAg0LTQu9GPINGA0L7QtNC40YLQtdC70LXQuS4g0KPQt9C90LDQuSwg0LrQsNC60LjQtSDRhNCw0LrRgtC+0YDRiyDQvNC+0LPRg9GCINC80LXRiNCw0YLRjCAg0YDQtdCx0ZHQvdC60YMg0YHQv9C+0LrQvtC50L3QviDQt9Cw0YHRi9C/0LDRgtGMINC4INC60LDQuiDQvNC+0LbQvdC+INGB0L/RgNCw0LLQuNGC0YzRgdGPINGBINC90LjQvNC4IVwiLFxyXG4gICAgICAgICAgICBzaXplOiBcInNtYWxsXCIsXHJcbiAgICAgICAgICAgIHRhZzogW1wi0LTQtdGC0LhcIiwgXCLRgdC+0L1cIl0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgOToge1xyXG4gICAgICAgICAgICBuYW1lOiBg0KfRgtC+INGC0LDQutC+0LUg0LvRg9C90LDRgtC40LfQvNC4INC/0L7Rh9C10LzRgyDQvtC9INCy0L7Qt9C90LjQutCw0LXRgj9gLFxyXG4gICAgICAgICAgICB0aW1lOiBcIjUg4oCUIDdcIixcclxuICAgICAgICAgICAgdGV4dDogXCLQm9GD0L3QsNGC0LjQt9C8INC40LvQuCDRgdC+0LzQvdCw0LzQsdGD0LvQuNC30Lwg4oCUINGN0YLQviDRgdC+0YHRgtC+0Y/QvdC40LUsINC/0YDQuCDQutC+0YLQvtGA0L7QvCDRh9C10LvQvtCy0LXQuiDQstGL0L/QvtC70L3Rj9C10YIg0LTQtdC50YHRgtCy0LjRjyDQstC+INGB0L3QtSwg0YfQsNGB0YLQviDQvdC1INC+0YHQvtC30L3QsNCy0LDRjyDRjdGC0L7Qs9C+LiDQkiDRjdGC0L7QuSDRgdGC0LDRgtGM0LUg0LzRiyDRgNCw0YHRgdC60LDQttC10Lwg0L4g0YLQvtC8LCDQutCw0Log0LjQvNC10L3QvdC+INCy0L7Qt9C90LjQutCw0LXRgiDQu9GD0L3QsNGC0LjQt9C8LCDQutCw0LrQuNC1INGE0LDQutGC0L7RgNGLINGB0L/QvtGB0L7QsdGB0YLQstGD0Y7RgiDQtdCz0L4g0L/QvtGP0LLQu9C10L3QuNGOLCDQuCDQutCw0Log0Y3RgtC+INGB0LLRj9C30LDQvdC+INGBINC90LDRgNGD0YjQtdC90LjRj9C80Lgg0YTQsNC3INGB0L3QsC4gXCIsXHJcbiAgICAgICAgICAgIHNpemU6IFwiYmlnXCIsXHJcbiAgICAgICAgICAgIHRhZzogW1wi0LfQtNC+0YDQvtCy0YzQtVwiLCBcItGB0L7QvVwiXSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcclxuICAgICAgICAxMDoge1xyXG4gICAgICAgICAgICBuYW1lOiBg0KHQvtCy0Ysg0Lgg0LbQsNCy0L7RgNC+0L3QutC4OtC60YLQviDRjdGC0L4/YCxcclxuICAgICAgICAgICAgdGltZTogXCIzIOKAlCA1XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwi0J/QvtGH0LXQvNGDINC+0LTQvdC4INC70Y7QtNC4INC/0YDQvtC00YPQutGC0LjQstC90LXQtSDRg9GC0YDQvtC8LCDQsCDQtNGA0YPQs9C40LUg4oCUINCy0LXRh9C10YDQvtC8PyDQkiDRjdGC0L7QuSDRgdGC0LDRgtGM0LUg0LzRiyDRgNCw0YHRgdC60LDQttC10LwsINGH0YLQviDRgtCw0LrQvtC1INGF0YDQvtC90L7RgtC40L/RiyDQuCDQutCw0Log0L7QvdC4INGB0LLRj9C30LDQvdGLINGBINC90LDRiNC40LzQuCDQv9GA0LjQstGL0YfQutCw0LzQuC5cIixcclxuICAgICAgICAgICAgc2l6ZTogXCJtaWRkbGVcIixcclxuICAgICAgICAgICAgdGFnOiBbXCLQuNGB0LvQtdC00L7QstCw0L3QuNC1XCIsIFwi0YHQvtC9XCJdLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIDExOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGDQn9C+0YfQtdC80YMg0LLRgNC10LzRjyDQstC+INGB0L3QsNGFINCx0YvQstCw0LXRgiDQuNGB0LrQsNC20LXQvdC+P2AsXHJcbiAgICAgICAgICAgIHRpbWU6IFwiMyDigJQgNVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcItCS0YDQtdC80Y8g0LLQviDRgdC90LDRhSDRh9Cw0YHRgtC+INCy0L7RgdC/0YDQuNC90LjQvNCw0LXRgtGB0Y8g0LjQvdCw0YfQtSwg0YfQtdC8INCyINGA0LXQsNC70YzQvdC+0Lkg0LbQuNC30L3QuC4g0JIg0Y3RgtC+0Lkg0YHRgtCw0YLRjNC1INC80Ysg0LjRgdGB0LvQtdC00YPQtdC8LCDQv9C+0YfQtdC80YMg0L3QsNGI0LUg0LLQvtGB0L/RgNC40Y/RgtC40LUg0LLRgNC10LzQtdC90Lgg0LLQviDQstGA0LXQvNGPINGB0L3QsCDQuNGB0LrQsNC20LXQvdC+LCDRh9GC0L4g0L/RgNC+0LjRgdGF0L7QtNC40YIg0YEg0LzQvtC30LPQvtC8INCyINC/0YDQvtGG0LXRgdGB0LUg0YHQvdC+0LLQuNC00LXQvdC40Lkg0Lgg0LrQsNC6INGA0LDQt9C70LjRh9C90YvQtSDRgdGC0LDQtNC40Lgg0YHQvdCwINC80L7Qs9GD0YIg0LLQu9C40Y/RgtGMINC90LAg0Y3RgtC+LlwiLFxyXG4gICAgICAgICAgICBzaXplOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgICAgICB0YWc6IFtcItC40YHQu9C10LTQvtCy0LDQvdC40LVcIiwgXCLRgdC+0L1cIl0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgMTI6IHtcclxuICAgICAgICAgICAgbmFtZTogYDcg0YHQvtCy0LXRgtC+0LIg0LTQu9GPINGD0LvRg9GH0YjQtdC90LjRjyDRgdC90LBgLFxyXG4gICAgICAgICAgICB0aW1lOiBcIjMg4oCUIDVcIixcclxuICAgICAgICAgICAgdGV4dDogXCLQnNC10YfRgtCw0LXRiNGMINCy0YvRgdGL0L/QsNGC0YzRgdGPINC70YPRh9GI0LU/INCc0Ysg0L/QvtC00LPQvtGC0L7QstC40LvQuCDQv9GA0L7RgdGC0YvQtSDQuCDQtNC10LnRgdGC0LLQtdC90L3Ri9C1INGB0L7QstC10YLRiywg0LrQvtGC0L7RgNGL0LUg0L/QvtC80L7Qs9GD0YIg0YHQtNC10LvQsNGC0Ywg0YLQstC+0Lkg0YHQvtC9INCx0L7Qu9C10LUg0LLQvtGB0YHRgtCw0L3QsNCy0LvQuNCy0LDRjtGJ0LjQvC5cIixcclxuICAgICAgICAgICAgc2l6ZTogXCJtaWRkbGVcIixcclxuICAgICAgICAgICAgdGFnOiBbXCLRgdC+0LLQtdGC0YtcIiwgXCLRgdC+0L1cIl0sXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuY29uc3Qgc2l6ZXMgPSB7XHJcbiAgICBzbWFsbDogXCIyNCAyMiAxLjFcIixcclxuICAgIG1pZGRsZTogXCIzMiAzNSAxLjJcIixcclxuICAgIGJpZzogXCIxMDAgMjMgMS40XCJcclxufVxyXG5cclxubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJ0aWNsZXNCbG9ja1wiKVxyXG5cclxuXHJcbi8vIGdlbmVyYXRpb24gb2YgYXJ0aWNsZSBjYXJkc1xyXG5cclxuXHJcbmZvciAobGV0IGVsZW0gaW4gZGF0YSkge1xyXG5cclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYXJ0aWNsZUNhcmRBbmRUaW1lJyk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChzZWN0aW9uKTtcclxuICBsZXQgc2l6ZU5hbWUgPSAoc2l6ZXNbYCR7ZGF0YVtlbGVtXS5zaXplfWBdKS5zcGxpdChcIiBcIik7XHJcbiAgc2VjdGlvbi5zdHlsZS53aWR0aD1gJHtzaXplTmFtZVswXX0lYDtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnYXJ0aWNsZUNhcmQnKTtcclxuICBkaXYuc3R5bGUuaGVpZ2h0PWAke3NpemVOYW1lWzFdfXZ3YDtcclxuICBkaXYuaWQgPSBgYXJ0aWNsZUNhcmQke2VsZW19YDtcclxuICBsZXQgaW1nV2F5ID0gXCJ1cmwoJ1wiICsgXCIuLi9pbWFnZXMvYXJ0aWNsZXMvYXJ0aWNsZVwiICsgZWxlbSArIFwiLndlYnBcIiArIFwiJylcIjtcclxuICBkaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlPWltZ1dheTtcclxuICBzZWN0aW9uLmFwcGVuZChkaXYpO1xyXG4gIGNvbnN0IGdvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGdvSWNvbi5jbGFzc0xpc3QuYWRkKCdnb0ljb24nKTtcclxuICBkaXYuYXBwZW5kKGdvSWNvbik7XHJcbiAgY29uc3QgZ29JY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICBnb0ljb25JbWcuc3JjPVwiLi4vaW1hZ2VzL2FydGljbGVzL2Fycm93LnN2Z1wiXHJcbiAgZ29JY29uLmFwcGVuZChnb0ljb25JbWcpXHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwLmlkPWBhcnRpY2xlTmFtZSR7ZWxlbX1gO1xyXG4gIHAudGV4dENvbnRlbnQ9YCR7ZGF0YVtlbGVtXS5uYW1lfWA7XHJcbiAgcC5zdHlsZS5mb250U2l6ZT1gJHtzaXplTmFtZVsyXX12d2A7XHJcbiAgZGl2LmFwcGVuZChwKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgZGl2LmFwcGVuZChkZXNjcmlwdGlvbik7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBkZXNjcmlwdGlvbkltZy5zcmM9XCIvdHQuc3ZnXCI7XHJcbiAgZGVzY3JpcHRpb24uYXBwZW5kKGRlc2NyaXB0aW9uSW1nKTtcclxuICBsZXQgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB0aW1lLmlkID0gYGFydGljbGVUaW1lJHtlbGVtfWA7XHJcbiAgdGltZS50ZXh0Q29udGVudD1gJHtkYXRhW2VsZW1dLnRpbWV9INC80LjQvWA7XHJcbiAgc2VjdGlvbi5hcHBlbmQodGltZSk7XHJcbn1cclxuXHJcbn0pIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJzZXRUaW1lb3V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwiZGF0YSIsIm5hbWUiLCJ0aW1lIiwidGV4dCIsInNpemUiLCJ0YWciLCJzaXplcyIsInNtYWxsIiwibWlkZGxlIiwiYmlnIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImVsZW0iLCJzZWN0aW9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInNpemVOYW1lIiwiY29uY2F0Iiwic3BsaXQiLCJ3aWR0aCIsImRpdiIsImhlaWdodCIsImlkIiwiaW1nV2F5IiwiYmFja2dyb3VuZEltYWdlIiwiZ29JY29uIiwiZ29JY29uSW1nIiwic3JjIiwicCIsInRleHRDb250ZW50IiwiZm9udFNpemUiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uSW1nIl0sInNvdXJjZVJvb3QiOiIifQ==
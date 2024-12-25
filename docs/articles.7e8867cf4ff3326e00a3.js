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

;// ./src/images/articles/article1.webp
const article1_namespaceObject = __webpack_require__.p + "images/21859e712bd989d78621.webp";
;// ./src/images/articles/article2.webp
const article2_namespaceObject = __webpack_require__.p + "images/5862a3033523364b1acc.webp";
;// ./src/images/articles/article3.webp
const article3_namespaceObject = __webpack_require__.p + "images/21750d4675320ff639b7.webp";
;// ./src/images/articles/article4.webp
const article4_namespaceObject = __webpack_require__.p + "images/f8d87c152d623fdcf35f.webp";
;// ./src/images/articles/article5.webp
const article5_namespaceObject = __webpack_require__.p + "images/31b9baaab5b215ae31dc.webp";
;// ./src/images/articles/article6.webp
const article6_namespaceObject = __webpack_require__.p + "images/3ddc19e35082438bc8ed.webp";
;// ./src/images/articles/article7.webp
const article7_namespaceObject = __webpack_require__.p + "images/6c4251037f7f5df750ec.webp";
;// ./src/images/articles/article8.webp
const article8_namespaceObject = __webpack_require__.p + "images/6c06354ff98941b4d98f.webp";
;// ./src/images/articles/article9.webp
const article9_namespaceObject = __webpack_require__.p + "images/be44799255c3f25ddad5.webp";
;// ./src/images/articles/article10.webp
const article10_namespaceObject = __webpack_require__.p + "images/a50b31409db1989c1964.webp";
;// ./src/images/articles/article11.webp
const article11_namespaceObject = __webpack_require__.p + "images/740e38913e515700982a.webp";
;// ./src/images/articles/article12.webp
const article12_namespaceObject = __webpack_require__.p + "images/9479674c365a59b88598.webp";
;// ./src/images/articles/arrow.svg
const arrow_namespaceObject = __webpack_require__.p + "images/c1fdab9d045a9ea228e1.svg";
;// ./src/images/articles/tt.svg
const tt_namespaceObject = __webpack_require__.p + "images/9c4204d4ab9efd459355.svg";
;// ./src/images/arrows.svg
const arrows_namespaceObject = __webpack_require__.p + "images/d138086608d09c5fd31e.svg";
;// ./src/js/articles.js
















document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };
  document.getElementById("arrows").src = arrows_namespaceObject;
  var data = {
    1: {
      name: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0434\u0435\u0442\u0438 \r\n \u043F\u043B\u043E\u0445\u043E \u0441\u043F\u044F\u0442?",
      time: "3 — 5",
      text: "Нарушения режима сна у детей — частая проблема для родителей. Узнай, какие факторы могут мешать  ребёнку спокойно засыпать и как можно справиться с ними!",
      size: "middle",
      tag: ["дети", "сон"],
      img: article1_namespaceObject
    },
    2: {
      name: "Как помочь ребенку спать лучше?",
      time: "6 — 7",
      text: "Качественный сон — залог здоровья ребёнка. Разбираем эффективные подходы, чтобы малыш засыпал быстро и спал крепко всю ночь.",
      size: "middle",
      tag: ["дети", "сон"],
      img: article2_namespaceObject
    },
    3: {
      name: "Нужен ли ребёнку дневной сон?",
      time: "3 — 5",
      text: "Дневной сон может быть важным в развитии ребёнка. Однако когда он необходим, а когда можно отказаться от него? Попробуем разобраться!",
      size: "middle",
      tag: ["дети", "сон"],
      img: article3_namespaceObject
    },
    4: {
      name: "Что делать, если ребёнок боится засыпать один?",
      time: "5 — 7",
      text: "Многие дети боятся оставаться одни в темноте, и это абсолютно нормально. В этой статье вы узнаете, как создать спокойную атмосферу перед сном, научить ребёнка справляться с тревогой и сделать процесс засыпания комфортным.",
      size: "big",
      tag: ["дети", "сон"],
      img: article4_namespaceObject
    },
    5: {
      name: "\u041F\u0440\u0438\u0447\u0438\u043D\u044B \u0431\u0435\u0441\u0441\u043E\u043D\u0438\u0446\u044B",
      time: "3 — 5",
      text: "Разбираем самые распространённые факторы, которые лишают нас сна: от кофеина и гаджетов до тревожных мыслей, и делимся советами по их устранению.",
      size: "small",
      tag: ["здоровье"],
      img: article5_namespaceObject
    },
    6: {
      name: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0434\u0435\u0442\u0438 \r\n \u043F\u043B\u043E\u0445\u043E \u0441\u043F\u044F\u0442?",
      time: "3 — 5",
      text: "Дневной сон бывает полезен не только детям!Мы собрали неожиданные факты о том, как короткий отдых может влиять на здоровье и настроение.",
      size: "small",
      tag: ["дети", "сон"],
      img: article6_namespaceObject
    },
    7: {
      name: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0434\u0435\u0442\u0438 \r\n \u043F\u043B\u043E\u0445\u043E \u0441\u043F\u044F\u0442?",
      time: "3 — 5",
      text: "Нарушения режима сна у детей — частая проблема для родителей. Узнай, какие факторы могут мешать  ребёнку спокойно засыпать и как можно справиться с ними!",
      size: "small",
      tag: ["дети", "сон"],
      img: article7_namespaceObject
    },
    8: {
      name: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0434\u0435\u0442\u0438 \r\n \u043F\u043B\u043E\u0445\u043E \u0441\u043F\u044F\u0442?",
      time: "3 — 5",
      text: "Нарушения режима сна у детей — частая проблема для родителей. Узнай, какие факторы могут мешать  ребёнку спокойно засыпать и как можно справиться с ними!",
      size: "small",
      tag: ["дети", "сон"],
      img: article8_namespaceObject
    },
    9: {
      name: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043B\u0443\u043D\u0430\u0442\u0438\u0437\u043C\u0438 \u043F\u043E\u0447\u0435\u043C\u0443 \u043E\u043D \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u0435\u0442?",
      time: "5 — 7",
      text: "Лунатизм или сомнамбулизм — это состояние, при котором человек выполняет действия во сне, часто не осознавая этого. В этой статье мы расскажем о том, как именно возникает лунатизм, какие факторы способствуют его появлению, и как это связано с нарушениями фаз сна. ",
      size: "big",
      tag: ["здоровье", "сон"],
      img: article9_namespaceObject
    },
    10: {
      name: "\u0421\u043E\u0432\u044B \u0438 \u0436\u0430\u0432\u043E\u0440\u043E\u043D\u043A\u0438:\u043A\u0442\u043E \u044D\u0442\u043E?",
      time: "3 — 5",
      text: "Почему одни люди продуктивнее утром, а другие — вечером? В этой статье мы расскажем, что такое хронотипы и как они связаны с нашими привычками.",
      size: "middle",
      tag: ["иследование", "сон"],
      img: article10_namespaceObject
    },
    11: {
      name: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0432\u0440\u0435\u043C\u044F \u0432\u043E \u0441\u043D\u0430\u0445 \u0431\u044B\u0432\u0430\u0435\u0442 \u0438\u0441\u043A\u0430\u0436\u0435\u043D\u043E?",
      time: "3 — 5",
      text: "Время во снах часто воспринимается иначе, чем в реальной жизни. В этой статье мы исследуем, почему наше восприятие времени во время сна искажено, что происходит с мозгом в процессе сновидений и как различные стадии сна могут влиять на это.",
      size: "middle",
      tag: ["иследование", "сон"],
      img: article11_namespaceObject
    },
    12: {
      name: "7 \u0441\u043E\u0432\u0435\u0442\u043E\u0432 \u0434\u043B\u044F \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u0441\u043D\u0430",
      time: "3 — 5",
      text: "Мечтаешь высыпаться лучше? Мы подготовили простые и действенные советы, которые помогут сделать твой сон более восстанавливающим.",
      size: "middle",
      tag: ["советы", "сон"],
      img: article12_namespaceObject
    }
  };
  var sizes = {
    small: "24 22 1.1",
    middle: "32 35 1.2",
    big: "100 25 1.4"
  };

  /* articles adaptive */

  if (window.innerHeight > window.innerWidth) {
    sizes = {
      small: "48 34 1.3",
      middle: "32 35 1.2",
      big: "100 30 1.4"
    };
  } else if (window.innerHeight <= window.innerWidth) {
    var _sizes = {
      small: "24 22 1.1",
      middle: "32 35 1.2",
      big: "100 25 1.4"
    };
  }

  /* */

  var container = document.querySelector(".articlesBlock");

  // generation of article cards

  for (var elem in data) {
    var section = document.createElement('section');
    section.classList.add('articleCardAndTime');
    container.append(section);
    var sizeName = sizes["".concat(data[elem].size)].split(" ");
    console.log(sizeName[0]);
    section.style.width = "".concat(sizeName[0], "%");
    var div = document.createElement('div');
    div.classList.add('articleCard');
    div.style.height = "".concat(sizeName[1], "vw");
    div.id = "articleCard".concat(elem);
    div.style.backgroundImage = "url('".concat(data[elem].img, "')");
    if (sizeName[0] == 100) {
      console.log(div);
      div.style.backgroundSize = "100% 120%";
    }
    section.append(div);
    var goIcon = document.createElement('div');
    goIcon.classList.add('goIcon');
    div.append(goIcon);
    var goIconImg = document.createElement('img');
    goIconImg.src = arrow_namespaceObject;
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
    descriptionImg.src = tt_namespaceObject;
    description.append(descriptionImg);
    var time = document.createElement('p');
    time.id = "articleTime".concat(elem);
    time.textContent = "".concat(data[elem].time, " \u043C\u0438\u043D");
    section.append(time);
  }

  //
});
/******/ })()
;
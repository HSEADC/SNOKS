"use strict";
(self["webpackChunkstatic_site_08_24"] = self["webpackChunkstatic_site_08_24"] || []).push([["src_components_collections_C-main-facts-cards_jsx"],{

/***/ "./src/components/collections/C-main-facts-cards.jsx":
/*!***********************************************************!*\
  !*** ./src/components/collections/C-main-facts-cards.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables.jsx */ "./src/components/variables.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _organisms_O_main_facts_Card_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../organisms/O-main-facts-Card.jsx */ "./src/components/organisms/O-main-facts-Card.jsx");
/* harmony import */ var _images_aaa_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/aaa.webp */ "./src/components/images/aaa.webp");
/* harmony import */ var _images_fact2_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/fact2.webp */ "./src/components/images/fact2.webp");
/* harmony import */ var _images_fact3_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/fact3.webp */ "./src/components/images/fact3.webp");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }




//import content from '../data.js'
//import AsyncClass from "../data.js";

//import Loading from '../molecules/M-loading-block.jsx'
//const FactCard = React.lazy(() => import('../organisms/O-main-facts-Card.jsx'));


var StyledCollection = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 110vw;\n  height: 40vw;\n  align-items: center;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  right: -40vw;\n\n"])));





var cards = {
  1: {
    "img": _images_aaa_webp__WEBPACK_IMPORTED_MODULE_4__,
    "title": "Обучение",
    "text": "Во время сна наши знания переходят из кратковременной памяти в долговременную",
    "id": "fact1"
  },
  2: {
    "img": _images_fact2_webp__WEBPACK_IMPORTED_MODULE_5__,
    "title": "Нехватка <br> сна",
    "text": "Хроническая нехватка сна ведёт к расстройствам слуха, зрения, повышенной тревожности, нарушению обмена веществ, нервным тикам и общей слабости",
    "id": "fact2"
  },
  3: {
    "img": _images_fact3_webp__WEBPACK_IMPORTED_MODULE_6__,
    "title": "Время",
    "text": "Примерно четверть всей своей жизни мы проводим во сне",
    "id": "fact3"
  },
  4: {
    "img": _images_aaa_webp__WEBPACK_IMPORTED_MODULE_4__,
    "title": "Забывчи <br> вость",
    "text": "Через 5 минут после пробуждения мы забываем до 50% снов, а через 10 минут — до 90%.",
    "id": "fact4"
  },
  5: {
    "img": _images_aaa_webp__WEBPACK_IMPORTED_MODULE_4__,
    "title": "Цвета",
    "text": "Примерно 12% людей видят сны только в черно-белом цвете",
    "id": "fact5"
  }
};
function generateCards(list) {
  var a = list[0];
  var b = list[1];
  var c = list[2];
  var d = list[3];
  var e = list[4];
  var generated = [];
  var rr = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_organisms_O_main_facts_Card_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "O-main-facts-card choosenFact",
    id: cards[a]["id"],
    src: cards[a]['img'],
    textContent: cards[a]['text'],
    title: cards[a]['title']
  });
  generated.push(rr);
  rr = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_organisms_O_main_facts_Card_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "O-main-facts-card",
    id: cards[b]["id"],
    src: cards[b]['img'],
    textContent: cards[b]['text'],
    title: cards[b]['title']
  });
  generated.push(rr);
  rr = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_organisms_O_main_facts_Card_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "O-main-facts-card",
    id: cards[c]["id"],
    src: cards[c]['img'],
    textContent: cards[c]['text'],
    title: cards[c]['title']
  });
  generated.push(rr);
  rr = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_organisms_O_main_facts_Card_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "O-main-facts-card",
    id: cards[d]["id"],
    src: cards[d]['img'],
    textContent: cards[d]['text'],
    title: cards[d]['title']
  });
  generated.push(rr);
  rr = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_organisms_O_main_facts_Card_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "O-main-facts-card",
    id: cards[e]["id"],
    src: cards[e]['img'],
    textContent: cards[e]['text'],
    title: cards[e]['title']
  });
  generated.push(rr);
  return generated;
}

/*

function generateCards(a) {
  let generated = [];
  for (let i = 0; i < a.length; i++) {
      let b = (<FactCard className="O-main-facts-Card" src={a[i]['img'][0]} textContent={a[i]['text']} title={a[i]['name']}></FactCard>)
      generated.push(b)
  }
  return generated
}

function activateLasers(e, data) {
  console.log(e.target.textContent,data)
  document.querySelector(".A-text-fact-text").textContent = "gfgfdgfdfgfd"
}

function  FactsCards(props) {
  
  let data = generateCards(props["cardsContent"])

    return (
    <StyledCollection className={props["className"]} onClick={(e) => activateLasers(e, data)}>
       <>{data.map((item) => (
          <>{item}</>
      ))}</>
    </StyledCollection>
  );
}

/* 

function FactsCards(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  const data = async ()=> {
    setIsLoading(true);

    const instance = new (await AsyncClass)();
     while (instance.getVariable() == undefined) {
       await new Promise(resolve => setTimeout(resolve, 200));
    }
    const variableValue = instance.getVariable();

    //aaa = generateCards(variableValue)
    setData(generateCards(variableValue));
    setIsLoading(false);
  };
  data()
  }, [])
  
  
    return (
    <StyledCollection className={props["className"]} onClick={(e) => activateLasers(e)}>
      <>{data.map((item) => (
          <>{item}</>
      ))}</>
    </StyledCollection>
  );
}

*/

var b = [1, 2, 3, 4, 5];
function FactsCards(props) {
  var data = generateCards(b);
  var data1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return data;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledCollection, {
    className: props["className"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, data1.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, item);
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FactsCards);

/***/ }),

/***/ "./src/components/organisms/O-main-facts-Card.jsx":
/*!********************************************************!*\
  !*** ./src/components/organisms/O-main-facts-Card.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables.jsx */ "./src/components/variables.jsx");
/* harmony import */ var _quarks_Q_cardBackground_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quarks/Q-cardBackground.jsx */ "./src/components/quarks/Q-cardBackground.jsx");
/* harmony import */ var _atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/A-text.jsx */ "./src/components/atoms/A-text.jsx");
/* harmony import */ var _images_section1_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/section1.webp */ "./src/components/images/section1.webp");
/* harmony import */ var _images_section2_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/section2.webp */ "./src/components/images/section2.webp");
/* harmony import */ var _images_section3_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/section3.webp */ "./src/components/images/section3.webp");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }









var a = {
  "sectionImg1": _images_section1_webp__WEBPACK_IMPORTED_MODULE_4__,
  "sectionImg2": _images_section2_webp__WEBPACK_IMPORTED_MODULE_5__,
  "sectionImg3": _images_section3_webp__WEBPACK_IMPORTED_MODULE_6__
};
var StyledBlock = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 18vw;\n  height: 28vw;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 2vw;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n\n  &.choosenFact {\n    width: 23vw;\n    height: 40vw;\n\n    .A-main-CardTitle {\n      font-size: 2.7vw;\n      top: 2.5vw;\n      left: 2vw;\n      word-break: break-all;\n    }\n\n    img {\n      width: 44vw;\n      height: 43vw;\n      left: -10vw;\n      bottom: -8vw;\n      transition: all 0.3s ease-in-out;\n      pointer-events: none;\n    }\n  }\n\n  svg {\n    position: absolute;\n    bottom: -3vw;\n    left: -7%;\n    pointer-events: none;\n  }\n\n  img {\n\n    width: 40vw;\n    height: 40vw;\n    left: -10vw;\n    bottom: -15vw;\n    transition: all 0.3s ease-in-out;\n    pointer-events: none;\n  }\n\n  .A-main-CardTitle {\n    position: absolute;\n    font-size: 2vw;\n    font-weight: 600;\n    color: ", ";\n    top: 2vw;\n    left: 1.6vw;\n    pointer-events: none;\n    transition: all 0.3s ease-in-out;\n  }\n"])), _variables_jsx__WEBPACK_IMPORTED_MODULE_1__.Pallete["blue"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__.Pallete["white"]);
function FactCard(props) {
  var id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  id = id.slice(1, id.length - 1);
  if (props != undefined) {
    // let id = useId();
    //id = id.slice(1, id.length - 1)
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledBlock, {
      id: props["id"],
      className: props["className"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_quarks_Q_cardBackground_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "Q-cardBackground",
      src: props["src"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "A-main-CardTitle",
      textContent: props['title']
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FactCard);

/***/ }),

/***/ "./src/components/images/aaa.webp":
/*!****************************************!*\
  !*** ./src/components/images/aaa.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c8e63db7d9f64d4004b2.webp";

/***/ }),

/***/ "./src/components/images/fact2.webp":
/*!******************************************!*\
  !*** ./src/components/images/fact2.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/38e2462ff37ec4a54ed2.webp";

/***/ }),

/***/ "./src/components/images/fact3.webp":
/*!******************************************!*\
  !*** ./src/components/images/fact3.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6d4a1df59eadbc695e24.webp";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfY29sbGVjdGlvbnNfQy1tYWluLWZhY3RzLWNhcmRzX2pzeC4yMjAwMDU2ODQyZTA2ZTg0ZDNjMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNFO0FBQ3FEOztBQUc5RjtBQUNBOztBQUVBO0FBQ0E7O0FBRXlEO0FBRXpELElBQU1VLGdCQUFnQixHQUFHVix5REFBTSxDQUFDVyxHQUFHLENBQUFDLGVBQUEsS0FBQUEsZUFBQSxHQUFBQyxzQkFBQSx3TUFVbEM7QUFFb0M7QUFDRTtBQUNBO0FBQ0Y7QUFDQTtBQUVyQyxJQUFJTSxLQUFLLEdBQUc7RUFDVixDQUFDLEVBQUU7SUFDRCxLQUFLLEVBQUVMLDZDQUFJO0lBQ1gsT0FBTyxFQUFFLFVBQVU7SUFDbkIsTUFBTSxFQUFFLCtFQUErRTtJQUN2RixJQUFJLEVBQUU7RUFDUixDQUFDO0VBRUQsQ0FBQyxFQUFFO0lBQ0QsS0FBSyxFQUFFQywrQ0FBSTtJQUNYLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsTUFBTSxFQUFFLGdKQUFnSjtJQUN4SixJQUFJLEVBQUU7RUFDUixDQUFDO0VBRUQsQ0FBQyxFQUFFO0lBQ0QsS0FBSyxFQUFFQywrQ0FBSTtJQUNYLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLE1BQU0sRUFBRSx1REFBdUQ7SUFDL0QsSUFBSSxFQUFFO0VBQ1IsQ0FBQztFQUVELENBQUMsRUFBRTtJQUNELEtBQUssRUFBRUMsNkNBQUk7SUFDWCxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLE1BQU0sRUFBRSxxRkFBcUY7SUFDN0YsSUFBSSxFQUFFO0VBQ1IsQ0FBQztFQUVELENBQUMsRUFBRTtJQUNELEtBQUssRUFBRUMsNkNBQUk7SUFDWCxPQUFPLEVBQUUsT0FBTztJQUNoQixNQUFNLEVBQUUseURBQXlEO0lBQ2pFLElBQUksRUFBRTtFQUNSO0FBQ0YsQ0FBQztBQUdELFNBQVNFLGFBQWFBLENBQUNDLElBQUksRUFBRTtFQUMzQixJQUFJQyxDQUFDLEdB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QUFFakQsSUFBTWQsQ0FBQyxHQUFHO0VBQ1IsYUFBYSxFQUFFdUIsa0RBQVc7RUFDMUIsYUFBYSxFQUFFQyxrREFBVztFQUMxQixhQUFhLEVBQUVDLGtEQUFXQTtBQUM1QixDQUFDO0FBRUQsSUFBTUMsV0FBVyxHQUFHaEQseURBQU0sQ0FBQ2lELE9BQU8sQ0FBQXJDLGVBQUEsS0FBQUEsZUFBQSxHQUFBQyxzQkFBQSxta0NBTVpaLG1EQUFPLENBQUMsTUFBTSxDQUFDLEVBZ0R4QkEsbURBQU8sQ0FBQyxPQUFPLENBQUMsQ0FNNUI7QUFLRCxTQUFTUSxRQUFRQSxDQUFDNEIsS0FBSyxFQUFFO0VBQ3ZCLElBQUlOLEVBQUUsR0FBRzVCLDRDQUFLLENBQUMsQ0FBQztFQUNoQjRCLEVBQUUsR0FBR0EsRUFBRSxDQUFDbUIsS0FBSyxDQUFDLENBQUMsRUFBRW5CLEVBQUUsQ0FBQ29CLE1BQU0sR0FBRyxDQUFDLENBQUM7RUFDL0IsSUFBSWQsS0FBSyxJQUFJZSxTQUFTLEVBQUU7SUFDdkI7SUFDQztJQUNBLG9CQUNDbEQsMERBQUEsQ0FBQzhDLFdBQVc7TUFBQ2pCLEVBQUUsRUFBRU0sS0FBSyxDQUFDLElBQUksQ0FBRTtNQUFDUCxTQUFTLEVBQUVPLEtBQUssQ0FBQyxXQUFXO0lBQUUsZ0JBQzFEbkMsMERBQUEsQ0FBQ3lDLG9FQUFPO01BQUNiLFNBQVMsRUFBQyxrQkFBa0I7TUFBQ0UsR0FBRyxFQUFFSyxLQUFLLENBQUMsS0FBSztJQUFFLENBQVUsQ0FBQyxlQUVsRW5DLDBEQUFBLENBQUMwQyx5REFBSTtNQUFDZCxTQUFTLEVBQUMsa0JBQWtCO01BQUNHLFdBQVcsRUFBRUksS0FBSyxDQUFDLE9BQU87SUFBRSxDQUFPLENBQzNELENBQUM7RUFFbEI7QUFFRjtBQUdBLGlFQUFlNUIsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0Ly4vc3JjL2NvbXBvbmVudHMvY29sbGVjdGlvbnMvQy1tYWluLWZhY3RzLWNhcmRzLmpzeCIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9PLW1haW4tZmFjdHMtQ2FyZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7UGFsbGV0ZX0gZnJvbSAnLi4vdmFyaWFibGVzLmpzeCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VJZCwgdXNlU3RhdGUsIHVzZURlZmVycmVkVmFsdWUsIHVzZUVmZmVjdCwgU3VzcGVuc2UsIHVzZU1lbW99IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG4vL2ltcG9ydCBjb250ZW50IGZyb20gJy4uL2RhdGEuanMnXHJcbi8vaW1wb3J0IEFzeW5jQ2xhc3MgZnJvbSBcIi4uL2RhdGEuanNcIjtcclxuXHJcbi8vaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vbW9sZWN1bGVzL00tbG9hZGluZy1ibG9jay5qc3gnXHJcbi8vY29uc3QgRmFjdENhcmQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi4vb3JnYW5pc21zL08tbWFpbi1mYWN0cy1DYXJkLmpzeCcpKTtcclxuXHJcbmltcG9ydCBGYWN0Q2FyZCBmcm9tICcuLi9vcmdhbmlzbXMvTy1tYWluLWZhY3RzLUNhcmQuanN4J1xyXG5cclxuY29uc3QgU3R5bGVkQ29sbGVjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDExMHZ3O1xyXG4gIGhlaWdodDogNDB2dztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICByaWdodDogLTQwdnc7XHJcblxyXG5gO1xyXG5cclxuaW1wb3J0IGltZzEgZnJvbSAnLi4vaW1hZ2VzL2FhYS53ZWJwJ1xyXG5pbXBvcnQgaW1nMiBmcm9tICcuLi9pbWFnZXMvZmFjdDIud2VicCdcclxuaW1wb3J0IGltZzMgZnJvbSAnLi4vaW1hZ2VzL2ZhY3QzLndlYnAnXHJcbmltcG9ydCBpbWc0IGZyb20gJy4uL2ltYWdlcy9hYWEud2VicCdcclxuaW1wb3J0IGltZzUgZnJvbSAnLi4vaW1hZ2VzL2FhYS53ZWJwJ1xyXG5cclxubGV0IGNhcmRzID0ge1xyXG4gIDE6IHtcclxuICAgIFwiaW1nXCI6IGltZzEsXHJcbiAgICBcInRpdGxlXCI6IFwi0J7QsdGD0YfQtdC90LjQtVwiLFxyXG4gICAgXCJ0ZXh0XCI6IFwi0JLQviDQstGA0LXQvNGPINGB0L3QsCDQvdCw0YjQuCDQt9C90LDQvdC40Y8g0L/QtdGA0LXRhdC+0LTRj9GCINC40Lcg0LrRgNCw0YLQutC+0LLRgNC10LzQtdC90L3QvtC5INC/0LDQvNGP0YLQuCDQsiDQtNC+0LvQs9C+0LLRgNC10LzQtdC90L3Rg9GOXCIsXHJcbiAgICBcImlkXCI6IFwiZmFjdDFcIlxyXG4gIH0sXHJcblxyXG4gIDI6IHtcclxuICAgIFwiaW1nXCI6IGltZzIsXHJcbiAgICBcInRpdGxlXCI6IFwi0J3QtdGF0LLQsNGC0LrQsCA8YnI+INGB0L3QsFwiLFxyXG4gICAgXCJ0ZXh0XCI6IFwi0KXRgNC+0L3QuNGH0LXRgdC60LDRjyDQvdC10YXQstCw0YLQutCwINGB0L3QsCDQstC10LTRkdGCINC6INGA0LDRgdGB0YLRgNC+0LnRgdGC0LLQsNC8INGB0LvRg9GF0LAsINC30YDQtdC90LjRjywg0L/QvtCy0YvRiNC10L3QvdC+0Lkg0YLRgNC10LLQvtC20L3QvtGB0YLQuCwg0L3QsNGA0YPRiNC10L3QuNGOINC+0LHQvNC10L3QsCDQstC10YnQtdGB0YLQsiwg0L3QtdGA0LLQvdGL0Lwg0YLQuNC60LDQvCDQuCDQvtCx0YnQtdC5INGB0LvQsNCx0L7RgdGC0LhcIixcclxuICAgIFwiaWRcIjogXCJmYWN0MlwiXHJcbiAgfSxcclxuXHJcbiAgMzoge1xyXG4gICAgXCJpbWdcIjogaW1nMyxcclxuICAgIFwidGl0bGVcIjogXCLQktGA0LXQvNGPXCIsXHJcbiAgICBcInRleHRcIjogXCLQn9GA0LjQvNC10YDQvdC+INGH0LXRgtCy0LXRgNGC0Ywg0LLRgdC10Lkg0YHQstC+0LXQuSDQttC40LfQvdC4INC80Ysg0L/RgNC+0LLQvtC00LjQvCDQstC+INGB0L3QtVwiLFxyXG4gICAgXCJpZFwiOiBcImZhY3QzXCJcclxuICB9LFxyXG5cclxuICA0OiB7XHJcbiAgICBcImltZ1wiOiBpbWc0LFxyXG4gICAgXCJ0aXRsZVwiOiBcItCX0LDQsdGL0LLRh9C4IDxicj4g0LLQvtGB0YLRjFwiLFxyXG4gICAgXCJ0ZXh0XCI6IFwi0KfQtdGA0LXQtyA1INC80LjQvdGD0YIg0L/QvtGB0LvQtSDQv9GA0L7QsdGD0LbQtNC10L3QuNGPINC80Ysg0LfQsNCx0YvQstCw0LXQvCDQtNC+IDUwJSDRgdC90L7Qsiwg0LAg0YfQtdGA0LXQtyAxMCDQvNC40L3Rg9GCIOKAlCDQtNC+IDkwJS5cIixcclxuICAgIFwiaWRcIjogXCJmYWN0NFwiXHJcbiAgfSxcclxuXHJcbiAgNToge1xyXG4gICAgXCJpbWdcIjogaW1nNSxcclxuICAgIFwidGl0bGVcIjogXCLQptCy0LXRgtCwXCIsXHJcbiAgICBcInRleHRcIjogXCLQn9GA0LjQvNC10YDQvdC+IDEyJSDQu9GO0LTQtdC5INCy0LjQtNGP0YIg0YHQvdGLINGC0L7Qu9GM0LrQviDQsiDRh9C10YDQvdC+LdCx0LXQu9C+0Lwg0YbQstC10YLQtVwiLFxyXG4gICAgXCJpZFwiOiBcImZhY3Q1XCJcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNhcmRzKGxpc3QpIHtcclxuICBsZXQgYSA9IGxpc3RbMF1cclxuICBsZXQgYiA9IGxpc3RbMV1cclxuICBsZXQgYyA9IGxpc3RbMl1cclxuICBsZXQgZCA9IGxpc3RbM11cclxuICBsZXQgZSA9IGxpc3RbNF1cclxuICBsZXQgZ2VuZXJhdGVkID0gW107XHJcbiAgbGV0IHJyID0gKDxGYWN0Q2FyZCBjbGFzc05hbWU9XCJPLW1haW4tZmFjdHMtY2FyZCBjaG9vc2VuRmFjdFwiIGlkPXtjYXJkc1thXVtcImlkXCJdfSBzcmM9e2NhcmRzW2FdWydpbWcnXX0gdGV4dENvbnRlbnQ9e2NhcmRzW2FdWyd0ZXh0J119IHRpdGxlPXtjYXJkc1thXVsndGl0bGUnXX0+PC9GYWN0Q2FyZD4pXHJcbiAgZ2VuZXJhdGVkLnB1c2gocnIpXHJcbiAgcnIgPSAoPEZhY3RDYXJkIGNsYXNzTmFtZT1cIk8tbWFpbi1mYWN0cy1jYXJkXCIgaWQ9e2NhcmRzW2JdW1wiaWRcIl19IHNyYz17Y2FyZHNbYl1bJ2ltZyddfSB0ZXh0Q29udGVudD17Y2FyZHNbYl1bJ3RleHQnXX0gdGl0bGU9e2NhcmRzW2JdWyd0aXRsZSddfT48L0ZhY3RDYXJkPilcclxuICBnZW5lcmF0ZWQucHVzaChycilcclxuICByciA9ICg8RmFjdENhcmQgY2xhc3NOYW1lPVwiTy1tYWluLWZhY3RzLWNhcmRcIiBpZD17Y2FyZHNbY11bXCJpZFwiXX0gc3JjPXtjYXJkc1tjXVsnaW1nJ119IHRleHRDb250ZW50PXtjYXJkc1tjXVsndGV4dCddfSB0aXRsZT17Y2FyZHNbY11bJ3RpdGxlJ119PjwvRmFjdENhcmQ+KVxyXG4gIGdlbmVyYXRlZC5wdXNoKHJyKVxyXG4gIHJyID0gKDxGYWN0Q2FyZCBjbGFzc05hbWU9XCJPLW1haW4tZmFjdHMtY2FyZFwiIGlkPXtjYXJkc1tkXVtcImlkXCJdfSBzcmM9e2NhcmRzW2RdWydpbWcnXX0gdGV4dENvbnRlbnQ9e2NhcmRzW2RdWyd0ZXh0J119IHRpdGxlPXtjYXJkc1tkXVsndGl0bGUnXX0+PC9GYWN0Q2FyZD4pXHJcbiAgZ2VuZXJhdGVkLnB1c2gocnIpXHJcbiAgcnIgPSAoPEZhY3RDYXJkIGNsYXNzTmFtZT1cIk8tbWFpbi1mYWN0cy1jYXJkXCIgaWQ9e2NhcmRzW2VdW1wiaWRcIl19IHNyYz17Y2FyZHNbZV1bJ2ltZyddfSB0ZXh0Q29udGVudD17Y2FyZHNbZV1bJ3RleHQnXX0gdGl0bGU9e2NhcmRzW2VdWyd0aXRsZSddfT48L0ZhY3RDYXJkPilcclxuICBnZW5lcmF0ZWQucHVzaChycilcclxuXHJcblxyXG4gIHJldHVybiBnZW5lcmF0ZWRcclxufVxyXG5cclxuXHJcbi8qXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNhcmRzKGEpIHtcclxuICBsZXQgZ2VuZXJhdGVkID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBiID0gKDxGYWN0Q2FyZCBjbGFzc05hbWU9XCJPLW1haW4tZmFjdHMtQ2FyZFwiIHNyYz17YVtpXVsnaW1nJ11bMF19IHRleHRDb250ZW50PXthW2ldWyd0ZXh0J119IHRpdGxlPXthW2ldWyduYW1lJ119PjwvRmFjdENhcmQ+KVxyXG4gICAgICBnZW5lcmF0ZWQucHVzaChiKVxyXG4gIH1cclxuICByZXR1cm4gZ2VuZXJhdGVkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGl2YXRlTGFzZXJzKGUsIGRhdGEpIHtcclxuICBjb25zb2xlLmxvZyhlLnRhcmdldC50ZXh0Q29udGVudCxkYXRhKVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQS10ZXh0LWZhY3QtdGV4dFwiKS50ZXh0Q29udGVudCA9IFwiZ2ZnZmRnZmRmZ2ZkXCJcclxufVxyXG5cclxuZnVuY3Rpb24gIEZhY3RzQ2FyZHMocHJvcHMpIHtcclxuICBcclxuICBsZXQgZGF0YSA9IGdlbmVyYXRlQ2FyZHMocHJvcHNbXCJjYXJkc0NvbnRlbnRcIl0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDb2xsZWN0aW9uIGNsYXNzTmFtZT17cHJvcHNbXCJjbGFzc05hbWVcIl19IG9uQ2xpY2s9eyhlKSA9PiBhY3RpdmF0ZUxhc2VycyhlLCBkYXRhKX0+XHJcbiAgICAgICA8PntkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPD57aXRlbX08Lz5cclxuICAgICAgKSl9PC8+XHJcbiAgICA8L1N0eWxlZENvbGxlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuLyogXHJcblxyXG5mdW5jdGlvbiBGYWN0c0NhcmRzKHByb3BzKSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICBjb25zdCBkYXRhID0gYXN5bmMgKCk9PiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgKGF3YWl0IEFzeW5jQ2xhc3MpKCk7XHJcbiAgICAgd2hpbGUgKGluc3RhbmNlLmdldFZhcmlhYmxlKCkgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YXJpYWJsZVZhbHVlID0gaW5zdGFuY2UuZ2V0VmFyaWFibGUoKTtcclxuXHJcbiAgICAvL2FhYSA9IGdlbmVyYXRlQ2FyZHModmFyaWFibGVWYWx1ZSlcclxuICAgIHNldERhdGEoZ2VuZXJhdGVDYXJkcyh2YXJpYWJsZVZhbHVlKSk7XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcbiAgZGF0YSgpXHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZENvbGxlY3Rpb24gY2xhc3NOYW1lPXtwcm9wc1tcImNsYXNzTmFtZVwiXX0gb25DbGljaz17KGUpID0+IGFjdGl2YXRlTGFzZXJzKGUpfT5cclxuICAgICAgPD57ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDw+e2l0ZW19PC8+XHJcbiAgICAgICkpfTwvPlxyXG4gICAgPC9TdHlsZWRDb2xsZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbiovXHJcblxyXG5cclxubGV0IGIgPSBbMSwgMiwgMywgNCwgNV1cclxuXHJcbmZ1bmN0aW9uIEZhY3RzQ2FyZHMocHJvcHMpIHtcclxuXHJcbiAgbGV0IGRhdGEgPSBnZW5lcmF0ZUNhcmRzKGIpIFxyXG4gIGNvbnN0IGRhdGExID0gdXNlTWVtbygoKSA9PiBkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZENvbGxlY3Rpb24gY2xhc3NOYW1lPXtwcm9wc1tcImNsYXNzTmFtZVwiXX0+XHJcbiAgICAgIDw+e2RhdGExLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPD57aXRlbX08Lz5cclxuICAgICAgKSl9PC8+XHJcbiAgICA8L1N0eWxlZENvbGxlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjdHNDYXJkcztcclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQYWxsZXRlfSBmcm9tICcuLi92YXJpYWJsZXMuanN4JztcclxuaW1wb3J0IHsgdXNlSWQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQ2FyZEltZyBmcm9tICcuLi9xdWFya3MvUS1jYXJkQmFja2dyb3VuZC5qc3gnXHJcbmltcG9ydCBUZXh0IGZyb20gJy4uL2F0b21zL0EtdGV4dC5qc3gnO1xyXG5cclxuaW1wb3J0IHNlY3Rpb25JbWcxIGZyb20gJy4uL2ltYWdlcy9zZWN0aW9uMS53ZWJwJ1xyXG5pbXBvcnQgc2VjdGlvbkltZzIgZnJvbSAnLi4vaW1hZ2VzL3NlY3Rpb24yLndlYnAnXHJcbmltcG9ydCBzZWN0aW9uSW1nMyBmcm9tICcuLi9pbWFnZXMvc2VjdGlvbjMud2VicCdcclxuXHJcbmNvbnN0IGEgPSB7XHJcbiAgXCJzZWN0aW9uSW1nMVwiOiBzZWN0aW9uSW1nMSxcclxuICBcInNlY3Rpb25JbWcyXCI6IHNlY3Rpb25JbWcyLFxyXG4gIFwic2VjdGlvbkltZzNcIjogc2VjdGlvbkltZzMsXHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZEJsb2NrID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDE4dnc7XHJcbiAgaGVpZ2h0OiAyOHZ3O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtQYWxsZXRlW1wiYmx1ZVwiXX07XHJcbiAgYm9yZGVyLXJhZGl1czogMnZ3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmLmNob29zZW5GYWN0IHtcclxuICAgIHdpZHRoOiAyM3Z3O1xyXG4gICAgaGVpZ2h0OiA0MHZ3O1xyXG5cclxuICAgIC5BLW1haW4tQ2FyZFRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyLjd2dztcclxuICAgICAgdG9wOiAyLjV2dztcclxuICAgICAgbGVmdDogMnZ3O1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDQ0dnc7XHJcbiAgICAgIGhlaWdodDogNDN2dztcclxuICAgICAgbGVmdDogLTEwdnc7XHJcbiAgICAgIGJvdHRvbTogLTh2dztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTN2dztcclxuICAgIGxlZnQ6IC03JTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuXHJcbiAgICB3aWR0aDogNDB2dztcclxuICAgIGhlaWdodDogNDB2dztcclxuICAgIGxlZnQ6IC0xMHZ3O1xyXG4gICAgYm90dG9tOiAtMTV2dztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuQS1tYWluLUNhcmRUaXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogJHtQYWxsZXRlW1wid2hpdGVcIl19O1xyXG4gICAgdG9wOiAydnc7XHJcbiAgICBsZWZ0OiAxLjZ2dztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gRmFjdENhcmQocHJvcHMpIHtcclxuICBsZXQgaWQgPSB1c2VJZCgpO1xyXG4gIGlkID0gaWQuc2xpY2UoMSwgaWQubGVuZ3RoIC0gMSlcclxuICBpZiAocHJvcHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgIC8vIGxldCBpZCA9IHVzZUlkKCk7XHJcbiAgICAvL2lkID0gaWQuc2xpY2UoMSwgaWQubGVuZ3RoIC0gMSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgPFN0eWxlZEJsb2NrIGlkPXtwcm9wc1tcImlkXCJdfSBjbGFzc05hbWU9e3Byb3BzW1wiY2xhc3NOYW1lXCJdfT4gXHJcbiAgICAgICA8Q2FyZEltZyBjbGFzc05hbWU9XCJRLWNhcmRCYWNrZ3JvdW5kXCIgc3JjPXtwcm9wc1tcInNyY1wiXX0+PC9DYXJkSW1nPlxyXG5cclxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJBLW1haW4tQ2FyZFRpdGxlXCIgdGV4dENvbnRlbnQ9e3Byb3BzWyd0aXRsZSddfT48L1RleHQ+XHJcbiAgICAgIDwvU3R5bGVkQmxvY2s+XHJcbiAgKTtcclxuICB9XHJcblxyXG59XHJcbiAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN0Q2FyZDsiXSwibmFtZXMiOlsic3R5bGVkIiwiUGFsbGV0ZSIsIlJlYWN0IiwidXNlSWQiLCJ1c2VTdGF0ZSIsInVzZURlZmVycmVkVmFsdWUiLCJ1c2VFZmZlY3QiLCJTdXNwZW5zZSIsInVzZU1lbW8iLCJGYWN0Q2FyZCIsIlN0eWxlZENvbGxlY3Rpb24iLCJkaXYiLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiaW1nMSIsImltZzIiLCJpbWczIiwiaW1nNCIsImltZzUiLCJjYXJkcyIsImdlbmVyYXRlQ2FyZHMiLCJsaXN0IiwiYSIsImIiLCJjIiwiZCIsImUiLCJnZW5lcmF0ZWQiLCJyciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpZCIsInNyYyIsInRleHRDb250ZW50IiwidGl0bGUiLCJwdXNoIiwiRmFjdHNDYXJkcyIsInByb3BzIiwiZGF0YSIsImRhdGExIiwiRnJhZ21lbnQiLCJtYXAiLCJpdGVtIiwiQ2FyZEltZyIsIlRleHQiLCJzZWN0aW9uSW1nMSIsInNlY3Rpb25JbWcyIiwic2VjdGlvbkltZzMiLCJTdHlsZWRCbG9jayIsInNlY3Rpb24iLCJzbGljZSIsImxlbmd0aCIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=
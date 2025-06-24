"use strict";
(self["webpackChunkstatic_site_08_24"] = self["webpackChunkstatic_site_08_24"] || []).push([[751],{

/***/ 1208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ C_main_facts_cards)
});

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(7581);
// EXTERNAL MODULE: ./src/components/variables.jsx
var variables = __webpack_require__(3382);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./src/components/organisms/O-main-facts-Card.jsx
var O_main_facts_Card = __webpack_require__(2543);
;// ./src/components/images/Intersect-2.webp
const Intersect_2_namespaceObject = __webpack_require__.p + "images/bed011eb55561e2ec903.webp";
;// ./src/components/images/Intersect-4.webp
const Intersect_4_namespaceObject = __webpack_require__.p + "images/97009be1f9f8feaea6e4.webp";
;// ./src/components/images/Intersect-3.webp
const Intersect_3_namespaceObject = __webpack_require__.p + "images/261376d808e976832060.webp";
;// ./src/components/images/Intersect.webp
const Intersect_namespaceObject = __webpack_require__.p + "images/417aa1ccc840c43da54e.webp";
;// ./src/components/images/44444.webp
const _44444_namespaceObject = __webpack_require__.p + "images/b750947f965c078fc432.webp";
;// ./src/components/collections/C-main-facts-cards.jsx
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }




//import content from '../data.js'
//import AsyncClass from "../data.js";

//import Loading from '../molecules/M-loading-block.jsx'
//const FactCard = React.lazy(() => import('../organisms/O-main-facts-Card.jsx'));


var StyledCollection = styled_components_browser_esm/* default */.Ay.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 110vw;\n  height: 40vw;\n  align-items: center;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  right: -40vw;\n\n"])));





var cards = {
  1: {
    "img": Intersect_2_namespaceObject,
    "title": "Обучение",
    "text": "Во время сна наши знания переходят из кратковременной памяти в долговременную",
    "id": "fact1"
  },
  2: {
    "img": Intersect_4_namespaceObject,
    "title": "Нехватка <br> сна",
    "text": "Хроническая нехватка сна ведёт к расстройствам слуха, зрения, повышенной тревожности, нарушению обмена веществ, нервным тикам и общей слабости",
    "id": "fact2"
  },
  3: {
    "img": Intersect_3_namespaceObject,
    "title": "Время",
    "text": "Примерно четверть всей своей жизни мы проводим во сне",
    "id": "fact3"
  },
  4: {
    "img": Intersect_namespaceObject,
    "title": "Забывчи <br> вость",
    "text": "Через 5 минут после пробуждения мы забываем до 50% снов, а через 10 минут — до 90%.",
    "id": "fact4"
  },
  5: {
    "img": _44444_namespaceObject,
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
  var rr = /*#__PURE__*/react.createElement(O_main_facts_Card/* default */.A, {
    className: "O-main-facts-card choosenFact",
    id: cards[a]["id"],
    src: cards[a]['img'],
    textContent: cards[a]['text'],
    title: cards[a]['title']
  });
  generated.push(rr);
  rr = /*#__PURE__*/react.createElement(O_main_facts_Card/* default */.A, {
    className: "O-main-facts-card",
    id: cards[b]["id"],
    src: cards[b]['img'],
    textContent: cards[b]['text'],
    title: cards[b]['title']
  });
  generated.push(rr);
  rr = /*#__PURE__*/react.createElement(O_main_facts_Card/* default */.A, {
    className: "O-main-facts-card",
    id: cards[c]["id"],
    src: cards[c]['img'],
    textContent: cards[c]['text'],
    title: cards[c]['title']
  });
  generated.push(rr);
  rr = /*#__PURE__*/react.createElement(O_main_facts_Card/* default */.A, {
    className: "O-main-facts-card",
    id: cards[d]["id"],
    src: cards[d]['img'],
    textContent: cards[d]['text'],
    title: cards[d]['title']
  });
  generated.push(rr);
  rr = /*#__PURE__*/react.createElement(O_main_facts_Card/* default */.A, {
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
  var data1 = (0,react.useMemo)(function () {
    return data;
  });
  return /*#__PURE__*/react.createElement(StyledCollection, {
    className: props["className"]
  }, /*#__PURE__*/react.createElement(react.Fragment, null, data1.map(function (item) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, item);
  })));
}
/* harmony default export */ const C_main_facts_cards = (FactsCards);

/***/ }),

/***/ 2543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7581);
/* harmony import */ var _variables_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3382);
/* harmony import */ var _quarks_Q_cardBackground_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2297);
/* harmony import */ var _atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2911);
/* harmony import */ var _images_section1_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1186);
/* harmony import */ var _images_section2_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8835);
/* harmony import */ var _images_section3_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2080);
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }









var a = {
  "sectionImg1": _images_section1_webp__WEBPACK_IMPORTED_MODULE_4__,
  "sectionImg2": _images_section2_webp__WEBPACK_IMPORTED_MODULE_5__,
  "sectionImg3": _images_section3_webp__WEBPACK_IMPORTED_MODULE_6__
};
var StyledBlock = styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 18vw;\n  height: 28vw;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 2vw;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n\n  &.choosenFact {\n    width: 23vw;\n    height: 37vw;\n\n    .A-main-CardTitle {\n      font-size: 2.7vw;\n      top: 2.5vw;\n      left: 2vw;\n      word-break: break-all;\n    }\n\n    img {\n      width: 37vw;\n      height: 32vw;\n      left: -5vw;\n      bottom: -4vw;\n      transition: all 0.3s ease-in-out;\n      pointer-events: none;\n    }\n  }\n\n  svg {\n    position: absolute;\n    bottom: -3vw;\n    left: -7%;\n    pointer-events: none;\n  }\n\n  img {\n\n    width: 37vw;\n    height: 32vw;\n    left: -10vw;\n    bottom: -14vw;\n    transition: all 0.3s ease-in-out;\n    pointer-events: none;\n  }\n\n  .A-main-CardTitle {\n    position: absolute;\n    font-size: 2vw;\n    font-weight: 600;\n    color: ", ";\n    top: 2vw;\n    left: 1.6vw;\n    pointer-events: none;\n    transition: all 0.3s ease-in-out;\n  }\n"])), _variables_jsx__WEBPACK_IMPORTED_MODULE_1__/* .Pallete */ .K["blue"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__/* .Pallete */ .K["white"]);
function FactCard(props) {
  var id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  id = id.slice(1, id.length - 1);
  if (props != undefined) {
    // let id = useId();
    //id = id.slice(1, id.length - 1)
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledBlock, {
      id: props["id"],
      className: props["className"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_quarks_Q_cardBackground_jsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      className: "Q-cardBackground",
      src: props["src"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      className: "A-main-CardTitle",
      textContent: props['title']
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FactCard);

/***/ })

}]);
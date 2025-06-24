"use strict";
(self["webpackChunkstatic_site_08_24"] = self["webpackChunkstatic_site_08_24"] || []).push([[656],{

/***/ 1270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ W_main_UI)
});

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(7581);
// EXTERNAL MODULE: ./src/components/variables.jsx
var variables = __webpack_require__(3382);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./src/components/atoms/A-text.jsx
var A_text = __webpack_require__(2911);
;// ./src/components/molecules/M-main-facts-card.jsx
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }




var StyledContainter = styled_components_browser_esm/* default */.Ay.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 11vw 0 9vw 0;\n  padding: 10vw 22vw 10vw 5vw;\n  width: 60vw;\n  height: 24vw;\n  background-color: white;\n  border-radius: 3vw;\n\n  .A-text-fact-text {\n    font-size: 1.4vw;\n    line-height: 1.7vw;\n  }\n\n"])));
function FactText(props) {
  return /*#__PURE__*/react.createElement(StyledContainter, {
    className: props["className"]
  }, /*#__PURE__*/react.createElement(A_text/* default */.A, {
    className: "A-text-fact-text",
    textContent: "Во время сна наши знания переходят из кратковременной памяти в долговременную"
  }));
}
/* harmony default export */ const M_main_facts_card = (FactText);
// EXTERNAL MODULE: ./src/components/molecules/M-loading-block.jsx
var M_loading_block = __webpack_require__(4781);
// EXTERNAL MODULE: ./node_modules/airtable/lib/airtable.umd.js
var airtable_umd = __webpack_require__(997);
var airtable_umd_default = /*#__PURE__*/__webpack_require__.n(airtable_umd);
;// ./src/components/data.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


//let content
//getPostTeasers().then((data) => {
//content = data

//update(content)

//})

//export default content;
/* harmony default export */ const data = (new Promise(function (resolve) {
  setTimeout(function () {
    // class AsyncClass {
    //  constructor() {
    //    this.content = content;
    //   }
    // }
    var AsyncClass = /*#__PURE__*/function () {
      function AsyncClass() {
        var _this = this;
        _classCallCheck(this, AsyncClass);
        getPostTeasers().then(function (data) {
          _this.content = data;
          update(_this.content);
          //console.log(this.content)
        });
      }
      return _createClass(AsyncClass, [{
        key: "getVariable",
        value: function getVariable() {
          return this.content;
        }
      }]);
    }();
    resolve(AsyncClass);
  }, 1000);
}));

//   patx3dbR2FVVqn9RA.25121240e61d45ff2ed53ad58f7b5ba5c21f4432a938bd7755c9251ce35840fb

function getPostTeasers() {
  return new Promise(function (resolve, reject) {
    var content = [];
    var token = 'patx3dbR2FVVqn9RA.25121240e61d45ff2ed53ad58f7b5ba5c21f4432a938bd7755c9251ce35840fb';
    airtable_umd_default().configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: token
    });
    var base = airtable_umd_default().base('appzDLcXrJIhy2Qzn');
    base('facts').select({
      maxRecords: 100
    }).firstPage().then(function (result) {
      result.forEach(function (record) {
        content.push({
          name: record.fields['name'],
          text: record.fields['text'],
          img: record.fields['img'],
          state: record.fields['state']
        });
      });
      resolve(content);
    });
  });
}
function update(content) {
  var href = window.location.href.split('/').pop().split('.')[0];
  console.log(href);
  setTimeout(function () {
    content.forEach(function (stroke) {
      if (href === stroke.page) {
        createContent(stroke);
      }
    }, 200);
  });
}
;// ./src/components/images/icon.svg
const icon_namespaceObject = __webpack_require__.p + "images/57301a0843494fa2e168.svg";
;// ./src/components/atoms/A-arrowBtn.jsx
var A_arrowBtn_templateObject;
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function A_arrowBtn_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }




var StyledButton = styled_components_browser_esm/* default */.Ay.button(A_arrowBtn_templateObject || (A_arrowBtn_templateObject = A_arrowBtn_taggedTemplateLiteral(["\n  color: ", ";\n  width: 6vw;\n  height: 6vw;\n  border-radius: 100%;\n  opacity: 1;\n  transition: all 0.3s ease;\n  background-color: ", ";\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .arrow {\n    width: 2vw;\n    height: 3vw;\n    margin-left: 0.5vw;\n    pointer-events: none;\n  }\n\n  &:hover {\n  opacity: 0.6;\n  }\n\n  &.prev {\n    transform: rotate(180deg)\n  }\n"])), variables/* Pallete */.K["black"], variables/* Pallete */.K["blue"]);
function ArrowButton(_ref) {
  var onClick = _ref.onClick,
    className = _ref.className,
    way = _ref.way;
  var _useState = (0,react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var fullClass = className + " " + way;
  var handleChange = function handleChange(event) {
    if (event.target.classList.contains("next")) {
      setInputValue(true);
      onClick(true);
    } else if (event.target.classList.contains("prev")) {
      setInputValue(false);
      onClick(false);
      console.log(11111111111);
    }
  };
  return /*#__PURE__*/react.createElement(StyledButton, {
    className: fullClass,
    href: "btnLink",
    onClick: handleChange
  }, /*#__PURE__*/react.createElement("img", {
    className: "arrow",
    src: icon_namespaceObject
  }));
}
/* harmony default export */ const A_arrowBtn = (ArrowButton);
;// ./src/components/wrappers/W-main-UI.jsx
var W_main_UI_templateObject;
function W_main_UI_slicedToArray(r, e) { return W_main_UI_arrayWithHoles(r) || W_main_UI_iterableToArrayLimit(r, e) || W_main_UI_unsupportedIterableToArray(r, e) || W_main_UI_nonIterableRest(); }
function W_main_UI_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function W_main_UI_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return W_main_UI_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? W_main_UI_arrayLikeToArray(r, a) : void 0; } }
function W_main_UI_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function W_main_UI_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function W_main_UI_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function W_main_UI_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }





//import FactsCards from '../collections/C-main-facts-cards.jsx'





var FactsCards = /*#__PURE__*/react.lazy(function () {
  return __webpack_require__.e(/* import() */ 751).then(__webpack_require__.bind(__webpack_require__, 1208));
});

// "Ленивая" загрузка компонента

var StyledBlock = styled_components_browser_esm/* default */.Ay.section(W_main_UI_templateObject || (W_main_UI_templateObject = W_main_UI_taggedTemplateLiteral(["\n  width: 100vw;\n  height: 49vw;\n  position: relative;\n  overflow: hidden;\n  \n\n  .arrows {\n    position: absolute;\n    display: flex;\n    width: 17vw;\n    top: 37vw;\n    left: 3vw;\n    justify-content: space-between;\n  }\n\n  .A-sectionName {\n    font-size: 3vw;\n    font-weight: 600;\n    position: absolute;\n    left: 2vw;\n    top: 4vw;\n  }\n\n  .overflow {\n    width: 70vw;\n    height: 40vw;\n    overflow: hidden;\n    position: absolute;\n    margin-left: 41vw;\n  }\n"])));
var queue = {
  1: {
    "pos": "-40vw",
    "num": "1",
    "id": "fact1",
    "text": "Во время сна наши знания переходят из кратковременной памяти в долговременную"
  },
  2: {
    "pos": "-18.3vw",
    "num": "2",
    "id": "fact2",
    "text": "Хроническая нехватка сна ведёт к расстройствам слуха, зрения, повышенной тревожности, нарушению обмена веществ, нервным тикам и общей слабости"
  },
  3: {
    "pos": "3.4vw",
    "num": "3",
    "id": "fact3",
    "text": "Примерно четверть всей своей жизни мы проводим во сне"
  },
  4: {
    "pos": "25.1vw",
    "num": "4",
    "id": "fact4",
    "text": "Через 5 минут после пробуждения мы забываем до 50% снов, а через 10 минут — до 90%."
  },
  5: {
    "pos": "46.8vw",
    "num": "5",
    "id": "fact5",
    "text": "Примерно 12% людей видят сны только в черно-белом цвете"
  }
};
function SectionFacts(props) {
  function renderQueue(e) {
    if (e == true) {
      var pos = Number(document.querySelector(".choosenFact").id.substr(4));
      if (pos == 5) {
        document.querySelector(".choosenFact").style.marginLeft = "0vw";
        document.querySelector(".choosenFact").classList.remove("choosenFact");
        document.querySelector("#fact1").classList.add("choosenFact");
        document.querySelector(".C-main-facts-card").style.right = queue["1"]["pos"];
        document.querySelector(".A-text-fact-text").textContent = queue["1"]["text"];
      } else {
        document.querySelector(".choosenFact").style.marginLeft = "0vw";
        document.querySelector(".choosenFact").classList.remove("choosenFact");
        document.querySelector("#fact".concat(pos + 1)).classList.add("choosenFact");
        document.querySelector(".C-main-facts-card").style.right = queue[pos + 1]["pos"];
        document.querySelector(".A-text-fact-text").textContent = queue[pos + 1]["text"];
      }
    } else if (e == false) {
      var _pos = Number(document.querySelector(".choosenFact").id.substr(4));
      if (_pos == 1) {
        document.querySelector(".choosenFact").style.marginLeft = "0vw";
        document.querySelector(".choosenFact").classList.remove("choosenFact");
        document.querySelector("#fact5").classList.add("choosenFact");
        document.querySelector(".C-main-facts-card").style.right = queue["5"]["pos"];
        document.querySelector(".A-text-fact-text").textContent = queue["5"]["text"];
      } else {
        document.querySelector(".choosenFact").style.marginLeft = "0vw";
        document.querySelector(".choosenFact").classList.remove("choosenFact");
        document.querySelector("#fact".concat(_pos - 1)).classList.add("choosenFact");
        document.querySelector(".C-main-facts-card").style.right = queue[_pos - 1]["pos"];
        document.querySelector(".A-text-fact-text").textContent = queue[_pos - 1]["text"];
      }
    }
  }

  /*const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
  const data = async ()=> {
    setIsLoading(true);
      const instance = new (await AsyncClass)();
     while (instance.getVariable() == undefined) {
       await new Promise(resolve => setTimeout(resolve, 500));
    }
    const variableValue = instance.getVariable();
      //aaa = generateCards(variableValue)
  //  setData(generateCards(variableValue));
      setData(variableValue)
    setIsLoading(false);
  };
  data()
  }, [])
  
    console.log(data) */
  // if (!isLoading) {

  var _useState = (0,react.useState)('no'),
    _useState2 = W_main_UI_slicedToArray(_useState, 2),
    myValue = _useState2[0],
    setMyValue = _useState2[1];
  var handleChildChange = function handleChildChange(newValue) {
    setMyValue(newValue);
    renderQueue(newValue);
    setTimeout(function () {
      setMyValue("no");
    }, 50);
  };
  return /*#__PURE__*/react.createElement(StyledBlock, {
    className: props["className"]
  }, /*#__PURE__*/react.createElement(A_text/* default */.A, {
    className: "A-sectionName",
    textContent: "\u0424\u0430\u043A\u0442\u044B \u043F\u0440\u043E \u0441\u043E\u043D"
  }), /*#__PURE__*/react.createElement("div", {
    className: "overflow"
  }, /*#__PURE__*/react.createElement(FactsCards, {
    className: "C-main-facts-card",
    state: myValue
  })), /*#__PURE__*/react.createElement(M_main_facts_card, {
    className: "M-main-facts-card",
    textContent: ""
  }), /*#__PURE__*/react.createElement("div", {
    className: "arrows"
  }, /*#__PURE__*/react.createElement(A_arrowBtn, {
    className: "A-arrowBtn",
    way: "prev",
    onClick: handleChildChange
  }), /*#__PURE__*/react.createElement(A_arrowBtn, {
    className: "A-arrowBtn",
    way: "next",
    onClick: handleChildChange
  })));

  //  }
}
/* harmony default export */ const W_main_UI = (SectionFacts);

/*

function SectionFacts(props) {
    return (
        <StyledBlock className={props["className"]}> 
          <Suspense fallback={
            <Loading className="M-loading">Загрузка...</Loading>
          }>
            <FactText className="M-main-facts-card" textContent=""></FactText>
            <FactsCards className="C-main-facts-cards"></FactsCards>
          </Suspense>
        </StyledBlock>
    );
  }
  

export default SectionFacts;

*/

/***/ })

}]);
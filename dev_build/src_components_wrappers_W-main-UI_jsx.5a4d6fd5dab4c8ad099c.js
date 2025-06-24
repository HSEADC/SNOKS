"use strict";
(self["webpackChunkstatic_site_08_24"] = self["webpackChunkstatic_site_08_24"] || []).push([["src_components_wrappers_W-main-UI_jsx"],{

/***/ "./src/components/data.js":
/*!********************************!*\
  !*** ./src/components/data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.umd.js");
/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airtable__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Promise(function (resolve) {
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
    airtable__WEBPACK_IMPORTED_MODULE_0___default().configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: token
    });
    var base = airtable__WEBPACK_IMPORTED_MODULE_0___default().base('appzDLcXrJIhy2Qzn');
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

/***/ }),

/***/ "./src/components/atoms/A-arrowBtn.jsx":
/*!*********************************************!*\
  !*** ./src/components/atoms/A-arrowBtn.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables.jsx */ "./src/components/variables.jsx");
/* harmony import */ var _images_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icon.svg */ "./src/components/images/icon.svg");
var _templateObject;
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }




var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  width: 6vw;\n  height: 6vw;\n  border-radius: 100%;\n  opacity: 1;\n  transition: all 0.3s ease;\n  background-color: ", ";\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .arrow {\n    width: 2vw;\n    height: 3vw;\n    margin-left: 0.5vw;\n    pointer-events: none;\n  }\n\n  &:hover {\n  opacity: 0.6;\n  }\n\n  &.prev {\n    transform: rotate(180deg)\n  }\n"])), _variables_jsx__WEBPACK_IMPORTED_MODULE_1__.Pallete["black"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__.Pallete["blue"]);
function ArrowButton(_ref) {
  var onClick = _ref.onClick,
    className = _ref.className,
    way = _ref.way;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledButton, {
    className: fullClass,
    href: "btnLink",
    onClick: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "arrow",
    src: _images_icon_svg__WEBPACK_IMPORTED_MODULE_2__
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowButton);

/***/ }),

/***/ "./src/components/molecules/M-main-facts-card.jsx":
/*!********************************************************!*\
  !*** ./src/components/molecules/M-main-facts-card.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables.jsx */ "./src/components/variables.jsx");
/* harmony import */ var _atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/A-text.jsx */ "./src/components/atoms/A-text.jsx");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }




var StyledContainter = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 11vw 0 9vw 0;\n  padding: 10vw 22vw 10vw 5vw;\n  width: 60vw;\n  height: 24vw;\n  background-color: white;\n  border-radius: 3vw;\n\n  .A-text-fact-text {\n    font-size: 1.4vw;\n    line-height: 1.7vw;\n  }\n\n"])));
function FactText(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledContainter, {
    className: props["className"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "A-text-fact-text",
    textContent: "Во время сна наши знания переходят из кратковременной памяти в долговременную"
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FactText);

/***/ }),

/***/ "./src/components/wrappers/W-main-UI.jsx":
/*!***********************************************!*\
  !*** ./src/components/wrappers/W-main-UI.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables.jsx */ "./src/components/variables.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _molecules_M_main_facts_card_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../molecules/M-main-facts-card.jsx */ "./src/components/molecules/M-main-facts-card.jsx");
/* harmony import */ var _molecules_M_loading_block_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/M-loading-block.jsx */ "./src/components/molecules/M-loading-block.jsx");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.js */ "./src/components/data.js");
/* harmony import */ var _atoms_A_arrowBtn_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/A-arrowBtn.jsx */ "./src/components/atoms/A-arrowBtn.jsx");
/* harmony import */ var _atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atoms/A-text.jsx */ "./src/components/atoms/A-text.jsx");
var _templateObject;
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }





//import FactsCards from '../collections/C-main-facts-cards.jsx'





var FactsCards = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_components_collections_C-main-facts-cards_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../collections/C-main-facts-cards.jsx */ "./src/components/collections/C-main-facts-cards.jsx"));
});

// "Ленивая" загрузка компонента

var StyledBlock = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 49vw;\n  position: relative;\n  overflow: hidden;\n  \n\n  .arrows {\n    position: absolute;\n    display: flex;\n    width: 17vw;\n    top: 37vw;\n    left: 3vw;\n    justify-content: space-between;\n  }\n\n  .A-sectionName {\n    font-size: 3vw;\n    font-weight: 600;\n    position: absolute;\n    left: 2vw;\n    top: 4vw;\n  }\n\n  .overflow {\n    width: 70vw;\n    height: 40vw;\n    overflow: hidden;\n    position: absolute;\n    margin-left: 41vw;\n  }\n"])));
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('no'),
    _useState2 = _slicedToArray(_useState, 2),
    myValue = _useState2[0],
    setMyValue = _useState2[1];
  var handleChildChange = function handleChildChange(newValue) {
    setMyValue(newValue);
    renderQueue(newValue);
    setTimeout(function () {
      setMyValue("no");
    }, 50);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledBlock, {
    className: props["className"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "A-sectionName",
    textContent: "\u0424\u0430\u043A\u0442\u044B \u043F\u0440\u043E \u0441\u043E\u043D"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "overflow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(FactsCards, {
    className: "C-main-facts-card",
    state: myValue
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_molecules_M_main_facts_card_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "M-main-facts-card",
    textContent: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "arrows"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_arrowBtn_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "A-arrowBtn",
    way: "prev",
    onClick: handleChildChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_arrowBtn_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "A-arrowBtn",
    way: "next",
    onClick: handleChildChange
  })));

  //  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionFacts);

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

/***/ }),

/***/ "./src/components/images/icon.svg":
/*!****************************************!*\
  !*** ./src/components/images/icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/57301a0843494fa2e168.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfd3JhcHBlcnNfVy1tYWluLVVJX2pzeC41YTRkNmZkNWRhYjRjOGFkMDk5Yy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxpRUFBZSxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFLO0VBQ3RDQyxVQUFVLENBQUMsWUFBSTtJQUNkO0lBQ0M7SUFDQTtJQUNEO0lBQ0E7SUFBQSxJQUNNQyxVQUFVO01BQ2YsU0FBQUEsV0FBQSxFQUFjO1FBQUEsSUFBQUMsS0FBQTtRQUFBQyxlQUFBLE9BQUFGLFVBQUE7UUFDWkcsY0FBYyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLElBQUksRUFBSztVQUM5QkosS0FBSSxDQUFDSyxPQUFPLEdBQUdELElBQUk7VUFDbkJFLE1BQU0sQ0FBQ04sS0FBSSxDQUFDSyxPQUFPLENBQUM7VUFDcEI7UUFDRixDQUFDLENBQUM7TUFFSjtNQUFDLE9BQUFFLFlBQUEsQ0FBQVIsVUFBQTtRQUFBUyxHQUFBO1FBQUFDLEtBQUEsRUFFRCxTQUFBQyxXQUFXQSxDQUFBLEVBQUc7VUFDWixPQUFPLElBQUksQ0FBQ0wsT0FBTztRQUN2QjtNQUFDO0lBQUE7SUFFQ1IsT0FBTyxDQUFDRSxVQUFVLENBQUM7RUFDckIsQ0FBQyxFQUFFLElBQUksQ0FBQztBQUNWLENBQUMsQ0FBQyxFQUFDOztBQUVIOztBQUdBLFNBQVNHLGNBQWNBLENBQUEsRUFBRztFQUN4QixPQUFPLElBQUlOLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVjLE1BQU0sRUFBSztJQUN0QyxJQUFNTixPQUFPLEdBQUcsRUFBRTtJQUVsQixJQUFNTyxLQUFLLEdBQUcsb0ZBQW9GO0lBRWxHakIseURBQWtCLENBQUM7TUFDakJtQixXQUFXLEVBQUUsMEJBQTBCO01BQ3ZDQyxNQUFNLEVB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LDBEQUFBLENBQUNZLDZEQUFXO0lBQUNHLFNBQVMsRUFBQyxZQUFZO0lBQUNDLEdBQUcsRUFBQyxNQUFNO0lBQUNGLE9BQU8sRUFBRThDO0VBQWtCLENBQWMsQ0FDckYsQ0FFTSxDQUFDOztFQUdsQjtBQUNBO0FBRUEsaUVBQWVqQixZQUFZLEVBQUM7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvLi9zcmMvY29tcG9uZW50cy9kYXRhLmpzIiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0Ly4vc3JjL2NvbXBvbmVudHMvYXRvbXMvQS1hcnJvd0J0bi5qc3giLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvTS1tYWluLWZhY3RzLWNhcmQuanN4Iiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0Ly4vc3JjL2NvbXBvbmVudHMvd3JhcHBlcnMvVy1tYWluLVVJLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWlydGFibGUgZnJvbSAnYWlydGFibGUnXHJcblxyXG4vL2xldCBjb250ZW50XHJcbi8vZ2V0UG9zdFRlYXNlcnMoKS50aGVuKChkYXRhKSA9PiB7XHJcbi8vY29udGVudCA9IGRhdGFcclxuXHJcbi8vdXBkYXRlKGNvbnRlbnQpXHJcblxyXG4vL30pXHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNvbnRlbnQ7XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAvLyBjbGFzcyBBc3luY0NsYXNzIHtcclxuICAgIC8vICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgIC8vICAgfVxyXG4gICAvLyB9XHJcbiAgIGNsYXNzIEFzeW5jQ2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIGdldFBvc3RUZWFzZXJzKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGRhdGFcclxuICAgICAgICB1cGRhdGUodGhpcy5jb250ZW50KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jb250ZW50KVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRWYXJpYWJsZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICB9XHJcbiAgIH1cclxuICAgIHJlc29sdmUoQXN5bmNDbGFzcyk7XHJcbiAgfSwgMTAwMCk7XHJcbn0pO1xyXG5cclxuLy8gICBwYXR4M2RiUjJGVlZxbjlSQS4yNTEyMTI0MGU2MWQ0NWZmMmVkNTNhZDU4ZjdiNWJhNWMyMWY0NDMyYTkzOGJkNzc1NWM5MjUxY2UzNTg0MGZiXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UG9zdFRlYXNlcnMoKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXVxyXG5cclxuICAgIGNvbnN0IHRva2VuID0gJ3BhdHgzZGJSMkZWVnFuOVJBLjI1MTIxMjQwZTYxZDQ1ZmYyZWQ1M2FkNThmN2I1YmE1YzIxZjQ0MzJhOTM4YmQ3NzU1YzkyNTFjZTM1ODQwZmInXHJcblxyXG4gICAgQWlydGFibGUuY29uZmlndXJlKHtcclxuICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxyXG4gICAgICBhcGlLZXk6IHRva2VuXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBsZXQgYmFzZSA9IEFpcnRhYmxlLmJhc2UoJ2FwcHpETGNYckpJaHkyUXpuJylcclxuXHJcbiAgXHJcblxyXG4gICAgYmFzZSgnZmFjdHMnKVxyXG4gICAgICAuc2VsZWN0KHsgbWF4UmVjb3JkczogMTAwIH0pXHJcbiAgICAgIC5maXJzdFBhZ2UoKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0LmZvckVhY2goKHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgY29udGVudC5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogcmVjb3JkLmZpZWxkc1snbmFtZSddLFxyXG4gICAgICAgICAgICB0ZXh0OiByZWNvcmQuZmllbGRzWyd0ZXh0J10sXHJcbiAgICAgICAgICAgIGltZzogcmVjb3JkLmZpZWxkc1snaW1nJ10sXHJcbiAgICAgICAgICAgIHN0YXRlOiByZWNvcmQuZmllbGRzWydzdGF0ZSddXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJlc29sdmUoY29udGVudClcclxuICAgICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoY29udGVudCkge1xyXG4gIGNvbnN0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJylbMF1cclxuICBjb25zb2xlLmxvZyhocmVmKVxyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGNvbnRlbnQuZm9yRWFjaCgoc3Ryb2tlKSA9PiB7XHJcbiAgICAgIGlmIChocmVmID09PSBzdHJva2UucGFnZSkge1xyXG4gICAgICAgIGNyZWF0ZUNvbnRlbnQoc3Ryb2tlKVxyXG4gICAgICB9XHJcbiAgICB9LCAyMDApXHJcbiAgfSlcclxufVxyXG4iLCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VEZWZlcnJlZFZhbHVlLCB1c2VFZmZlY3QsIFN1c3BlbnNlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1BhbGxldGV9IGZyb20gJy4uL3ZhcmlhYmxlcy5qc3gnO1xyXG5cclxuaW1wb3J0IGFycm93IGZyb20gXCIuLi9pbWFnZXMvaWNvbi5zdmdcIlxyXG5cclxuXHJcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgY29sb3I6ICR7UGFsbGV0ZVtcImJsYWNrXCJdfTtcclxuICB3aWR0aDogNnZ3O1xyXG4gIGhlaWdodDogNnZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7UGFsbGV0ZVtcImJsdWVcIl19O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5hcnJvdyB7XHJcbiAgICB3aWR0aDogMnZ3O1xyXG4gICAgaGVpZ2h0OiAzdnc7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41dnc7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcblxyXG4gICYucHJldiB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEFycm93QnV0dG9uKHsgb25DbGljaywgY2xhc3NOYW1lLCB3YXkgfSkge1xyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgbGV0IGZ1bGxDbGFzcyA9IGNsYXNzTmFtZSArIFwiIFwiICsgd2F5XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmV4dFwiKSkge1xyXG4gICAgICAgICBzZXRJbnB1dFZhbHVlKHRydWUpO1xyXG4gICAgICAgICBvbkNsaWNrKHRydWUpO1xyXG4gICAgICB9IGVsc2UgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJldlwiKSkge1xyXG4gICAgICAgIHNldElucHV0VmFsdWUoZmFsc2UpO1xyXG4gICAgICAgIG9uQ2xpY2soZmFsc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDExMTExMTExMTExKVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEJ1dHRvbiBjbGFzc05hbWU9e2Z1bGxDbGFzc30gaHJlZj1cImJ0bkxpbmtcIiBvbkNsaWNrPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICA+PGltZyBjbGFzc05hbWU9XCJhcnJvd1wiIHNyYz17YXJyb3d9PjwvaW1nPjwvU3R5bGVkQnV0dG9uPlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IEFycm93QnV0dG9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VJZCwgdXNlU3RhdGUsIHVzZURlZmVycmVkVmFsdWUsIHVzZUVmZmVjdCwgU3VzcGVuc2V9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7UGFsbGV0ZX0gZnJvbSAnLi4vdmFyaWFibGVzLmpzeCc7XHJcblxyXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9hdG9tcy9BLXRleHQuanN4JztcclxuXHJcbmNvbnN0IFN0eWxlZENvbnRhaW50ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTF2dyAwIDl2dyAwO1xyXG4gIHBhZGRpbmc6IDEwdncgMjJ2dyAxMHZ3IDV2dztcclxuICB3aWR0aDogNjB2dztcclxuICBoZWlnaHQ6IDI0dnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3Z3O1xyXG5cclxuICAuQS10ZXh0LWZhY3QtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuNHZ3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuN3Z3O1xyXG4gIH1cclxuXHJcbmA7XHJcblxyXG5cclxuZnVuY3Rpb24gRmFjdFRleHQocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdHlsZWRDb250YWludGVyIGNsYXNzTmFtZT17cHJvcHNbXCJjbGFzc05hbWVcIl19PiBcclxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJBLXRleHQtZmFjdC10ZXh0XCIgdGV4dENvbnRlbnQ9e1wi0JLQviDQstGA0LXQvNGPINGB0L3QsCDQvdCw0YjQuCDQt9C90LDQvdC40Y8g0L/QtdGA0LXRhdC+0LTRj9GCINC40Lcg0LrRgNCw0YLQutC+0LLRgNC10LzQtdC90L3QvtC5INC/0LDQvNGP0YLQuCDQsiDQtNC+0LvQs9C+0LLRgNC10LzQtdC90L3Rg9GOXCJ9PjwvVGV4dD5cclxuICAgICAgPC9TdHlsZWRDb250YWludGVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN0VGV4dDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQYWxsZXRlfSBmcm9tICcuLi92YXJpYWJsZXMuanN4JztcclxuaW1wb3J0IHsgdXNlSWQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VEZWZlcnJlZFZhbHVlLCB1c2VFZmZlY3QsIFN1c3BlbnNlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRmFjdFRleHQgZnJvbSAnLi4vbW9sZWN1bGVzL00tbWFpbi1mYWN0cy1jYXJkLmpzeCc7XHJcbi8vaW1wb3J0IEZhY3RzQ2FyZHMgZnJvbSAnLi4vY29sbGVjdGlvbnMvQy1tYWluLWZhY3RzLWNhcmRzLmpzeCdcclxuXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL21vbGVjdWxlcy9NLWxvYWRpbmctYmxvY2suanN4J1xyXG5pbXBvcnQgQXN5bmNDbGFzcyBmcm9tIFwiLi4vZGF0YS5qc1wiO1xyXG5pbXBvcnQgQXJyb3dCdXR0b24gZnJvbSBcIi4uL2F0b21zL0EtYXJyb3dCdG4uanN4XCJcclxuaW1wb3J0IFRleHQgZnJvbSAnLi4vYXRvbXMvQS10ZXh0LmpzeCdcclxuY29uc3QgRmFjdHNDYXJkcyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuLi9jb2xsZWN0aW9ucy9DLW1haW4tZmFjdHMtY2FyZHMuanN4JykpO1xyXG5cclxuLy8gXCLQm9C10L3QuNCy0LDRj1wiINC30LDQs9GA0YPQt9C60LAg0LrQvtC80L/QvtC90LXQvdGC0LBcclxuXHJcbmNvbnN0IFN0eWxlZEJsb2NrID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogNDl2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuXHJcbiAgLmFycm93cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDE3dnc7XHJcbiAgICB0b3A6IDM3dnc7XHJcbiAgICBsZWZ0OiAzdnc7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAuQS1zZWN0aW9uTmFtZSB7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAydnc7XHJcbiAgICB0b3A6IDR2dztcclxuICB9XHJcblxyXG4gIC5vdmVyZmxvdyB7XHJcbiAgICB3aWR0aDogNzB2dztcclxuICAgIGhlaWdodDogNDB2dztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDF2dztcclxuICB9XHJcbmA7XHJcblxyXG5sZXQgcXVldWUgPSB7XHJcbiAgMToge1xyXG4gICAgXCJwb3NcIjogXCItNDB2d1wiLFxyXG4gICAgXCJudW1cIjogXCIxXCIsXHJcbiAgICBcImlkXCI6IFwiZmFjdDFcIixcclxuICAgIFwidGV4dFwiOiBcItCS0L4g0LLRgNC10LzRjyDRgdC90LAg0L3QsNGI0Lgg0LfQvdCw0L3QuNGPINC/0LXRgNC10YXQvtC00Y/RgiDQuNC3INC60YDQsNGC0LrQvtCy0YDQtdC80LXQvdC90L7QuSDQv9Cw0LzRj9GC0Lgg0LIg0LTQvtC70LPQvtCy0YDQtdC80LXQvdC90YPRjlwiXHJcbiAgfSxcclxuICAyOiB7XHJcbiAgICBcInBvc1wiOiBcIi0xOC4zdndcIixcclxuICAgIFwibnVtXCI6IFwiMlwiLFxyXG4gICAgXCJpZFwiOiBcImZhY3QyXCIsXHJcbiAgICBcInRleHRcIjogXCLQpdGA0L7QvdC40YfQtdGB0LrQsNGPINC90LXRhdCy0LDRgtC60LAg0YHQvdCwINCy0LXQtNGR0YIg0Log0YDQsNGB0YHRgtGA0L7QudGB0YLQstCw0Lwg0YHQu9GD0YXQsCwg0LfRgNC10L3QuNGPLCDQv9C+0LLRi9GI0LXQvdC90L7QuSDRgtGA0LXQstC+0LbQvdC+0YHRgtC4LCDQvdCw0YDRg9GI0LXQvdC40Y4g0L7QsdC80LXQvdCwINCy0LXRidC10YHRgtCyLCDQvdC10YDQstC90YvQvCDRgtC40LrQsNC8INC4INC+0LHRidC10Lkg0YHQu9Cw0LHQvtGB0YLQuFwiXHJcbiAgfSxcclxuICAzOiB7XHJcbiAgICBcInBvc1wiOiBcIjMuNHZ3XCIsXHJcbiAgICBcIm51bVwiOiBcIjNcIixcclxuICAgIFwiaWRcIjogXCJmYWN0M1wiLFxyXG4gICAgXCJ0ZXh0XCI6IFwi0J/RgNC40LzQtdGA0L3QviDRh9C10YLQstC10YDRgtGMINCy0YHQtdC5INGB0LLQvtC10Lkg0LbQuNC30L3QuCDQvNGLINC/0YDQvtCy0L7QtNC40Lwg0LLQviDRgdC90LVcIlxyXG4gIH0sXHJcbiAgNDoge1xyXG4gICAgXCJwb3NcIjogXCIyNS4xdndcIixcclxuICAgIFwibnVtXCI6IFwiNFwiLFxyXG4gICAgXCJpZFwiOiBcImZhY3Q0XCIsXHJcbiAgICBcInRleHRcIjogXCLQp9C10YDQtdC3IDUg0LzQuNC90YPRgiDQv9C+0YHQu9C1INC/0YDQvtCx0YPQttC00LXQvdC40Y8g0LzRiyDQt9Cw0LHRi9Cy0LDQtdC8INC00L4gNTAlINGB0L3QvtCyLCDQsCDRh9C10YDQtdC3IDEwINC80LjQvdGD0YIg4oCUINC00L4gOTAlLlwiXHJcbiAgfSxcclxuICA1OiB7XHJcbiAgICBcInBvc1wiOiBcIjQ2Ljh2d1wiLFxyXG4gICAgXCJudW1cIjogXCI1XCIsXHJcbiAgICBcImlkXCI6IFwiZmFjdDVcIixcclxuICAgIFwidGV4dFwiOiBcItCf0YDQuNC80LXRgNC90L4gMTIlINC70Y7QtNC10Lkg0LLQuNC00Y/RgiDRgdC90Ysg0YLQvtC70YzQutC+INCyINGH0LXRgNC90L4t0LHQtdC70L7QvCDRhtCy0LXRgtC1XCIgXHJcbiAgfSxcclxufVxyXG5cclxuZnVuY3Rpb24gU2VjdGlvbkZhY3RzKHByb3BzKSB7XHJcblxyXG5cclxuICBmdW5jdGlvbiByZW5kZXJRdWV1ZShlKSB7XHJcbiAgICBpZiAoZSA9PSB0cnVlKSB7XHJcbiAgICAgIGxldCBwb3MgPSBOdW1iZXIoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvb3NlbkZhY3RcIikuaWQpLnN1YnN0cig0KSlcclxuICAgICAgaWYgKHBvcyA9PSA1KSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaG9vc2VuRmFjdFwiKS5zdHlsZS5tYXJnaW5MZWZ0PVwiMHZ3XCJcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob29zZW5GYWN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaG9vc2VuRmFjdFwiKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNmYWN0MWApLmNsYXNzTGlzdC5hZGQoXCJjaG9vc2VuRmFjdFwiKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQy1tYWluLWZhY3RzLWNhcmRcIikuc3R5bGUucmlnaHQ9cXVldWVbXCIxXCJdW1wicG9zXCJdXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5BLXRleHQtZmFjdC10ZXh0XCIpLnRleHRDb250ZW50PXF1ZXVlW1wiMVwiXVtcInRleHRcIl1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob29zZW5GYWN0XCIpLnN0eWxlLm1hcmdpbkxlZnQ9XCIwdndcIlxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvb3NlbkZhY3RcIikuY2xhc3NMaXN0LnJlbW92ZShcImNob29zZW5GYWN0XCIpXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ZhY3Qke3BvcysxfWApLmNsYXNzTGlzdC5hZGQoXCJjaG9vc2VuRmFjdFwiKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQy1tYWluLWZhY3RzLWNhcmRcIikuc3R5bGUucmlnaHQ9cXVldWVbcG9zKzFdW1wicG9zXCJdXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5BLXRleHQtZmFjdC10ZXh0XCIpLnRleHRDb250ZW50PXF1ZXVlW3BvcysxXVtcInRleHRcIl1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChlID09IGZhbHNlKSB7XHJcbiAgICAgIGxldCBwb3MgPSBOdW1iZXIoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvb3NlbkZhY3RcIikuaWQpLnN1YnN0cig0KSlcclxuICAgICAgaWYgKHBvcyA9PSAxKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaG9vc2VuRmFjdFwiKS5zdHlsZS5tYXJnaW5MZWZ0PVwiMHZ3XCJcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob29zZW5GYWN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaG9vc2VuRmFjdFwiKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNmYWN0NWApLmNsYXNzTGlzdC5hZGQoXCJjaG9vc2VuRmFjdFwiKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQy1tYWluLWZhY3RzLWNhcmRcIikuc3R5bGUucmlnaHQ9cXVldWVbXCI1XCJdW1wicG9zXCJdXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5BLXRleHQtZmFjdC10ZXh0XCIpLnRleHRDb250ZW50PXF1ZXVlW1wiNVwiXVtcInRleHRcIl1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob29zZW5GYWN0XCIpLnN0eWxlLm1hcmdpbkxlZnQ9XCIwdndcIlxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvb3NlbkZhY3RcIikuY2xhc3NMaXN0LnJlbW92ZShcImNob29zZW5GYWN0XCIpXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ZhY3Qke3Bvcy0xfWApLmNsYXNzTGlzdC5hZGQoXCJjaG9vc2VuRmFjdFwiKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQy1tYWluLWZhY3RzLWNhcmRcIikuc3R5bGUucmlnaHQ9cXVldWVbcG9zLTFdW1wicG9zXCJdXHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQS10ZXh0LWZhY3QtdGV4dFwiKS50ZXh0Q29udGVudD1xdWV1ZVtwb3MtMV1bXCJ0ZXh0XCJdXHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuICAvKmNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICBjb25zdCBkYXRhID0gYXN5bmMgKCk9PiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgKGF3YWl0IEFzeW5jQ2xhc3MpKCk7XHJcbiAgICAgd2hpbGUgKGluc3RhbmNlLmdldFZhcmlhYmxlKCkgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YXJpYWJsZVZhbHVlID0gaW5zdGFuY2UuZ2V0VmFyaWFibGUoKTtcclxuXHJcbiAgICAvL2FhYSA9IGdlbmVyYXRlQ2FyZHModmFyaWFibGVWYWx1ZSlcclxuICAvLyAgc2V0RGF0YShnZW5lcmF0ZUNhcmRzKHZhcmlhYmxlVmFsdWUpKTtcclxuXHJcbiAgICBzZXREYXRhKHZhcmlhYmxlVmFsdWUpXHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcbiAgZGF0YSgpXHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKSAqL1xyXG4gICAvLyBpZiAoIWlzTG9hZGluZykge1xyXG5cclxuICBjb25zdCBbbXlWYWx1ZSwgc2V0TXlWYWx1ZV0gPSB1c2VTdGF0ZSgnbm8nKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGlsZENoYW5nZSA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICBzZXRNeVZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgcmVuZGVyUXVldWUobmV3VmFsdWUpXHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgc2V0TXlWYWx1ZShcIm5vXCIpO1xyXG4gICAgICB9LCA1MClcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICA8U3R5bGVkQmxvY2sgY2xhc3NOYW1lPXtwcm9wc1tcImNsYXNzTmFtZVwiXX0+XHJcbiAgICAgIDxUZXh0IGNsYXNzTmFtZT1cIkEtc2VjdGlvbk5hbWVcIiB0ZXh0Q29udGVudD1cItCk0LDQutGC0Ysg0L/RgNC+INGB0L7QvVwiPjwvVGV4dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvd1wiPlxyXG4gICAgICAgIDxGYWN0c0NhcmRzIGNsYXNzTmFtZT1cIkMtbWFpbi1mYWN0cy1jYXJkXCIgc3RhdGU9e215VmFsdWV9PjwvRmFjdHNDYXJkcz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGYWN0VGV4dCBjbGFzc05hbWU9XCJNLW1haW4tZmFjdHMtY2FyZFwiIHRleHRDb250ZW50PScnPjwvRmFjdFRleHQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dzXCI+XHJcbiAgICAgICAgPEFycm93QnV0dG9uIGNsYXNzTmFtZT1cIkEtYXJyb3dCdG5cIiB3YXk9XCJwcmV2XCIgb25DbGljaz17aGFuZGxlQ2hpbGRDaGFuZ2V9PjwvQXJyb3dCdXR0b24+XHJcbiAgICAgICAgPEFycm93QnV0dG9uIGNsYXNzTmFtZT1cIkEtYXJyb3dCdG5cIiB3YXk9XCJuZXh0XCIgb25DbGljaz17aGFuZGxlQ2hpbGRDaGFuZ2V9PjwvQXJyb3dCdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvU3R5bGVkQmxvY2s+XHJcbiAgKTtcclxuXHJcbi8vICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25GYWN0cztcclxuXHJcbi8qXHJcblxyXG5mdW5jdGlvbiBTZWN0aW9uRmFjdHMocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZEJsb2NrIGNsYXNzTmFtZT17cHJvcHNbXCJjbGFzc05hbWVcIl19PiBcclxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17XHJcbiAgICAgICAgICAgIDxMb2FkaW5nIGNsYXNzTmFtZT1cIk0tbG9hZGluZ1wiPtCX0LDQs9GA0YPQt9C60LAuLi48L0xvYWRpbmc+XHJcbiAgICAgICAgICB9PlxyXG4gICAgICAgICAgICA8RmFjdFRleHQgY2xhc3NOYW1lPVwiTS1tYWluLWZhY3RzLWNhcmRcIiB0ZXh0Q29udGVudD1cIlwiPjwvRmFjdFRleHQ+XHJcbiAgICAgICAgICAgIDxGYWN0c0NhcmRzIGNsYXNzTmFtZT1cIkMtbWFpbi1mYWN0cy1jYXJkc1wiPjwvRmFjdHNDYXJkcz5cclxuICAgICAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICAgICAgPC9TdHlsZWRCbG9jaz5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkZhY3RzO1xyXG5cclxuKi8iXSwibmFtZXMiOlsiQWlydGFibGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJBc3luY0NsYXNzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJnZXRQb3N0VGVhc2VycyIsInRoZW4iLCJkYXRhIiwiY29udGVudCIsInVwZGF0ZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0VmFyaWFibGUiLCJyZWplY3QiLCJ0b2tlbiIsImNvbmZpZ3VyZSIsImVuZHBvaW50VXJsIiwiYXBpS2V5IiwiYmFzZSIsInNlbGVjdCIsIm1heFJlY29yZHMiLCJmaXJzdFBhZ2UiLCJyZXN1bHQiLCJmb3JFYWNoIiwicmVjb3JkIiwicHVzaCIsIm5hbWUiLCJmaWVsZHMiLCJ0ZXh0IiwiaW1nIiwic3RhdGUiLCJocmVmIiwid2luZG93IiwibG9jYXRpb24iLCJzcGxpdCIsInBvcCIsImNvbnNvbGUiLCJsb2ciLCJzdHJva2UiLCJwYWdlIiwiY3JlYXRlQ29udGVudCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VEZWZlcnJlZFZhbHVlIiwidXNlRWZmZWN0IiwiU3VzcGVuc2UiLCJzdHlsZWQiLCJQYWxsZXRlIiwiYXJyb3ciLCJTdHlsZWRCdXR0b24iLCJidXR0b24iLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiQXJyb3dCdXR0b24iLCJfcmVmIiwib25DbGljayIsImNsYXNzTmFtZSIsIndheSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiZnVsbENsYXNzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJ1c2VJZCIsIlRleHQiLCJTdHlsZWRDb250YWludGVyIiwiZGl2IiwiRmFjdFRleHQiLCJwcm9wcyIsInRleHRDb250ZW50IiwiTG9hZGluZyIsIkZhY3RzQ2FyZHMiLCJsYXp5IiwiU3R5bGVkQmxvY2siLCJzZWN0aW9uIiwicXVldWUiLCJTZWN0aW9uRmFjdHMiLCJyZW5kZXJRdWV1ZSIsImUiLCJwb3MiLCJOdW1iZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpZCIsInN1YnN0ciIsInN0eWxlIiwibWFyZ2luTGVmdCIsInJlbW92ZSIsImFkZCIsInJpZ2h0IiwiY29uY2F0IiwibXlWYWx1ZSIsInNldE15VmFsdWUiLCJoYW5kbGVDaGlsZENoYW5nZSIsIm5ld1ZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==
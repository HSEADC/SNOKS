"use strict";
(self["webpackChunkstatic_site_08_24"] = self["webpackChunkstatic_site_08_24"] || []).push([["src_components_collections_C-main-tests-cards_jsx"],{

/***/ "./src/components/tests.js":
/*!*********************************!*\
  !*** ./src/components/tests.js ***!
  \*********************************/
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
    base('tests').select({
      maxRecords: 100
    }).firstPage().then(function (result) {
      result.forEach(function (record) {
        content.push({
          num: record.fields['num'],
          title: record.fields['title'],
          time: record.fields['time'],
          type: record.fields['type'],
          img: record.fields['img'],
          description: record.fields['description'],
          tag: record.fields['tag']
        });
      });
      console.log(content);
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

/***/ "./src/components/collections/C-main-tests-cards.jsx":
/*!***********************************************************!*\
  !*** ./src/components/collections/C-main-tests-cards.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables.jsx */ "./src/components/variables.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tests_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tests.js */ "./src/components/tests.js");
/* harmony import */ var _organisms_O_test_card_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisms/O-test-card.jsx */ "./src/components/organisms/O-test-card.jsx");
/* harmony import */ var _organisms_O_main_facts_Card_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/O-main-facts-Card.jsx */ "./src/components/organisms/O-main-facts-Card.jsx");
var _templateObject;
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }






//import content from '../data.js'
//import AsyncClass from "../data.js";

//import Loading from '../molecules/M-loading-block.jsx'


var StyledCollection = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 354vw;\n  height: 22vw;\n  align-items: center;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  left: -28vw;\n  animation: scroll 7.5s linear infinite;\n  transition: all 0.5 ease-in-out;\n\n  &:hover {\n    animation-play-state: paused;\n  }\n\n  .O-test-card:hover {\n    width: 25vw;\n    height: 35vw;\n\n    .Q-cardBackground {\n      width: 100%;\n      height: 20vw;\n      bottom: 0;\n      margin: auto\n    }\n\n    .A-main-testTitle {\n      position: absolute;\n      font-size: 2.2vw;\n      font-weight: 600;\n      color: ", ";\n      top: 5vw;\n      left: 1.5vw;\n      pointer-events: none;\n      width: 90%;\n    }\n\n    .A-main-testTime {\n      position: absolute;\n      font-size: 1.7vw;\n      font-weight: 400;\n      color: ", ";\n      top: 2vw;\n      left: 1.5vw;\n      opacity: 0.6;\n      pointer-events: none;\n    }\n\n    .Q-clock {\n      width: 2vw;\n      height: 2vw;\n      position: absolute;\n      top: 1.8vw;\n      left: 13vw;\n    }\n  }\n  \n  @keyframes scroll {\n    from {\n      left: -28vw;\n    }\n\n    to {\n      left: -206.03vw;\n    }\n  }\n\n"])), _variables_jsx__WEBPACK_IMPORTED_MODULE_0__.Pallete["black"], _variables_jsx__WEBPACK_IMPORTED_MODULE_0__.Pallete["black"]);
function generateTests(a) {
  var generated = [];
  for (var i = 0; i < a.length; i++) {
    var b = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_organisms_O_test_card_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "O-test-card",
      src: a[i]['img'][0]["url"],
      title: a[i]['title'],
      time: a[i]['time']
    });
    generated.push(b);
  }
  for (var _i = 0; _i < a.length; _i++) {
    var _b = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_organisms_O_test_card_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "O-test-card",
      src: a[_i]['img'][0]["url"],
      title: a[_i]['title'],
      time: a[_i]['time']
    });
    generated.push(_b);
  }
  return generated;
}
function TestsCards(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var data = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var instance, variableValue, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              setIsLoading(true);
              _context.n = 1;
              return _tests_js__WEBPACK_IMPORTED_MODULE_2__["default"];
            case 1:
              _t = _context.v;
              instance = new _t();
            case 2:
              if (!(instance.getVariable() == undefined)) {
                _context.n = 4;
                break;
              }
              _context.n = 3;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 200);
              });
            case 3:
              _context.n = 2;
              break;
            case 4:
              variableValue = instance.getVariable(); //aaa = generateCards(variableValue)
              setData(generateTests(variableValue));
              setIsLoading(false);
            case 5:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function data() {
        return _ref.apply(this, arguments);
      };
    }();
    data();
  }, []);
  var data1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return data;
  });

  //<>{dataa.map((item) => (
  //      <>{item}</>
  // ))}</>

  //let data = generateTests() 
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledCollection, {
    className: props["className"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, data1.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, item);
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestsCards);

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

/***/ "./src/components/organisms/O-test-card.jsx":
/*!**************************************************!*\
  !*** ./src/components/organisms/O-test-card.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables.jsx */ "./src/components/variables.jsx");
/* harmony import */ var _quarks_Q_cardBackground_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quarks/Q-cardBackground.jsx */ "./src/components/quarks/Q-cardBackground.jsx");
/* harmony import */ var _atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/A-text.jsx */ "./src/components/atoms/A-text.jsx");
/* harmony import */ var _quarks_Q_icon_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quarks/Q-icon.jsx */ "./src/components/quarks/Q-icon.jsx");
/* harmony import */ var _images_clock_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/clock.svg */ "./src/components/images/clock.svg");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }









var StyledBlock = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 20vw;\n  height: 30vw;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 2.5vw;\n  position: relative;\n  overflow: hidden;\n  background-color: white;\n  transition: all 0.3s ease-in-out;\n\n  .Q-cardBackground {\n    width: 100%;\n    height: 16vw;\n    bottom: 0;\n    margin: auto;\n    transition: all 0.3s ease-in-out;\n    border-radius: 2.5vw;\n    pointer-events: none;\n  }\n\n  .A-main-testTitle {\n    position: absolute;\n    font-size: 1.8vw;\n    font-weight: 600;\n    color: ", ";\n    top: 5vw;\n    left: 1.5vw;\n    pointer-events: none;\n    width: 90%;\n    transition: all 0.3s ease-in-out;\n  }\n\n  .A-main-testTime {\n    position: absolute;\n    font-size: 1.3vw;\n    font-weight: 400;\n    color: ", ";\n    top: 2vw;\n    left: 1.5vw;\n    opacity: 0.6;\n    pointer-events: none;\n    transition: all 0.3s ease-in-out;\n  }\n\n   .Q-clock {\n    width: 1.5vw;\n    height: 1.5vw;\n    position: absolute;\n    top: 1.8vw;\n    left: 10vw;\n    transition: all 0.3s ease-in-out;\n    pointer-events: none;\n  }\n\n  .darker {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    background-color: ", ";\n    transition: all 0.3s ease-in-out\n\n  }\n\n\n"])), _variables_jsx__WEBPACK_IMPORTED_MODULE_1__.Pallete["white"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__.Pallete["black"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__.Pallete["black"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__.Pallete["black"]);
function TestCard(props) {
  var id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  id = id.slice(1, id.length - 1);
  if (props["className"] == "O-test-card") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledBlock, {
      id: id,
      className: props["className"],
      onMouseOver: function onMouseOver(e) {
        document.querySelectorAll(".darker").forEach(function (elem) {
          elem.style.opacity = "0.5";
          elem.style.pointerEvents = "all";
        });
        if (e.target.querySelector(".darker") != undefined) {
          e.target.querySelector(".darker").style.opacity = "0";
          e.target.querySelector(".darker").style.pointerEvents = "none";
        }
      },
      onMouseLeave: function onMouseLeave(e) {
        document.querySelectorAll(".darker").forEach(function (elem) {
          elem.style.opacity = "0";
          elem.style.pointerEvents = "none";
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_quarks_Q_icon_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "Q-clock",
      src: _images_clock_svg__WEBPACK_IMPORTED_MODULE_5__
    }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "A-main-testTime",
      textContent: "".concat(props["time"], " \u043C\u0438\u043D")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "A-main-testTitle",
      textContent: props["title"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_quarks_Q_cardBackground_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "Q-cardBackground",
      src: props["src"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "darker"
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledBlock, {
      id: id,
      className: props["className"] + " " + props["type"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_quarks_Q_icon_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "Q-clock",
      src: _images_clock_svg__WEBPACK_IMPORTED_MODULE_5__
    }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "A-main-testTime",
      textContent: "".concat(props["time"], " \u043C\u0438\u043D")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "A-main-testTitle",
      textContent: props["title"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_quarks_Q_cardBackground_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "Q-cardBackground",
      src: props["src"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "darker"
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestCard);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfY29sbGVjdGlvbnNfQy1tYWluLXRlc3RzLWNhcmRzX2pzeC42MzVkYTczYjA3Mjc4Yjg0Y2ZiYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxpRUFBZSxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFLO0VBQ3RDQyxVQUFVLENBQUMsWUFBSTtJQUNkO0lBQ0M7SUFDQTtJQUNEO0lBQ0E7SUFBQSxJQUNNQyxVQUFVO01BQ2YsU0FBQUEsV0FBQSxFQUFjO1FBQUEsSUFBQUMsS0FBQTtRQUFBQyxlQUFBLE9BQUFGLFVBQUE7UUFDWkcsY0FBYyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLElBQUksRUFBSztVQUM5QkosS0FBSSxDQUFDSyxPQUFPLEdBQUdELElBQUk7VUFDbkJFLE1BQU0sQ0FBQ04sS0FBSSxDQUFDSyxPQUFPLENBQUM7VUFDcEI7UUFDRixDQUFDLENBQUM7TUFFSjtNQUFDLE9BQUFFLFlBQUEsQ0FBQVIsVUFBQTtRQUFBUyxHQUFBO1FBQUFDLEtBQUEsRUFFRCxTQUFBQyxXQUFXQSxDQUFBLEVBQUc7VUFDWixPQUFPLElBQUksQ0FBQ0wsT0FBTztRQUN2QjtNQUFDO0lBQUE7SUFFQ1IsT0FBTyxDQUFDRSxVQUFVLENBQUM7RUFDckIsQ0FBQyxFQUFFLElBQUksQ0FBQztBQUNWLENBQUMsQ0FBQyxFQUFDOztBQUVIOztBQUdBLFNBQVNHLGNBQWNBLENBQUEsRUFBRztFQUN4QixPQUFPLElBQUlOLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVjLE1BQU0sRUFBSztJQUN0QyxJQUFNTixPQUFPLEdBQUcsRUFBRTtJQUVsQixJQUFNTyxLQUFLLEdBQUcsb0ZBQW9GO0lBRWxHakIseURBQWtCLENBQUM7TUFDakJtQixXQUFXLEVBQUUsMEJBQTBCO01B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L3Rlc3RzLmpzIiwid2VicGFjazovL3N0YXRpYy1zaXRlLTA4LTI0Ly4vc3JjL2NvbXBvbmVudHMvY29sbGVjdGlvbnMvQy1tYWluLXRlc3RzLWNhcmRzLmpzeCIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9PLW1haW4tZmFjdHMtQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvTy10ZXN0LWNhcmQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBaXJ0YWJsZSBmcm9tICdhaXJ0YWJsZSdcclxuXHJcbi8vbGV0IGNvbnRlbnRcclxuLy9nZXRQb3N0VGVhc2VycygpLnRoZW4oKGRhdGEpID0+IHtcclxuLy9jb250ZW50ID0gZGF0YVxyXG5cclxuLy91cGRhdGUoY29udGVudClcclxuXHJcbi8vfSlcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY29udGVudDtcclxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgIC8vIGNsYXNzIEFzeW5jQ2xhc3Mge1xyXG4gICAgLy8gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgLy8gICB9XHJcbiAgIC8vIH1cclxuICAgY2xhc3MgQXN5bmNDbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgZ2V0UG9zdFRlYXNlcnMoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZGF0YVxyXG4gICAgICAgIHVwZGF0ZSh0aGlzLmNvbnRlbnQpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFZhcmlhYmxlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuICAgfVxyXG4gICAgcmVzb2x2ZShBc3luY0NsYXNzKTtcclxuICB9LCAxMDAwKTtcclxufSk7XHJcblxyXG4vLyAgIHBhdHgzZGJSMkZWVnFuOVJBLjI1MTIxMjQwZTYxZDQ1ZmYyZWQ1M2FkNThmN2I1YmE1YzIxZjQ0MzJhOTM4YmQ3NzU1YzkyNTFjZTM1ODQwZmJcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRQb3N0VGVhc2VycygpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IFtdXHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSAncGF0eDNkYlIyRlZWcW45UkEuMjUxMjEyNDBlNjFkNDVmZjJlZDUzYWQ1OGY3YjViYTVjMjFmNDQzMmE5MzhiZDc3NTVjOTI1MWNlMzU4NDBmYidcclxuXHJcbiAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xyXG4gICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXHJcbiAgICAgIGFwaUtleTogdG9rZW5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIGxldCBiYXNlID0gQWlydGFibGUuYmFzZSgnYXBwekRMY1hySkloeTJRem4nKVxyXG5cclxuICBcclxuXHJcbiAgICBiYXNlKCd0ZXN0cycpXHJcbiAgICAgIC5zZWxlY3QoeyBtYXhSZWNvcmRzOiAxMDAgfSlcclxuICAgICAgLmZpcnN0UGFnZSgpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICByZXN1bHQuZm9yRWFjaCgocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICBjb250ZW50LnB1c2goe1xyXG4gICAgICAgICAgICBudW06IHJlY29yZC5maWVsZHNbJ251bSddLFxyXG4gICAgICAgICAgICB0aXRsZTogcmVjb3JkLmZpZWxkc1sndGl0bGUnXSxcclxuICAgICAgICAgICAgdGltZTogcmVjb3JkLmZpZWxkc1sndGltZSddLFxyXG4gICAgICAgICAgICB0eXBlOiByZWNvcmQuZmllbGRzWyd0eXBlJ10sXHJcbiAgICAgICAgICAgIGltZzogcmVjb3JkLmZpZWxkc1snaW1nJ10sXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZWNvcmQuZmllbGRzWydkZXNjcmlwdGlvbiddLFxyXG4gICAgICAgICAgICB0YWc6IHJlY29yZC5maWVsZHNbJ3RhZyddLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpXHJcblxyXG4gICAgICAgIHJlc29sdmUoY29udGVudClcclxuICAgICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoY29udGVudCkge1xyXG4gIGNvbnN0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJylbMF1cclxuICBjb25zb2xlLmxvZyhocmVmKVxyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGNvbnRlbnQuZm9yRWFjaCgoc3Ryb2tlKSA9PiB7XHJcbiAgICAgIGlmIChocmVmID09PSBzdHJva2UucGFnZSkge1xyXG4gICAgICAgIGNyZWF0ZUNvbnRlbnQoc3Ryb2tlKVxyXG4gICAgICB9XHJcbiAgICB9LCAyMDApXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQYWxsZXRlfSBmcm9tICcuLi92YXJpYWJsZXMuanN4JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUlkLCB1c2VTdGF0ZSwgdXNlRGVmZXJyZWRWYWx1ZSwgdXNlRWZmZWN0LCBTdXNwZW5zZSwgdXNlTWVtbywgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5pbXBvcnQgQXN5bmNDbGFzcyBmcm9tIFwiLi4vdGVzdHMuanNcIjtcclxuXHJcbmltcG9ydCBUZXN0Q2FyZCBmcm9tICcuLi9vcmdhbmlzbXMvTy10ZXN0LWNhcmQuanN4J1xyXG5cclxuXHJcblxyXG4vL2ltcG9ydCBjb250ZW50IGZyb20gJy4uL2RhdGEuanMnXHJcbi8vaW1wb3J0IEFzeW5jQ2xhc3MgZnJvbSBcIi4uL2RhdGEuanNcIjtcclxuXHJcbi8vaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vbW9sZWN1bGVzL00tbG9hZGluZy1ibG9jay5qc3gnXHJcblxyXG5pbXBvcnQgRmFjdENhcmQgZnJvbSAnLi4vb3JnYW5pc21zL08tbWFpbi1mYWN0cy1DYXJkLmpzeCdcclxuXHJcbmNvbnN0IFN0eWxlZENvbGxlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAzNTR2dztcclxuICBoZWlnaHQ6IDIydnc7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgbGVmdDogLTI4dnc7XHJcbiAgYW5pbWF0aW9uOiBzY3JvbGwgNy41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNSBlYXNlLWluLW91dDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gIH1cclxuXHJcbiAgLk8tdGVzdC1jYXJkOmhvdmVyIHtcclxuICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgaGVpZ2h0OiAzNXZ3O1xyXG5cclxuICAgIC5RLWNhcmRCYWNrZ3JvdW5kIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjB2dztcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBtYXJnaW46IGF1dG9cclxuICAgIH1cclxuXHJcbiAgICAuQS1tYWluLXRlc3RUaXRsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgZm9udC1zaXplOiAyLjJ2dztcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICR7UGFsbGV0ZVtcImJsYWNrXCJdfTtcclxuICAgICAgdG9wOiA1dnc7XHJcbiAgICAgIGxlZnQ6IDEuNXZ3O1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuXHJcbiAgICAuQS1tYWluLXRlc3RUaW1lIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBmb250LXNpemU6IDEuN3Z3O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBjb2xvcjogJHtQYWxsZXRlW1wiYmxhY2tcIl19O1xyXG4gICAgICB0b3A6IDJ2dztcclxuICAgICAgbGVmdDogMS41dnc7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLlEtY2xvY2sge1xyXG4gICAgICB3aWR0aDogMnZ3O1xyXG4gICAgICBoZWlnaHQ6IDJ2dztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDEuOHZ3O1xyXG4gICAgICBsZWZ0OiAxM3Z3O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNjcm9sbCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgbGVmdDogLTI4dnc7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICBsZWZ0OiAtMjA2LjAzdnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuYDtcclxuXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVRlc3RzKGEpICB7XHJcbiAgbGV0IGdlbmVyYXRlZCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgYiA9ICg8VGVzdENhcmQgY2xhc3NOYW1lPVwiTy10ZXN0LWNhcmRcIiBzcmM9e2FbaV1bJ2ltZyddWzBdW1widXJsXCJdfSB0aXRsZT17YVtpXVsndGl0bGUnXX0gdGltZT17YVtpXVsndGltZSddfT48L1Rlc3RDYXJkPilcclxuICAgICAgZ2VuZXJhdGVkLnB1c2goYilcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgYiA9ICg8VGVzdENhcmQgY2xhc3NOYW1lPVwiTy10ZXN0LWNhcmRcIiBzcmM9e2FbaV1bJ2ltZyddWzBdW1widXJsXCJdfSB0aXRsZT17YVtpXVsndGl0bGUnXX0gdGltZT17YVtpXVsndGltZSddfT48L1Rlc3RDYXJkPilcclxuICAgICAgZ2VuZXJhdGVkLnB1c2goYilcclxuICB9XHJcbiAgcmV0dXJuIGdlbmVyYXRlZFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gVGVzdHNDYXJkcyhwcm9wcykge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhc3luYyAoKT0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyAoYXdhaXQgQXN5bmNDbGFzcykoKTtcclxuICAgICB3aGlsZSAoaW5zdGFuY2UuZ2V0VmFyaWFibGUoKSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDApKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHZhcmlhYmxlVmFsdWUgPSBpbnN0YW5jZS5nZXRWYXJpYWJsZSgpO1xyXG5cclxuICAgIC8vYWFhID0gZ2VuZXJhdGVDYXJkcyh2YXJpYWJsZVZhbHVlKVxyXG4gICAgc2V0RGF0YShnZW5lcmF0ZVRlc3RzKHZhcmlhYmxlVmFsdWUpKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuICBkYXRhKClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgZGF0YTEgPSB1c2VNZW1vKCgpID0+IGRhdGEpO1xyXG5cclxuICAgICAgLy88PntkYXRhYS5tYXAoKGl0ZW0pID0+IChcclxuICAgIC8vICAgICAgPD57aXRlbX08Lz5cclxuICAgICAvLyApKX08Lz5cclxuXHJcbiAgLy9sZXQgZGF0YSA9IGdlbmVyYXRlVGVzdHMoKSBcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZENvbGxlY3Rpb24gY2xhc3NOYW1lPXtwcm9wc1tcImNsYXNzTmFtZVwiXX0+XHJcblxyXG4gICAgICA8PntkYXRhMS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDw+e2l0ZW19PC8+XHJcbiAgICAgICkpfTwvPlxyXG5cclxuICAgIDwvU3R5bGVkQ29sbGVjdGlvbj5cclxuICAgIFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RzQ2FyZHM7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQYWxsZXRlfSBmcm9tICcuLi92YXJpYWJsZXMuanN4JztcclxuaW1wb3J0IHsgdXNlSWQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQ2FyZEltZyBmcm9tICcuLi9xdWFya3MvUS1jYXJkQmFja2dyb3VuZC5qc3gnXHJcbmltcG9ydCBUZXh0IGZyb20gJy4uL2F0b21zL0EtdGV4dC5qc3gnO1xyXG5cclxuaW1wb3J0IHNlY3Rpb25JbWcxIGZyb20gJy4uL2ltYWdlcy9zZWN0aW9uMS53ZWJwJ1xyXG5pbXBvcnQgc2VjdGlvbkltZzIgZnJvbSAnLi4vaW1hZ2VzL3NlY3Rpb24yLndlYnAnXHJcbmltcG9ydCBzZWN0aW9uSW1nMyBmcm9tICcuLi9pbWFnZXMvc2VjdGlvbjMud2VicCdcclxuXHJcbmNvbnN0IGEgPSB7XHJcbiAgXCJzZWN0aW9uSW1nMVwiOiBzZWN0aW9uSW1nMSxcclxuICBcInNlY3Rpb25JbWcyXCI6IHNlY3Rpb25JbWcyLFxyXG4gIFwic2VjdGlvbkltZzNcIjogc2VjdGlvbkltZzMsXHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZEJsb2NrID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDE4dnc7XHJcbiAgaGVpZ2h0OiAyOHZ3O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtQYWxsZXRlW1wiYmx1ZVwiXX07XHJcbiAgYm9yZGVyLXJhZGl1czogMnZ3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmLmNob29zZW5GYWN0IHtcclxuICAgIHdpZHRoOiAyM3Z3O1xyXG4gICAgaGVpZ2h0OiA0MHZ3O1xyXG5cclxuICAgIC5BLW1haW4tQ2FyZFRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyLjd2dztcclxuICAgICAgdG9wOiAyLjV2dztcclxuICAgICAgbGVmdDogMnZ3O1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDQ0dnc7XHJcbiAgICAgIGhlaWdodDogNDN2dztcclxuICAgICAgbGVmdDogLTEwdnc7XHJcbiAgICAgIGJvdHRvbTogLTh2dztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTN2dztcclxuICAgIGxlZnQ6IC03JTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuXHJcbiAgICB3aWR0aDogNDB2dztcclxuICAgIGhlaWdodDogNDB2dztcclxuICAgIGxlZnQ6IC0xMHZ3O1xyXG4gICAgYm90dG9tOiAtMTV2dztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuQS1tYWluLUNhcmRUaXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogJHtQYWxsZXRlW1wid2hpdGVcIl19O1xyXG4gICAgdG9wOiAydnc7XHJcbiAgICBsZWZ0OiAxLjZ2dztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gRmFjdENhcmQocHJvcHMpIHtcclxuICBsZXQgaWQgPSB1c2VJZCgpO1xyXG4gIGlkID0gaWQuc2xpY2UoMSwgaWQubGVuZ3RoIC0gMSlcclxuICBpZiAocHJvcHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgIC8vIGxldCBpZCA9IHVzZUlkKCk7XHJcbiAgICAvL2lkID0gaWQuc2xpY2UoMSwgaWQubGVuZ3RoIC0gMSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgPFN0eWxlZEJsb2NrIGlkPXtwcm9wc1tcImlkXCJdfSBjbGFzc05hbWU9e3Byb3BzW1wiY2xhc3NOYW1lXCJdfT4gXHJcbiAgICAgICA8Q2FyZEltZyBjbGFzc05hbWU9XCJRLWNhcmRCYWNrZ3JvdW5kXCIgc3JjPXtwcm9wc1tcInNyY1wiXX0+PC9DYXJkSW1nPlxyXG5cclxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJBLW1haW4tQ2FyZFRpdGxlXCIgdGV4dENvbnRlbnQ9e3Byb3BzWyd0aXRsZSddfT48L1RleHQ+XHJcbiAgICAgIDwvU3R5bGVkQmxvY2s+XHJcbiAgKTtcclxuICB9XHJcblxyXG59XHJcbiAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN0Q2FyZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQYWxsZXRlfSBmcm9tICcuLi92YXJpYWJsZXMuanN4JztcclxuaW1wb3J0IHsgdXNlSWQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuaW1wb3J0IENhcmRJbWcgZnJvbSAnLi4vcXVhcmtzL1EtY2FyZEJhY2tncm91bmQuanN4J1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9hdG9tcy9BLXRleHQuanN4JztcclxuaW1wb3J0IEljb25JbWcgZnJvbSAnLi4vcXVhcmtzL1EtaWNvbi5qc3gnXHJcblxyXG5pbXBvcnQgaWNvbiBmcm9tICcuLi9pbWFnZXMvY2xvY2suc3ZnJ1xyXG5cclxuY29uc3QgU3R5bGVkQmxvY2sgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMjB2dztcclxuICBoZWlnaHQ6IDMwdnc7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke1BhbGxldGVbXCJ3aGl0ZVwiXX07XHJcbiAgYm9yZGVyLXJhZGl1czogMi41dnc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIC5RLWNhcmRCYWNrZ3JvdW5kIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNnZ3O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjV2dztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLkEtbWFpbi10ZXN0VGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjh2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogJHtQYWxsZXRlW1wiYmxhY2tcIl19O1xyXG4gICAgdG9wOiA1dnc7XHJcbiAgICBsZWZ0OiAxLjV2dztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLkEtbWFpbi10ZXN0VGltZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDEuM3Z3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAke1BhbGxldGVbXCJibGFja1wiXX07XHJcbiAgICB0b3A6IDJ2dztcclxuICAgIGxlZnQ6IDEuNXZ3O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gICAuUS1jbG9jayB7XHJcbiAgICB3aWR0aDogMS41dnc7XHJcbiAgICBoZWlnaHQ6IDEuNXZ3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxLjh2dztcclxuICAgIGxlZnQ6IDEwdnc7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmRhcmtlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke1BhbGxldGVbXCJibGFja1wiXX07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dFxyXG5cclxuICB9XHJcblxyXG5cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFRlc3RDYXJkKHByb3BzKSB7XHJcbiAgbGV0IGlkID0gdXNlSWQoKTtcclxuICBpZCA9IGlkLnNsaWNlKDEsIGlkLmxlbmd0aCAtIDEpXHJcblxyXG4gIGlmIChwcm9wc1tcImNsYXNzTmFtZVwiXSA9PSBcIk8tdGVzdC1jYXJkXCIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdHlsZWRCbG9jayBpZD17aWR9IGNsYXNzTmFtZT17cHJvcHNbXCJjbGFzc05hbWVcIl19IG9uTW91c2VPdmVyPXsoZSkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFya2VyXCIpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eT1cIjAuNVwiXHJcbiAgICAgICAgICBlbGVtLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuZGFya2VyXCIpICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgZS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5kYXJrZXJcIikuc3R5bGUub3BhY2l0eT1cIjBcIlxyXG4gICAgICAgICAgZS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5kYXJrZXJcIikuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIlxyXG4gICAgICAgIH1cclxuICAgICAgfX0gXHJcbiAgICAgIFxyXG4gICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXJrZXJcIikuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICBlbGVtLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCJcclxuICAgICAgICB9KVxyXG4gICAgICB9fT4gXHJcbiAgICAgICAgPEljb25JbWcgY2xhc3NOYW1lPVwiUS1jbG9ja1wiIHNyYz17aWNvbn0+IDwvSWNvbkltZz5cclxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJBLW1haW4tdGVzdFRpbWVcIiB0ZXh0Q29udGVudD17YCR7cHJvcHNbXCJ0aW1lXCJdfSDQvNC40L1gfT48L1RleHQ+XHJcbiAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwiQS1tYWluLXRlc3RUaXRsZVwiIHRleHRDb250ZW50PXtwcm9wc1tcInRpdGxlXCJdfT48L1RleHQ+XHJcbiAgICAgICAgPENhcmRJbWcgY2xhc3NOYW1lPVwiUS1jYXJkQmFja2dyb3VuZFwiIHNyYz17cHJvcHNbXCJzcmNcIl19PjwvQ2FyZEltZz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcmtlclwiPjwvZGl2PlxyXG4gICAgICA8L1N0eWxlZEJsb2NrPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZEJsb2NrIGlkPXtpZH0gY2xhc3NOYW1lPXtwcm9wc1tcImNsYXNzTmFtZVwiXSArIFwiIFwiICArIHByb3BzW1widHlwZVwiXX0+IFxyXG4gICAgICAgIDxJY29uSW1nIGNsYXNzTmFtZT1cIlEtY2xvY2tcIiBzcmM9e2ljb259PiA8L0ljb25JbWc+XHJcbiAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwiQS1tYWluLXRlc3RUaW1lXCIgdGV4dENvbnRlbnQ9e2Ake3Byb3BzW1widGltZVwiXX0g0LzQuNC9YH0+PC9UZXh0PlxyXG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cIkEtbWFpbi10ZXN0VGl0bGVcIiB0ZXh0Q29udGVudD17cHJvcHNbXCJ0aXRsZVwiXX0+PC9UZXh0PlxyXG4gICAgICAgIDxDYXJkSW1nIGNsYXNzTmFtZT1cIlEtY2FyZEJhY2tncm91bmRcIiBzcmM9e3Byb3BzW1wic3JjXCJdfT48L0NhcmRJbWc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXJrZXJcIj48L2Rpdj5cclxuICAgICAgPC9TdHlsZWRCbG9jaz5cclxuICAgICk7XHJcblxyXG4gIH1cclxufVxyXG4gIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdENhcmQ7Il0sIm5hbWVzIjpbIkFpcnRhYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiQXN5bmNDbGFzcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiZ2V0UG9zdFRlYXNlcnMiLCJ0aGVuIiwiZGF0YSIsImNvbnRlbnQiLCJ1cGRhdGUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldFZhcmlhYmxlIiwicmVqZWN0IiwidG9rZW4iLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJzZWxlY3QiLCJtYXhSZWNvcmRzIiwiZmlyc3RQYWdlIiwicmVzdWx0IiwiZm9yRWFjaCIsInJlY29yZCIsInB1c2giLCJudW0iLCJmaWVsZHMiLCJ0aXRsZSIsInRpbWUiLCJ0eXBlIiwiaW1nIiwiZGVzY3JpcHRpb24iLCJ0YWciLCJjb25zb2xlIiwibG9nIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIiwic3BsaXQiLCJwb3AiLCJzdHJva2UiLCJwYWdlIiwiY3JlYXRlQ29udGVudCIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX2ludm9rZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJuZXh0IiwiaXNBcnJheSIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJmcmVlemUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicmF3Iiwic3R5bGVkIiwiUGFsbGV0ZSIsIlJlYWN0IiwidXNlSWQiLCJ1c2VTdGF0ZSIsInVzZURlZmVycmVkVmFsdWUiLCJ1c2VFZmZlY3QiLCJTdXNwZW5zZSIsInVzZU1lbW8iLCJ1c2VDYWxsYmFjayIsIlRlc3RDYXJkIiwiRmFjdENhcmQiLCJTdHlsZWRDb2xsZWN0aW9uIiwiZGl2IiwiX3RlbXBsYXRlT2JqZWN0IiwiZ2VuZXJhdGVUZXN0cyIsImdlbmVyYXRlZCIsImIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwiVGVzdHNDYXJkcyIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInNldERhdGEiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIl9yZWYiLCJfY2FsbGVlIiwiaW5zdGFuY2UiLCJ2YXJpYWJsZVZhbHVlIiwiX3QiLCJfY29udGV4dCIsInVuZGVmaW5lZCIsImRhdGExIiwiRnJhZ21lbnQiLCJtYXAiLCJpdGVtIiwiQ2FyZEltZyIsIlRleHQiLCJzZWN0aW9uSW1nMSIsInNlY3Rpb25JbWcyIiwic2VjdGlvbkltZzMiLCJTdHlsZWRCbG9jayIsInNlY3Rpb24iLCJpZCIsInRleHRDb250ZW50IiwidjQiLCJ1dWlkdjQiLCJJY29uSW1nIiwiaWNvbiIsIm9uTW91c2VPdmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbSIsInN0eWxlIiwib3BhY2l0eSIsInBvaW50ZXJFdmVudHMiLCJ0YXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwib25Nb3VzZUxlYXZlIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==
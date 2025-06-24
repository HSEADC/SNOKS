"use strict";
(self["webpackChunkstatic_site_08_24"] = self["webpackChunkstatic_site_08_24"] || []).push([["src_components_collections_C-generated-tests_jsx"],{

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

/***/ "./src/components/atoms/A-blueBtn.jsx":
/*!********************************************!*\
  !*** ./src/components/atoms/A-blueBtn.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables.jsx */ "./src/components/variables.jsx");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }



var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  padding: 1vw;\n  border-radius: 3vw;\n  opacity: 1;\n  transition: all 0.3s ease;\n  background-color: ", ";\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: ", ";\n\n\n  &:hover {\n  opacity: 0.6;\n  }\n\n  &.prev {\n    transform: rotate(180deg)\n  }\n"])), _variables_jsx__WEBPACK_IMPORTED_MODULE_1__.Pallete["black"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__.Pallete["blue"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__.Pallete["fontP"]);
function BlueButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledButton, {
    className: props["className"],
    id: props['id']
  }, props["textContent"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlueButton);

/***/ }),

/***/ "./src/components/collections/C-generated-tests.jsx":
/*!**********************************************************!*\
  !*** ./src/components/collections/C-generated-tests.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables.jsx */ "./src/components/variables.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tests_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tests.js */ "./src/components/tests.js");
/* harmony import */ var _atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/A-text.jsx */ "./src/components/atoms/A-text.jsx");
/* harmony import */ var _organisms_O_test_card_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/O-test-card.jsx */ "./src/components/organisms/O-test-card.jsx");
/* harmony import */ var _atoms_A_blueBtn_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/A-blueBtn.jsx */ "./src/components/atoms/A-blueBtn.jsx");
/* harmony import */ var _quarks_Q_icon_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../quarks/Q-icon.jsx */ "./src/components/quarks/Q-icon.jsx");
/* harmony import */ var _images_cross_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/cross.svg */ "./src/components/images/cross.svg");
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

var StyledCollection = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 354vw;\n  height: fit-content;\n  align-items: center;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  left: -28vw;\n  animation: scroll 7.5s linear infinite;\n  transition: all 0.5 ease-in-out;\n  margin-bottom: 7vw;\n\n  .C-tags {\n    width: 100%;\n    display: flex;\n    margin: 7vw 0 3vw 0;\n\n    .A-tagBtn {\n      background-color: white;\n      font-size: 1.5vw;\n      font-weight: 500;\n      padding: 1vw 3vw;\n      margin-right: 2vw;\n      opacity: 1;\n    }\n\n    .clear {\n      width: 4vw;\n      height: 4vw;\n      padding: 0;\n      border-radius: 100%;\n      position: relative;\n    }\n\n    .A-tagBtn:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n  }\n\n  .O-test-cardGenerated {\n    width: 28vw;\n    height: 37vw;\n    margin-bottom: 2vw;\n\n    .Q-cardBackground {\n      width: 100%;\n      height: 23vw;\n      bottom: -1vw;\n    }\n\n    .A-main-testTitle {\n      font-size: 2.4vw;\n      font-weight: 600;\n      top: 5vw;\n      left: 1.5vw;\n    }\n    \n  }\n\n  .Q-bigCardBack {\n    width: 90vw;\n    height: 50vw;\n    background-color: white;\n    position: relative;\n    border-radius: 3vw;\n    padding: 3vw;\n    margin: 4vw auto;\n\n    .A-description {\n      font-size: 1.8vw;\n      width: 45%;\n      margin-bottom: 3vw;\n    }\n\n    .A-time {\n      opacity: 0.5;\n      font-weight: 500;\n      font-size: 1.5vw;\n      margin-bottom: 20vw;\n    }\n\n    .A-btn {\n      position: absolute;\n      left: 3vw;\n      bottom: 3vw;\n      width: 43%;\n      color: ", ";\n      font-size: 1.5vw;\n    }\n\n    .big {\n      position: absolute;\n      margin-bottom: 0;\n      right: 0vw;\n      bottom: 0vw;\n      height: 50vw;\n      width: 43vw;\n\n      .Q-clock { \n        display: none;\n      }\n      .A-main-testTime {\n        display: none;\n      }\n\n      .Q-cardBackground {\n        bottom: 0;\n        width: 100%;\n        height: 35vw;\n      }\n\n      .A-main-testTitle {\n        top: 3vw;\n        font-size: 3vw;\n      }\n    }\n\n\n    .first {\n      position: absolute;\n      margin-bottom: 0;\n      right: 0vw;\n      bottom: 0vw;\n      height: 50vw;\n      width: 43vw;\n\n      .Q-clock { \n        display: none;\n      }\n      .A-main-testTime {\n        display: none;\n      }\n\n      .Q-cardBackground {\n        bottom: 0;\n        width: 100%;\n        height: 35vw;\n      }\n\n      .A-main-testTitle {\n        top: 3vw;\n        font-size: 3vw;\n      }\n    } \n  } \n"])), _variables_jsx__WEBPACK_IMPORTED_MODULE_0__.Pallete["blue"], _variables_jsx__WEBPACK_IMPORTED_MODULE_0__.Pallete["white"], _variables_jsx__WEBPACK_IMPORTED_MODULE_0__.Pallete["white"]);
function generateTags(a) {
  var tags = [];
  var tagsTexsts = [];
  for (var i = 0; i < a.length; i++) {
    if (tagsTexsts.indexOf(a[i]["tag"]) == -1) {
      tagsTexsts.push(a[i]["tag"]);
      tags.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_blueBtn_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "A-tagBtn",
        textContent: a[i]["tag"]
      }));
    }
  }
  console.log(tags);
  var collection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "C-tags"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, tags.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, item);
  })));
  return collection;
}
function generateTests(a) {
  generateTags(a);
  var generated = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i]["num"] == 0) {
      var b = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: "Q-bigCardBack first"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "A-description",
        textContent: a[i]['description']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "A-time",
        textContent: "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ".concat(a[i]['time'], " \u043C\u0438\u043D")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_blueBtn_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "A-btn",
        textContent: "\u041F\u0440\u043E\u0439\u0442\u0438"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_organisms_O_test_card_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "O-test-cardGenerated",
        src: a[i]['img'][0]["url"],
        type: a[i]["type"],
        title: a[i]['title'],
        time: a[i]['time']
      }));
      console.log(a[0]);
      generated.push(b);
    }
  }
  generated.push(generateTags(a));
  for (var _i = 1; _i < a.length + 1; _i++) {
    for (var m = 0; m < a.length; m++) {
      if (a[m]['num'] == _i) {
        if (a[m]['type'] == "big") {
          var _b = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
            className: "Q-bigCardBack"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "A-description",
            textContent: a[m]['description']
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "A-time",
            textContent: "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ".concat(a[m]['time'], " \u043C\u0438\u043D")
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_blueBtn_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "A-btn",
            textContent: "\u041F\u0440\u043E\u0439\u0442\u0438"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_organisms_O_test_card_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "O-test-cardGenerated",
            src: a[m]['img'][0]["url"],
            type: a[m]["type"],
            title: a[m]['title'],
            time: a[m]['time']
          }));
          console.log(a[m]);
          generated.push(_b);
        } else {
          var _b2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_organisms_O_test_card_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "O-test-cardGenerated",
            src: a[m]['img'][0]["url"],
            type: a[m]["type"],
            title: a[m]['title'],
            time: a[m]['time']
          });
          console.log(a[m]);
          generated.push(_b2);
        }
      }
    }
  }
  return generated;
}
function TestsCardPaged(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    first = _useState4[0],
    setFirst = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var data = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var instance, variableValue, m, _t;
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
                return setTimeout(resolve, 300);
              });
            case 3:
              _context.n = 2;
              break;
            case 4:
              variableValue = instance.getVariable();
              setData(generateTests(variableValue));
              setIsLoading(false);
              for (m = 0; m < variableValue.length; m++) {
                if (variableValue[m]['num'] == 1) {
                  setFirst(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_organisms_O_test_card_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    className: "O-test-card big",
                    src: variableValue[m]['img'][0]["url"],
                    title: variableValue[m]['title'],
                    time: variableValue[m]['time']
                  }));
                }
              }
              console.log(first);
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

  console.log(data);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledCollection, {
    className: props["className"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, data1.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, item);
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestsCardPaged);

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

/***/ }),

/***/ "./src/components/images/cross.svg":
/*!*****************************************!*\
  !*** ./src/components/images/cross.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2e368fd9106a1d6375ea.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfY29sbGVjdGlvbnNfQy1nZW5lcmF0ZWQtdGVzdHNfanN4LmJjMzRmMzdjMTY1ZThlMzVhNmY0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGlFQUFlLElBQUlDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUs7RUFDdENDLFVBQVUsQ0FBQyxZQUFJO0lBQ2Q7SUFDQztJQUNBO0lBQ0Q7SUFDQTtJQUFBLElBQ01DLFVBQVU7TUFDZixTQUFBQSxXQUFBLEVBQWM7UUFBQSxJQUFBQyxLQUFBO1FBQUFDLGVBQUEsT0FBQUYsVUFBQTtRQUNaRyxjQUFjLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsSUFBSSxFQUFLO1VBQzlCSixLQUFJLENBQUNLLE9BQU8sR0FBR0QsSUFBSTtVQUNuQkUsTUFBTSxDQUFDTixLQUFJLENBQUNLLE9BQU8sQ0FBQztVQUNwQjtRQUNGLENBQUMsQ0FBQztNQUVKO01BQUMsT0FBQUUsWUFBQSxDQUFBUixVQUFBO1FBQUFTLEdBQUE7UUFBQUMsS0FBQSxFQUVELFNBQUFDLFdBQVdBLENBQUEsRUFBRztVQUNaLE9BQU8sSUFBSSxDQUFDTCxPQUFPO1FBQ3ZCO01BQUM7SUFBQTtJQUVDUixPQUFPLENBQUNFLFVBQVUsQ0FBQztFQUNyQixDQUFDLEVBQUUsSUFBSSxDQUFDO0FBQ1YsQ0FBQyxDQUFDLEVBQUM7O0FBRUg7O0FBR0EsU0FBU0csY0FBY0EsQ0FBQSxFQUFHO0VBQ3hCLE9BQU8sSUFBSU4sT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBRWMsTUFBTSxFQUFLO0lBQ3RDLElBQU1OLE9BQU8sR0FBRyxFQUFFO0lBRWxCLElBQU1PLEtBQUssR0FBRyxvRkFBb0Y7SUFFbEdqQix5REFBa0IsQ0FBQztNQUNqQm1CLFdBQVcsRUFBRSwwQkFBMEI7TUFD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QU0sQ0FDbEIsQ0FBQztFQUdsQjtBQUNGO0FBR0EsaUVBQWUwRSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvLi9zcmMvY29tcG9uZW50cy90ZXN0cy5qcyIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC8uL3NyYy9jb21wb25lbnRzL2F0b21zL0EtYmx1ZUJ0bi5qc3giLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvLi9zcmMvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9DLWdlbmVyYXRlZC10ZXN0cy5qc3giLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvTy10ZXN0LWNhcmQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBaXJ0YWJsZSBmcm9tICdhaXJ0YWJsZSdcclxuXHJcbi8vbGV0IGNvbnRlbnRcclxuLy9nZXRQb3N0VGVhc2VycygpLnRoZW4oKGRhdGEpID0+IHtcclxuLy9jb250ZW50ID0gZGF0YVxyXG5cclxuLy91cGRhdGUoY29udGVudClcclxuXHJcbi8vfSlcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY29udGVudDtcclxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgIC8vIGNsYXNzIEFzeW5jQ2xhc3Mge1xyXG4gICAgLy8gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgLy8gICB9XHJcbiAgIC8vIH1cclxuICAgY2xhc3MgQXN5bmNDbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgZ2V0UG9zdFRlYXNlcnMoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZGF0YVxyXG4gICAgICAgIHVwZGF0ZSh0aGlzLmNvbnRlbnQpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFZhcmlhYmxlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuICAgfVxyXG4gICAgcmVzb2x2ZShBc3luY0NsYXNzKTtcclxuICB9LCAxMDAwKTtcclxufSk7XHJcblxyXG4vLyAgIHBhdHgzZGJSMkZWVnFuOVJBLjI1MTIxMjQwZTYxZDQ1ZmYyZWQ1M2FkNThmN2I1YmE1YzIxZjQ0MzJhOTM4YmQ3NzU1YzkyNTFjZTM1ODQwZmJcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRQb3N0VGVhc2VycygpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IFtdXHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSAncGF0eDNkYlIyRlZWcW45UkEuMjUxMjEyNDBlNjFkNDVmZjJlZDUzYWQ1OGY3YjViYTVjMjFmNDQzMmE5MzhiZDc3NTVjOTI1MWNlMzU4NDBmYidcclxuXHJcbiAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xyXG4gICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXHJcbiAgICAgIGFwaUtleTogdG9rZW5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIGxldCBiYXNlID0gQWlydGFibGUuYmFzZSgnYXBwekRMY1hySkloeTJRem4nKVxyXG5cclxuICBcclxuXHJcbiAgICBiYXNlKCd0ZXN0cycpXHJcbiAgICAgIC5zZWxlY3QoeyBtYXhSZWNvcmRzOiAxMDAgfSlcclxuICAgICAgLmZpcnN0UGFnZSgpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICByZXN1bHQuZm9yRWFjaCgocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICBjb250ZW50LnB1c2goe1xyXG4gICAgICAgICAgICBudW06IHJlY29yZC5maWVsZHNbJ251bSddLFxyXG4gICAgICAgICAgICB0aXRsZTogcmVjb3JkLmZpZWxkc1sndGl0bGUnXSxcclxuICAgICAgICAgICAgdGltZTogcmVjb3JkLmZpZWxkc1sndGltZSddLFxyXG4gICAgICAgICAgICB0eXBlOiByZWNvcmQuZmllbGRzWyd0eXBlJ10sXHJcbiAgICAgICAgICAgIGltZzogcmVjb3JkLmZpZWxkc1snaW1nJ10sXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZWNvcmQuZmllbGRzWydkZXNjcmlwdGlvbiddLFxyXG4gICAgICAgICAgICB0YWc6IHJlY29yZC5maWVsZHNbJ3RhZyddLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpXHJcblxyXG4gICAgICAgIHJlc29sdmUoY29udGVudClcclxuICAgICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoY29udGVudCkge1xyXG4gIGNvbnN0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJylbMF1cclxuICBjb25zb2xlLmxvZyhocmVmKVxyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGNvbnRlbnQuZm9yRWFjaCgoc3Ryb2tlKSA9PiB7XHJcbiAgICAgIGlmIChocmVmID09PSBzdHJva2UucGFnZSkge1xyXG4gICAgICAgIGNyZWF0ZUNvbnRlbnQoc3Ryb2tlKVxyXG4gICAgICB9XHJcbiAgICB9LCAyMDApXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZURlZmVycmVkVmFsdWUsIHVzZUVmZmVjdCwgU3VzcGVuc2V9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7UGFsbGV0ZX0gZnJvbSAnLi4vdmFyaWFibGVzLmpzeCc7XHJcblxyXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGNvbG9yOiAke1BhbGxldGVbXCJibGFja1wiXX07XHJcbiAgcGFkZGluZzogMXZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDN2dztcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtQYWxsZXRlW1wiYmx1ZVwiXX07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJHtQYWxsZXRlW1wiZm9udFBcIl19O1xyXG5cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxuXHJcbiAgJi5wcmV2IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcclxuICB9XHJcbmA7XHJcblxyXG5cclxuZnVuY3Rpb24gQmx1ZUJ1dHRvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRCdXR0b24gY2xhc3NOYW1lPXtwcm9wc1tcImNsYXNzTmFtZVwiXX0gaWQ9e3Byb3BzWydpZCddfT5cclxuICAgICAge3Byb3BzW1widGV4dENvbnRlbnRcIl19XHJcbiAgICA8L1N0eWxlZEJ1dHRvbj5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBCbHVlQnV0dG9uOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1BhbGxldGV9IGZyb20gJy4uL3ZhcmlhYmxlcy5qc3gnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlSWQsIHVzZVN0YXRlLCB1c2VEZWZlcnJlZFZhbHVlLCB1c2VFZmZlY3QsIFN1c3BlbnNlLCB1c2VNZW1vLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEFzeW5jQ2xhc3MgZnJvbSBcIi4uL3Rlc3RzLmpzXCI7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4uL2F0b21zL0EtdGV4dC5qc3gnO1xyXG5pbXBvcnQgVGVzdENhcmQgZnJvbSAnLi4vb3JnYW5pc21zL08tdGVzdC1jYXJkLmpzeCc7XHJcbmltcG9ydCBCbHVlQnV0dG9uIGZyb20gJy4uL2F0b21zL0EtYmx1ZUJ0bi5qc3gnO1xyXG5pbXBvcnQgSWNvbkltZyBmcm9tICcuLi9xdWFya3MvUS1pY29uLmpzeCdcclxuXHJcbmltcG9ydCBjcm9zcyBmcm9tICcuLi9pbWFnZXMvY3Jvc3Muc3ZnJ1xyXG5cclxuLy9pbXBvcnQgY29udGVudCBmcm9tICcuLi9kYXRhLmpzJ1xyXG4vL2ltcG9ydCBBc3luY0NsYXNzIGZyb20gXCIuLi9kYXRhLmpzXCI7XHJcbi8vaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vbW9sZWN1bGVzL00tbG9hZGluZy1ibG9jay5qc3gnXHJcblxyXG5cclxuY29uc3QgU3R5bGVkQ29sbGVjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDM1NHZ3O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgbGVmdDogLTI4dnc7XHJcbiAgYW5pbWF0aW9uOiBzY3JvbGwgNy41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNSBlYXNlLWluLW91dDtcclxuICBtYXJnaW4tYm90dG9tOiA3dnc7XHJcblxyXG4gIC5DLXRhZ3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiA3dncgMCAzdncgMDtcclxuXHJcbiAgICAuQS10YWdCdG4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgcGFkZGluZzogMXZ3IDN2dztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAydnc7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsZWFyIHtcclxuICAgICAgd2lkdGg6IDR2dztcclxuICAgICAgaGVpZ2h0OiA0dnc7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAuQS10YWdCdG46aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke1BhbGxldGVbXCJibHVlXCJdfTtcclxuICAgICAgY29sb3I6ICR7UGFsbGV0ZVtcIndoaXRlXCJdfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5PLXRlc3QtY2FyZEdlbmVyYXRlZCB7XHJcbiAgICB3aWR0aDogMjh2dztcclxuICAgIGhlaWdodDogMzd2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2dztcclxuXHJcbiAgICAuUS1jYXJkQmFja2dyb3VuZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIzdnc7XHJcbiAgICAgIGJvdHRvbTogLTF2dztcclxuICAgIH1cclxuXHJcbiAgICAuQS1tYWluLXRlc3RUaXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi40dnc7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHRvcDogNXZ3O1xyXG4gICAgICBsZWZ0OiAxLjV2dztcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLlEtYmlnQ2FyZEJhY2sge1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBoZWlnaHQ6IDUwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDN2dztcclxuICAgIHBhZGRpbmc6IDN2dztcclxuICAgIG1hcmdpbjogNHZ3IGF1dG87XHJcblxyXG4gICAgLkEtZGVzY3JpcHRpb24ge1xyXG4gICAgICBmb250LXNpemU6IDEuOHZ3O1xyXG4gICAgICB3aWR0aDogNDUlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLkEtdGltZSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjB2dztcclxuICAgIH1cclxuXHJcbiAgICAuQS1idG4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDN2dztcclxuICAgICAgYm90dG9tOiAzdnc7XHJcbiAgICAgIHdpZHRoOiA0MyU7XHJcbiAgICAgIGNvbG9yOiAke1BhbGxldGVbXCJ3aGl0ZVwiXX07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmJpZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgcmlnaHQ6IDB2dztcclxuICAgICAgYm90dG9tOiAwdnc7XHJcbiAgICAgIGhlaWdodDogNTB2dztcclxuICAgICAgd2lkdGg6IDQzdnc7XHJcblxyXG4gICAgICAuUS1jbG9jayB7IFxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLkEtbWFpbi10ZXN0VGltZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLlEtY2FyZEJhY2tncm91bmQge1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDM1dnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5BLW1haW4tdGVzdFRpdGxlIHtcclxuICAgICAgICB0b3A6IDN2dztcclxuICAgICAgICBmb250LXNpemU6IDN2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuZmlyc3Qge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwdnc7XHJcbiAgICAgIGJvdHRvbTogMHZ3O1xyXG4gICAgICBoZWlnaHQ6IDUwdnc7XHJcbiAgICAgIHdpZHRoOiA0M3Z3O1xyXG5cclxuICAgICAgLlEtY2xvY2sgeyBcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5BLW1haW4tdGVzdFRpbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5RLWNhcmRCYWNrZ3JvdW5kIHtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuQS1tYWluLXRlc3RUaXRsZSB7XHJcbiAgICAgICAgdG9wOiAzdnc7XHJcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgIH1cclxuICAgIH0gXHJcbiAgfSBcclxuYDtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFncyhhKSB7XHJcbiAgbGV0IHRhZ3MgPSBbXVxyXG4gIGxldCB0YWdzVGV4c3RzID0gW11cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICh0YWdzVGV4c3RzLmluZGV4T2YoYVtpXVtcInRhZ1wiXSkgPT0gLTEpIHtcclxuICAgICAgdGFnc1RleHN0cy5wdXNoKGFbaV1bXCJ0YWdcIl0pXHJcbiAgICAgIHRhZ3MucHVzaCg8Qmx1ZUJ1dHRvbiBjbGFzc05hbWU9XCJBLXRhZ0J0blwiIHRleHRDb250ZW50PXthW2ldW1widGFnXCJdfT48L0JsdWVCdXR0b24+KVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zb2xlLmxvZyh0YWdzKVxyXG5cclxuICBcclxuICBsZXQgY29sbGVjdGlvbiA9ICggPGRpdiBjbGFzc05hbWU9XCJDLXRhZ3NcIj5cclxuICAgIDw+e3RhZ3MubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPD57aXRlbX08Lz5cclxuICAgICkpfVxyXG4gICAgPC8+XHJcblxyXG4gIDwvZGl2PilcclxuXHJcbiAgcmV0dXJuIGNvbGxlY3Rpb25cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVUZXN0cyhhKSAge1xyXG4gIGdlbmVyYXRlVGFncyhhKVxyXG4gIGxldCBnZW5lcmF0ZWQgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChhW2ldW1wibnVtXCJdID09IDApIHtcclxuICAgICAgbGV0IGIgPSAoPGRpdiBjbGFzc05hbWU9XCJRLWJpZ0NhcmRCYWNrIGZpcnN0XCI+PFRleHQgY2xhc3NOYW1lPVwiQS1kZXNjcmlwdGlvblwiIHRleHRDb250ZW50PXthW2ldWydkZXNjcmlwdGlvbiddfT48L1RleHQ+PFRleHQgY2xhc3NOYW1lPSdBLXRpbWUnIHRleHRDb250ZW50PXtg0JLRgNC10LzRjyDQv9GA0L7RhdC+0LbQtNC10L3QuNGPOiAke2FbaV1bJ3RpbWUnXX0g0LzQuNC9YH0+PC9UZXh0PjxCbHVlQnV0dG9uIGNsYXNzTmFtZT1cIkEtYnRuXCIgdGV4dENvbnRlbnQ9XCLQn9GA0L7QudGC0LhcIj48L0JsdWVCdXR0b24+PFRlc3RDYXJkIGNsYXNzTmFtZT1cIk8tdGVzdC1jYXJkR2VuZXJhdGVkXCIgc3JjPXthW2ldWydpbWcnXVswXVtcInVybFwiXX0gdHlwZT17YVtpXVtcInR5cGVcIl19IHRpdGxlPXthW2ldWyd0aXRsZSddfSB0aW1lPXthW2ldWyd0aW1lJ119PjwvVGVzdENhcmQ+PC9kaXY+KVxyXG4gICAgICBjb25zb2xlLmxvZyhhWzBdKVxyXG4gICAgICBnZW5lcmF0ZWQucHVzaChiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVkLnB1c2goZ2VuZXJhdGVUYWdzKGEpKVxyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8IGEubGVuZ3RoKzE7IGkrKykge1xyXG4gICAgZm9yIChsZXQgbSA9IDA7IG0gPCBhLmxlbmd0aDsgbSsrKSB7XHJcbiAgICAgIGlmIChhW21dWydudW0nXSA9PSBpKSB7XHJcbiAgICAgICAgaWYgKGFbbV1bJ3R5cGUnXSA9PSBcImJpZ1wiKSB7XHJcbiAgICAgICAgICBsZXQgYiA9ICg8ZGl2IGNsYXNzTmFtZT1cIlEtYmlnQ2FyZEJhY2tcIj48VGV4dCBjbGFzc05hbWU9XCJBLWRlc2NyaXB0aW9uXCIgdGV4dENvbnRlbnQ9e2FbbV1bJ2Rlc2NyaXB0aW9uJ119PjwvVGV4dD48VGV4dCBjbGFzc05hbWU9J0EtdGltZScgdGV4dENvbnRlbnQ9e2DQktGA0LXQvNGPINC/0YDQvtGF0L7QttC00LXQvdC40Y86ICR7YVttXVsndGltZSddfSDQvNC40L1gfT48L1RleHQ+PEJsdWVCdXR0b24gY2xhc3NOYW1lPVwiQS1idG5cIiB0ZXh0Q29udGVudD1cItCf0YDQvtC50YLQuFwiPjwvQmx1ZUJ1dHRvbj48VGVzdENhcmQgY2xhc3NOYW1lPVwiTy10ZXN0LWNhcmRHZW5lcmF0ZWRcIiBzcmM9e2FbbV1bJ2ltZyddWzBdW1widXJsXCJdfSB0eXBlPXthW21dW1widHlwZVwiXX0gdGl0bGU9e2FbbV1bJ3RpdGxlJ119IHRpbWU9e2FbbV1bJ3RpbWUnXX0+PC9UZXN0Q2FyZD48L2Rpdj4pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFbbV0pXHJcbiAgICAgICAgICAgIGdlbmVyYXRlZC5wdXNoKGIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBiID0gKDxUZXN0Q2FyZCBjbGFzc05hbWU9XCJPLXRlc3QtY2FyZEdlbmVyYXRlZFwiIHNyYz17YVttXVsnaW1nJ11bMF1bXCJ1cmxcIl19IHR5cGU9e2FbbV1bXCJ0eXBlXCJdfSB0aXRsZT17YVttXVsndGl0bGUnXX0gdGltZT17YVttXVsndGltZSddfT48L1Rlc3RDYXJkPilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYVttXSlcclxuICAgICAgICAgICAgZ2VuZXJhdGVkLnB1c2goYilcclxuICAgICAgICB9ICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZ2VuZXJhdGVkXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBUZXN0c0NhcmRQYWdlZChwcm9wcykge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZmlyc3QsIHNldEZpcnN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhc3luYyAoKT0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyAoYXdhaXQgQXN5bmNDbGFzcykoKTtcclxuICAgICB3aGlsZSAoaW5zdGFuY2UuZ2V0VmFyaWFibGUoKSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMDApKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHZhcmlhYmxlVmFsdWUgPSBpbnN0YW5jZS5nZXRWYXJpYWJsZSgpO1xyXG4gICAgc2V0RGF0YShnZW5lcmF0ZVRlc3RzKHZhcmlhYmxlVmFsdWUpKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICBcclxuICAgIGZvciAobGV0IG0gPSAwOyBtIDwgdmFyaWFibGVWYWx1ZS5sZW5ndGg7IG0rKykge1xyXG4gICAgICBpZiAodmFyaWFibGVWYWx1ZVttXVsnbnVtJ10gPT0gMSkge1xyXG4gICAgICAgIHNldEZpcnN0KDxUZXN0Q2FyZCBjbGFzc05hbWU9XCJPLXRlc3QtY2FyZCBiaWdcIiBzcmM9e3ZhcmlhYmxlVmFsdWVbbV1bJ2ltZyddWzBdW1widXJsXCJdfSB0aXRsZT17dmFyaWFibGVWYWx1ZVttXVsndGl0bGUnXX0gdGltZT17dmFyaWFibGVWYWx1ZVttXVsndGltZSddfT48L1Rlc3RDYXJkPilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhmaXJzdClcclxuICB9O1xyXG4gIGRhdGEoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBkYXRhMSA9IHVzZU1lbW8oKCkgPT4gZGF0YSk7XHJcblxyXG4gICAgICAvLzw+e2RhdGFhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgLy8gICAgICA8PntpdGVtfTwvPlxyXG4gICAgIC8vICkpfTwvPlxyXG5cclxuICAvL2xldCBkYXRhID0gZ2VuZXJhdGVUZXN0cygpIFxyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQ29sbGVjdGlvbiBjbGFzc05hbWU9e3Byb3BzW1wiY2xhc3NOYW1lXCJdfT5cclxuICAgICAgPD57ZGF0YTEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8PntpdGVtfTwvPlxyXG4gICAgICApKX08Lz5cclxuXHJcblxyXG4gICAgPC9TdHlsZWRDb2xsZWN0aW9uPlxyXG4gICAgXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdHNDYXJkUGFnZWQ7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQYWxsZXRlfSBmcm9tICcuLi92YXJpYWJsZXMuanN4JztcclxuaW1wb3J0IHsgdXNlSWQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuaW1wb3J0IENhcmRJbWcgZnJvbSAnLi4vcXVhcmtzL1EtY2FyZEJhY2tncm91bmQuanN4J1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9hdG9tcy9BLXRleHQuanN4JztcclxuaW1wb3J0IEljb25JbWcgZnJvbSAnLi4vcXVhcmtzL1EtaWNvbi5qc3gnXHJcblxyXG5pbXBvcnQgaWNvbiBmcm9tICcuLi9pbWFnZXMvY2xvY2suc3ZnJ1xyXG5cclxuY29uc3QgU3R5bGVkQmxvY2sgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMjB2dztcclxuICBoZWlnaHQ6IDMwdnc7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke1BhbGxldGVbXCJ3aGl0ZVwiXX07XHJcbiAgYm9yZGVyLXJhZGl1czogMi41dnc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIC5RLWNhcmRCYWNrZ3JvdW5kIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNnZ3O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjV2dztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLkEtbWFpbi10ZXN0VGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjh2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogJHtQYWxsZXRlW1wiYmxhY2tcIl19O1xyXG4gICAgdG9wOiA1dnc7XHJcbiAgICBsZWZ0OiAxLjV2dztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLkEtbWFpbi10ZXN0VGltZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDEuM3Z3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAke1BhbGxldGVbXCJibGFja1wiXX07XHJcbiAgICB0b3A6IDJ2dztcclxuICAgIGxlZnQ6IDEuNXZ3O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gICAuUS1jbG9jayB7XHJcbiAgICB3aWR0aDogMS41dnc7XHJcbiAgICBoZWlnaHQ6IDEuNXZ3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxLjh2dztcclxuICAgIGxlZnQ6IDEwdnc7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmRhcmtlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke1BhbGxldGVbXCJibGFja1wiXX07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dFxyXG5cclxuICB9XHJcblxyXG5cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFRlc3RDYXJkKHByb3BzKSB7XHJcbiAgbGV0IGlkID0gdXNlSWQoKTtcclxuICBpZCA9IGlkLnNsaWNlKDEsIGlkLmxlbmd0aCAtIDEpXHJcblxyXG4gIGlmIChwcm9wc1tcImNsYXNzTmFtZVwiXSA9PSBcIk8tdGVzdC1jYXJkXCIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdHlsZWRCbG9jayBpZD17aWR9IGNsYXNzTmFtZT17cHJvcHNbXCJjbGFzc05hbWVcIl19IG9uTW91c2VPdmVyPXsoZSkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFya2VyXCIpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eT1cIjAuNVwiXHJcbiAgICAgICAgICBlbGVtLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuZGFya2VyXCIpICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgZS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5kYXJrZXJcIikuc3R5bGUub3BhY2l0eT1cIjBcIlxyXG4gICAgICAgICAgZS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5kYXJrZXJcIikuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIlxyXG4gICAgICAgIH1cclxuICAgICAgfX0gXHJcbiAgICAgIFxyXG4gICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXJrZXJcIikuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICBlbGVtLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCJcclxuICAgICAgICB9KVxyXG4gICAgICB9fT4gXHJcbiAgICAgICAgPEljb25JbWcgY2xhc3NOYW1lPVwiUS1jbG9ja1wiIHNyYz17aWNvbn0+IDwvSWNvbkltZz5cclxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJBLW1haW4tdGVzdFRpbWVcIiB0ZXh0Q29udGVudD17YCR7cHJvcHNbXCJ0aW1lXCJdfSDQvNC40L1gfT48L1RleHQ+XHJcbiAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwiQS1tYWluLXRlc3RUaXRsZVwiIHRleHRDb250ZW50PXtwcm9wc1tcInRpdGxlXCJdfT48L1RleHQ+XHJcbiAgICAgICAgPENhcmRJbWcgY2xhc3NOYW1lPVwiUS1jYXJkQmFja2dyb3VuZFwiIHNyYz17cHJvcHNbXCJzcmNcIl19PjwvQ2FyZEltZz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcmtlclwiPjwvZGl2PlxyXG4gICAgICA8L1N0eWxlZEJsb2NrPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZEJsb2NrIGlkPXtpZH0gY2xhc3NOYW1lPXtwcm9wc1tcImNsYXNzTmFtZVwiXSArIFwiIFwiICArIHByb3BzW1widHlwZVwiXX0+IFxyXG4gICAgICAgIDxJY29uSW1nIGNsYXNzTmFtZT1cIlEtY2xvY2tcIiBzcmM9e2ljb259PiA8L0ljb25JbWc+XHJcbiAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwiQS1tYWluLXRlc3RUaW1lXCIgdGV4dENvbnRlbnQ9e2Ake3Byb3BzW1widGltZVwiXX0g0LzQuNC9YH0+PC9UZXh0PlxyXG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cIkEtbWFpbi10ZXN0VGl0bGVcIiB0ZXh0Q29udGVudD17cHJvcHNbXCJ0aXRsZVwiXX0+PC9UZXh0PlxyXG4gICAgICAgIDxDYXJkSW1nIGNsYXNzTmFtZT1cIlEtY2FyZEJhY2tncm91bmRcIiBzcmM9e3Byb3BzW1wic3JjXCJdfT48L0NhcmRJbWc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXJrZXJcIj48L2Rpdj5cclxuICAgICAgPC9TdHlsZWRCbG9jaz5cclxuICAgICk7XHJcblxyXG4gIH1cclxufVxyXG4gIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdENhcmQ7Il0sIm5hbWVzIjpbIkFpcnRhYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiQXN5bmNDbGFzcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiZ2V0UG9zdFRlYXNlcnMiLCJ0aGVuIiwiZGF0YSIsImNvbnRlbnQiLCJ1cGRhdGUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldFZhcmlhYmxlIiwicmVqZWN0IiwidG9rZW4iLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJzZWxlY3QiLCJtYXhSZWNvcmRzIiwiZmlyc3RQYWdlIiwicmVzdWx0IiwiZm9yRWFjaCIsInJlY29yZCIsInB1c2giLCJudW0iLCJmaWVsZHMiLCJ0aXRsZSIsInRpbWUiLCJ0eXBlIiwiaW1nIiwiZGVzY3JpcHRpb24iLCJ0YWciLCJjb25zb2xlIiwibG9nIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIiwic3BsaXQiLCJwb3AiLCJzdHJva2UiLCJwYWdlIiwiY3JlYXRlQ29udGVudCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VEZWZlcnJlZFZhbHVlIiwidXNlRWZmZWN0IiwiU3VzcGVuc2UiLCJzdHlsZWQiLCJQYWxsZXRlIiwiU3R5bGVkQnV0dG9uIiwiYnV0dG9uIiwiX3RlbXBsYXRlT2JqZWN0IiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsIkJsdWVCdXR0b24iLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpZCIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX2ludm9rZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJuZXh0IiwiaXNBcnJheSIsImZyZWV6ZSIsImRlZmluZVByb3BlcnRpZXMiLCJyYXciLCJ1c2VJZCIsInVzZU1lbW8iLCJ1c2VDYWxsYmFjayIsIlRleHQiLCJUZXN0Q2FyZCIsIkljb25JbWciLCJjcm9zcyIsIlN0eWxlZENvbGxlY3Rpb24iLCJkaXYiLCJnZW5lcmF0ZVRhZ3MiLCJ0YWdzIiwidGFnc1RleHN0cyIsImluZGV4T2YiLCJ0ZXh0Q29udGVudCIsImNvbGxlY3Rpb24iLCJGcmFnbWVudCIsIm1hcCIsIml0ZW0iLCJnZW5lcmF0ZVRlc3RzIiwiZ2VuZXJhdGVkIiwiYiIsImNvbmNhdCIsInNyYyIsIlRlc3RzQ2FyZFBhZ2VkIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInNldERhdGEiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImZpcnN0Iiwic2V0Rmlyc3QiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIl9yZWYiLCJfY2FsbGVlIiwiaW5zdGFuY2UiLCJ2YXJpYWJsZVZhbHVlIiwiX3QiLCJfY29udGV4dCIsInVuZGVmaW5lZCIsImRhdGExIiwidjQiLCJ1dWlkdjQiLCJDYXJkSW1nIiwiaWNvbiIsIlN0eWxlZEJsb2NrIiwic2VjdGlvbiIsIm9uTW91c2VPdmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbSIsInN0eWxlIiwib3BhY2l0eSIsInBvaW50ZXJFdmVudHMiLCJ0YXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwib25Nb3VzZUxlYXZlIl0sInNvdXJjZVJvb3QiOiIifQ==
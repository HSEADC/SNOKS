"use strict";
(self["webpackChunkstatic_site_08_24"] = self["webpackChunkstatic_site_08_24"] || []).push([[66],{

/***/ 5470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
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

/***/ 4066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7581);
/* harmony import */ var _variables_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3382);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6540);
/* harmony import */ var _tests_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5470);
/* harmony import */ var _organisms_O_test_card_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6292);
/* harmony import */ var _organisms_O_main_facts_Card_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2543);
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


var StyledCollection = styled_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 354vw;\n  height: 22vw;\n  align-items: center;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  left: -28vw;\n  animation: scroll 13.5s linear infinite;\n  transition: all 0.5 ease-in-out;\n\n  &:hover {\n    animation-play-state: paused;\n  }\n\n  .O-test-card:hover {\n    width: 25vw;\n    height: 35vw;\n\n    .Q-cardBackground {\n      width: 100%;\n      height: 20vw;\n      bottom: 0;\n      margin: auto\n    }\n\n    .A-main-testTitle {\n      position: absolute;\n      font-size: 2.2vw;\n      font-weight: 600;\n      color: ", ";\n      top: 5vw;\n      left: 1.5vw;\n      pointer-events: none;\n      width: 90%;\n    }\n\n    .A-main-testTime {\n      position: absolute;\n      font-size: 1.7vw;\n      font-weight: 400;\n      color: ", ";\n      top: 2vw;\n      left: 1.5vw;\n      opacity: 0.6;\n      pointer-events: none;\n    }\n\n    .Q-clock {\n      width: 2vw;\n      height: 2vw;\n      position: absolute;\n      top: 1.8vw;\n      left: 13vw;\n    }\n  }\n  \n  @keyframes scroll {\n    from {\n      left: -28vw;\n    }\n\n    to {\n      left: -206.03vw;\n    }\n  }\n\n"])), _variables_jsx__WEBPACK_IMPORTED_MODULE_0__/* .Pallete */ .K["black"], _variables_jsx__WEBPACK_IMPORTED_MODULE_0__/* .Pallete */ .K["black"]);
function generateTests(a) {
  var generated = [];
  for (var i = 0; i < a.length; i++) {
    var b = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_organisms_O_test_card_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      className: "O-test-card",
      src: a[i]['img'][0]["url"],
      title: a[i]['title'],
      time: a[i]['time']
    });
    generated.push(b);
  }
  for (var _i = 0; _i < a.length; _i++) {
    var _b = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_organisms_O_test_card_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
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
              return _tests_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(StyledCollection, {
    className: props["className"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, data1.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, item);
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestsCards);

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

/***/ }),

/***/ 6292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7581);
/* harmony import */ var _variables_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3382);
/* harmony import */ var _quarks_Q_cardBackground_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2297);
/* harmony import */ var _atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2911);
/* harmony import */ var _quarks_Q_icon_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5236);
/* harmony import */ var _images_clock_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6818);
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }









var StyledBlock = styled_components__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 20vw;\n  height: 30vw;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 2.5vw;\n  position: relative;\n  overflow: hidden;\n  background-color: white;\n  transition: all 0.3s ease-in-out;\n\n  .Q-cardBackground {\n    width: 100%;\n    height: 16vw;\n    bottom: 0;\n    margin: auto;\n    transition: all 0.3s ease-in-out;\n    border-radius: 2.5vw;\n    pointer-events: none;\n  }\n\n  .A-main-testTitle {\n    position: absolute;\n    font-size: 1.8vw;\n    font-weight: 600;\n    color: ", ";\n    top: 5vw;\n    left: 1.5vw;\n    pointer-events: none;\n    width: 90%;\n    transition: all 0.3s ease-in-out;\n  }\n\n  .A-main-testTime {\n    position: absolute;\n    font-size: 1.3vw;\n    font-weight: 400;\n    color: ", ";\n    top: 2vw;\n    left: 1.5vw;\n    opacity: 0.6;\n    pointer-events: none;\n    transition: all 0.3s ease-in-out;\n  }\n\n   .Q-clock {\n    width: 1.5vw;\n    height: 1.5vw;\n    position: absolute;\n    top: 1.8vw;\n    left: 10vw;\n    transition: all 0.3s ease-in-out;\n    pointer-events: none;\n  }\n\n  .darker {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    background-color: ", ";\n    transition: all 0.3s ease-in-out\n\n  }\n\n\n"])), _variables_jsx__WEBPACK_IMPORTED_MODULE_1__/* .Pallete */ .K["white"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__/* .Pallete */ .K["black"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__/* .Pallete */ .K["black"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__/* .Pallete */ .K["black"]);
function TestCard(props) {
  var id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  id = id.slice(1, id.length - 1);
  if (props["className"] == "O-test-card") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledBlock, {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_quarks_Q_icon_jsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      className: "Q-clock",
      src: _images_clock_svg__WEBPACK_IMPORTED_MODULE_5__
    }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      className: "A-main-testTime",
      textContent: "".concat(props["time"], " \u043C\u0438\u043D")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      className: "A-main-testTitle",
      textContent: props["title"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_quarks_Q_cardBackground_jsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      className: "Q-cardBackground",
      src: props["src"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "darker"
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledBlock, {
      id: id,
      className: props["className"] + " " + props["type"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_quarks_Q_icon_jsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      className: "Q-clock",
      src: _images_clock_svg__WEBPACK_IMPORTED_MODULE_5__
    }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      className: "A-main-testTime",
      textContent: "".concat(props["time"], " \u043C\u0438\u043D")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      className: "A-main-testTitle",
      textContent: props["title"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_quarks_Q_cardBackground_jsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      className: "Q-cardBackground",
      src: props["src"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "darker"
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestCard);

/***/ })

}]);
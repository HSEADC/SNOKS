"use strict";
(self["webpackChunkstatic_site_08_24"] = self["webpackChunkstatic_site_08_24"] || []).push([["src_components_collections_C-generated-articles_jsx"],{

/***/ "./src/components/articles.js":
/*!************************************!*\
  !*** ./src/components/articles.js ***!
  \************************************/
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
    base('articles').select({
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
          tag: record.fields['tag'],
          bannerImg: record.fields['bannerImg'],
          bannerTitle: record.fields['bannerTitle']
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

/***/ "./src/components/collections/C-generated-articles.jsx":
/*!*************************************************************!*\
  !*** ./src/components/collections/C-generated-articles.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables.jsx */ "./src/components/variables.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-NL6KNZEE.mjs");
/* harmony import */ var _atoms_A_blueBtn_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/A-blueBtn.jsx */ "./src/components/atoms/A-blueBtn.jsx");
/* harmony import */ var _articles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../articles.js */ "./src/components/articles.js");
/* harmony import */ var _atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/A-text.jsx */ "./src/components/atoms/A-text.jsx");
/* harmony import */ var _organisms_O_articles_card_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../organisms/O-articles-card.jsx */ "./src/components/organisms/O-articles-card.jsx");
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

var StyledCollection = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: start;\n  width: 100%;\n  height: fit-content;\n  align-items: center;\n  transition: all 0.3s ease-in-out;\n  margin-bottom: 7vw;\n  flex-wrap: wrap;\n\n  .C-tags {\n    width: 100%;\n    display: flex;\n    margin: 7vw 0 3vw 0;\n    flex-wrap: wrap;\n\n\n    .A-tagBtn {\n      background-color: white;\n      font-size: 1.5vw;\n      font-weight: 500;\n      padding: 1vw 3vw;\n      margin-right: 2vw;\n      opacity: 1;\n      margin-bottom: 1vw;\n    }\n\n    .tagChoosen {\n      background-color: ", ";\n      color: white;\n    }\n\n    .clear {\n      width: 4vw;\n      height: 4vw;\n      padding: 0;\n      border-radius: 100%;\n      position: relative;\n    }\n\n    .A-tagBtn:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n  }\n\n  .O-test-cardGenerated {\n    width: 21vw;\n    height: 30vw;\n    margin-bottom: 2vw;\n\n    .Q-cardBackground {\n      width: 100%;\n      height: 23vw;\n      bottom: -1vw;\n    }\n  }\n\n  .Q-bigCardBack {\n    width: 90vw;\n    height: 50vw;\n    background-color: white;\n    position: relative;\n    border-radius: 3vw;\n    padding: 3vw;\n    margin: 4vw auto;\n    \n\n    .A-description {\n      font-size: 1.8vw;\n      width: 45%;\n      margin-bottom: 3vw;\n    }\n\n    .A-title {\n      font-weight: 600;\n      font-size: 3.2vw;\n      margin-bottom: 2vw;\n    }\n\n    .A-time {\n      opacity: 0.5;\n      font-weight: 500;\n      font-size: 1.5vw;\n      margin-bottom: 20vw;\n    }\n\n    .A-btn {\n      position: absolute;\n      left: 3vw;\n      bottom: 3vw;\n      width: 43%;\n      color: ", ";\n      font-size: 1.5vw;\n    }\n\n    .big {\n      position: absolute;\n      margin-bottom: 0;\n      right: 0vw;\n      bottom: 0vw;\n      height: 50vw;\n      width: 43vw;\n\n      .A-tagArticle {\n        font-size: 2.5vw;\n        padding: 1vw 2vw;\n        right: 2vw;\n        left: inherit;\n      }\n\n      svg {\n        display: none;\n      }\n\n      .Q-cardBackground {\n        bottom: 0;\n        width: 100%;\n        height: 50vw;\n      }\n\n      .A-main-testTitle {\n        top: 3vw;\n        font-size: 5vw;\n      }\n\n    }\n\n    &.leftImg {\n      .A-title {\n        margin-left: 46vw;\n      } \n\n      .A-description {\n        margin-left: 46vw;\n      } \n\n      .A-time {\n        margin-left: 46vw;\n      }\n\n      .O-test-cardGenerated {\n        left: 66vw;\n      }\n\n      .A-tagArticle {\n        font-size: 2.5vw;\n        padding: 1vw 2vw;\n        left: 2vw;\n        right: initial;\n      }\n\n      .big {\n        left: 0vw;\n      }\n    }\n\n  } \n\n  .notChoosenArticle {\n    display: none;\n  }\n\n  .articleChoosen {\n    display: relative;\n  }\n\n  .tagger {\n    margin-left: 1.15vw;\n  }\n"])), _variables_jsx__WEBPACK_IMPORTED_MODULE_0__.Pallete["blue"], _variables_jsx__WEBPACK_IMPORTED_MODULE_0__.Pallete["blue"], _variables_jsx__WEBPACK_IMPORTED_MODULE_0__.Pallete["white"], _variables_jsx__WEBPACK_IMPORTED_MODULE_0__.Pallete["white"]);
function generative(e) {
  var allArticles = [];
  var taggers = [];
  if (e.target.className.indexOf("A-tagBtnCircle") != -1) {} else {}
  if (e.target.className.indexOf("tagChoosen") == -1) {
    e.target.classList.add("tagChoosen");
  } else {
    e.target.classList.remove("tagChoosen");
  }
  document.querySelectorAll('.tagger').forEach(function (item) {
    //console.log(item.querySelector(".A-tagArticle"))
    allArticles.push(item);
  });
  document.querySelectorAll('.Q-bigCardBack').forEach(function (item) {
    console.log(item);
    //console.log(item.querySelector(".A-tagArticle"))
    allArticles.push(item);
  });
  document.querySelectorAll('.tagChoosen').forEach(function (item) {
    taggers.push(item.textContent);
  });
  if (taggers.length != 0) {
    for (var i = 0; i < allArticles.length; i++) {
      if (allArticles[i].className.indexOf('notChoosenArticle') == -1) {
        if (allArticles[i].className.indexOf('articleChoosen') != -1) {
          allArticles[i].classList.add('notChoosenArticle');
          allArticles[i].classList.remove('articleChoosen');
        } else {
          allArticles[i].classList.add('notChoosenArticle');
        }
      } else {
        if (allArticles[i].className.indexOf('articleChoosen') != -1) {
          allArticles[i].classList.add('notChoosenArticle');
          allArticles[i].classList.remove('articleChoosen');
        } else {
          allArticles[i].classList.add('notChoosenArticle');
        }
      }
    }
    var tag = e.target.textContent;
    console.log(taggers);
    for (var j = 0; j < allArticles.length; j++) {
      if (allArticles[j].className.indexOf('Q-bigCardBack') == -1) {
        if (taggers.includes(allArticles[j].children[0].children[3].textContent)) {
          allArticles[j].classList.remove("notChoosenArticle");
          allArticles[j].classList.add("articleChoosen");
        }
      } else {
        if (taggers.includes(allArticles[j].children[3].children[3].textContent)) {
          allArticles[j].classList.remove("notChoosenArticle");
          allArticles[j].classList.add("articleChoosen");
        }
      }
    }
  } else {
    for (var _i = 0; _i < allArticles.length; _i++) {
      if (allArticles[_i].className.indexOf('articleChoosen') != -1) {
        allArticles[_i].classList.remove('articleChoosen');
      } else if (allArticles[_i].className.indexOf('notChoosenArticle') != -1) {
        allArticles[_i].classList.remove('notChoosenArticle');
      }
    }
  }

  //console.log(allArticles)

  //Q-bigCardBack div
  //if (e.target.className.indexOf("choosenTag") == -1) {

  // }
  //let tag = e.target.textContent
  //document.querySelectorAll('.O-article-cardGenerated').forEach((item) => {
  // console.log(item.querySelector(".A-tagArticle"))
  //})
}
function generateTags(a) {
  var tags = [];
  var tagsTexsts = [];
  for (var i = 0; i < a.length; i++) {
    if (tagsTexsts.indexOf(a[i]["tag"]) == -1) {
      tagsTexsts.push(a[i]["tag"]);
      tags.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_blueBtn_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_blueBtn_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "A-tagBtn clear",
    textContent: ""
  })));
  return collection;
}
function generateArticles(a) {
  var generated = [];
  generated.push(generateTags(a));
  for (var i = 1; i < a.length + 1; i++) {
    for (var m = 0; m < a.length; m++) {
      if (a[m]['num'] == i) {
        if (a[m]['type'].indexOf("big") != -1) {
          var b = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
            className: "Q-bigCardBack ".concat(a[m]['type'])
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "A-title",
            textContent: a[m]['title']
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "A-description",
            textContent: a[m]['description']
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "A-time",
            textContent: "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0447\u0442\u0435\u043D\u0438\u044F: ".concat(a[m]['time'], " \u043C\u0438\u043D")
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_organisms_O_articles_card_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "O-article-cardGenerated",
            tag: a[m]['tag'],
            src: a[m]['img'][0]["url"],
            type: a[m]["type"],
            title: "",
            time: a[m]['time']
          }));
          generated.push(b);
        } else {
          var _b = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_organisms_O_articles_card_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "O-article-cardGenerated",
            src: a[m]['img'][0]["url"],
            type: a[m]["type"],
            id: a[m]["num"],
            title: a[m]['title'],
            tag: a[m]['tag']
          });
          generated.push(_b);
        }
      }
    }
  }
  return generated;
}
function ArticlesCardPaged(props) {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
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
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    dataToStore = _useState8[0],
    setDataToStore = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var data = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var instance, variableValue, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              setIsLoading(true);
              _context.n = 1;
              return _articles_js__WEBPACK_IMPORTED_MODULE_3__["default"];
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
              setData(generateArticles(variableValue));
              setIsLoading(false);
              setDataToStore(variableValue);
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
  var handleLinkClick = function handleLinkClick(event) {
    var a;
    var b;
    if (event.target.id < 11) {
      for (var i = 1; i < dataToStore.length + 1; i++) {
        for (var m = 0; m < dataToStore.length; m++) {
          if (dataToStore[m]['num'] == i) {
            if (dataToStore[m]['num'] == event.target.id) {
              console.log(dataToStore[m]["num"], i);
              a = m;
              b = i;
            }
          }
        }
      }
      console.log(dataToStore[b], b, a);
      try {
        localStorage.setItem('myData', JSON.stringify([dataToStore[a], a]));
        navigate('/article');
      } catch (error) {
        console.error("Error saving data to localStorage:", error);
        // Consider displaying an error message to the user
      }
    } else {
      try {
        navigate('/404');
      } catch (error) {
        console.error("Error saving data to localStorage:", error);
        // Consider displaying an error message to the user
      }
    }
  };
  var data1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return data;
  });
  console.log(data);
  var dataAll = [];
  for (var i = 0; i <= data1.length - 1; i++) {
    console.log(data1[i]['props']["className"]);
    if (data1[i]['props']["className"] != 'C-tags' && data1[i]['props']["className"].indexOf('big') == -1) {
      var a = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
        className: "tagger",
        to: "/article",
        onClick: handleLinkClick
      }, data1[i]);
      dataAll.push(a);
    } else {
      if (data1[i]['props']["className"].indexOf('big') != -1) {
        console.log(data1[i]["props"]["children"]);
        var b = [];
        for (var m = 0; m < data1[i]["props"]["children"].length; m++) {
          b.push(data1[i]["props"]["children"][m]);
        }
        b.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
          to: "/article",
          onClick: handleLinkClick
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_atoms_A_blueBtn_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "A-btn",
          id: i,
          textContent: "\u0427\u0438\u0442\u0430\u0442\u044C"
        })));
        console.log(b);
        dataAll.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
          className: "Q-bigCardBack ".concat(data1[i]['type'])
        }, b));
      } else {
        if (data1[i]['props']["className"] == 'C-tags') {
          console.log(data1[i]["props"]["children"]["props"]["children"][0], 222222222222222);
          var vv = [];
          for (var cc = 0; cc < data1[i]["props"]["children"]["props"]["children"][0].length; cc++) {
            console.log(data1[i]["props"]["children"]["props"]["children"][0][cc], 555);
            vv.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
              className: "A-tag",
              onClick: function onClick(e) {
                return generative(e);
              }
            }, data1[i]["props"]["children"]["props"]["children"][0][cc]));
          }
          //  console.log(444444444444)
          // }
          dataAll.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
            className: "C-tags"
          }, vv));
        } else {
          var _a = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, data1[i]);
          dataAll.push(_a);
        }
      }
    }
  }
  console.log(dataAll);
  //<BlueButton className="A-btn" textContent="Читать"></BlueButton>
  // <Link to="/article" onClick={handleLinkClick}>{item}</Link>
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledCollection, {
    className: props["className"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, dataAll.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, item);
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticlesCardPaged);

/***/ }),

/***/ "./src/components/organisms/O-articles-card.jsx":
/*!******************************************************!*\
  !*** ./src/components/organisms/O-articles-card.jsx ***!
  \******************************************************/
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








var StyledBlock = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 21.3vw;\n  height: 26vw;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 2.5vw;\n  position: relative;\n  overflow: hidden;\n  background-color: white;\n  margin-bottom: 2vw;\n\n  .A-tagArticle {\n    position: absolute;\n    background-color: white;\n    border-radius: 3vw;\n    padding: 0.5vw 1vw;\n    left: 2vw;\n    top: 2vw;\n  }\n\n  .Q-cardBackground {\n    width: 100%;\n    height: 26vw;\n    bottom: 0;\n    margin: auto;\n    transition: all 0.3s ease-in-out;\n    border-radius: 2.5vw;\n    pointer-events: none;\n  }\n\n  .A-main-articleTitle {\n    position: absolute;\n    font-size: 1.5vw;\n    font-weight: 600;\n    color: ", ";\n    top: 19.5vw;\n    left: 2vw;\n    pointer-events: none;\n    width: 95%;\n    transition: all 0.3s ease-in-out;\n  }\n  \n  svg {\n    position: absolute;\n    bottom: -14vw;\n    left: -8vw;\n    pointer-events: none;\n  }\n\n  .darker {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    background-color: ", ";\n    transition: all 0.3s ease-in-out\n  }\n\n\n"])), _variables_jsx__WEBPACK_IMPORTED_MODULE_1__.Pallete["white"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__.Pallete["black"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__.Pallete["black"]);
function ArticleCard(props) {
  var id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  id = id.slice(1, id.length - 1);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledBlock, {
    id: props["id"],
    className: props["className"] + " " + props["type"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_quarks_Q_cardBackground_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "Q-cardBackground",
    src: props["src"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "505",
    height: "295",
    viewBox: "0 0 505 295",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M365.242 279.674C448.281 259.903 701.739 -7.6752 211.926 0.672C-102.529 16.4125 3.64258 186.213 91.9067 246.557C140.345 279.674 214.857 315.48 365.242 279.674Z",
    fill: "white"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "A-main-articleTitle",
    textContent: props["title"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_atoms_A_text_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "A-tagArticle",
    textContent: props['tag']
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleCard);

/***/ }),

/***/ "./src/components/images/cross.svg":
/*!*****************************************!*\
  !*** ./src/components/images/cross.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2e368fd9106a1d6375ea.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfY29sbGVjdGlvbnNfQy1nZW5lcmF0ZWQtYXJ0aWNsZXNfanN4LmQ0NTFkODI3OTQ0MjRjNmY4NDkyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFHL0IsaUVBQWUsSUFBSUMsT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBSztFQUN0Q0MsVUFBVSxDQUFDLFlBQUk7SUFDZDtJQUNDO0lBQ0E7SUFDRDtJQUNBO0lBQUEsSUFDTUMsVUFBVTtNQUNmLFNBQUFBLFdBQUEsRUFBYztRQUFBLElBQUFDLEtBQUE7UUFBQUMsZUFBQSxPQUFBRixVQUFBO1FBQ1pHLGNBQWMsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFDQyxJQUFJLEVBQUs7VUFDOUJKLEtBQUksQ0FBQ0ssT0FBTyxHQUFHRCxJQUFJO1VBQ25CRSxNQUFNLENBQUNOLEtBQUksQ0FBQ0ssT0FBTyxDQUFDO1VBQ3BCO1FBQ0YsQ0FBQyxDQUFDO01BRUo7TUFBQyxPQUFBRSxZQUFBLENBQUFSLFVBQUE7UUFBQVMsR0FBQTtRQUFBQyxLQUFBLEVBRUQsU0FBQUMsV0FBV0EsQ0FBQSxFQUFHO1VBQ1osT0FBTyxJQUFJLENBQUNMLE9BQU87UUFDdkI7TUFBQztJQUFBO0lBRUNSLE9BQU8sQ0FBQ0UsVUFBVSxDQUFDO0VBQ3JCLENBQUMsRUFBRSxJQUFJLENBQUM7QUFDVixDQUFDLENBQUMsRUFBQzs7QUFFSDs7QUFHQSxTQUFTRyxjQUFjQSxDQUFBLEVBQUc7RUFDeEIsT0FBTyxJQUFJTixPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFYyxNQUFNLEVBQUs7SUFDdEMsSUFBTU4sT0FBTyxHQUFHLEVBQUU7SUFFbEIsSUFBTU8sS0FBSyxHQUFHLG9GQUFvRjtJQUVsR2pCLHlEQUFrQixDQUFDO01BQ2pCbUIsV0FBVyxFQUFFLDBCQUEwQjtNQUN2Q0MsTUFBTSxFQUFFSDtJQUNWLENBQUMsQ0FBQztJ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U0FBUyxFQUFDLGNBQWM7SUFBQ2lHLFdBQVcsRUFBRW5HLEtBQUssQ0FBQyxLQUFLO0VBQUUsQ0FBTyxDQUNyRCxDQUFDO0FBR3BCO0FBR0EsaUVBQWVtRixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy5qcyIsIndlYnBhY2s6Ly9zdGF0aWMtc2l0ZS0wOC0yNC8uL3NyYy9jb21wb25lbnRzL2F0b21zL0EtYmx1ZUJ0bi5qc3giLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvLi9zcmMvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9DLWdlbmVyYXRlZC1hcnRpY2xlcy5qc3giLCJ3ZWJwYWNrOi8vc3RhdGljLXNpdGUtMDgtMjQvLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvTy1hcnRpY2xlcy1jYXJkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWlydGFibGUgZnJvbSAnYWlydGFibGUnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgIC8vIGNsYXNzIEFzeW5jQ2xhc3Mge1xyXG4gICAgLy8gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgLy8gICB9XHJcbiAgIC8vIH1cclxuICAgY2xhc3MgQXN5bmNDbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgZ2V0UG9zdFRlYXNlcnMoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZGF0YVxyXG4gICAgICAgIHVwZGF0ZSh0aGlzLmNvbnRlbnQpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFZhcmlhYmxlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuICAgfVxyXG4gICAgcmVzb2x2ZShBc3luY0NsYXNzKTtcclxuICB9LCAxMDAwKTtcclxufSk7XHJcblxyXG4vLyAgIHBhdHgzZGJSMkZWVnFuOVJBLjI1MTIxMjQwZTYxZDQ1ZmYyZWQ1M2FkNThmN2I1YmE1YzIxZjQ0MzJhOTM4YmQ3NzU1YzkyNTFjZTM1ODQwZmJcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRQb3N0VGVhc2VycygpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IFtdXHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSAncGF0eDNkYlIyRlZWcW45UkEuMjUxMjEyNDBlNjFkNDVmZjJlZDUzYWQ1OGY3YjViYTVjMjFmNDQzMmE5MzhiZDc3NTVjOTI1MWNlMzU4NDBmYidcclxuXHJcbiAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xyXG4gICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXHJcbiAgICAgIGFwaUtleTogdG9rZW5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIGxldCBiYXNlID0gQWlydGFibGUuYmFzZSgnYXBwekRMY1hySkloeTJRem4nKVxyXG5cclxuICBcclxuXHJcbiAgICBiYXNlKCdhcnRpY2xlcycpXHJcbiAgICAgIC5zZWxlY3QoeyBtYXhSZWNvcmRzOiAxMDAgfSlcclxuICAgICAgLmZpcnN0UGFnZSgpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICByZXN1bHQuZm9yRWFjaCgocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICBjb250ZW50LnB1c2goe1xyXG4gICAgICAgICAgICBudW06IHJlY29yZC5maWVsZHNbJ251bSddLFxyXG4gICAgICAgICAgICB0aXRsZTogcmVjb3JkLmZpZWxkc1sndGl0bGUnXSxcclxuICAgICAgICAgICAgdGltZTogcmVjb3JkLmZpZWxkc1sndGltZSddLFxyXG4gICAgICAgICAgICB0eXBlOiByZWNvcmQuZmllbGRzWyd0eXBlJ10sXHJcbiAgICAgICAgICAgIGltZzogcmVjb3JkLmZpZWxkc1snaW1nJ10sXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZWNvcmQuZmllbGRzWydkZXNjcmlwdGlvbiddLFxyXG4gICAgICAgICAgICB0YWc6IHJlY29yZC5maWVsZHNbJ3RhZyddLFxyXG4gICAgICAgICAgICBiYW5uZXJJbWc6IHJlY29yZC5maWVsZHNbJ2Jhbm5lckltZyddLFxyXG4gICAgICAgICAgICBiYW5uZXJUaXRsZTogcmVjb3JkLmZpZWxkc1snYmFubmVyVGl0bGUnXSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KVxyXG5cclxuICAgICAgICByZXNvbHZlKGNvbnRlbnQpXHJcbiAgICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlKGNvbnRlbnQpIHtcclxuICBjb25zdCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKS5wb3AoKS5zcGxpdCgnLicpWzBdXHJcbiAgY29uc29sZS5sb2coaHJlZilcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBjb250ZW50LmZvckVhY2goKHN0cm9rZSkgPT4ge1xyXG4gICAgICBpZiAoaHJlZiA9PT0gc3Ryb2tlLnBhZ2UpIHtcclxuICAgICAgICBjcmVhdGVDb250ZW50KHN0cm9rZSlcclxuICAgICAgfVxyXG4gICAgfSwgMjAwKVxyXG4gIH0pXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VEZWZlcnJlZFZhbHVlLCB1c2VFZmZlY3QsIFN1c3BlbnNlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1BhbGxldGV9IGZyb20gJy4uL3ZhcmlhYmxlcy5qc3gnO1xyXG5cclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBjb2xvcjogJHtQYWxsZXRlW1wiYmxhY2tcIl19O1xyXG4gIHBhZGRpbmc6IDF2dztcclxuICBib3JkZXItcmFkaXVzOiAzdnc7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7UGFsbGV0ZVtcImJsdWVcIl19O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICR7UGFsbGV0ZVtcImZvbnRQXCJdfTtcclxuXHJcblxyXG4gICY6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcblxyXG4gICYucHJldiB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEJsdWVCdXR0b24ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQnV0dG9uIGNsYXNzTmFtZT17cHJvcHNbXCJjbGFzc05hbWVcIl19IGlkPXtwcm9wc1snaWQnXX0+XHJcbiAgICAgIHtwcm9wc1tcInRleHRDb250ZW50XCJdfVxyXG4gICAgPC9TdHlsZWRCdXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgQmx1ZUJ1dHRvbjsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQYWxsZXRlfSBmcm9tICcuLi92YXJpYWJsZXMuanN4JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUlkLCB1c2VTdGF0ZSwgdXNlRGVmZXJyZWRWYWx1ZSwgdXNlRWZmZWN0LCBTdXNwZW5zZSwgdXNlTWVtbywgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUsIExpbmssICBSb3V0ZXMsIHVzZU5hdmlnYXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcblxyXG5pbXBvcnQgQmx1ZUJ1dHRvbiBmcm9tICcuLi9hdG9tcy9BLWJsdWVCdG4uanN4JztcclxuaW1wb3J0IEFzeW5jQ2xhc3MgZnJvbSBcIi4uL2FydGljbGVzLmpzXCI7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4uL2F0b21zL0EtdGV4dC5qc3gnO1xyXG5pbXBvcnQgQXJ0aWNsZUNhcmQgZnJvbSAnLi4vb3JnYW5pc21zL08tYXJ0aWNsZXMtY2FyZC5qc3gnO1xyXG5pbXBvcnQgSWNvbkltZyBmcm9tICcuLi9xdWFya3MvUS1pY29uLmpzeCdcclxuXHJcbmltcG9ydCBjcm9zcyBmcm9tICcuLi9pbWFnZXMvY3Jvc3Muc3ZnJ1xyXG5cclxuLy9pbXBvcnQgY29udGVudCBmcm9tICcuLi9kYXRhLmpzJ1xyXG4vL2ltcG9ydCBBc3luY0NsYXNzIGZyb20gXCIuLi9kYXRhLmpzXCI7XHJcbi8vaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vbW9sZWN1bGVzL00tbG9hZGluZy1ibG9jay5qc3gnXHJcblxyXG5cclxuY29uc3QgU3R5bGVkQ29sbGVjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICBtYXJnaW4tYm90dG9tOiA3dnc7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAuQy10YWdzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogN3Z3IDAgM3Z3IDA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG5cclxuICAgIC5BLXRhZ0J0biB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBwYWRkaW5nOiAxdncgM3Z3O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDJ2dztcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC50YWdDaG9vc2VuIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtQYWxsZXRlW1wiYmx1ZVwiXX07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2xlYXIge1xyXG4gICAgICB3aWR0aDogNHZ3O1xyXG4gICAgICBoZWlnaHQ6IDR2dztcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5BLXRhZ0J0bjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7UGFsbGV0ZVtcImJsdWVcIl19O1xyXG4gICAgICBjb2xvcjogJHtQYWxsZXRlW1wid2hpdGVcIl19O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLk8tdGVzdC1jYXJkR2VuZXJhdGVkIHtcclxuICAgIHdpZHRoOiAyMXZ3O1xyXG4gICAgaGVpZ2h0OiAzMHZ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZ3O1xyXG5cclxuICAgIC5RLWNhcmRCYWNrZ3JvdW5kIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMjN2dztcclxuICAgICAgYm90dG9tOiAtMXZ3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLlEtYmlnQ2FyZEJhY2sge1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBoZWlnaHQ6IDUwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDN2dztcclxuICAgIHBhZGRpbmc6IDN2dztcclxuICAgIG1hcmdpbjogNHZ3IGF1dG87XHJcbiAgICBcclxuXHJcbiAgICAuQS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44dnc7XHJcbiAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDN2dztcclxuICAgIH1cclxuXHJcbiAgICAuQS10aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMy4ydnc7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJ2dztcclxuICAgIH1cclxuXHJcbiAgICAuQS10aW1lIHtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5BLWJ0biB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogM3Z3O1xyXG4gICAgICBib3R0b206IDN2dztcclxuICAgICAgd2lkdGg6IDQzJTtcclxuICAgICAgY29sb3I6ICR7UGFsbGV0ZVtcIndoaXRlXCJdfTtcclxuICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIH1cclxuXHJcbiAgICAuYmlnIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMHZ3O1xyXG4gICAgICBib3R0b206IDB2dztcclxuICAgICAgaGVpZ2h0OiA1MHZ3O1xyXG4gICAgICB3aWR0aDogNDN2dztcclxuXHJcbiAgICAgIC5BLXRhZ0FydGljbGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICAgICAgcGFkZGluZzogMXZ3IDJ2dztcclxuICAgICAgICByaWdodDogMnZ3O1xyXG4gICAgICAgIGxlZnQ6IGluaGVyaXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLlEtY2FyZEJhY2tncm91bmQge1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwdnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5BLW1haW4tdGVzdFRpdGxlIHtcclxuICAgICAgICB0b3A6IDN2dztcclxuICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAmLmxlZnRJbWcge1xyXG4gICAgICAuQS10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ2dnc7XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICAuQS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ2dnc7XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICAuQS10aW1lIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDZ2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgLk8tdGVzdC1jYXJkR2VuZXJhdGVkIHtcclxuICAgICAgICBsZWZ0OiA2NnZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuQS10YWdBcnRpY2xlIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gICAgICAgIHBhZGRpbmc6IDF2dyAydnc7XHJcbiAgICAgICAgbGVmdDogMnZ3O1xyXG4gICAgICAgIHJpZ2h0OiBpbml0aWFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmlnIHtcclxuICAgICAgICBsZWZ0OiAwdnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfSBcclxuXHJcbiAgLm5vdENob29zZW5BcnRpY2xlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuYXJ0aWNsZUNob29zZW4ge1xyXG4gICAgZGlzcGxheTogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAudGFnZ2VyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjE1dnc7XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGl2ZShlKSB7XHJcbiAgbGV0IGFsbEFydGljbGVzID0gW11cclxuICBsZXQgdGFnZ2VycyA9IFtdXHJcblxyXG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUuaW5kZXhPZihcIkEtdGFnQnRuQ2lyY2xlXCIpICE9IC0xKSB7XHJcbiAgICBcclxuICB9IGVsc2Uge31cclxuXHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKFwidGFnQ2hvb3NlblwiKSA9PSAtMSkge1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInRhZ0Nob29zZW5cIilcclxuICB9IGVsc2Uge1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInRhZ0Nob29zZW5cIilcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWdnZXInKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5BLXRhZ0FydGljbGVcIikpXHJcbiAgICAgIGFsbEFydGljbGVzLnB1c2goaXRlbSlcclxuXHJcbiB9KVxyXG5cclxuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5RLWJpZ0NhcmRCYWNrJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICAvL2NvbnNvbGUubG9nKGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5BLXRhZ0FydGljbGVcIikpXHJcbiAgICAgIGFsbEFydGljbGVzLnB1c2goaXRlbSlcclxuXHJcbiB9KVxyXG5cclxuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWdDaG9vc2VuJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gIHRhZ2dlcnMucHVzaChpdGVtLnRleHRDb250ZW50KVxyXG59KVxyXG5cclxuaWYgKHRhZ2dlcnMubGVuZ3RoICE9IDApIHtcclxuXHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGFsbEFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoYWxsQXJ0aWNsZXNbaV0uY2xhc3NOYW1lLmluZGV4T2YoJ25vdENob29zZW5BcnRpY2xlJykgPT0gLTEpIHtcclxuICAgICAgaWYgKGFsbEFydGljbGVzW2ldLmNsYXNzTmFtZS5pbmRleE9mKCdhcnRpY2xlQ2hvb3NlbicpICE9IC0xKSB7XHJcbiAgICAgICAgICAgYWxsQXJ0aWNsZXNbaV0uY2xhc3NMaXN0LmFkZCgnbm90Q2hvb3NlbkFydGljbGUnKVxyXG4gICAgICAgICAgIGFsbEFydGljbGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FydGljbGVDaG9vc2VuJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgYWxsQXJ0aWNsZXNbaV0uY2xhc3NMaXN0LmFkZCgnbm90Q2hvb3NlbkFydGljbGUnKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgIGlmIChhbGxBcnRpY2xlc1tpXS5jbGFzc05hbWUuaW5kZXhPZignYXJ0aWNsZUNob29zZW4nKSAhPSAtMSkge1xyXG4gICAgICAgICAgYWxsQXJ0aWNsZXNbaV0uY2xhc3NMaXN0LmFkZCgnbm90Q2hvb3NlbkFydGljbGUnKVxyXG4gICAgICAgICAgYWxsQXJ0aWNsZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYXJ0aWNsZUNob29zZW4nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhbGxBcnRpY2xlc1tpXS5jbGFzc0xpc3QuYWRkKCdub3RDaG9vc2VuQXJ0aWNsZScpXHJcbiAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgdGFnID0gZS50YXJnZXQudGV4dENvbnRlbnRcclxuICAgIGNvbnNvbGUubG9nKHRhZ2dlcnMpXHJcbiAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsQXJ0aWNsZXMubGVuZ3RoOyBqKyspIHtcclxuICAgIGlmIChhbGxBcnRpY2xlc1tqXS5jbGFzc05hbWUuaW5kZXhPZignUS1iaWdDYXJkQmFjaycpID09IC0xKSB7XHJcbiAgICAgIGlmICh0YWdnZXJzLmluY2x1ZGVzKGFsbEFydGljbGVzW2pdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzNdLnRleHRDb250ZW50KSkge1xyXG4gICAgICAgIGFsbEFydGljbGVzW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJub3RDaG9vc2VuQXJ0aWNsZVwiKVxyXG4gICAgICAgIGFsbEFydGljbGVzW2pdLmNsYXNzTGlzdC5hZGQoXCJhcnRpY2xlQ2hvb3NlblwiKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGFnZ2Vycy5pbmNsdWRlcyhhbGxBcnRpY2xlc1tqXS5jaGlsZHJlblszXS5jaGlsZHJlblszXS50ZXh0Q29udGVudCkpIHtcclxuICAgICAgICBhbGxBcnRpY2xlc1tqXS5jbGFzc0xpc3QucmVtb3ZlKFwibm90Q2hvb3NlbkFydGljbGVcIilcclxuICAgICAgICBhbGxBcnRpY2xlc1tqXS5jbGFzc0xpc3QuYWRkKFwiYXJ0aWNsZUNob29zZW5cIilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxufSBlbHNlIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbEFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiBcclxuICAgICAgaWYgKGFsbEFydGljbGVzW2ldLmNsYXNzTmFtZS5pbmRleE9mKCdhcnRpY2xlQ2hvb3NlbicpICE9IC0xKSB7XHJcbiAgICAgICAgICAgYWxsQXJ0aWNsZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYXJ0aWNsZUNob29zZW4nKVxyXG4gICAgICB9IGVsc2UgIGlmIChhbGxBcnRpY2xlc1tpXS5jbGFzc05hbWUuaW5kZXhPZignbm90Q2hvb3NlbkFydGljbGUnKSAhPSAtMSkge1xyXG4gICAgICAgICBhbGxBcnRpY2xlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdub3RDaG9vc2VuQXJ0aWNsZScpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxufVxyXG5cclxuICAvL2NvbnNvbGUubG9nKGFsbEFydGljbGVzKVxyXG5cclxuXHJcbi8vUS1iaWdDYXJkQmFjayBkaXZcclxuICAvL2lmIChlLnRhcmdldC5jbGFzc05hbWUuaW5kZXhPZihcImNob29zZW5UYWdcIikgPT0gLTEpIHtcclxuXHJcbiAvLyB9XHJcbiAgLy9sZXQgdGFnID0gZS50YXJnZXQudGV4dENvbnRlbnRcclxuICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5PLWFydGljbGUtY2FyZEdlbmVyYXRlZCcpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgLy8gY29uc29sZS5sb2coaXRlbS5xdWVyeVNlbGVjdG9yKFwiLkEtdGFnQXJ0aWNsZVwiKSlcclxuICAvL30pXHJcbiAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFncyhhKSB7XHJcbiAgbGV0IHRhZ3MgPSBbXVxyXG4gIGxldCB0YWdzVGV4c3RzID0gW11cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICh0YWdzVGV4c3RzLmluZGV4T2YoYVtpXVtcInRhZ1wiXSkgPT0gLTEpIHtcclxuICAgICAgdGFnc1RleHN0cy5wdXNoKGFbaV1bXCJ0YWdcIl0pXHJcbiAgICAgIHRhZ3MucHVzaCg8Qmx1ZUJ1dHRvbiBjbGFzc05hbWU9XCJBLXRhZ0J0blwiIHRleHRDb250ZW50PXthW2ldW1widGFnXCJdfT48L0JsdWVCdXR0b24+KVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zb2xlLmxvZyh0YWdzKVxyXG5cclxuICBcclxuICBsZXQgY29sbGVjdGlvbiA9ICggPGRpdiBjbGFzc05hbWU9XCJDLXRhZ3NcIj5cclxuICAgIDw+e3RhZ3MubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPD57aXRlbX08Lz5cclxuICAgICkpfVxyXG5cclxuICAgICA8Qmx1ZUJ1dHRvbiBjbGFzc05hbWU9XCJBLXRhZ0J0biBjbGVhclwiIHRleHRDb250ZW50PVwiXCI+PC9CbHVlQnV0dG9uPlxyXG4gICAgPC8+XHJcblxyXG4gIDwvZGl2PilcclxuXHJcbiAgcmV0dXJuIGNvbGxlY3Rpb25cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVBcnRpY2xlcyhhKSAge1xyXG4gIGxldCBnZW5lcmF0ZWQgPSBbXTtcclxuXHJcbiAgZ2VuZXJhdGVkLnB1c2goZ2VuZXJhdGVUYWdzKGEpKVxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYS5sZW5ndGgrMTsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBtID0gMDsgbSA8IGEubGVuZ3RoOyBtKyspIHtcclxuICAgICAgaWYgKGFbbV1bJ251bSddID09IGkpIHtcclxuICAgICAgICBpZiAoYVttXVsndHlwZSddLmluZGV4T2YoXCJiaWdcIikgIT0gLTEpIHtcclxuICAgICAgICAgIGxldCBiID0gKDxkaXYgY2xhc3NOYW1lPXtgUS1iaWdDYXJkQmFjayAke2FbbV1bJ3R5cGUnXX1gfT48VGV4dCBjbGFzc05hbWU9XCJBLXRpdGxlXCIgdGV4dENvbnRlbnQ9e2FbbV1bJ3RpdGxlJ119PjwvVGV4dD48VGV4dCBjbGFzc05hbWU9XCJBLWRlc2NyaXB0aW9uXCIgdGV4dENvbnRlbnQ9e2FbbV1bJ2Rlc2NyaXB0aW9uJ119PjwvVGV4dD48VGV4dCBjbGFzc05hbWU9J0EtdGltZScgdGV4dENvbnRlbnQ9e2DQktGA0LXQvNGPINC/0YDQvtGH0YLQtdC90LjRjzogJHthW21dWyd0aW1lJ119INC80LjQvWB9PjwvVGV4dD48QXJ0aWNsZUNhcmQgY2xhc3NOYW1lPVwiTy1hcnRpY2xlLWNhcmRHZW5lcmF0ZWRcIiB0YWc9e2FbbV1bJ3RhZyddfSBzcmM9e2FbbV1bJ2ltZyddWzBdW1widXJsXCJdfSB0eXBlPXthW21dW1widHlwZVwiXX0gdGl0bGU9JycgdGltZT17YVttXVsndGltZSddfT48L0FydGljbGVDYXJkPjwvZGl2PilcclxuICAgICAgICAgICAgZ2VuZXJhdGVkLnB1c2goYilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IGIgPSAoPEFydGljbGVDYXJkIGNsYXNzTmFtZT1cIk8tYXJ0aWNsZS1jYXJkR2VuZXJhdGVkXCIgc3JjPXthW21dWydpbWcnXVswXVtcInVybFwiXX0gdHlwZT17YVttXVtcInR5cGVcIl19IGlkPXthW21dW1wibnVtXCJdfSB0aXRsZT17YVttXVsndGl0bGUnXX0gdGFnPXthW21dWyd0YWcnXX0+PC9BcnRpY2xlQ2FyZD4pXHJcbiAgICAgICAgICAgIGdlbmVyYXRlZC5wdXNoKGIpXHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGdlbmVyYXRlZFxyXG59XHJcblxyXG5mdW5jdGlvbiBBcnRpY2xlc0NhcmRQYWdlZChwcm9wcykge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ZpcnN0LCBzZXRGaXJzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBbZGF0YVRvU3RvcmUsIHNldERhdGFUb1N0b3JlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhc3luYyAoKT0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyAoYXdhaXQgQXN5bmNDbGFzcykoKTtcclxuICAgICB3aGlsZSAoaW5zdGFuY2UuZ2V0VmFyaWFibGUoKSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMDApKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHZhcmlhYmxlVmFsdWUgPSBpbnN0YW5jZS5nZXRWYXJpYWJsZSgpO1xyXG4gICAgc2V0RGF0YShnZW5lcmF0ZUFydGljbGVzKHZhcmlhYmxlVmFsdWUpKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICBzZXREYXRhVG9TdG9yZSh2YXJpYWJsZVZhbHVlKTtcclxuICB9O1xyXG4gIGRhdGEoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBcclxuIGNvbnN0IGhhbmRsZUxpbmtDbGljayA9IChldmVudCkgPT4ge1xyXG4gIGxldCBhXHJcbiAgbGV0IGJcclxuXHJcbiAgaWYgKGV2ZW50LnRhcmdldC5pZCA8IDExKSB7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZGF0YVRvU3RvcmUubGVuZ3RoKzE7IGkrKykge1xyXG4gICAgZm9yIChsZXQgbSA9IDA7IG0gPCBkYXRhVG9TdG9yZS5sZW5ndGg7IG0rKykge1xyXG4gICAgICBpZiAoZGF0YVRvU3RvcmVbbV1bJ251bSddID09IGkpIHtcclxuICAgICAgICBpZiAoZGF0YVRvU3RvcmVbbV1bJ251bSddID09IGV2ZW50LnRhcmdldC5pZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YVRvU3RvcmVbbV1bXCJudW1cIl0sIGkpXHJcbiAgICAgICAgICBhID0gbVxyXG4gICAgICAgICAgYiA9IGlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc29sZS5sb2coZGF0YVRvU3RvcmVbYl0sYiwgYSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteURhdGEnLCBKU09OLnN0cmluZ2lmeShbZGF0YVRvU3RvcmVbYV0sIGFdKSk7XHJcbiAgICAgIG5hdmlnYXRlKCcvYXJ0aWNsZScpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNhdmluZyBkYXRhIHRvIGxvY2FsU3RvcmFnZTpcIiwgZXJyb3IpO1xyXG4gICAgICAvLyBDb25zaWRlciBkaXNwbGF5aW5nIGFuIGVycm9yIG1lc3NhZ2UgdG8gdGhlIHVzZXJcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgIHRyeSB7XHJcbiAgICAgIG5hdmlnYXRlKCcvNDA0Jyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2F2aW5nIGRhdGEgdG8gbG9jYWxTdG9yYWdlOlwiLCBlcnJvcik7XHJcbiAgICAgIC8vIENvbnNpZGVyIGRpc3BsYXlpbmcgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgdXNlclxyXG4gICAgfVxyXG4gIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkYXRhMSA9IHVzZU1lbW8oKCkgPT4gZGF0YSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgbGV0IGRhdGFBbGwgPSBbXVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGRhdGExLmxlbmd0aC0xOyBpKyspIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGExW2ldWydwcm9wcyddW1wiY2xhc3NOYW1lXCJdKVxyXG4gICAgaWYgKGRhdGExW2ldWydwcm9wcyddW1wiY2xhc3NOYW1lXCJdICE9ICdDLXRhZ3MnICYmIGRhdGExW2ldWydwcm9wcyddW1wiY2xhc3NOYW1lXCJdLmluZGV4T2YoJ2JpZycpID09IC0xKSB7XHJcbiAgICAgIGxldCBhID0gKDxMaW5rIGNsYXNzTmFtZT1cInRhZ2dlclwiIHRvPVwiL2FydGljbGVcIiBvbkNsaWNrPXtoYW5kbGVMaW5rQ2xpY2t9PntkYXRhMVtpXX08L0xpbms+KVxyXG4gICAgICBkYXRhQWxsLnB1c2goYSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChkYXRhMVtpXVsncHJvcHMnXVtcImNsYXNzTmFtZVwiXS5pbmRleE9mKCdiaWcnKSAhPSAtMSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGExW2ldW1wicHJvcHNcIl1bXCJjaGlsZHJlblwiXSlcclxuICAgICAgICBsZXQgYiA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBkYXRhMVtpXVtcInByb3BzXCJdW1wiY2hpbGRyZW5cIl0ubGVuZ3RoOyBtKyspIHtcclxuICAgICAgICAgIGIucHVzaChkYXRhMVtpXVtcInByb3BzXCJdW1wiY2hpbGRyZW5cIl1bbV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGIucHVzaCgoPExpbmsgdG89XCIvYXJ0aWNsZVwiIG9uQ2xpY2s9e2hhbmRsZUxpbmtDbGlja30+PEJsdWVCdXR0b24gY2xhc3NOYW1lPVwiQS1idG5cIiBpZD17aX0gdGV4dENvbnRlbnQ9XCLQp9C40YLQsNGC0YxcIj48L0JsdWVCdXR0b24+PC9MaW5rPikpXHJcbiAgICAgICAgY29uc29sZS5sb2coYilcclxuICAgICAgICBkYXRhQWxsLnB1c2goKDxkaXYgY2xhc3NOYW1lPXtgUS1iaWdDYXJkQmFjayAke2RhdGExW2ldWyd0eXBlJ119YH0+e2J9PC9kaXY+KSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZGF0YTFbaV1bJ3Byb3BzJ11bXCJjbGFzc05hbWVcIl0gPT0gJ0MtdGFncycpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGExW2ldW1wicHJvcHNcIl1bXCJjaGlsZHJlblwiXVtcInByb3BzXCJdW1wiY2hpbGRyZW5cIl1bMF0sIDIyMjIyMjIyMjIyMjIyMilcclxuICAgICAgICAgIGxldCB2diA9IFtdXHJcbiAgICAgICAgICBmb3IgKGxldCBjYyA9IDA7IGNjIDwgZGF0YTFbaV1bXCJwcm9wc1wiXVtcImNoaWxkcmVuXCJdW1wicHJvcHNcIl1bXCJjaGlsZHJlblwiXVswXS5sZW5ndGg7IGNjKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YTFbaV1bXCJwcm9wc1wiXVtcImNoaWxkcmVuXCJdW1wicHJvcHNcIl1bXCJjaGlsZHJlblwiXVswXVtjY10sIDU1NSlcclxuXHJcbiAgICAgICAgICAgIHZ2LnB1c2goPGEgY2xhc3NOYW1lPVwiQS10YWdcIiBvbkNsaWNrPXsoZSkgPT4gZ2VuZXJhdGl2ZShlKX0+e2RhdGExW2ldW1wicHJvcHNcIl1bXCJjaGlsZHJlblwiXVtcInByb3BzXCJdW1wiY2hpbGRyZW5cIl1bMF1bY2NdfTwvYT4pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coNDQ0NDQ0NDQ0NDQ0KVxyXG4gICAgICAgICAvLyB9XHJcbiAgICAgICAgICBkYXRhQWxsLnB1c2goPGRpdiBjbGFzc05hbWU9XCJDLXRhZ3NcIj57dnZ9PC9kaXY+KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgYSA9ICg8PntkYXRhMVtpXX08Lz4pXHJcbiAgICAgICAgICBkYXRhQWxsLnB1c2goYSlcclxuICAgICAgICB9XHJcbiAgIFxyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zb2xlLmxvZyhkYXRhQWxsKVxyXG4vLzxCbHVlQnV0dG9uIGNsYXNzTmFtZT1cIkEtYnRuXCIgdGV4dENvbnRlbnQ9XCLQp9C40YLQsNGC0YxcIj48L0JsdWVCdXR0b24+XHJcbiAgLy8gPExpbmsgdG89XCIvYXJ0aWNsZVwiIG9uQ2xpY2s9e2hhbmRsZUxpbmtDbGlja30+e2l0ZW19PC9MaW5rPlxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQ29sbGVjdGlvbiBjbGFzc05hbWU9e3Byb3BzW1wiY2xhc3NOYW1lXCJdfT5cclxuICAgICAgPD57ZGF0YUFsbC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDw+e2l0ZW19PC8+XHJcbiAgICAgICkpfTwvPlxyXG5cclxuXHJcbiAgICA8L1N0eWxlZENvbGxlY3Rpb24+XHJcbiAgICBcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlc0NhcmRQYWdlZDtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1BhbGxldGV9IGZyb20gJy4uL3ZhcmlhYmxlcy5qc3gnO1xyXG5pbXBvcnQgeyB1c2VJZCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBDYXJkSW1nIGZyb20gJy4uL3F1YXJrcy9RLWNhcmRCYWNrZ3JvdW5kLmpzeCdcclxuaW1wb3J0IFRleHQgZnJvbSAnLi4vYXRvbXMvQS10ZXh0LmpzeCc7XHJcbmltcG9ydCBJY29uSW1nIGZyb20gJy4uL3F1YXJrcy9RLWljb24uanN4J1xyXG5pbXBvcnQgaWNvbiBmcm9tICcuLi9pbWFnZXMvY2xvY2suc3ZnJ1xyXG5cclxuY29uc3QgU3R5bGVkQmxvY2sgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMjEuM3Z3O1xyXG4gIGhlaWdodDogMjZ2dztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7UGFsbGV0ZVtcIndoaXRlXCJdfTtcclxuICBib3JkZXItcmFkaXVzOiAyLjV2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAydnc7XHJcblxyXG4gIC5BLXRhZ0FydGljbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzdnc7XHJcbiAgICBwYWRkaW5nOiAwLjV2dyAxdnc7XHJcbiAgICBsZWZ0OiAydnc7XHJcbiAgICB0b3A6IDJ2dztcclxuICB9XHJcblxyXG4gIC5RLWNhcmRCYWNrZ3JvdW5kIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNnZ3O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjV2dztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLkEtbWFpbi1hcnRpY2xlVGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogJHtQYWxsZXRlW1wiYmxhY2tcIl19O1xyXG4gICAgdG9wOiAxOS41dnc7XHJcbiAgICBsZWZ0OiAydnc7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTE0dnc7XHJcbiAgICBsZWZ0OiAtOHZ3O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZGFya2VyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7UGFsbGV0ZVtcImJsYWNrXCJdfTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0XHJcbiAgfVxyXG5cclxuXHJcbmA7XHJcblxyXG5mdW5jdGlvbiBBcnRpY2xlQ2FyZChwcm9wcykge1xyXG4gIGxldCBpZCA9IHVzZUlkKCk7XHJcbiAgaWQgPSBpZC5zbGljZSgxLCBpZC5sZW5ndGggLSAxKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZEJsb2NrIGlkPXtwcm9wc1tcImlkXCJdfSBjbGFzc05hbWU9e3Byb3BzW1wiY2xhc3NOYW1lXCJdICsgXCIgXCIgICsgcHJvcHNbXCJ0eXBlXCJdfT4gXHJcbiAgICAgICAgPENhcmRJbWcgY2xhc3NOYW1lPVwiUS1jYXJkQmFja2dyb3VuZFwiIHNyYz17cHJvcHNbXCJzcmNcIl19PjwvQ2FyZEltZz5cclxuICAgICAgICA8c3ZnIHdpZHRoPVwiNTA1XCIgaGVpZ2h0PVwiMjk1XCIgdmlld0JveD1cIjAgMCA1MDUgMjk1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTM2NS4yNDIgMjc5LjY3NEM0NDguMjgxIDI1OS45MDMgNzAxLjczOSAtNy42NzUyIDIxMS45MjYgMC42NzJDLTEwMi41MjkgMTYuNDEyNSAzLjY0MjU4IDE4Ni4yMTMgOTEuOTA2NyAyNDYuNTU3QzE0MC4zNDUgMjc5LjY3NCAyMTQuODU3IDMxNS40OCAzNjUuMjQyIDI3OS42NzRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cIkEtbWFpbi1hcnRpY2xlVGl0bGVcIiB0ZXh0Q29udGVudD17cHJvcHNbXCJ0aXRsZVwiXX0+PC9UZXh0PlxyXG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cIkEtdGFnQXJ0aWNsZVwiIHRleHRDb250ZW50PXtwcm9wc1sndGFnJ119PjwvVGV4dD5cclxuICAgICAgPC9TdHlsZWRCbG9jaz5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQ2FyZDsiXSwibmFtZXMiOlsiQWlydGFibGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJBc3luY0NsYXNzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJnZXRQb3N0VGVhc2VycyIsInRoZW4iLCJkYXRhIiwiY29udGVudCIsInVwZGF0ZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0VmFyaWFibGUiLCJyZWplY3QiLCJ0b2tlbiIsImNvbmZpZ3VyZSIsImVuZHBvaW50VXJsIiwiYXBpS2V5IiwiYmFzZSIsInNlbGVjdCIsIm1heFJlY29yZHMiLCJmaXJzdFBhZ2UiLCJyZXN1bHQiLCJmb3JFYWNoIiwicmVjb3JkIiwicHVzaCIsIm51bSIsImZpZWxkcyIsInRpdGxlIiwidGltZSIsInR5cGUiLCJpbWciLCJkZXNjcmlwdGlvbiIsInRhZyIsImJhbm5lckltZyIsImJhbm5lclRpdGxlIiwiY29uc29sZSIsImxvZyIsImhyZWYiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNwbGl0IiwicG9wIiwic3Ryb2tlIiwicGFnZSIsImNyZWF0ZUNvbnRlbnQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRGVmZXJyZWRWYWx1ZSIsInVzZUVmZmVjdCIsIlN1c3BlbnNlIiwic3R5bGVkIiwiUGFsbGV0ZSIsIlN0eWxlZEJ1dHRvbiIsImJ1dHRvbiIsIl90ZW1wbGF0ZU9iamVjdCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJCbHVlQnV0dG9uIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaWQiLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9pbnZva2UiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibmV4dCIsImlzQXJyYXkiLCJmcmVlemUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicmF3IiwidXNlSWQiLCJ1c2VNZW1vIiwidXNlQ2FsbGJhY2siLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiU3dpdGNoIiwiUm91dGUiLCJMaW5rIiwiUm91dGVzIiwidXNlTmF2aWdhdGUiLCJUZXh0IiwiQXJ0aWNsZUNhcmQiLCJJY29uSW1nIiwiY3Jvc3MiLCJTdHlsZWRDb2xsZWN0aW9uIiwiZGl2IiwiZ2VuZXJhdGl2ZSIsImFsbEFydGljbGVzIiwidGFnZ2VycyIsInRhcmdldCIsImluZGV4T2YiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpdGVtIiwidGV4dENvbnRlbnQiLCJqIiwiaW5jbHVkZXMiLCJjaGlsZHJlbiIsImdlbmVyYXRlVGFncyIsInRhZ3MiLCJ0YWdzVGV4c3RzIiwiY29sbGVjdGlvbiIsIkZyYWdtZW50IiwibWFwIiwiZ2VuZXJhdGVBcnRpY2xlcyIsImdlbmVyYXRlZCIsImIiLCJjb25jYXQiLCJzcmMiLCJBcnRpY2xlc0NhcmRQYWdlZCIsIm5hdmlnYXRlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInNldERhdGEiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImZpcnN0Iiwic2V0Rmlyc3QiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiZGF0YVRvU3RvcmUiLCJzZXREYXRhVG9TdG9yZSIsIl9yZWYiLCJfY2FsbGVlIiwiaW5zdGFuY2UiLCJ2YXJpYWJsZVZhbHVlIiwiX3QiLCJfY29udGV4dCIsInVuZGVmaW5lZCIsImhhbmRsZUxpbmtDbGljayIsImV2ZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImRhdGExIiwiZGF0YUFsbCIsInRvIiwib25DbGljayIsInZ2IiwiY2MiLCJDYXJkSW1nIiwiaWNvbiIsIlN0eWxlZEJsb2NrIiwic2VjdGlvbiIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyJdLCJzb3VyY2VSb290IjoiIn0=
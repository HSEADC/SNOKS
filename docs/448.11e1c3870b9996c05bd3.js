"use strict";
(self["webpackChunkstatic_site_08_24"] = self["webpackChunkstatic_site_08_24"] || []).push([[448],{

/***/ 9512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7581);
/* harmony import */ var _variables_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3382);
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }



var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  padding: 1vw;\n  border-radius: 3vw;\n  opacity: 1;\n  transition: all 0.3s ease;\n  background-color: ", ";\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: ", ";\n\n\n  &:hover {\n  opacity: 0.6;\n  }\n\n  &.prev {\n    transform: rotate(180deg)\n  }\n"])), _variables_jsx__WEBPACK_IMPORTED_MODULE_1__/* .Pallete */ .K["black"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__/* .Pallete */ .K["blue"], _variables_jsx__WEBPACK_IMPORTED_MODULE_1__/* .Pallete */ .K["fontP"]);
function BlueButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledButton, {
    className: props["className"],
    id: props['id']
  }, props["textContent"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlueButton);

/***/ }),

/***/ 6448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ C_generated_articles)
});

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(7581);
// EXTERNAL MODULE: ./src/components/variables.jsx
var variables = __webpack_require__(3382);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-router/dist/development/chunk-NL6KNZEE.mjs
var chunk_NL6KNZEE = __webpack_require__(4794);
// EXTERNAL MODULE: ./src/components/atoms/A-blueBtn.jsx
var A_blueBtn = __webpack_require__(9512);
// EXTERNAL MODULE: ./node_modules/airtable/lib/airtable.umd.js
var airtable_umd = __webpack_require__(997);
var airtable_umd_default = /*#__PURE__*/__webpack_require__.n(airtable_umd);
;// ./src/components/articles.js
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

/* harmony default export */ const articles = (new Promise(function (resolve) {
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
// EXTERNAL MODULE: ./src/components/atoms/A-text.jsx
var A_text = __webpack_require__(2911);
// EXTERNAL MODULE: ./src/components/quarks/Q-cardBackground.jsx
var Q_cardBackground = __webpack_require__(2297);
// EXTERNAL MODULE: ./src/components/quarks/Q-icon.jsx
var Q_icon = __webpack_require__(5236);
// EXTERNAL MODULE: ./src/components/images/clock.svg
var clock = __webpack_require__(6818);
;// ./src/components/organisms/O-articles-card.jsx
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }








var StyledBlock = styled_components_browser_esm/* default */.Ay.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 21.3vw;\n  height: 26vw;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 2.5vw;\n  position: relative;\n  overflow: hidden;\n  background-color: white;\n  margin-bottom: 2vw;\n\n  .A-tagArticle {\n    position: absolute;\n    background-color: white;\n    border-radius: 3vw;\n    padding: 0.5vw 1vw;\n    left: 2vw;\n    top: 2vw;\n  }\n\n  .Q-cardBackground {\n    width: 100%;\n    height: 29vw;\n    bottom: 0;\n    margin: auto;\n    transition: all 0.3s ease-in-out;\n    border-radius: 2.5vw;\n    pointer-events: none;\n  }\n\n  .A-main-articleTitle {\n    position: absolute;\n    font-size: 1.5vw;\n    font-weight: 600;\n    color: ", ";\n    top: 19.5vw;\n    left: 2vw;\n    pointer-events: none;\n    width: 95%;\n    transition: all 0.3s ease-in-out;\n  }\n  \n  svg {\n    position: absolute;\n    bottom: -10vw;\n    left: -8vw;\n    pointer-events: none;\n  }\n\n  .darker {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    background-color: ", ";\n    transition: all 0.3s ease-in-out\n  }\n\n\n"])), variables/* Pallete */.K["white"], variables/* Pallete */.K["black"], variables/* Pallete */.K["black"]);
function ArticleCard(props) {
  var id = (0,react.useId)();
  id = id.slice(1, id.length - 1);
  return /*#__PURE__*/react.createElement(StyledBlock, {
    id: props["id"],
    className: props["className"] + " " + props["type"]
  }, /*#__PURE__*/react.createElement(Q_cardBackground/* default */.A, {
    className: "Q-cardBackground",
    src: props["src"]
  }), /*#__PURE__*/react.createElement("svg", {
    width: "505",
    height: "295",
    viewBox: "0 0 505 295",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M365.242 279.674C448.281 259.903 701.739 -7.6752 211.926 0.672C-102.529 16.4125 3.64258 186.213 91.9067 246.557C140.345 279.674 214.857 315.48 365.242 279.674Z",
    fill: "white"
  })), /*#__PURE__*/react.createElement(A_text/* default */.A, {
    className: "A-main-articleTitle",
    textContent: props["title"]
  }), /*#__PURE__*/react.createElement(A_text/* default */.A, {
    className: "A-tagArticle",
    textContent: props['tag']
  }));
}
/* harmony default export */ const O_articles_card = (ArticleCard);
// EXTERNAL MODULE: ./src/components/images/cross.svg
var cross = __webpack_require__(1240);
;// ./src/components/collections/C-generated-articles.jsx
var C_generated_articles_templateObject;
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
function C_generated_articles_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }











//import content from '../data.js'
//import AsyncClass from "../data.js";
//import Loading from '../molecules/M-loading-block.jsx'

var StyledCollection = styled_components_browser_esm/* default */.Ay.div(C_generated_articles_templateObject || (C_generated_articles_templateObject = C_generated_articles_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: start;\n  width: 100%;\n  height: fit-content;\n  align-items: center;\n  transition: all 0.3s ease-in-out;\n  margin-bottom: 7vw;\n  flex-wrap: wrap;\n\n  .C-tags {\n    width: 100%;\n    display: flex;\n    margin: 7vw 0 3vw 0;\n    flex-wrap: wrap;\n\n\n    .A-tagBtn {\n      background-color: white;\n      font-size: 1.5vw;\n      font-weight: 500;\n      padding: 1vw 3vw;\n      margin-right: 2vw;\n      opacity: 1;\n      margin-bottom: 1vw;\n    }\n\n    .tagChoosen {\n      background-color: ", ";\n      color: white;\n    }\n\n    .clear {\n      width: 4vw;\n      height: 4vw;\n      padding: 0;\n      border-radius: 100%;\n      position: relative;\n    }\n\n    .A-tagBtn:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n  }\n\n  .O-test-cardGenerated {\n    width: 21vw;\n    height: 30vw;\n    margin-bottom: 2vw;\n\n    .Q-cardBackground {\n      width: 100%;\n      height: 23vw;\n      bottom: -1vw;\n    }\n  }\n\n  .Q-bigCardBack {\n    width: 90vw;\n    height: 50vw;\n    background-color: white;\n    position: relative;\n    border-radius: 3vw;\n    padding: 3vw;\n    margin: 4vw auto;\n    \n\n    .A-description {\n      font-size: 1.8vw;\n      width: 45%;\n      margin-bottom: 3vw;\n    }\n\n    .A-title {\n      font-weight: 600;\n      font-size: 3.2vw;\n      margin-bottom: 2vw;\n    }\n\n    .A-time {\n      opacity: 0.5;\n      font-weight: 500;\n      font-size: 1.5vw;\n      margin-bottom: 20vw;\n    }\n\n    .A-btn {\n      position: absolute;\n      left: 3vw;\n      bottom: 3vw;\n      width: 43%;\n      color: ", ";\n      font-size: 1.5vw;\n    }\n\n    .big {\n      position: absolute;\n      margin-bottom: 0;\n      right: 0vw;\n      bottom: 0vw;\n      height: 50vw;\n      width: 43vw;\n\n      .A-tagArticle {\n        font-size: 2.5vw;\n        padding: 1vw 2vw;\n        right: 2vw;\n        left: inherit;\n      }\n\n      svg {\n        display: none;\n      }\n\n      .Q-cardBackground {\n        bottom: 0;\n        width: 100%;\n        height: 50vw;\n      }\n\n      .A-main-testTitle {\n        top: 3vw;\n        font-size: 5vw;\n      }\n\n    }\n\n    &.leftImg {\n      .A-title {\n        margin-left: 46vw;\n      } \n\n      .A-description {\n        margin-left: 46vw;\n      } \n\n      .A-time {\n        margin-left: 46vw;\n      }\n\n      .O-test-cardGenerated {\n        left: 66vw;\n      }\n\n      .A-tagArticle {\n        font-size: 2.5vw;\n        padding: 1vw 2vw;\n        left: 2vw;\n        right: initial;\n      }\n\n      .big {\n        left: 0vw;\n      }\n    }\n\n  } \n\n  .notChoosenArticle {\n    display: none;\n  }\n\n  .articleChoosen {\n    display: relative;\n  }\n\n  .tagger {\n    margin-left: 1.15vw;\n  }\n"])), variables/* Pallete */.K["blue"], variables/* Pallete */.K["blue"], variables/* Pallete */.K["white"], variables/* Pallete */.K["white"]);
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
      tags.push(/*#__PURE__*/react.createElement(A_blueBtn/* default */.A, {
        className: "A-tagBtn",
        textContent: a[i]["tag"]
      }));
    }
  }
  console.log(tags);
  var collection = /*#__PURE__*/react.createElement("div", {
    className: "C-tags"
  }, /*#__PURE__*/react.createElement(react.Fragment, null, tags.map(function (item) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, item);
  }), /*#__PURE__*/react.createElement(A_blueBtn/* default */.A, {
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
          var b = /*#__PURE__*/react.createElement("div", {
            className: "Q-bigCardBack ".concat(a[m]['type'])
          }, /*#__PURE__*/react.createElement(A_text/* default */.A, {
            className: "A-title",
            textContent: a[m]['title']
          }), /*#__PURE__*/react.createElement(A_text/* default */.A, {
            className: "A-description",
            textContent: a[m]['description']
          }), /*#__PURE__*/react.createElement(A_text/* default */.A, {
            className: "A-time",
            textContent: "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0447\u0442\u0435\u043D\u0438\u044F: ".concat(a[m]['time'], " \u043C\u0438\u043D")
          }), /*#__PURE__*/react.createElement(O_articles_card, {
            className: "O-article-cardGenerated",
            tag: a[m]['tag'],
            src: a[m]['img'][0]["url"],
            type: a[m]["type"],
            title: "",
            time: a[m]['time']
          }));
          generated.push(b);
        } else {
          var _b = /*#__PURE__*/react.createElement(O_articles_card, {
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
  var navigate = (0,chunk_NL6KNZEE/* useNavigate */.Zp)();
  var _useState = (0,react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    first = _useState4[0],
    setFirst = _useState4[1];
  var _useState5 = (0,react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  var _useState7 = (0,react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    dataToStore = _useState8[0],
    setDataToStore = _useState8[1];
  (0,react.useEffect)(function () {
    var data = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var instance, variableValue, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              setIsLoading(true);
              _context.n = 1;
              return articles;
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
  var data1 = (0,react.useMemo)(function () {
    return data;
  });
  console.log(data);
  var dataAll = [];
  for (var i = 0; i <= data1.length - 1; i++) {
    console.log(data1[i]['props']["className"]);
    if (data1[i]['props']["className"] != 'C-tags' && data1[i]['props']["className"].indexOf('big') == -1) {
      var a = /*#__PURE__*/react.createElement(chunk_NL6KNZEE/* Link */.N_, {
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
        b.push(/*#__PURE__*/react.createElement(chunk_NL6KNZEE/* Link */.N_, {
          to: "/article",
          onClick: handleLinkClick
        }, /*#__PURE__*/react.createElement(A_blueBtn/* default */.A, {
          className: "A-btn",
          id: i,
          textContent: "\u0427\u0438\u0442\u0430\u0442\u044C"
        })));
        console.log(b);
        dataAll.push(/*#__PURE__*/react.createElement("div", {
          className: "Q-bigCardBack ".concat(data1[i]['type'])
        }, b));
      } else {
        if (data1[i]['props']["className"] == 'C-tags') {
          console.log(data1[i]["props"]["children"]["props"]["children"][0], 222222222222222);
          var vv = [];
          for (var cc = 0; cc < data1[i]["props"]["children"]["props"]["children"][0].length; cc++) {
            console.log(data1[i]["props"]["children"]["props"]["children"][0][cc], 555);
            vv.push(/*#__PURE__*/react.createElement("a", {
              className: "A-tag",
              onClick: function onClick(e) {
                return generative(e);
              }
            }, data1[i]["props"]["children"]["props"]["children"][0][cc]));
          }
          //  console.log(444444444444)
          // }
          dataAll.push(/*#__PURE__*/react.createElement("div", {
            className: "C-tags"
          }, vv));
        } else {
          var _a = /*#__PURE__*/react.createElement(react.Fragment, null, data1[i]);
          dataAll.push(_a);
        }
      }
    }
  }
  console.log(dataAll);
  //<BlueButton className="A-btn" textContent="Читать"></BlueButton>
  // <Link to="/article" onClick={handleLinkClick}>{item}</Link>
  return /*#__PURE__*/react.createElement(StyledCollection, {
    className: props["className"]
  }, /*#__PURE__*/react.createElement(react.Fragment, null, dataAll.map(function (item) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, item);
  })));
}
/* harmony default export */ const C_generated_articles = (ArticlesCardPaged);

/***/ }),

/***/ 1240:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2e368fd9106a1d6375ea.svg";

/***/ })

}]);
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 42:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var aos = __webpack_require__(42);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);
;// ./node_modules/typeit/dist/index.es.js
// TypeIt by Alex MacArthur - https://typeitjs.com
const isArray = (thing) => Array.isArray(thing);

const asArray = (value) => isArray(value) ? value : [value];

let Queue = function(initialItems) {
  let add = function(steps) {
    asArray(steps).forEach((step) => {
      return _q.set(Symbol(step.char?.innerText), buildQueueItem({ ...step }));
    });
    return this;
  };
  let getTypeable = () => rawValues().filter((value) => value.typeable);
  let set = function(index, item) {
    let keys = [..._q.keys()];
    _q.set(keys[index], buildQueueItem(item));
  };
  let buildQueueItem = (queueItem) => {
    queueItem.shouldPauseCursor = function() {
      return Boolean(this.typeable || this.cursorable || this.deletable);
    };
    return queueItem;
  };
  let reset = function() {
    _q.forEach((item) => delete item.done);
  };
  let wipe = function() {
    _q = /* @__PURE__ */ new Map();
    add(initialItems);
  };
  let getQueue = () => _q;
  let rawValues = () => Array.from(_q.values());
  let destroy = (key) => _q.delete(key);
  let getItems = (all = false) => all ? rawValues() : rawValues().filter((i) => !i.done);
  let done = (key, shouldDestroy = false) => shouldDestroy ? _q.delete(key) : _q.get(key).done = true;
  let _q = /* @__PURE__ */ new Map();
  add(initialItems);
  return {
    add,
    set,
    wipe,
    done,
    reset,
    destroy,
    getItems,
    getQueue,
    getTypeable
  };
};

const DATA_ATTRIBUTE = "data-typeit-id";
const CURSOR_CLASS = "ti-cursor";
const END = "END";
const DEFAULT_STATUSES = {
  started: false,
  completed: false,
  frozen: false,
  destroyed: false
};
const DEFAULT_OPTIONS = {
  breakLines: true,
  cursor: {
    autoPause: true,
    autoPauseDelay: 500,
    animation: {
      frames: [0, 0, 1].map((n) => {
        return { opacity: n };
      }),
      options: {
        iterations: Infinity,
        easing: "steps(2, start)",
        fill: "forwards"
      }
    }
  },
  cursorChar: "|",
  cursorSpeed: 1e3,
  deleteSpeed: null,
  html: true,
  lifeLike: true,
  loop: false,
  loopDelay: 750,
  nextStringDelay: 750,
  speed: 100,
  startDelay: 250,
  startDelete: false,
  strings: [],
  waitUntilVisible: false,
  beforeString: () => {
  },
  afterString: () => {
  },
  beforeStep: () => {
  },
  afterStep: () => {
  },
  afterComplete: () => {
  }
};
const PLACEHOLDER_CSS = `[${DATA_ATTRIBUTE}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;

const createElement = (el) => document.createElement(el);

const createTextNode = (content) => document.createTextNode(content);

const appendStyleBlock = (styles, id = "") => {
  let styleBlock = createElement("style");
  styleBlock.id = id;
  styleBlock.appendChild(createTextNode(styles));
  document.head.appendChild(styleBlock);
};

const calculateDelay = (delayArg) => {
  if (!isArray(delayArg)) {
    delayArg = [delayArg / 2, delayArg / 2];
  }
  return delayArg;
};

const randomInRange = (value, range) => {
  return Math.abs(
    Math.random() * (value + range - (value - range)) + (value - range)
  );
};

let range = (val) => val / 2;
function calculatePace(options) {
  let { speed, deleteSpeed, lifeLike } = options;
  deleteSpeed = deleteSpeed !== null ? deleteSpeed : speed / 3;
  return lifeLike ? [
    randomInRange(speed, range(speed)),
    randomInRange(deleteSpeed, range(deleteSpeed))
  ] : [speed, deleteSpeed];
}

const toArray = (val) => Array.from(val);

let expandTextNodes = (element) => {
  [...element.childNodes].forEach((child) => {
    if (child.nodeValue) {
      [...child.nodeValue].forEach((c) => {
        child.parentNode.insertBefore(createTextNode(c), child);
      });
      child.remove();
      return;
    }
    expandTextNodes(child);
  });
  return element;
};

const getParsedBody = (content) => {
  let doc = document.implementation.createHTMLDocument();
  doc.body.innerHTML = content;
  return expandTextNodes(doc.body);
};

function walkElementNodes(element, shouldReverse = false, shouldIncludeCursor = false) {
  let cursor = element.querySelector(`.${CURSOR_CLASS}`);
  let walker = document.createTreeWalker(element, NodeFilter.SHOW_ALL, {
    acceptNode: (node) => {
      if (cursor && shouldIncludeCursor) {
        if (node.classList?.contains(CURSOR_CLASS)) {
          return NodeFilter.FILTER_ACCEPT;
        }
        if (cursor.contains(node)) {
          return NodeFilter.FILTER_REJECT;
        }
      }
      return node.classList?.contains(CURSOR_CLASS) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  let nextNode;
  let nodes = [];
  while (nextNode = walker.nextNode()) {
    if (!nextNode.originalParent) {
      nextNode.originalParent = nextNode.parentNode;
    }
    nodes.push(nextNode);
  }
  return shouldReverse ? nodes.reverse() : nodes;
}
function chunkStringAsHtml(string) {
  return walkElementNodes(getParsedBody(string));
}
function maybeChunkStringAsHtml(str, asHtml = true) {
  return asHtml ? chunkStringAsHtml(str) : toArray(str).map(createTextNode);
}

const cleanUpSkipped = ({
  index,
  newIndex,
  queueItems,
  cleanUp
}) => {
  for (let i = index + 1; i < newIndex + 1; i++) {
    cleanUp(queueItems[i][0]);
  }
};

const isNumber = (value) => Number.isInteger(value);

const countStepsToSelector = ({
  queueItems,
  selector,
  cursorPosition,
  to
}) => {
  if (isNumber(selector)) {
    return selector * -1;
  }
  let isMovingToEnd = new RegExp(END, "i").test(to);
  let selectorIndex = selector ? [...queueItems].reverse().findIndex(({ char }) => {
    let parentElement = char.parentElement;
    let parentMatches = parentElement.matches(selector);
    if (isMovingToEnd && parentMatches) {
      return true;
    }
    return parentMatches && parentElement.firstChild.isSameNode(char);
  }) : -1;
  if (selectorIndex < 0) {
    selectorIndex = isMovingToEnd ? 0 : queueItems.length - 1;
  }
  let offset = isMovingToEnd ? 0 : 1;
  return selectorIndex - cursorPosition + offset;
};

const destroyTimeouts = (timeouts) => {
  timeouts.forEach(clearTimeout);
  return [];
};

const duplicate = (value, times) => new Array(times).fill(value);

let beforePaint = (cb) => {
  return new Promise((resolve) => {
    requestAnimationFrame(async () => {
      resolve(await cb());
    });
  });
};

let getAnimationFromElement = (element) => {
  return element?.getAnimations().find((animation) => {
    return animation.id === element.dataset.tiAnimationId;
  });
};

let setCursorAnimation = ({
  cursor,
  frames,
  options
}) => {
  let animation = cursor.animate(frames, options);
  animation.pause();
  animation.id = cursor.dataset.tiAnimationId;
  beforePaint(() => {
    beforePaint(() => {
      animation.play();
    });
  });
  return animation;
};

let rebuildCursorAnimation = ({
  cursor,
  options,
  cursorOptions
}) => {
  if (!cursor || !cursorOptions) return;
  let animation = getAnimationFromElement(cursor);
  let oldCurrentTime;
  if (animation) {
    options.delay = animation.effect.getComputedTiming().delay;
    oldCurrentTime = animation.currentTime;
    animation.cancel();
  }
  let newAnimation = setCursorAnimation({
    cursor,
    frames: cursorOptions.animation.frames,
    options
  });
  if (oldCurrentTime) {
    newAnimation.currentTime = oldCurrentTime;
  }
  return newAnimation;
};

let execute = (queueItem) => queueItem.func?.call(null);
let fireItem = async ({
  index,
  queueItems,
  wait,
  cursor,
  cursorOptions
}) => {
  let queueItem = queueItems[index][1];
  let instantQueue = [];
  let tempIndex = index;
  let futureItem = queueItem;
  let shouldBeGrouped = () => futureItem && !futureItem.delay;
  let shouldPauseCursor = queueItem.shouldPauseCursor() && cursorOptions.autoPause;
  while (shouldBeGrouped()) {
    instantQueue.push(futureItem);
    shouldBeGrouped() && tempIndex++;
    futureItem = queueItems[tempIndex] ? queueItems[tempIndex][1] : null;
  }
  if (instantQueue.length) {
    await beforePaint(async () => {
      for (let q of instantQueue) {
        await execute(q);
      }
    });
    return tempIndex - 1;
  }
  let animation = getAnimationFromElement(cursor);
  let options;
  if (animation) {
    options = {
      ...animation.effect.getComputedTiming(),
      delay: shouldPauseCursor ? cursorOptions.autoPauseDelay : 0
    };
  }
  await wait(async () => {
    if (animation && shouldPauseCursor) {
      animation.cancel();
    }
    await beforePaint(() => {
      execute(queueItem);
    });
  }, queueItem.delay);
  await rebuildCursorAnimation({
    cursor,
    options,
    cursorOptions
  });
  return index;
};

const fireWhenVisible = (element, func) => {
  let observer = new IntersectionObserver(
    (entries, observer2) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          func();
          observer2.unobserve(element);
        }
      });
    },
    { threshold: 1 }
  );
  observer.observe(element);
};

const generateHash = () => Math.random().toString().substring(2, 9);

const isInput = (el) => {
  return "value" in el;
};

let getAllChars = (element) => {
  if (isInput(element)) {
    return toArray(element.value);
  }
  return walkElementNodes(element, true).filter(
    (c) => !(c.childNodes.length > 0)
  );
};

let handleFunctionalArg = (arg) => {
  return typeof arg === "function" ? arg() : arg;
};

let index_es_select = (selector, element = document, all = false) => {
  return element[`querySelector${all ? "All" : ""}`](selector);
};

let isBodyElement = (node) => /body/i.test(node?.tagName);

let insertIntoElement = (originalTarget, character) => {
  if (isInput(originalTarget)) {
    originalTarget.value = `${originalTarget.value}${character.textContent}`;
    return;
  }
  character.innerHTML = "";
  let target = isBodyElement(character.originalParent) ? originalTarget : (
    // If we add one-off fresh elements, there will be no
    // "originalParent", so always fall back to the default target.
    character.originalParent || originalTarget
  );
  target.insertBefore(
    character,
    index_es_select("." + CURSOR_CLASS, target) || null
  );
};

const isNonVoidElement = (el) => /<(.+)>(.*?)<\/(.+)>/.test(el.outerHTML);

const merge = (originalObj, newObj) => Object.assign({}, originalObj, newObj);

let processCursorOptions = (cursorOptions) => {
  if (typeof cursorOptions === "object") {
    let newOptions = {};
    let { frames: defaultFrames, options: defaultOptions } = DEFAULT_OPTIONS.cursor.animation;
    newOptions.animation = cursorOptions.animation || {};
    newOptions.animation.frames = cursorOptions.animation?.frames || defaultFrames;
    newOptions.animation.options = merge(
      defaultOptions,
      cursorOptions.animation?.options || {}
    );
    newOptions.autoPause = cursorOptions.autoPause ?? DEFAULT_OPTIONS.cursor.autoPause;
    newOptions.autoPauseDelay = cursorOptions.autoPauseDelay || DEFAULT_OPTIONS.cursor.autoPauseDelay;
    return newOptions;
  }
  if (cursorOptions === true) {
    return DEFAULT_OPTIONS.cursor;
  }
  return cursorOptions;
};

const removeNode = (node, rootElement) => {
  if (!node) return;
  let nodeParent = node.parentNode;
  let nodeToRemove = nodeParent.childNodes.length > 1 || nodeParent.isSameNode(rootElement) ? (
    // This parent still needs to exist.
    node
  ) : (
    // There's nothing else in there, so just delete the entire thing.
    // By doing this, we clean up markup as we go along.
    nodeParent
  );
  nodeToRemove.remove();
};

const repositionCursor = (element, allChars, newCursorPosition) => {
  let nodeToInsertBefore = allChars[newCursorPosition - 1];
  let cursor = index_es_select(`.${CURSOR_CLASS}`, element);
  element = nodeToInsertBefore?.parentNode || element;
  element.insertBefore(cursor, nodeToInsertBefore || null);
};

function selectorToElement(thing) {
  return typeof thing === "string" ? index_es_select(thing) : thing;
}

let cursorFontStyles = {
  "font-family": "",
  "font-weight": "",
  "font-size": "",
  "font-style": "",
  "line-height": "",
  color: "",
  transform: "translateX(-.125em)"
};
let setCursorStyles = (id, element) => {
  let rootSelector = `[${DATA_ATTRIBUTE}='${id}']`;
  let cursorSelector = `${rootSelector} .${CURSOR_CLASS}`;
  let computedStyles = getComputedStyle(element);
  let customProperties = Object.entries(cursorFontStyles).reduce(
    (accumulator, [item, value]) => {
      return `${accumulator} ${item}: var(--ti-cursor-${item}, ${value || computedStyles[item]});`;
    },
    ""
  );
  appendStyleBlock(
    `${cursorSelector} { display: inline-block; width: 0; ${customProperties} }`,
    id
  );
};

function splitOnBreak(str) {
  return str.replace(/<!--(.+?)-->/g, "").trim().split(/<br(?:\s*?)(?:\/)?>/);
}

let updateCursorPosition = (steps, cursorPosition, printedCharacters) => {
  return Math.min(
    Math.max(cursorPosition + steps, 0),
    printedCharacters.length
  );
};

let wait = (callback, delay, timeouts) => {
  return new Promise((resolve) => {
    let cb = async () => {
      await callback();
      resolve();
    };
    timeouts.push(setTimeout(cb, delay || 0));
  });
};

class TypeIt {
  element;
  timeouts;
  cursorPosition;
  predictedCursorPosition;
  statuses = {
    started: false,
    completed: false,
    frozen: false,
    destroyed: false
  };
  opts;
  id;
  queue;
  cursor;
  unfreeze = () => {
  };
  constructor(element, options = {}) {
    this.opts = merge(DEFAULT_OPTIONS, options);
    this.element = selectorToElement(element);
    this.timeouts = [];
    this.cursorPosition = 0;
    this.unfreeze = () => {
    };
    this.predictedCursorPosition = null;
    this.statuses = merge({}, DEFAULT_STATUSES);
    this.id = generateHash();
    this.queue = Queue([{ delay: this.opts.startDelay }]);
    this.#buildOptions(options);
    this.cursor = this.#setUpCursor();
    this.element.dataset.typeitId = this.id;
    appendStyleBlock(PLACEHOLDER_CSS);
    if (this.opts.strings.length) {
      this.#generateQueue();
    }
  }
  /**
   * Can only be called once.
   */
  go() {
    if (this.statuses.started) {
      return this;
    }
    this.#attachCursor();
    if (!this.opts.waitUntilVisible) {
      this.#fire();
      return this;
    }
    fireWhenVisible(this.element, this.#fire.bind(this));
    return this;
  }
  destroy(shouldRemoveCursor = true) {
    this.timeouts = destroyTimeouts(this.timeouts);
    handleFunctionalArg(shouldRemoveCursor) && this.cursor && this.#removeNode(this.cursor);
    this.statuses.destroyed = true;
  }
  reset(rebuild) {
    !this.is("destroyed") && this.destroy();
    if (rebuild) {
      this.queue.wipe();
      rebuild(this);
    } else {
      this.queue.reset();
    }
    this.cursorPosition = 0;
    for (let property in this.statuses) {
      this.statuses[property] = false;
    }
    this.element[this.#elementIsInput() ? "value" : "innerHTML"] = "";
    return this;
  }
  is = function(key) {
    return this.statuses[key];
  };
  type(string, actionOpts = {}) {
    string = handleFunctionalArg(string);
    let { instant } = actionOpts;
    let bookEndQueueItems = this.#generateTemporaryOptionQueueItems(actionOpts);
    let chars = maybeChunkStringAsHtml(string, this.opts.html);
    let charsAsQueueItems = chars.map((char) => {
      return {
        func: () => this.#type(char),
        char,
        delay: instant || isNonVoidElement(char) ? 0 : this.#getPace(),
        typeable: char.nodeType === Node.TEXT_NODE
      };
    });
    let itemsToQueue = [
      bookEndQueueItems[0],
      { func: async () => await this.opts.beforeString(string, this) },
      ...charsAsQueueItems,
      { func: async () => await this.opts.afterString(string, this) },
      bookEndQueueItems[1]
    ];
    return this.#queueAndReturn(itemsToQueue, actionOpts);
  }
  break(actionOpts = {}) {
    return this.#queueAndReturn(
      {
        func: () => this.#type(createElement("BR")),
        typeable: true
      },
      actionOpts
    );
  }
  move(movementArg, actionOpts = {}) {
    movementArg = handleFunctionalArg(movementArg);
    let bookEndQueueItems = this.#generateTemporaryOptionQueueItems(actionOpts);
    let { instant, to } = actionOpts;
    let numberOfSteps = countStepsToSelector({
      queueItems: this.queue.getTypeable(),
      selector: movementArg === null ? "" : movementArg,
      to,
      cursorPosition: this.#derivedCursorPosition
    });
    let directionalStep = numberOfSteps < 0 ? -1 : 1;
    this.predictedCursorPosition = this.#derivedCursorPosition + numberOfSteps;
    return this.#queueAndReturn(
      [
        bookEndQueueItems[0],
        ...duplicate(
          {
            func: () => this.#move(directionalStep),
            delay: instant ? 0 : this.#getPace(),
            cursorable: true
          },
          Math.abs(numberOfSteps)
        ),
        bookEndQueueItems[1]
      ],
      actionOpts
    );
  }
  exec(func, actionOpts = {}) {
    let bookEndQueueItems = this.#generateTemporaryOptionQueueItems(actionOpts);
    return this.#queueAndReturn(
      [bookEndQueueItems[0], { func: () => func(this) }, bookEndQueueItems[1]],
      actionOpts
    );
  }
  options(opts, actionOpts = {}) {
    opts = handleFunctionalArg(opts);
    this.#updateOptions(opts);
    return this.#queueAndReturn({}, actionOpts);
  }
  pause(milliseconds, actionOpts = {}) {
    return this.#queueAndReturn(
      { delay: handleFunctionalArg(milliseconds) },
      actionOpts
    );
  }
  delete(numCharacters = null, actionOpts = {}) {
    numCharacters = handleFunctionalArg(numCharacters);
    let bookEndQueueItems = this.#generateTemporaryOptionQueueItems(actionOpts);
    let num = numCharacters;
    let { instant, to } = actionOpts;
    let typeableQueueItems = this.queue.getTypeable();
    let rounds = (() => {
      if (num === null) {
        return typeableQueueItems.length;
      }
      if (isNumber(num)) {
        return num;
      }
      return countStepsToSelector({
        queueItems: typeableQueueItems,
        selector: num,
        cursorPosition: this.#derivedCursorPosition,
        to
      });
    })();
    return this.#queueAndReturn(
      [
        bookEndQueueItems[0],
        ...duplicate(
          {
            func: this.#delete.bind(this),
            delay: instant ? 0 : this.#getPace(1),
            deletable: true
          },
          rounds
        ),
        bookEndQueueItems[1]
      ],
      actionOpts
    );
  }
  freeze() {
    this.statuses.frozen = true;
  }
  /**
   * Like `.go()`, but more... "off the grid."
   *
   * - won't trigger `afterComplete` callback
   * - items won't be replayed after `.reset()`
   *
   * When called, all non-done items will be "flushed" --
   * that is, executed, but not remembered.
   */
  flush(cb = () => {
  }) {
    this.#attachCursor();
    this.#fire(false).then(cb);
    return this;
  }
  getQueue() {
    return this.queue;
  }
  getOptions() {
    return this.opts;
  }
  updateOptions(options) {
    return this.#updateOptions(options);
  }
  getElement() {
    return this.element;
  }
  empty(actionOpts = {}) {
    return this.#queueAndReturn({ func: this.#empty.bind(this) }, actionOpts);
  }
  async #empty() {
    if (this.#elementIsInput()) {
      this.element.value = "";
      return;
    }
    this.#allChars.forEach(this.#removeNode.bind(this));
    return;
  }
  /**
   * Execute items in the queue.
   *
   * @param remember If false, each queue item will be destroyed once executed.
   * @returns
   */
  async #fire(remember = true) {
    this.statuses.started = true;
    let cleanUp = (qKey) => {
      this.queue.done(qKey, !remember);
    };
    try {
      let queueItems = [...this.queue.getQueue()];
      for (let index = 0; index < queueItems.length; index++) {
        let [queueKey, queueItem] = queueItems[index];
        if (queueItem.done) continue;
        if (!queueItem.deletable || queueItem.deletable && this.#allChars.length) {
          let newIndex = await this.#fireItemWithContext(index, queueItems);
          cleanUpSkipped({
            index,
            newIndex,
            queueItems,
            cleanUp
          });
          index = newIndex;
        }
        cleanUp(queueKey);
      }
      if (!remember) {
        return this;
      }
      this.statuses.completed = true;
      await this.opts.afterComplete(this);
      if (!this.opts.loop) {
        throw "";
      }
      let delay = this.opts.loopDelay;
      this.#wait(async () => {
        await this.#prepLoop(delay[0]);
        this.#fire();
      }, delay[1]);
    } catch (e) {
    }
    return this;
  }
  async #move(step) {
    this.cursorPosition = updateCursorPosition(
      step,
      this.cursorPosition,
      this.#allChars
    );
    repositionCursor(this.element, this.#allChars, this.cursorPosition);
  }
  /**
   * 1. Reset queue.
   * 2. Reset initial pause.
   */
  async #prepLoop(delay) {
    let derivedCursorPosition = this.#derivedCursorPosition;
    derivedCursorPosition && await this.#move({ value: derivedCursorPosition });
    let queueItems = this.#allChars.map((c) => {
      return [
        Symbol(),
        {
          func: this.#delete.bind(this),
          delay: this.#getPace(1),
          deletable: true,
          shouldPauseCursor: () => true
        }
      ];
    });
    for (let index = 0; index < queueItems.length; index++) {
      await this.#fireItemWithContext(index, queueItems);
    }
    this.queue.reset();
    this.queue.set(0, { delay });
  }
  #fireItemWithContext(index, queueItems) {
    return fireItem({
      index,
      queueItems,
      wait: this.#wait.bind(this),
      cursor: this.cursor,
      cursorOptions: this.opts.cursor
    });
  }
  async #wait(callback, delay, silent = false) {
    if (this.statuses.frozen) {
      await new Promise((resolve) => {
        this.unfreeze = () => {
          this.statuses.frozen = false;
          resolve();
        };
      });
    }
    silent || await this.opts.beforeStep(this);
    await wait(callback, delay, this.timeouts);
    silent || await this.opts.afterStep(this);
  }
  /**
   * Attach it to the DOM so, along with the required CSS transition.
   */
  async #attachCursor() {
    !this.#elementIsInput() && this.cursor && this.element.appendChild(this.cursor);
    if (this.#shouldRenderCursor) {
      setCursorStyles(this.id, this.element);
      this.cursor.dataset.tiAnimationId = this.id;
      let { animation } = this.opts.cursor;
      let { frames, options } = animation;
      setCursorAnimation({
        frames,
        cursor: this.cursor,
        options: {
          duration: this.opts.cursorSpeed,
          ...options
        }
      });
    }
  }
  #elementIsInput() {
    return isInput(this.element);
  }
  #queueAndReturn(steps, opts) {
    this.queue.add(steps);
    this.#maybeAppendPause(opts);
    return this;
  }
  #maybeAppendPause(opts = {}) {
    let delay = opts.delay;
    delay && this.queue.add({ delay });
  }
  #generateTemporaryOptionQueueItems(newOptions = {}) {
    return [
      { func: () => this.#updateOptions(newOptions) },
      { func: () => this.#updateOptions(this.opts) }
    ];
  }
  async #updateOptions(opts) {
    this.opts = merge(this.opts, opts);
  }
  /**
   * Based on provided strings, generate a TypeIt queue
   * to be fired for each character in the string.
   */
  #generateQueue() {
    let strings = this.opts.strings.filter((string) => !!string);
    strings.forEach((string, index) => {
      this.type(string);
      if (index + 1 === strings.length) {
        return;
      }
      let splitItems = this.opts.breakLines ? [{ func: () => this.#type(createElement("BR")), typeable: true }] : duplicate(
        {
          func: this.#delete.bind(this),
          delay: this.#getPace(1)
        },
        this.queue.getTypeable().length
      );
      this.#addSplitPause(splitItems);
    });
  }
  #buildOptions = (options) => {
    this.opts.cursor = processCursorOptions(
      options.cursor ?? DEFAULT_OPTIONS.cursor
    );
    this.opts.strings = this.#prependHardcodedStrings(
      asArray(this.opts.strings)
    );
    this.opts = merge(this.opts, {
      html: !this.#isInput && this.opts.html,
      nextStringDelay: calculateDelay(this.opts.nextStringDelay),
      loopDelay: calculateDelay(this.opts.loopDelay)
    });
  };
  #prependHardcodedStrings(strings) {
    let existingMarkup = this.element.innerHTML;
    if (!existingMarkup) {
      return strings;
    }
    this.element.innerHTML = "";
    if (this.opts.startDelete) {
      this.element.innerHTML = existingMarkup;
      expandTextNodes(this.element);
      this.#addSplitPause(
        duplicate(
          {
            func: this.#delete.bind(this),
            delay: this.#getPace(1),
            deletable: true
          },
          this.#allChars.length
        )
      );
      return strings;
    }
    return splitOnBreak(existingMarkup).concat(strings);
  }
  /**
   * Provided it's a non-form element and the options is provided,
   * set up the cursor element for the animation.
   */
  #setUpCursor() {
    if (this.#isInput) {
      return null;
    }
    let cursor = createElement("span");
    cursor.className = CURSOR_CLASS;
    if (!this.#shouldRenderCursor) {
      cursor.style.visibility = "hidden";
      return cursor;
    }
    cursor.innerHTML = getParsedBody(this.opts.cursorChar).innerHTML;
    return cursor;
  }
  #addSplitPause(items) {
    let delay = this.opts.nextStringDelay;
    this.queue.add([{ delay: delay[0] }, ...items, { delay: delay[1] }]);
  }
  #type(char) {
    insertIntoElement(this.element, char);
  }
  #delete() {
    if (!this.#allChars.length) return;
    if (this.#isInput) {
      this.element.value = this.element.value.slice(0, -1);
    } else {
      this.#removeNode(this.#allChars[this.cursorPosition]);
    }
  }
  #removeNode(node) {
    removeNode(node, this.element);
  }
  #getPace(index = 0) {
    return calculatePace(this.opts)[index];
  }
  get #derivedCursorPosition() {
    return this.predictedCursorPosition ?? this.cursorPosition;
  }
  get #isInput() {
    return isInput(this.element);
  }
  get #shouldRenderCursor() {
    return !!this.opts.cursor && !this.#isInput;
  }
  get #allChars() {
    return getAllChars(this.element);
  }
}



;// ./src/js/aboutUs.js



aos_default().init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 400,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
});
document.addEventListener("DOMContentLoaded", function (e) {
  var pages = {
    1: "./aboutUs.html",
    2: "./dreamBook.html",
    3: "./articles.html",
    4: "./tests.html"
  };
  document.querySelector(".mainNav").addEventListener("click", function (e) {
    if (e.target.className.includes("navChoose")) {
      var pageId = Number(e.target.id.split("")[3]);
      setTimeout(function () {
        window.location.href = "".concat(pages[pageId]);
      }, 1000);
    }
  });
  new TypeIt("#typing", {
    speed: 14,
    waitUntilVisible: true
  }).go();
  var posTests = {
    1: "15",
    2: "0",
    3: "-8",
    4: "-17",
    5: "-26"
  };
  function moveTests(testId) {
    document.querySelector(".movingTestsBox").style.top = "".concat(posTests[testId] * window.innerWidth / 100, "px");
    for (var i = 1; i <= 5; i++) {
      console.log(i);
      if (document.getElementById("testImg".concat(i)).className.includes("activeTestImgMiddle")) {
        document.getElementById("testImg".concat(i)).classList.remove("activeTestImgMiddle");
      }
      if (document.getElementById("testImg".concat(i)).className.includes("activeTestImgFull")) {
        document.getElementById("testImg".concat(i)).classList.remove("activeTestImgFull");
        document.getElementById("testText".concat(i)).classList.remove("activeTestText");
        document.getElementById("num".concat(i)).classList.remove("numClicked");
      }
    }
    document.getElementById("testImg".concat(testId)).classList.add("activeTestImgFull");
    document.getElementById("testText".concat(testId)).classList.add("activeTestText");
    document.getElementById("num".concat(testId)).classList.add("numClicked");
    if (testId - 1 > 0) {
      document.getElementById("testImg".concat(testId - 1)).classList.add("activeTestImgMiddle");
    }
    if (testId + 1 <= 5) {
      document.getElementById("testImg".concat(testId + 1)).classList.add("activeTestImgMiddle");
    }
  }
  document.querySelector(".testsContainer").addEventListener("click", function (e) {
    if (e.target.className.includes("testBlockImg")) {
      var testId = Number(e.target.id.split("")[7]);
      moveTests(testId);
    }
  });
  document.querySelector(".nusNumbers").addEventListener("click", function (e) {
    if (e.target.className.includes("num")) {
      moveTests(Number(e.target.id.split("")[3]));
    }
  });
  var interBubble = document.querySelector(".interactive");
  var curX = 0;
  var curY = 0;
  var tgX = 0;
  var tgY = 0;
  function move() {
    curX += (tgX - curX) / 22;
    curY += (tgY - curY) / 22;
    interBubble.style.transform = "translate(".concat(Math.round(curX), "px, ").concat(Math.round(curY), "px)");
    requestAnimationFrame(function () {
      move();
    });
  }
  var navBorderPos = {
    nav1: "-0.8",
    nav2: "4.1",
    nav3: "9.2",
    nav4: "14.2"
  };
  function navChoose(id) {
    document.querySelector(".borderChoose").animate({
      top: "".concat(navBorderPos[id] * window.innerWidth / 100, "px")
    }, {
      duration: 250,
      timing: back(1, 1),
      fill: "forwards"
    });
    var allBtnsNav = document.querySelectorAll(".navChoose");
    var _loop = function _loop(i) {
      if (document.getElementById("nav".concat(i)).className.includes("activeNav")) {
        setTimeout(function () {
          document.getElementById("nav".concat(i)).classList.remove("activeNav");
        }, 100);
      }
    };
    for (var i = 1; i <= allBtnsNav.length; i++) {
      _loop(i);
    }
    document.getElementById(id).classList.add("activeNav");
  }
  function back(x, timeFraction) {
    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
  }
  document.querySelector(".mainNav").addEventListener("click", function (e) {
    var click = e.target;
    if (click.classList[0] == "navChoose") {
      navChoose(click.id);
    }
  });
  var cursorDot = document.querySelector(".cursorDot");
  var cursorOutline = document.querySelector(".cursorOutline");
  window.addEventListener("mousemove", function (e) {
    tgX = e.clientX;
    tgY = e.clientY;
    var posX = e.clientX;
    var posY = e.clientY;
    cursorDot.style.left = "".concat(posX, "px");
    cursorDot.style.top = "".concat(posY, "px");
    cursorOutline.animate({
      left: "".concat(posX, "px"),
      top: "".concat(posY, "px")
    }, {
      duration: 500,
      fill: "forwards"
    });
  });
  move();
  document.querySelector(".sortsOfArticles").addEventListener("mouseover", function (e) {
    var article = e.target;
    if (article.className == "articleImg") {
      var num = article.id.split("")[10];
      document.getElementById("sortText".concat(num)).style.display = "block";
      document.getElementById("textImg".concat(num)).classList.add("biggerText");
      document.getElementById("circle".concat(num)).classList.add("bigCircle");
      document.querySelector("#textImg".concat(num)).animate({
        transform: "rotate(4300deg)"
      }, {
        duration: 100000,
        fill: "forwards"
      });
    } else {
      for (var i = 1; i <= 7; i++) {
        document.getElementById("sortText".concat(i)).style.display = "none";
        if (document.querySelector("#circle".concat(i)).className.includes("bigCircle")) {
          document.querySelector("#circle".concat(i)).classList.remove("bigCircle");
          document.querySelector("#textImg".concat(i)).classList.remove("biggerText");
          document.querySelector("#textImg".concat(i)).animate({
            transform: "rotate(0deg)"
          }, {
            duration: 1000,
            fill: "forwards"
          });
        }
      }
    }
  });
});
;// ./src/js/articles.js


aos_default().init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 400,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
});
document.addEventListener("DOMContentLoaded", function (e) {
  var item = document.querySelector(".slider");
  window.addEventListener("wheel", function (e) {
    var cl = e.target.className;
    console.log(e.deltaY);
    if (cl == "slider" || cl == "sliderBlock" || cl == "sliderInner" || cl == "slideBack" || cl == "slideH") {
      if (e.deltaY > 0) {
        item.scrollLeft += 100;
      } else {
        item.scrollLeft -= 100;
      }
    }
  });
  document.querySelector(".articlesContainer").addEventListener("mousemove", function (e) {
    if (e.target.className.includes("articleImg")) {
      var idArt = Number(e.target.id.split("")[10]);
      for (var i = 1; i <= 7; i++) {
        if (i != idArt) {
          document.getElementById("articleImg".concat(i)).classList.add("passiveArt");
        }
      }
      document.getElementById("articleImg".concat(idArt)).addEventListener("mouseleave", function (e) {
        for (var _i = 1; _i <= 7; _i++) {
          if (_i != idArt) {
            document.getElementById("articleImg".concat(_i)).classList.remove("passiveArt");
          }
        }
        document.getElementById("articleImg".concat(idArt)).removeEventListener("mouseleave", function (e) {});
      });
    }
  });
  document.querySelector(".articlesContainer").addEventListener("click", function (e) {
    if (e.target.className.includes("articleImg")) {
      var idArt = Number(e.target.id.split("")[10]);
      document.querySelector(".artBlock").style.left = "50%";
      document.querySelector(".background").style.opacity = "0.6";
      document.querySelector(".background").style.pointerEvents = "all";
      document.querySelector(".aArticle".concat(idArt)).style.display = "block";
      document.querySelector(".articlesBody").style.overflow = "hidden";
      document.querySelector(".artBlock").style.overflow = "scroll";
      document.querySelector(".background").addEventListener("click", function (e) {
        document.querySelector(".artBlock").style.left = "100%";
        document.querySelector(".background").style.opacity = "0";
        document.querySelector(".background").style.pointerEvents = "none";
        document.querySelector(".articlesBody").style.overflow = "scroll";
        document.querySelector(".artBlock").style.overflow = "hidden";
        for (var i = 1; i <= 7; i++) {
          document.querySelector(".aArticle".concat(i)).style.display = "none";
        }
        document.querySelector(".background").removeEventListener("click", function (e) {});
      });
    }
  });
  window.addEventListener('scroll', function (e) {
    if (window.pageYOffset >= 0 && window.pageYOffset < 200) {
      document.querySelector(".mainTitle").style.fontSize = "".concat(12 + window.pageYOffset / 18, "vw");
    }
  });
  var interBubble = document.querySelector(".interactive");
  var curX = 0;
  var curY = 0;
  var tgX = 0;
  var tgY = 0;
  function move() {
    curX += (tgX - curX) / 22;
    curY += (tgY - curY) / 22;
    interBubble.style.transform = "translate(".concat(Math.round(curX), "px, ").concat(Math.round(curY), "px)");
    requestAnimationFrame(function () {
      move();
    });
  }
  function back(x, timeFraction) {
    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
  }
  document.querySelector(".mainNav").addEventListener("click", function (e) {
    var click = e.target;
    if (click.classList[0] == "navChoose") {
      navChoose(click.id);
    }
  });
  var cursorDot = document.querySelector(".cursorDot");
  var cursorOutline = document.querySelector(".cursorOutline");
  window.addEventListener("mousemove", function (e) {
    tgX = e.clientX;
    tgY = e.clientY;
    var posX = e.clientX;
    var posY = e.clientY;
    cursorDot.style.left = "".concat(posX, "px");
    cursorDot.style.top = "".concat(posY, "px");
    cursorOutline.animate({
      left: "".concat(posX, "px"),
      top: "".concat(posY, "px")
    }, {
      duration: 500,
      fill: "forwards"
    });
  });
  move();
});
;// ./src/js/loading.js


aos_default().init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 400,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
});
document.addEventListener("DOMContentLoaded", function (e) {
  var interBubble = document.querySelector(".interactive");
  var curX = 0;
  var curY = 0;
  var tgX = 0;
  var tgY = 0;
  function move() {
    curX += (tgX - curX) / 22;
    curY += (tgY - curY) / 22;
    interBubble.style.transform = "translate(".concat(Math.round(curX), "px, ").concat(Math.round(curY), "px)");
    requestAnimationFrame(function () {
      move();
    });
  }
  function back(x, timeFraction) {
    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
  }
  var cursorDot = document.querySelector(".cursorDot");
  var cursorOutline = document.querySelector(".cursorOutline");
  window.addEventListener("mousemove", function (e) {
    tgX = e.clientX;
    tgY = e.clientY;
    var posX = e.clientX;
    var posY = e.clientY;
    cursorDot.style.left = "".concat(posX, "px");
    cursorDot.style.top = "".concat(posY, "px");
    cursorOutline.animate({
      left: "".concat(posX, "px"),
      top: "".concat(posY, "px")
    }, {
      duration: 500,
      fill: "forwards"
    });
  });
  move();
});
;// ./src/index.js




})();

/******/ })()
;
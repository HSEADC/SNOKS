/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };
  var navigation = document.querySelector(".styleguideNav");
  navigation.addEventListener("click", function (e) {
    if (e.target.className == "navTip") {
      console.log(e.target.id.substr(6));
      document.querySelector("#guideTip".concat(e.target.id.substr(6))).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
  document.addEventListener("scroll", function (e) {
    var sc = window.pageYOffset;
    var wv = window.innerWidth;
    var a = sc * 100 / wv;
    if (a > 95 && a < 130) {
      for (var i = 1; i <= 11; i++) {
        if (document.getElementById("navTip".concat(i)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(i)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip1").classList.add("blueNav");
    } else if (a > 130 && a < 199) {
      for (var _i = 1; _i <= 11; _i++) {
        if (document.getElementById("navTip".concat(_i)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip2").classList.add("blueNav");
    } else if (a > 199 && a < 270) {
      for (var _i2 = 1; _i2 <= 11; _i2++) {
        if (document.getElementById("navTip".concat(_i2)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i2)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip3").classList.add("blueNav");
    } else if (a > 270 && a < 384) {
      for (var _i3 = 1; _i3 <= 11; _i3++) {
        if (document.getElementById("navTip".concat(_i3)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i3)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip4").classList.add("blueNav");
    } else if (a > 384 && a < 447) {
      for (var _i4 = 1; _i4 <= 11; _i4++) {
        if (document.getElementById("navTip".concat(_i4)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i4)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip5").classList.add("blueNav");
    } else if (a > 447 && a < 497) {
      for (var _i5 = 1; _i5 <= 11; _i5++) {
        if (document.getElementById("navTip".concat(_i5)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i5)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip6").classList.add("blueNav");
    } else if (a > 497 && a < 597) {
      for (var _i6 = 1; _i6 <= 11; _i6++) {
        if (document.getElementById("navTip".concat(_i6)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i6)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip7").classList.add("blueNav");
    } else if (a > 597 && a < 676) {
      for (var _i7 = 1; _i7 <= 11; _i7++) {
        if (document.getElementById("navTip".concat(_i7)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i7)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip8").classList.add("blueNav");
    } else if (a > 676 && a < 778) {
      for (var _i8 = 1; _i8 <= 11; _i8++) {
        if (document.getElementById("navTip".concat(_i8)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i8)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip9").classList.add("blueNav");
    } else if (a > 778 && a < 836) {
      for (var _i9 = 1; _i9 <= 11; _i9++) {
        if (document.getElementById("navTip".concat(_i9)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i9)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip10").classList.add("blueNav");
    } else if (a > 836 && a < 1212) {
      for (var _i10 = 1; _i10 <= 11; _i10++) {
        if (document.getElementById("navTip".concat(_i10)).classList.contains("blueNav")) {
          document.getElementById("navTip".concat(_i10)).classList.remove("blueNav");
        }
      }
      document.getElementById("navTip11").classList.add("blueNav");
    }
  });
});
/******/ })()
;
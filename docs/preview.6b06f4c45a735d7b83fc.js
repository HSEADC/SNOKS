/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };

  // phoneBurger

  if (window.innerHeight > window.innerWidth) {
    document.querySelector("#mobileNav").style.display = "block";
    var flagNav = false;
    var burger = document.querySelector(".burger");
    document.querySelector(".navigation").style.display = "none";
    burger.addEventListener("click", function () {
      burger.classList.toggle("open");
      if (!flagNav) {
        flagNav = true;
        document.querySelector(".burgerNav").style.display = "block";
        setTimeout(function () {
          document.querySelector("#mobileNav").style.backgroundColor = "var(--blue)";
          document.querySelector(".burgerNav").style.opacity = "1";
        }, 0);
      } else {
        flagNav = false;
        document.querySelector("#mobileNav").style.backgroundColor = "transparent";
        document.querySelector(".burgerNav").style.opacity = "0";
        setTimeout(function () {
          document.querySelector(".burgerNav").style.display = "none";
        }, 300);
      }
    });
  } else {
    document.querySelector("#pcNav").style.display = "block";
  }

  //

  // resize reload

  window.addEventListener('resize', function (event) {
    location.reload();
  });

  //
});
/******/ })()
;
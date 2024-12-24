/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

document.addEventListener("DOMContentLoaded", function (e) {
  var facts = document.querySelector(".factsContainer");

  // factsAnimations

  facts.addEventListener("mouseover", function (e) {
    var fact = e.target;
    if (fact.className == "btnCircle") {
      var num = fact.id.split("")[9];
      console.log(num);
      document.getElementById("factText".concat(num)).style.display = "block";
      document.getElementById("factText".concat(num)).style.opacity = "1";
      document.getElementById("btnText".concat(num)).classList.add("biggerText");
      document.getElementById("btnCircle".concat(num)).classList.add("bigCircle");
      document.querySelector("#btnText".concat(num)).animate({
        transform: "rotate(4300deg)"
      }, {
        duration: 100000,
        fill: "forwards"
      });
    } else {
      for (var i = 1; i <= 5; i++) {
        document.getElementById("factText".concat(i)).style.opacity = "0";
        document.getElementById("factText".concat(i)).style.display = "none";
        if (document.querySelector("#btnCircle".concat(i)).className.includes("bigCircle")) {
          document.querySelector("#btnCircle".concat(i)).classList.remove("bigCircle");
          document.querySelector("#btnText".concat(i)).classList.remove("biggerText");
          document.querySelector("#btnText".concat(i)).animate({
            transform: "rotate(0deg)"
          }, {
            duration: 1000,
            fill: "forwards"
          });
        }
      }
    }
  });

  //

  var articles = {
    1: {
      name: "Почему дети плохо спят?",
      text: "",
      img: "./images/aboutUs/article1.webp"
    },
    2: {
      name: "Как помочь ребенку спать лучше?",
      text: "",
      img: "./images/aboutUs/article1.webp"
    },
    3: {
      name: "Почему малыши не спят крепко?",
      text: "",
      img: "./images/aboutUs/article1.webp"
    },
    4: {
      name: "Причины бессоницы",
      text: "",
      img: "./images/aboutUs/article1.webp"
    },
    5: {
      name: "10 фактов о дневном сне",
      text: "",
      img: "./images/aboutUs/article1.webp"
    }
  };
  for (var i; i <= 5; i++) {
    console.log(i);
  }
  function nextArticle() {}
});
/******/ })()
;
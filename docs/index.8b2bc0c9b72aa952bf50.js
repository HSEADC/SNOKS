/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };

  // factsAnimations

  var facts = document.querySelector(".factsContainer");
  if (screen.orientation.type == "landscape-primary" || screen.orientation.type == "landscape-secondary") {
    facts.addEventListener("mouseover", function (e) {
      var fact = e.target;
      if (fact.className == "btnCircle") {
        var num = fact.id.split("")[9];
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
  }
  if (screen.orientation.type == "portrait-primary" || screen.orientation.type == "portrait-secondary") {
    facts.addEventListener("click", function (e) {
      var fact = e.target;
      if (fact.className == "btnCircle") {
        var num = fact.id.split("")[9];
        for (var i = 1; i <= 5; i++) {
          if (document.querySelector("#btnCircle".concat(i)).className.includes("bigCircle")) {
            document.querySelector("#btnCircle".concat(i)).classList.remove("bigCircle");
            document.querySelector("#btnText".concat(i)).classList.remove("biggerText");
            document.getElementById("factText".concat(i)).style.opacity = "0";
            document.getElementById("factText".concat(i)).style.display = "none";
          }
        }
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
        for (var _i = 1; _i <= 5; _i++) {
          document.getElementById("factText".concat(_i)).style.opacity = "0";
          document.getElementById("factText".concat(_i)).style.display = "none";
          if (document.querySelector("#btnCircle".concat(_i)).className.includes("bigCircle")) {
            document.querySelector("#btnCircle".concat(_i)).classList.remove("bigCircle");
            document.querySelector("#btnText".concat(_i)).classList.remove("biggerText");
            document.querySelector("#btnText".concat(_i)).animate({
              transform: "rotate(0deg)"
            }, {
              duration: 1000,
              fill: "forwards"
            });
          }
        }
      }
    });
  }

  //

  // articles swipe animation

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
  var articlesContainer = document.querySelector(".articlesContainer");
  articlesContainer.addEventListener("click", function (e) {
    if (e.target.classList[0] == "arrow") {
      if (e.target.classList[1] == "arLeft") {
        document.querySelector(".arLeft").animate([{
          transform: "translateX(0px)"
        }, {
          transform: "translateX(-30px)"
        }, {
          transform: "translateX(0px)"
        }], {
          duration: 300,
          fill: "forwards",
          iterations: 1
        });
        previousArticle(Number(findActiveArticle()));
      } else {
        document.querySelector(".arRight").animate([{
          transform: "translateX(0px)"
        }, {
          transform: "translateX(+30px)"
        }, {
          transform: "translateX(0px)"
        }], {
          duration: 300,
          fill: "forwards",
          iterations: 1
        });
        nextArticle(Number(findActiveArticle()));
      }
    }
  });
  function findActiveArticle() {
    for (var i = 1; i <= 5; i++) {
      if (document.querySelector("#circlePick".concat(i)).classList.contains("picked")) {
        return i;
      }
    }
  }
  function previousArticle(n) {
    if (n > 1) {
      document.querySelector("#circlePick".concat(n)).classList.remove("picked");
      n -= 1;
      document.querySelector("#circlePick".concat(n)).classList.add("picked");
      document.querySelector(".articleCard").style.backgroundImage = "url('".concat(articles[n].img, "')");
    } else {
      document.querySelector("#circlePick".concat(n)).classList.remove("picked");
      n = 5;
      document.querySelector("#circlePick".concat(n)).classList.add("picked");
      document.querySelector(".articleCard").style.backgroundImage = "url('".concat(articles[n].img, "')");
    }
  }
  function nextArticle(n) {
    if (n < 5) {
      document.querySelector("#circlePick".concat(n)).classList.remove("picked");
      n += 1;
      document.querySelector("#circlePick".concat(n)).classList.add("picked");
      document.querySelector(".articleCard").style.backgroundImage = "url('".concat(articles[n].img, "')");
    } else {
      document.querySelector("#circlePick".concat(n)).classList.remove("picked");
      n = 1;
      document.querySelector("#circlePick".concat(n)).classList.add("picked");
      document.querySelector(".articleCard").style.backgroundImage = "url('".concat(articles[n].img, "')");
    }
  }

  //
});
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/images/preview/logo.svg
const logo_namespaceObject = __webpack_require__.p + "images/752f59445ba13b14576d.svg";
;// ./src/images/aboutUs/logoHeader.webp
const logoHeader_namespaceObject = __webpack_require__.p + "images/dfe2dfcce3cd6ec99721.webp";
;// ./src/images/tests/1.webp
const _1_namespaceObject = __webpack_require__.p + "images/6dba095370c3d784f775.webp";
;// ./src/images/tests/2.webp
const _2_namespaceObject = __webpack_require__.p + "images/e04057da52fc5dd6bae1.webp";
;// ./src/images/tests/3.webp
const _3_namespaceObject = __webpack_require__.p + "images/8496346dca1c678f01b6.webp";
;// ./src/images/tests/4.webp
const _4_namespaceObject = __webpack_require__.p + "images/a324afd9ed3e82e90fe8.webp";
;// ./src/images/tests/5.webp
const _5_namespaceObject = __webpack_require__.p + "images/c908890d71bb93bc4118.webp";
;// ./src/images/tests/6.webp
const _6_namespaceObject = __webpack_require__.p + "images/677749a58ab0def621a5.webp";
;// ./src/js/test.js










//import { read, writeFileXLSX } from "xlsx";

/* load the codepage support library for extended support with older formats  */
//import { set_cptable } from "xlsx";
//import * as cptable from 'xlsx/dist/cpexcel.full.mjs';
//set_cptable(cptable);

var imagesTests = {
  1: _1_namespaceObject,
  2: _2_namespaceObject,
  3: _3_namespaceObject,
  4: _4_namespaceObject,
  5: _5_namespaceObject,
  6: _6_namespaceObject
};
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.addEventListener("DOMContentLoaded", function (e) {
  window.onload = function () {
    setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      document.getElementById("preloader").style.pointerEvents = "none";
    }, 1200);
  };
  var answers = {};
  var flag = false;
  progressCheck();
  function progressCheck() {
    var a = JSON.parse(localStorage.getItem('progress'));
    if (a) {
      answers = a[0];
      flag = a[1];
    }
  }
  console.log(answers, flag);

  /* phoneBurger */

  if (window.innerHeight > window.innerWidth) {
    document.querySelector("main").style.marginTop = "25vw";
    document.querySelector("#mobileNav").style.display = "block";
    var flagNav = false;
    var burger = document.querySelector(".burger");
    document.querySelector(".o_menubarContainer").style.display = "none";
    burger.addEventListener("click", function () {
      burger.classList.toggle("open");
      if (!flagNav) {
        flagNav = true;
        document.querySelector("#mobileNav").style.backgroundColor = "var(--blue)";
        document.querySelector(".burgerNav").style.display = "block";
        setTimeout(function () {
          document.querySelector(".burgerNav").style.opacity = "1";
          document.querySelector("#mobileLogo").style.backgroundImage = "url(\"".concat(logo_namespaceObject, "\")");
          document.querySelector("#mobileLogo").style.backgroundSize = "78% 78%";
          document.querySelector("#mobileLogo").style.backgroundPosition = "20% 50%";
        }, 0);
      } else {
        flagNav = false;
        document.querySelector(".burgerNav").style.opacity = "0";
        document.querySelector("#mobileNav").style.backgroundColor = "var(--white)";
        document.querySelector("#mobileLogo").style.backgroundImage = "url(\"".concat(logoHeader_namespaceObject, "\")");
        document.querySelector("#mobileLogo").style.backgroundSize = "120% 100%";
        setTimeout(function () {
          document.querySelector(".burgerNav").style.display = "none";
        }, 300);
      }
    });
  } else {
    document.querySelector("#pcNav").style.display = "block";
  }

  /* */

  /* generateQuestion */

  var testData;
  if (localStorage.getItem('test')) {
    testData = JSON.parse(localStorage.getItem('test'));
    document.querySelector(".testCard").style.backgroundImage = "url(".concat(imagesTests[testData[1]], ")");
    document.querySelector(".testName").textContent = "".concat(testData[0].name);
    document.querySelector("h1").textContent = "".concat(testData[0].name);
    document.querySelector("#goIcon").addEventListener("click", function (e) {
      window.location.href = '../tests.html';
    });
  }
  console.log(testData);

  /* testUIShow */

  if (flag) {
    var generateQuestion = function generateQuestion(answers, id, clicked) {
      resetAnswers();
      document.querySelector(".num").textContent = "".concat(id, "/").concat(Object.keys(testData[0].questions).length);
      document.querySelector(".question").textContent = "".concat(answers.text);
      var container = document.querySelector(".answers");
      var count = 0;
      for (var elem in answers.answers) {
        var btn = document.createElement("button");
        btn.classList.add("answer");
        btn.id = "".concat(alphabet[count]);
        if (btn.id == clicked[id]) {
          console.log("dfdfdfsdfgdgfdfgfd", clicked);
          btn.classList.add("clicked");
        }
        container.append(btn);
        var answer = document.createElement("p");
        answer.textContent = "".concat(answers.answers[elem]);
        btn.append(answer);
        var tip = document.createElement('p');
        tip.classList.add("answerTip");
        tip.textContent = "".concat(alphabet.split("")[count]);
        btn.append(tip);
        count++;
      }

      /* navCircles */

      if (id == 1 && id != Object.keys(testData[0].questions).length) {
        document.getElementById("next").style.opacity = "1";
        document.getElementById("next").style.pointerEvents = "all";
        document.getElementById("prev").style.opacity = "0";
        document.getElementById("prev").style.pointerEvents = "none";
      } else if (id == Object.keys(testData[0].questions).length && id != 1) {
        document.getElementById("next").style.opacity = "0";
        document.getElementById("next").style.pointerEvents = "none";
        document.getElementById("prev").style.opacity = "1";
        document.getElementById("prev").style.pointerEvents = "all";
      } else {
        document.getElementById("prev").style.opacity = "1";
        document.getElementById("prev").style.pointerEvents = "all";
        document.getElementById("next").style.opacity = "1";
        document.getElementById("next").style.pointerEvents = "all";
      }
      if (id == Object.keys(testData[0].questions).length) {
        document.getElementById("result").style.display = "block";
        if (!clicked[id]) {
          document.getElementById("result").style.opacity = "0.6";
          document.getElementById("result").style.pointerEvents = "none";
        } else {
          document.getElementById("result").style.opacity = "1";
          document.getElementById("result").style.pointerEvents = "all";
        }
      } else {
        document.getElementById("result").style.display = "none";
      }
      if (!clicked[id] && !(id == Object.keys(testData[0].questions).length)) {
        document.getElementById("next").style.opacity = "0.6";
        document.getElementById("next").style.pointerEvents = "none";
      }

      /* */
    };
    var btnClicked = function btnClicked(a) {
      var id = a[0];
      var answers = a[1];
      var question = a[2];
      answers[question] = id;
      console.log(answers);
      if (!(question == Object.keys(testData[0].questions).length)) {
        document.getElementById("next").style.opacity = "1";
        document.getElementById("next").style.pointerEvents = "all";
      } else {
        document.getElementById("result").style.opacity = "1";
        document.getElementById("result").style.pointerEvents = "all";
      }
      document.querySelectorAll(".answer").forEach(function (answer) {
        if (answer.classList.contains("clicked")) {
          answer.classList.remove("clicked");
        }
      });
      localStorage.setItem("progress", JSON.stringify([answers, question]));
      document.querySelector("#".concat(id)).classList.add("clicked");
    };
    var resetAnswers = function resetAnswers() {
      document.querySelectorAll(".answer").forEach(function (answer) {
        document.querySelector(".answers").removeChild(answer);
      });
    };
    var countResult = function countResult(answers) {
      var array = [];
      for (var elem in answers) {
        array.push(answers[elem]);
      }
      console.log(array);
      return array.sort(function (a, b) {
        return array.filter(function (v) {
          return v === a;
        }).length - array.filter(function (v) {
          return v === b;
        }).length;
      }).pop();
    };
    document.getElementById("testUI").style.display = "flex";
    document.getElementById("testTitle").style.display = "none";
    var id = flag;
    document.querySelector(".answers").addEventListener("click", function (e) {
      if (e.target.classList.contains("answer")) {
        btnClicked([e.target.id, answers, id]);
      }
    });
    document.querySelector(".navigationCircles").addEventListener("click", function (e) {
      if (e.target.id == "prev") {
        id -= 1;
        generateQuestion(testData[0].questions["question".concat(id)], id, answers);
      } else if (e.target.id == "next") {
        console.log(Object.keys(testData[0].questions).length);
        id += 1;
        generateQuestion(testData[0].questions["question".concat(id)], id, answers);
      }
    });

    /* */

    generateQuestion(testData[0].questions["question".concat(id)], id, answers);
    document.querySelector(".navResults").addEventListener("click", function (e) {
      console.log(countResult(answers));
      document.querySelector("#testUI").style.display = "none";
      document.querySelector("#resultUI").style.display = "block";
      document.querySelector(".resultMainText").textContent = "".concat(testData[0].results[countResult(answers)][1]);
      document.querySelector(".resultTitle").textContent = "".concat(testData[0].results[countResult(answers)][0]);
    });
  }

  /* startFromStart */

  document.querySelector(".startTest").addEventListener("click", function (e) {
    document.getElementById("testUI").style.display = "flex";
    document.getElementById("testTitle").style.display = "none";
    var id = 1;
    document.querySelector(".answers").addEventListener("click", function (e) {
      if (e.target.classList.contains("answer")) {
        btnClicked([e.target.id, answers, id]);
      }
    });
    document.querySelector(".navigationCircles").addEventListener("click", function (e) {
      if (e.target.id == "prev") {
        id -= 1;
        generateQuestion(testData[0].questions["question".concat(id)], id, answers);
      } else if (e.target.id == "next") {
        console.log(Object.keys(testData[0].questions).length);
        id += 1;
        generateQuestion(testData[0].questions["question".concat(id)], id, answers);
      }
    });

    /* */

    generateQuestion(testData[0].questions["question".concat(id)], id, answers);
    function generateQuestion(answers, id, clicked) {
      resetAnswers();
      document.querySelector(".num").textContent = "".concat(id, "/").concat(Object.keys(testData[0].questions).length);
      document.querySelector(".question").textContent = "".concat(answers.text);
      var container = document.querySelector(".answers");
      var count = 0;
      for (var elem in answers.answers) {
        var btn = document.createElement("button");
        btn.classList.add("answer");
        btn.id = "".concat(alphabet[count]);
        if (btn.id == clicked[id]) {
          console.log("dfdfdfsdfgdgfdfgfd", clicked);
          btn.classList.add("clicked");
        }
        container.append(btn);
        var answer = document.createElement("p");
        answer.textContent = "".concat(answers.answers[elem]);
        btn.append(answer);
        var tip = document.createElement('p');
        tip.classList.add("answerTip");
        tip.textContent = "".concat(alphabet.split("")[count]);
        btn.append(tip);
        count++;
      }

      /* navCircles */

      if (id == 1 && id != Object.keys(testData[0].questions).length) {
        document.getElementById("next").style.opacity = "1";
        document.getElementById("next").style.pointerEvents = "all";
        document.getElementById("prev").style.opacity = "0";
        document.getElementById("prev").style.pointerEvents = "none";
      } else if (id == Object.keys(testData[0].questions).length && id != 1) {
        document.getElementById("next").style.opacity = "0";
        document.getElementById("next").style.pointerEvents = "none";
        document.getElementById("prev").style.opacity = "1";
        document.getElementById("prev").style.pointerEvents = "all";
      } else {
        document.getElementById("prev").style.opacity = "1";
        document.getElementById("prev").style.pointerEvents = "all";
        document.getElementById("next").style.opacity = "1";
        document.getElementById("next").style.pointerEvents = "all";
      }
      if (id == Object.keys(testData[0].questions).length) {
        document.getElementById("result").style.display = "block";
        if (!clicked[id]) {
          document.getElementById("result").style.opacity = "0.6";
          document.getElementById("result").style.pointerEvents = "none";
        } else {
          document.getElementById("result").style.opacity = "1";
          document.getElementById("result").style.pointerEvents = "all";
        }
      } else {
        document.getElementById("result").style.display = "none";
      }
      if (!clicked[id] && !(id == Object.keys(testData[0].questions).length)) {
        document.getElementById("next").style.opacity = "0.6";
        document.getElementById("next").style.pointerEvents = "none";
      }

      /* */
    }
    function btnClicked(a) {
      var id = a[0];
      var answers = a[1];
      var question = a[2];
      answers[question] = id;
      if (!(question == Object.keys(testData[0].questions).length)) {
        document.getElementById("next").style.opacity = "1";
        document.getElementById("next").style.pointerEvents = "all";
      } else {
        document.getElementById("result").style.opacity = "1";
        document.getElementById("result").style.pointerEvents = "all";
      }
      document.querySelectorAll(".answer").forEach(function (answer) {
        if (answer.classList.contains("clicked")) {
          answer.classList.remove("clicked");
        }
      });
      localStorage.setItem("progress", JSON.stringify([answers, question]));
      document.querySelector("#".concat(id)).classList.add("clicked");
    }
    function resetAnswers() {
      document.querySelectorAll(".answer").forEach(function (answer) {
        document.querySelector(".answers").removeChild(answer);
      });
    }
    function countResult(answers) {
      var array = [];
      for (var elem in answers) {
        array.push(answers[elem]);
      }
      console.log(array);
      return array.sort(function (a, b) {
        return array.filter(function (v) {
          return v === a;
        }).length - array.filter(function (v) {
          return v === b;
        }).length;
      }).pop();
    }
    document.querySelector(".navResults").addEventListener("click", function (e) {
      console.log(countResult(answers));
      document.querySelector("#testUI").style.display = "none";
      document.querySelector("#resultUI").style.display = "block";
      document.querySelector(".resultMainText").textContent = "".concat(testData[0].results[countResult(answers)][1]);
      document.querySelector(".resultTitle").textContent = "".concat(testData[0].results[countResult(answers)][0]);
    });

    /* 
        var workbook = XLSX.read("../shh.xlsx", {type: "string"});
        let worksheets = {};
        let SheetName = workbook.SheetNames[0]
    
        let newWorkBook = workbook // create new workbook
        newWorkBook.Sheets[SheetName]['A1'] = "Номер теста"
        newWorkBook.Sheets[SheetName]['B1'] = "Название" // assign new value // assign new value
      
        //XLSX.writeFile(newWorkBook, "../shh.xlsx") // write the same file with new values
        //console.log(newWorkBook.Sheets[SheetName]['A1'].v) // outputs : New Value
        //const da =  XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
        // console.log(sheet_name_list)
          let workSheetColumnName = [
            "номер",
            "имя",
        ]
        for (let i = 1; i <= 15; i++) {
            workSheetColumnName.push(i)
        }
          let answersData = [
            testData[1],
            testData[0].name
        ]
        
        for (let answer in answers) {
            answersData.push(answers[answer])
        }
    
        const workSheetName = 'answers';
        const filePath = '../shh.xlsx';
          const exportExcel = (answersData, workSheetColumnNames, workSheetName, filePath) => {
            const workBook = XLSX.utils.book_new();
            const workSheetData = [
                workSheetColumnNames,
                answersData
            ];
              const workSheet = XLSX.utils.aoa_to_sheet(workSheetData);
            XLSX.utils.book_append_sheet(workBook, workSheet, workSheetName);
            XLSX.writeFile(workBook,"shh.xlsx");
        }
          const exportUsersToExcel = (workSheetColumnNames, workSheetName, filePath) => {
            exportExcel(answersData, workSheetColumnNames, workSheetName, filePath);
        }
        exportUsersToExcel(workSheetColumnName, workSheetName, filePath);
    
            */
  });

  /* */

  // resize reload

  //   window.addEventListener('resize', function(event){
  //       location.reload()
  //  });

  //
});
/******/ })()
;
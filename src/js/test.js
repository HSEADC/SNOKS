import '../test.css';
import svgLogo from '../images/preview/logo.svg';
import pngLogo from '../images/aboutUs/logoHeader.webp';
import imgTest1 from '../images/tests/1.webp';
import imgTest2 from '../images/tests/2.webp';
import imgTest3 from '../images/tests/3.webp';
import imgTest4 from '../images/tests/4.webp';
import imgTest5 from '../images/tests/5.webp';
import imgTest6 from '../images/tests/6.webp';

//import { read, writeFileXLSX } from "xlsx";

/* load the codepage support library for extended support with older formats  */
//import { set_cptable } from "xlsx";
//import * as cptable from 'xlsx/dist/cpexcel.full.mjs';
//set_cptable(cptable);

const imagesTests = {
    1: imgTest1,
    2: imgTest2,
    3: imgTest3,
    4: imgTest4,
    5: imgTest5,
    6: imgTest6,
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


document.addEventListener("DOMContentLoaded", (e) => {
 
    window.onload = function() { 
        setTimeout( () => {
            document.getElementById("preloader").style.opacity="0";
            document.getElementById("preloader").style.pointerEvents="none"
        }
        , 1200)
        
    };

    let answers = {}
    let flag = false
    progressCheck()

    function progressCheck() {
        let a = JSON.parse(localStorage.getItem('progress'))
        if (a) {
            answers = a[0]
            flag = a[1]
            
        }
    }

    console.log(answers, flag)

/* phoneBurger */
    
    if (window.innerHeight > window.innerWidth) { 
        document.querySelector("main").style.marginTop="25vw"
        document.querySelector("#mobileNav").style.display="block"
        let flagNav = false;
        const burger = document.querySelector(".burger");
        document.querySelector(".o_menubarContainer").style.display="none";
        burger.addEventListener("click", function() {
            burger.classList.toggle("open");
            if (!flagNav) {
                flagNav = true;
                document.querySelector("#mobileNav").style.backgroundColor="var(--blue)"
                document.querySelector(".burgerNav").style.display="block"
                setTimeout(()=> {
                    document.querySelector(".burgerNav").style.opacity="1";
                    document.querySelector("#mobileLogo").style.backgroundImage=`url("${svgLogo}")`
                    document.querySelector("#mobileLogo").style.backgroundSize="78% 78%";
                    document.querySelector("#mobileLogo").style.backgroundPosition="20% 50%"
                }, 0)
            } else {
                flagNav = false;
                document.querySelector(".burgerNav").style.opacity="0";
                document.querySelector("#mobileNav").style.backgroundColor="var(--white)"
                document.querySelector("#mobileLogo").style.backgroundImage=`url("${pngLogo}")`
                document.querySelector("#mobileLogo").style.backgroundSize="120% 100%"
                setTimeout(()=> {
                    document.querySelector(".burgerNav").style.display="none"
                }, 300)
            }
        });
    
    
    } else {
        document.querySelector("#pcNav").style.display="block"
    }
    
/* */



/* generateQuestion */


    let testData;
    if (localStorage.getItem('test')) {
        testData = JSON.parse(localStorage.getItem('test'));
        document.querySelector(".testCard").style.backgroundImage=`url(${imagesTests[testData[1]]})`;
        document.querySelector(".testName").textContent=`${testData[0].name}`;
        document.querySelector("h1").textContent=`${testData[0].name}`;

        document.querySelector("#goIcon").addEventListener("click", (e) => {
            window.location.href = '../tests.html';
        })
    }

    console.log(testData)

    /* testUIShow */

    if (flag) {
        document.getElementById("testUI").style.display="flex";
        document.getElementById("testTitle").style.display="none";

        let id = flag;


        document.querySelector(".answers").addEventListener("click", (e) => {
            if (e.target.classList.contains("answer")) {
                btnClicked([e.target.id, answers, id])
            }
        })


        document.querySelector(".navigationCircles").addEventListener("click", (e) => {


            if (e.target.id == "prev") {
                id -= 1
                generateQuestion(testData[0].questions[`question${id}`], id, answers) 
            } else if (e.target.id == "next") {
                console.log(Object.keys(testData[0].questions).length)
                id += 1
                generateQuestion(testData[0].questions[`question${id}`], id, answers) 
            }
        })

    /* */


        generateQuestion(testData[0].questions[`question${id}`], id, answers) 

        function generateQuestion(answers, id, clicked) {
            resetAnswers()
            
            document.querySelector(".num").textContent=`${id}/${Object.keys(testData[0].questions).length}`

            document.querySelector(".question").textContent=`${answers.text}`

            const container = document.querySelector(".answers")
            let count = 0;
            for (let elem in answers.answers) {
                const btn = document.createElement("button");
                btn.classList.add("answer");
                btn.id = `${alphabet[count]}`;
                if (btn.id == clicked[id]) {
                    console.log("dfdfdfsdfgdgfdfgfd", clicked)
                    btn.classList.add("clicked")
                }
                container.append(btn);
                const answer = document.createElement("p");
                answer.textContent=`${answers.answers[elem]}`
                btn.append(answer);

                const tip = document.createElement('p');
                tip.classList.add("answerTip");
                tip.textContent=`${alphabet.split("")[count]}`
                btn.append(tip);

                count++
            }

 /* navCircles */

            if (id == 1 && id != Object.keys(testData[0].questions).length) {
                document.getElementById("next").style.opacity="1";
                document.getElementById("next").style.pointerEvents="all";

                document.getElementById("prev").style.opacity="0";
                document.getElementById("prev").style.pointerEvents="none";
            } else if (id == Object.keys(testData[0].questions).length && id != 1) {
                document.getElementById("next").style.opacity="0";
                document.getElementById("next").style.pointerEvents="none";

                document.getElementById("prev").style.opacity="1";
                document.getElementById("prev").style.pointerEvents="all";
            } else {
                document.getElementById("prev").style.opacity="1";
                document.getElementById("prev").style.pointerEvents="all";
                document.getElementById("next").style.opacity="1";
                document.getElementById("next").style.pointerEvents="all";
            }

            if (id == Object.keys(testData[0].questions).length) {
                document.getElementById("result").style.display="block";
                if (!clicked[id]) {
                    document.getElementById("result").style.opacity="0.6";
                    document.getElementById("result").style.pointerEvents="none";
                } else {
                    document.getElementById("result").style.opacity="1";
                    document.getElementById("result").style.pointerEvents="all";
                }
            } else {
                document.getElementById("result").style.display="none";
            }

            if (!clicked[id] && !(id == Object.keys(testData[0].questions).length)) {
                document.getElementById("next").style.opacity="0.6";
                document.getElementById("next").style.pointerEvents="none";
            }
            

/* */
        }

        function btnClicked(a) {

            let id = a[0];
            let answers = a[1]
            let question = a[2]
            answers[question] = id
            console.log(answers)

            if (!(question == Object.keys(testData[0].questions).length)) {
                document.getElementById("next").style.opacity="1";
                document.getElementById("next").style.pointerEvents="all";
            } else {
                document.getElementById("result").style.opacity="1";
                document.getElementById("result").style.pointerEvents="all";
            }

            document.querySelectorAll(".answer").forEach(answer => {
                if (answer.classList.contains("clicked")) {
                    answer.classList.remove("clicked")
                }
            })

            localStorage.setItem("progress", JSON.stringify([answers, question]));

            document.querySelector(`#${id}`).classList.add("clicked")
        }

        function resetAnswers() {
            document.querySelectorAll(".answer").forEach(answer => {
                document.querySelector(".answers").removeChild(answer)
            })
        } 

        function countResult(answers) {
            let array = []
            for (let elem in answers) {
                array.push(answers[elem])
            }
            console.log(array)
            return array.sort((a,b) => array.filter(v => v===a).length - array.filter(v => v===b).length).pop();
        }


        document.querySelector(".navResults").addEventListener("click", (e) => {
            console.log(countResult(answers)) 
            
            document.querySelector("#testUI").style.display="none";
            document.querySelector("#resultUI").style.display="block";
            document.querySelector(".resultMainText").textContent=`${testData[0].results[countResult(answers)][1]}`
                        document.querySelector(".resultTitle").textContent=`${testData[0].results[countResult(answers)][0]}`
        })
    }


















/* startFromStart */

    document.querySelector(".startTest").addEventListener("click", (e) => {
        document.getElementById("testUI").style.display="flex";
        document.getElementById("testTitle").style.display="none";

        let id = 1;

        document.querySelector(".answers").addEventListener("click", (e) => {
            if (e.target.classList.contains("answer")) {
                btnClicked([e.target.id, answers, id])
            }
        })


        document.querySelector(".navigationCircles").addEventListener("click", (e) => {


            if (e.target.id == "prev") {
                id -= 1
                generateQuestion(testData[0].questions[`question${id}`], id, answers) 
            } else if (e.target.id == "next") {
                console.log(Object.keys(testData[0].questions).length)
                id += 1
                generateQuestion(testData[0].questions[`question${id}`], id, answers) 
            }
        })

    /* */


        generateQuestion(testData[0].questions[`question${id}`], id, answers) 

        function generateQuestion(answers, id, clicked) {
            resetAnswers()
            
            document.querySelector(".num").textContent=`${id}/${Object.keys(testData[0].questions).length}`

            document.querySelector(".question").textContent=`${answers.text}`

            const container = document.querySelector(".answers")
            let count = 0;
            for (let elem in answers.answers) {
                const btn = document.createElement("button");
                btn.classList.add("answer");
                btn.id = `${alphabet[count]}`;
                if (btn.id == clicked[id]) {
                    console.log("dfdfdfsdfgdgfdfgfd", clicked)
                    btn.classList.add("clicked")
                }
                container.append(btn);
                const answer = document.createElement("p");
                answer.textContent=`${answers.answers[elem]}`
                btn.append(answer);

                const tip = document.createElement('p');
                tip.classList.add("answerTip");
                tip.textContent=`${alphabet.split("")[count]}`
                btn.append(tip);

                count++
            }

 /* navCircles */

            if (id == 1 && id != Object.keys(testData[0].questions).length) {
                document.getElementById("next").style.opacity="1";
                document.getElementById("next").style.pointerEvents="all";

                document.getElementById("prev").style.opacity="0";
                document.getElementById("prev").style.pointerEvents="none";
            } else if (id == Object.keys(testData[0].questions).length && id != 1) {
                document.getElementById("next").style.opacity="0";
                document.getElementById("next").style.pointerEvents="none";

                document.getElementById("prev").style.opacity="1";
                document.getElementById("prev").style.pointerEvents="all";
            } else {
                document.getElementById("prev").style.opacity="1";
                document.getElementById("prev").style.pointerEvents="all";
                document.getElementById("next").style.opacity="1";
                document.getElementById("next").style.pointerEvents="all";
            }

            if (id == Object.keys(testData[0].questions).length) {
                document.getElementById("result").style.display="block";
                if (!clicked[id]) {
                    document.getElementById("result").style.opacity="0.6";
                    document.getElementById("result").style.pointerEvents="none";
                } else {
                    document.getElementById("result").style.opacity="1";
                    document.getElementById("result").style.pointerEvents="all";
                }
            } else {
                document.getElementById("result").style.display="none";
            }

            if (!clicked[id] && !(id == Object.keys(testData[0].questions).length)) {
                document.getElementById("next").style.opacity="0.6";
                document.getElementById("next").style.pointerEvents="none";
            }

/* */
        }

        function btnClicked(a) {
            let id = a[0];
            let answers = a[1]
            let question = a[2]
            answers[question] = id

            if (!(question == Object.keys(testData[0].questions).length)) {
                document.getElementById("next").style.opacity="1";
                document.getElementById("next").style.pointerEvents="all";
            } else {
                document.getElementById("result").style.opacity="1";
                document.getElementById("result").style.pointerEvents="all";
            }


            document.querySelectorAll(".answer").forEach(answer => {
                if (answer.classList.contains("clicked")) {
                    answer.classList.remove("clicked")
                }
            })

            localStorage.setItem("progress", JSON.stringify([answers, question]));

            document.querySelector(`#${id}`).classList.add("clicked")
        }

        function resetAnswers() {
            document.querySelectorAll(".answer").forEach(answer => {
                document.querySelector(".answers").removeChild(answer)
            })
        } 

        function countResult(answers) {
            let array = []
            for (let elem in answers) {
                array.push(answers[elem])
            }
            console.log(array)
            return array.sort((a,b) => array.filter(v => v===a).length - array.filter(v => v===b).length).pop();
        }


        document.querySelector(".navResults").addEventListener("click", (e) => {
            console.log(countResult(answers)) 
            
            document.querySelector("#testUI").style.display="none";
            document.querySelector("#resultUI").style.display="block";
            document.querySelector(".resultMainText").textContent=`${testData[0].results[countResult(answers)][1]}`
                        document.querySelector(".resultTitle").textContent=`${testData[0].results[countResult(answers)][0]}`
        })


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

        

    })


/* */


// resize reload

 //   window.addEventListener('resize', function(event){
 //       location.reload()
  //  });

//


})
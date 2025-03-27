import '../index.css';
import svgLogo from '../images/preview/logo.svg';
import pngLogo from '../images/aboutUs/logoHeader.webp';
import imgTest1 from '../images/tests/1.webp';
import imgTest2 from '../images/tests/2.webp';
import imgTest3 from '../images/tests/3.webp';
import imgTest4 from '../images/tests/4.webp';
import imgTest5 from '../images/tests/5.webp';
import imgTest6 from '../images/tests/6.webp';

import res1A from '../images/tests/results/1A.webp';
import res1B from '../images/tests/results/1B.webp';
import res1C from '../images/tests/results/1C.webp';
import res1D from '../images/tests/results/1D.webp';

import res2A from '../images/tests/results/2A.webp';
import res2B from '../images/tests/results/2B.webp';
import res2C from '../images/tests/results/2C.webp';
import res2D from '../images/tests/results/2D.webp';

import res3A from '../images/tests/results/3A.webp';
import res3B from '../images/tests/results/3B.webp';
import res3C from '../images/tests/results/3C.webp';
import res3D from '../images/tests/results/3D.webp';

import res4A from '../images/tests/results/4A.webp';
import res4B from '../images/tests/results/4B.webp';
import res4C from '../images/tests/results/4C.webp';
import res4D from '../images/tests/results/4D.webp';

import res5A from '../images/tests/results/5A.webp';
import res5B from '../images/tests/results/5B.webp';
import res5C from '../images/tests/results/5C.webp';
import res5D from '../images/tests/results/5D.webp';

import res6A from '../images/tests/results/6A.webp';
import res6B from '../images/tests/results/6B.webp';
import res6C from '../images/tests/results/6C.webp';
import res6D from '../images/tests/results/6D.webp';

import res7A from '../images/tests/results/7A.webp';
import res7B from '../images/tests/results/7B.webp';
import res7C from '../images/tests/results/7C.webp';
import res7D from '../images/tests/results/7D.webp';

import res8A from '../images/tests/results/8A.webp';
import res8B from '../images/tests/results/8B.webp';
import res8C from '../images/tests/results/8C.webp';
import res8D from '../images/tests/results/8D.webp';

import res9A from '../images/tests/results/9A.webp';
import res9B from '../images/tests/results/9B.webp';
import res9C from '../images/tests/results/9C.webp';
import res9D from '../images/tests/results/9D.webp';

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

const imagesResults = {
    "1A": res1A,
    "1B": res1B,
    "1C": res1C,
    "1D": res1D,

    "2A": res2A,
    "2B": res2B,
    "2C": res2C,
    "2D": res2D,

    "3A": res3A,
    "3B": res3B,
    "3C": res3C,
    "3D": res3D,

    "4A": res4A,
    "4B": res4B,
    "4C": res4C,
    "4D": res4D,

    "5A": res5A,
    "5B": res5B,
    "5C": res5C,
    "5D": res5D,

    "6A": res6A,
    "6B": res6B,
    "6C": res6C,
    "6D": res6D,

    "7A": res7A,
    "7B": res7B,
    "7C": res7C,
    "7D": res7D,

    "8A": res8A,
    "8B": res8B,
    "8C": res8C,
    "8D": res8D,

    "9A": res9A,
    "9B": res9B,
    "9C": res9C,
    "9D": res9D,
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
        document.querySelector("#mobileNav").style.display="block"
        let flagNav = false;
        const burger = document.querySelector("#burger");
        document.querySelector(".o_menubarContainer").style.display="none";
        burger.addEventListener("click", function() {
            burger.classList.toggle("open");
            if (!flagNav) {
                flagNav = true;
                document.querySelector("#mobileNav").style.backgroundColor="var(--blue)"
                document.querySelector(".s_mobileNavigation").style.display="block"
                setTimeout(()=> {
                    document.querySelector(".s_mobileNavigation").style.opacity="1";
                    document.querySelector("#mobileLogo").style.backgroundImage=`url("${svgLogo}")`
                    document.querySelector("#mobileLogo").style.backgroundSize="78% 78%";
                    document.querySelector("#mobileLogo").style.backgroundPosition="20% 50%"
                }, 0)
            } else {
                flagNav = false;
                document.querySelector(".s_mobileNavigation").style.opacity="0";
                document.querySelector("#mobileNav").style.backgroundColor="var(--white)"
                document.querySelector("#mobileLogo").style.backgroundImage=`url("${pngLogo}")`
                document.querySelector("#mobileLogo").style.backgroundSize="120% 100%"
                setTimeout(()=> {
                    document.querySelector(".s_mobileNavigation").style.display="none"
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
        document.querySelector(".o_choosenTestCard").style.backgroundImage=`url(${imagesTests[testData[1]]})`;
        document.querySelector(".a_articleName").textContent=`${testData[0].name}`;
        document.querySelector(".a_aboutChoosenTest").textContent=`${testData[0].description}`;
        document.querySelector(".a_choosenTestName").textContent=`${testData[0].name}`;

        document.querySelector("#goIcon").addEventListener("click", (e) => {
            window.location.href = '../SNOKS/tests.html';
        })
    }

    console.log(testData)

    /* testUIShow */

    if (flag) {
        document.getElementById("testUI").style.display="flex";
        document.getElementById("testTitle").style.display="none";

        let id = flag;

        document.querySelector(".c_answers").addEventListener("click", (e) => {
            if (e.target.classList.contains("m_testsOption")) {
                btnClicked([e.target.id, answers, id])
            }
        })


        document.querySelector(".m_navigationCircles").addEventListener("click", (e) => {


            if (e.target.id == "prev") {
                id -= 1
                generateQuestion(testData[0].questions[`question${id}`], id, answers) 
            } else if (e.target.id == "next") {
                id += 1
                generateQuestion(testData[0].questions[`question${id}`], id, answers) 
            }
        })

    /* */


        generateQuestion(testData[0].questions[`question${id}`], id, answers) 

        function generateQuestion(answers, id, clicked) {
            resetAnswers()
            
            document.querySelector(".a_testQuestionNumber").textContent=`${id}/${Object.keys(testData[0].questions).length}`

            document.querySelector(".a_testQuestion").textContent=`${answers.text}`

            const container = document.querySelector(".c_answers")
            let count = 0;
            for (let elem in answers.answers) {
                const btn = document.createElement("button");
                btn.classList.add("m_testsOption");
                btn.id = `${alphabet[count]}`;
                if (btn.id == clicked[id]) {
                    btn.classList.add("clicked")
                }
                container.append(btn);
                const answer = document.createElement("p");
                answer.classList.add("a_answerText")
                answer.textContent=`${answers.answers[elem]}`
                btn.append(answer);

                const tip = document.createElement('p');
                tip.classList.add("a_answerLetter");
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

            document.querySelectorAll(".m_testsOption").forEach(answer => {
                if (answer.classList.contains("clicked")) {
                    answer.classList.remove("clicked")
                }
            })

            localStorage.setItem("progress", JSON.stringify([answers, question]));

            document.querySelector(`#${id}`).classList.add("clicked")
        }

        function resetAnswers() {
            document.querySelectorAll(".m_testsOption").forEach(answer => {
                document.querySelector(".c_answers").removeChild(answer)
            })
        } 

        function countResult(answers) {
            let array = []
            for (let elem in answers) {
                array.push(answers[elem])
            }
            return array.sort((a,b) => array.filter(v => v===a).length - array.filter(v => v===b).length).pop();
        }


        document.querySelector("#result").addEventListener("click", (e) => {
            
            document.querySelector("#testUI").style.display="none";
            let imgName = `${testData[1]}${countResult(answers)}`
            document.querySelector(".q_imageTestResult").src=`${imagesResults[imgName]}`
            document.querySelector("#resultUI").style.display="block";
            document.querySelector(".a_testResultDesc").textContent=`${testData[0].results[countResult(answers)][1]}`
            document.querySelector(".a_testResultName").textContent=`${testData[0].results[countResult(answers)][0]}`
        })
    }


















/* startFromStart */

    document.querySelector(".a_testsButton").addEventListener("click", (e) => {
        document.getElementById("testUI").style.display="flex";
        document.getElementById("testTitle").style.display="none";

        let id = 1;

        document.querySelector(".c_answers").addEventListener("click", (e) => {
            if (e.target.classList.contains("m_testsOption")) {
                btnClicked([e.target.id, answers, id])
            }
        })


        document.querySelector(".m_navigationCircles").addEventListener("click", (e) => {


            if (e.target.id == "prev") {
                id -= 1
                generateQuestion(testData[0].questions[`question${id}`], id, answers) 
            } else if (e.target.id == "next") {
                id += 1
                generateQuestion(testData[0].questions[`question${id}`], id, answers) 
            }
        })

    /* */


        generateQuestion(testData[0].questions[`question${id}`], id, answers) 

        function generateQuestion(answers, id, clicked) {
            resetAnswers()
            
            document.querySelector(".a_testQuestionNumber").textContent=`${id}/${Object.keys(testData[0].questions).length}`

            document.querySelector(".a_testQuestion").textContent=`${answers.text}`

            const container = document.querySelector(".c_answers")
            let count = 0;
            for (let elem in answers.answers) {
                const btn = document.createElement("button");
                btn.classList.add("m_testsOption");
                btn.id = `${alphabet[count]}`;
                if (btn.id == clicked[id]) {
                    console.log("dfdfdfsdfgdgfdfgfd", clicked)
                    btn.classList.add("clicked")
                }
                container.append(btn);
                const answer = document.createElement("p");
                answer.classList.add("a_answerText")
                answer.textContent=`${answers.answers[elem]}`
                btn.append(answer);

                const tip = document.createElement('p');
                tip.classList.add("a_answerLetter");
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


            document.querySelectorAll(".m_testsOption").forEach(answer => {
                if (answer.classList.contains("clicked")) {
                    answer.classList.remove("clicked")
                }
            })

            localStorage.setItem("progress", JSON.stringify([answers, question]));

            document.querySelector(`#${id}`).classList.add("clicked")
        }

        function resetAnswers() {
            document.querySelectorAll(".m_testsOption").forEach(answer => {
                document.querySelector(".c_answers").removeChild(answer)
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


        document.querySelector("#result").addEventListener("click", (e) => {
            
            document.querySelector("#testUI").style.display="none";
            document.querySelector("#resultUI").style.display="block";
            document.querySelector(".a_testResultDesc").textContent=`${testData[0].results[countResult(answers)][1]}`
            document.querySelector(".a_testResultName").textContent=`${testData[0].results[countResult(answers)][0]}`
            let imgName = `${testData[1]}${countResult(answers)}`
            document.querySelector(".q_imageTestResult").src=`${imagesResults[imgName]}`
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

window.addEventListener('resize', function(event){
    setTimeout(function () {
        location.reload()
    }, 100);
});

//


})
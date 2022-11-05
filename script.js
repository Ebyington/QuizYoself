// answer button variables
var btnOne = document.getElementById("btn1")
var btnTwo = document.getElementById("btn2")
var btnThree = document.getElementById("btn3")
var btnFour = document.getElementById("btn4")
// homepage variables
var rulesPage = document.getElementById("rulestext")
var timerCount = document.getElementById("clock")
var beginQuizBtn = document.getElementById("beginBtn")

var displayQ = document.getElementById("q")

// var container = document.querySelector("#container")

// container.style.display = 'none'

const questionData = [
    {
        question: "Commonly used Data types Do NOT Include:",
        choices: ["String", "Boolean", "Numbers", "Alerts"],
        answer: "Alerts"
    },
    {
        question: "Conditions for and if/else statement are enclosed within ______",
        choices: ["Quotes", "Curly Brackets", "Parentheses", "All the above"],
        answer: "Parentheses"
    },
    {
        question: "Arrays can contain which of the following",
        choices: ["Other Arrays", "Booleans", "Strings", "All the above"],
        answer: "All the above"
    },
    {
        question: "String values are enclosed within _________ when asigning it to a variable",
        choices: ["Quotes", "Curly Brackets", "Parentheses", "Commas"],
        answer: "Quotes"
    },
    {
        question: "A very useful tool used in debugging and development for printing content to the debugger is:",
        choices: ["Java Script", "Terminal/Bash", "For Loops", "console.log"],
        answer: "console.log"
    }];



function timerStart(){
    let timerCount = seconds;
    
    const interval = setInterval(() => {
        console.log(timerCount);
        timerCount --;

        if(timerCount < 0 ) {
            return ("Time's Up!")
        }

    }, 1000);
}

function questionPrompt() {

}


function beginQuiz() {
    beginQuizBtn.style.visibility = 'hidden';

}
beginQuizBtn.addEventListener("click", beginQuiz)
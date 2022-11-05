// question display and answer button variables
var answerBtn = document.getElementById("userInput")
var displayQ = document.getElementById("q")
var showQ = document.getElementsByClassName("answers")
var checkAns = document.getElementById("checkAns")
var btnOne = document.getElementById("btn1")
var btnTwo = document.getElementById("btn2")
var btnThree = document.getElementById("btn3")
var btnFour = document.getElementById("btn4")

// homepage variables
var rulesPage = document.getElementById("rulestext")
var timerCount = document.getElementById("clock")
var beginQuizBtn = document.getElementById("beginBtn")


var timer;
var countdown = 90;
var end = document.getElementById("quizEnd")

var i = 0;

end.style.visibility = 'hidden';
const questionData = [
    {
        question: "Commonly used Data types Do NOT Include:",
        choices: ["String", "Boolean", "Numbers", "Alerts"],
        answer: "Alerts"
    },
    {
        question: "Conditions for and if/else statement are enclosed within ?",
        choices: ["Quotes", "Curly Brackets", "Parentheses", "All the above"],
        answer: "Parentheses"
    },
    {
        question: "Arrays can contain which of the following",
        choices: ["Other Arrays", "Booleans", "Strings", "All the above"],
        answer: "All the above"
    },
    {
        question: "String values are enclosed within what when asigning it to a variable?",
        choices: ["Quotes", "Curly Brackets", "Parentheses", "Commas"],
        answer: "Quotes"
    },
    {
        question: "A very useful tool used in debugging and development for printing content to the debugger is:",
        choices: ["Java Script", "Terminal/Bash", "For Loops", "console.log"],
        answer: "console.log"
    }];



function timerStart(){
    timer = setInterval(function() {
        
        countdown --;
        timerCount.textContent = countdown

        if(countdown < 0 ) {
            return ("Time's Up!")
        }

    }, 1000);
}
function timerStop() {
    clearInterval(countdown);
    timerCount.style.visibility = 'hidden';
}

function questionPrompt() {
    displayQ.style.visibility = 'visible';

    displayQ.textContent = questionData[i].question;
    btnOne.textContent = questionData[i].choices[0];
    btnTwo.textContent = questionData[i].choices[1];
    btnThree.textContent = questionData[i].choices[2];
    btnFour.textContent = questionData[i].choices[3];

    answerBtn.addEventListener("click", compare);
    console.log(answerBtn)
}



function beginQuiz() {

    beginQuizBtn.style.visibility = 'hidden';
    rulesPage.style.visibility = 'hidden';
    countdown= 90;

    timerStart();
    questionPrompt();
}

function compare(a) {
    console.log(a.target.textContent);
    userAnswer = a.target.textContent;
    console.log(questionData[i].answer);
    if (userAnswer === questionData[i].answer) {
        checkAns.textContent = "Correct!";
    } else {
        checkAns.textContent = "Incorrect!";
        countdown -= 15;
    }
    i++;
    if (countdown === 0 || i < questionData.length) {
        questionPrompt();

    } else {
        displayQ.style.visibility = 'hidden';
        timerStop();
        end.style.visibility = 'visible';
        answerBtn.style.visibility = 'hidden';
    }
    checkAns.style.visibility = 'visible';

}
beginQuizBtn.addEventListener("click", beginQuiz, timerStart)
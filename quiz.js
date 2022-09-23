//Selects element by class
var timerEl = document.querySelector("#timer");

var buttonEl = document.querySelector("#start_button");
var h2El = document.querySelector("#question_title");
var answer1El= document.querySelector("#answer1");
var answer2El= document.querySelector("#answer2");
var answer3El= document.querySelector("#answer3");
var answer4El= document.querySelector("#answer4");


var answerCEl= document.querySelector("answer_correct")

var questionsIndex = 0;

var questions = [
  {
    question: "Commonly used datatypes include:",
    answer1: "booleans",
    answer2: "strings",
    answer3: "arrays",
    answer4: "all of the above",
    correct: "all of the above",
  },
  {
    question: "Inside which HTML element do we put the JavaScript code?",
    answer1: "<js>",
    answer2: "<string>",
    answer3: "<javascript>",
    answer4: "<script>",
    correct: "<script>",
  },
  {
    question: "String values must be enclosed within what notation?",
    answer1: "brackets",
    answer2: "quotations",
    answer3: "parentheses",
    answer4: "all of the above",
    correct: "quotations",
  },

  {
    question: "Commonly used datatypes include:",
    answer1: "booleans",
    answer2: "strings",
    answer3: "arrays",
    answer4: "all of the above",
    correct: "all of the above",
  },
  {
    question: "Which method do you use to round a number to the nearest integer?",
    answer1: "Math.floor()",
    answer2: "Math.round()",
    answer3: "Int.round()",
    answer4: "round()",
    correct: "all of the above",
  }
];

//Putting the timer into a variable
let startQuiz = function startQuiz() {
  var secondsRemain = 60;

  console.log(secondsRemain);

  var gameInterval = setInterval(function () {
    if (secondsRemain > 1) {
      timerEl.textContent = secondsRemain + " seconds remaining";
      secondsRemain--;
    } else if (secondsRemain === 1) {
      timerEl.textContent = secondsRemain + " second remaining";

      secondsRemain--;
    } else {
      timerEl.textContent = "";

      clearInterval(gameInterval);
    }
  }, 1000);

  h2El.textContent = questions[questionsIndex].question;
  
  answer1El.innerHTML=questions[questionsIndex].answer1;
  answer2El.innerHTML=questions[questionsIndex].answer2;
  answer3El.innerHTML=questions[questionsIndex].answer3;
  answer4El.innerHTML=questions[questionsIndex].answer4;
  

};

buttonEl.addEventListener("click", startQuiz);



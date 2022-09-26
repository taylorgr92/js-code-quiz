//Selects element by class
var timerEl = document.querySelector("#timer");
var buttonEl = document.querySelector("#start_button");
var h2El = document.querySelector("#question_title");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var pEl = document.querySelector("#response");
var answerCEl = document.querySelector("answer_correct");

//Setting index to start at 0
var questionsIndex = 0;

//Array of questions and answers

var questions = [
  {
    question: "Commonly used datatypes include:",
    answer1: "booleans",
    answer2: "strings",
    answer3: "arrays",
    answer4: "all of the above",
    correctAnswer: "all of the above",
  },
  {
    question: "Inside which HTML element do we put the JavaScript code?",
    answer1: "<js>",
    answer2: "<string>",
    answer3: "<javascript>",
    answer4: "<script>",
    correctAnswer: "<script>",
  },
  {
    question: "String values must be enclosed within what notation?",
    answer1: "brackets",
    answer2: "quotations",
    answer3: "parentheses",
    answer4: "all of the above",
    correctAnswer: "quotations",
  },

  {
    question:
      "Which method do you use to round a number to the nearest integer?",
    answer1: "Math.floor()",
    answer2: "Math.round()",
    answer3: "Int.round()",
    answer4: "round()",
    correctAnswer: "Math.floor()",
  },
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

//Display text for the possible answers

  answer1El.innerHTML = questions[questionsIndex].answer1;
  answer2El.innerHTML = questions[questionsIndex].answer2;
  answer3El.innerHTML = questions[questionsIndex].answer3;
  answer4El.innerHTML = questions[questionsIndex].answer4;

//Listening for user click to display messages

  answer1El.addEventListener("click", function () {
    if (
      questions[questionsIndex].answer1 === questions[questionsIndex].correct
    ) {
      return (pEl.textContent = "Correct");
    } else {
      return (pEl.textContent = "Wrong!");
    }
  });
};
//Listening for user click to display messages
answer2El.addEventListener("click", function () {
  if (
    questions[questionsIndex].answer2 ===
    questions[questionsIndex].correctAnswer
  ) {
    return (pEl.textContent = "Correct");
  } else {
    return (pEl.textContent = "Wrong!");
  }
});
//Listening for user click to display messages
answer3El.addEventListener("click", function () {
  if (
    questions[questionsIndex].answer3 ===
    questions[questionsIndex].correctAnswer
  ) {
    return (pEl.textContent = "Correct");
  } else {
    return (pEl.textContent = "Wrong!");
  }
});
//Listening for user click to display messages

answer4El.addEventListener("click", function () {
  if (
    questions[questionsIndex].answer4 ===
    questions[questionsIndex].correctAnswer
  ) {
    return (pEl.textContent = "Correct!");
  } else {
    return (pEl.textContent = "Wrong!");
  }
});

//Listening for user to click 'start quiz' button
buttonEl.addEventListener("click", startQuiz);

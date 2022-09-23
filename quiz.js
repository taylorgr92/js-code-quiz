//Selects element by class
var timerEl = document.querySelector("#timer");

var buttonEl = document.querySelector("#start_button");
var h2El= document.querySelector("#question-title");


var questionsIndex= 0;


var questions = [{
  question: 'Why is the sky blue?',
  answer1: "Magic",
  answer2:"Science",
  answer3:"Your Mom",
  correct: "Magic",
},
{
  question: 'What does the J stand for in Javascript?',
  answer1: "Coffee",
  answer2:"Java",
  answer3:"Your Mom",
  correct: "Your Mom",
}

]


//Putting the timer into a variable
 let startQuiz=function startQuiz() {
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

  h2El.textContent= questions[questionsIndex].question
}



//Put Initials and score into local storage


//Event listeners

buttonEl.addEventListener("click",startQuiz);


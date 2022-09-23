//Selects element by class
var timerEl = document.querySelector("#timer");

var buttonEl = document.querySelector("#start_quiz");

//Putting the timer into a variable
 let countdown=function countdown() {
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
}

// Function to present question

//

//Put Initials and score into local storage

//Event listeners

buttonEl.addEventListener("click",countdown);


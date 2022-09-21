//Selects element by class
var timerEl = (docuement.querySelector = "timer");

//Putting the timer into a variable
function countdown() {
  var secondsRemain = 60;

  var gameInterval = setInterval(function () {
    
    if (secondsRemain > 1) {
      timerEl.textContent = secondsRemain + "seconds remaining";
      secondsRemain--;
    } else if (secondsRemain === 1) {
      timerEl.textContent + "second remaining";

      secondsRemain--;
    } else {
      timerEl.textContent = "";

      clearInterval(gameInterval);
      displayCountdown()
    }
  }, 6000);
}


countdown();
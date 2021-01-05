var guess = document.getElementById('guess');
var lastGuess = document.getElementById('lastGuess');
var highLow = document.getElementById('highLow');
var submit = document.getElementById('submit');

submit.addEventListener('click', checkGuess);
guess.addEventListener('keydown', function(e){
  if((e.code == "Enter") || (e.code == "NumpadEnter")){
    checkGuess();
  }
});

var randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess(){
  let userGuess = parseInt(guess.value);

  lastGuess.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    highLow.textContent = "Bravo, vous avez trouvé !!!";
    setGameOver();
  } else {
    if (userGuess < randomNumber) {
      highLow.textContent = "C'est plus !";
      highLow.style.backgroundColor = 'yellow';
    }
    if (userGuess > randomNumber) {
      highLow.textContent = "C'est moins !";
      highLow.style.backgroundColor = 'orange';
    }
  }

  guess.value = '';
  guess.focus();
}

function setGameOver(){
  guess.disabled = true;
  submit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = "Start New Game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
  resetButton.addEventListener('keydown', function(e){
    if((e.code == "Enter") || (e.code == "NumpadEnter")){
      resetGame();
    }
  });
  resetButton.style.width = '100%';
  resetButton.style.padding = '1% 2%';
}

function resetGame(){
  lastGuess.textContent = '';
  highLow.textContent = '';

  resetButton.parentNode.removeChild(resetButton);

  guess.disabled = false;
  submit.disabled = false;
  guess.value = '';
  guess.focus();

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

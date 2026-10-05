var randomNumber = Math.floor(Math.random() * 100) + 1;

var t_cnt = document.querySelector('.t_cnt');
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;

// var resetButton;
var  resetButton = document.querySelector('.resetButton');
resetButton.style.visibility = "hidden";



// 送信ボタンクリックイベント
guessSubmit.addEventListener('click', checkGuess);

// 送信ボタンクリック時の処理
function checkGuess() {

  var userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = '前回の予想: ';
  }
  t_cnt.textContent = 'チャレンジ回数：' + guessCount;
  guesses.textContent += userGuess + ' ';
 
  if (userGuess === randomNumber) {
    lastResult.textContent = 'おめでとうございます。 正解です!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.style.backgroundColor = 'white';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!ゲームオーバー!!!';
    setGameOver();
  } else {
    lastResult.textContent = guessCount + '回目　　間違いです!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent='コンピュータの値は入力値より大きな数字です。' ;
      lowOrHi.style.backgroundColor = '#FFC0CB';

    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'コンピュータの値は入力値より小さい数字です。';
      lowOrHi.style.backgroundColor = '#AFEEEE';
    
    }
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;

  resetButton.style.visibility = "visible";
 
  // HTMLの要素を生成
//   resetButton = document.createElement('button');
//   resetButton.textContent = '新しいゲームを始める';
// //  body内の一番最後に要素を追加
  // document.body.appendChild(resetButton);

  resetButton.addEventListener('click', resetGame);
}


function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.style.visibility = "hidden";
  // resetButton.parentNode.removeChild(resetButton);
  resetButton.disabled = false;
  
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
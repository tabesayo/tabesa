const quiz = [
  { 
    question: '初めて行ったフェスはなんでしょう？',
    answers: [
  'ロッキン','CDJ','ビバラ','ラブシャ'
],
 correct: 'ビバラ'
}, {
  question: '好きなライブ会場は？',
    answers: [
  'ZeppDiverCity','新木場STUDIOCOAST','O-East','豊洲PIT'
      ],
  correct: '新木場STUDIOCOAST'
}, {
      question: 'ライブ後と言えば？',
    answers: [
  '牛丼','焼肉','ハンバーグ','ラーメン'
      ],
  correct: 'ラーメン'
}
];
const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementByTagName('button');
const buttonLength = $button.length;
//クイズの問題
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
let buttonIndex = 0;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textConetnt = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
}
setupQuiz();
const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
   quizIndex++;
  if(quizIndex < quizLength){
    setupQuiz();
    } else{
      window.alert('終了!');
      }
  };

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  handlerIndex++;
  }
$button[0].addEventListener('click', (e) => {
 clickHandler();
});
$button[1].addEventListener('click', (e) => {
  clickHandler();
});
$button[2].addEventListener('click', (e) => {
  clickHandler();
});
$button[3].addEventListener('click', (e) => {
  clickHandler();
});

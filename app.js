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


document.getElementById('js-question').textContent = question;

const $button = document.getElementByTagName('button');
$button[0].textConetnt = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

$button[0].addEventListener('click', () => {
  if(correct === button[0].textContent){
    window.alert('正解');
  } else {
    window.alert('不正解');
    }
  quizIndex++;
  if(quizIndex < quizLength){
    } else{
      window.alert('終了!');
      }
});
document.getElementsByTagName('button')[1].addEventListener('click', () => {
  if(correct === document.getElementsByTagName('button')[1].textContent){
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});
document.getElementsByTagName('button')[2].addEventListener('click', () => {
  if(correct === document.getElementsByTagName('button')[2].textContent){
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});
document.getElementsByTagName('button')[3].addEventListener('click', () => {
  if(correct === document.getElementsByTagName('button')[3].textContent){
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});

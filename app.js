const question = '好きなバンドは？';
const answers = [
  'coldrain','Crossfaith','SiM','ONE OK ROCK',
];
const correct = 'coldrain';

document.getElementById('js-question').textContent = question;

document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  if(correct === document.getElementsByTagName('button')[0].textContent){
    window.alert('正解');
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

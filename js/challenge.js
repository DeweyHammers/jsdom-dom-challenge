const counter = document.querySelector('#counter');
const btnMinus = document.querySelector('#minus');
const btnPlus = document.querySelector('#plus');
const btnHeart = document.querySelector('#heart');
const likes = document.querySelector('.likes');
const pause = document.querySelector('#pause');
const form = document.querySelector('form')
const comments = document.querySelector('.comments');
let input = document.querySelector('input')

let count = 0;
let isPaused = false;
const disableBtn = [btnMinus, btnPlus, btnHeart];

const countIncresses = () => {
  if (!isPaused) {
    count += 1;
    counter.innerText = count;
  }
}

const countDecresses = () => {
  count -= 1;
  counter.innerText = count;
}

const likeACount = () => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  
  li.innerText = count;
  button.innerText = 'x'

  li.appendChild(button);
  likes.appendChild(li);
  
  button.addEventListener('click', () => {
    li.remove();
  });
}

const pauseCount = () => {
  if (!isPaused) {
    isPaused = true;
    for(i = 0; i < disableBtn.length; i++) {
      disableBtn[i].disabled = true;
    }
    pause.innerText = 'resume'
  } else {
    isPaused = false;
    for(i = 0; i < disableBtn.length; i++) {
      disableBtn[i].disabled = false;
    }
    pause.innerText = 'pause'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(countIncresses, 1000);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const p = document.createElement('p');
  const button = document.createElement('button');
  
  p.innerText = input.value;
  button.innerText = 'x';

  p.appendChild(button);
  comments.appendChild(p);
  input.value = '';

  button.addEventListener('click', () => {
    p.remove();
  });
});

btnMinus.addEventListener('click', countDecresses);
btnPlus.addEventListener('click', countIncresses);
btnHeart.addEventListener('click', likeACount);
pause.addEventListener('click', pauseCount);
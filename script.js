'use strict';

// Obtenemos un numero random con el methodo "Math.random", luego lo pasamos a número entero, removiendo decimales con Math.trunc y finalmente agregamos + 1 para redeondear y que 20 sea una posibilidad

// Lo guardamos en una variable y finalmente reemplazamos el elemento del dominio por ese numero aleatorio

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// CLICK EVENTS // Reaccionamos a los eventos del DOM con "eventListener"

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Cuando no hay numero
  if (!guess) {
    document.querySelector('.message').textContent = ' 🚫 No Number!';

    // Cuando el jugador gana
  } else if (guess === number) {
    document.querySelector('.message').textContent = ' 🎉 Correct Number!';
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Cuando el jugador indica un numero mayor
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📈 Too High !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        ' 💥 You lost the game ! ';
    }

    // Cuando el jugador indica un numero menor
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📉 Too Low ! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 You lost the game ! ';
    }
  }
});

// Lo convertimos a numero porque debemos compararlos siendo numeros, no strings
// Si el numero del input es menor, lo alertamos, y viceversa.
// Definimos una variable score = 20, y luego restamos uno cada vez que el usuario se equivoca, en la condición guess > ó < number.

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = ' start guessing ... ';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

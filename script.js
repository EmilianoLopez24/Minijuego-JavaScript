'use strict';

// MANIPULANDO EL DOMINIO. Usamos document.querySelector que es un method del object document y seleccionamos la clase que queremos modificar. A continuación escribimos el nuevo mensaje

// -----------------------------------------

// Obtenemos un numero random con el methodo "Math.random", luego lo pasamos a número entero, removiendo decimales con Math.trunc y finalmente agregamos + 1 para redeondear y que 20 sea una posibilidad

// Lo guardamos en una variable y finalmente reemplazamos el elemento del dominio por ese numero aleatorio

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = number;

// CLICK EVENTS // Reaccionamos a los eventos del DOM con "eventListener"

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = ' 🚫 No Number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = ' 🎉 Correct Number!';
  } else if (guess > number) {
    document.querySelector('.message').textContent = ' 📈 Too High !';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < number) {
    document.querySelector('.message').textContent = ' 📉 Too Low ! ';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// Lo convertimos a numero porque debemos compararlos siendo numeros, no strings
// Si el numero del input es menor, lo alertamos, y viceversa.
// Definimos una variable score = 20, y luego restamos uno cada vez que el usuario se equivoca, en la condición guess > ó < number.

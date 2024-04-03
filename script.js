'use strict';

const calculatorBtns = document.querySelectorAll('.calculator-btn');
const calculatorText = document.querySelector('.calculator-text');
let calculation = '';

const operate = function (calculation) {
  const numbersToCalc = calculation.split(' ');
  let total = Number(numbersToCalc[0]);
  for (let i = 0; i < numbersToCalc.length - 1; i++) {
    if (Number(numbersToCalc[i])) {
      if (numbersToCalc[i + 1] === '+') {
        total += total + Number(numbersToCalc[i + 2]);
      } else if (numbersToCalc[i + 1] === '-') {
        total -= Number(numbersToCalc[i + 2]);
      } else if (numbersToCalc[i + 1] === '*') {
        total *= Number(numbersToCalc[i + 2]);
      } else if (numbersToCalc[i + 1] === '/') {
        total /= Number(numbersToCalc[i + 2]);
      } else {
        total += Number(numbersToCalc[i]);
      }
    }
  }
  return total;
};

let nextNum = true;

for (let i = 0; i < calculatorBtns.length; i++) {
  calculatorBtns[i].addEventListener('click', function (event, listener) {
    console.log(calculatorBtns[i].classList[1]);

    let subbedString = calculatorBtns[i].classList[1].replace('num-', '');
    let operator = '';

    if (Number(subbedString)) {
      console.log(nextNum);
      calculation += subbedString;
      calculatorText.textContent = calculation;
      nextNum = false;
    } else if (subbedString === 'clear') {
      calculation = '';
      calculatorText.textContent = calculation;
      nextNum = true;
    } else if (subbedString === 'equals') {
      calculatorText.textContent = operate(calculation);
      nextNum = true;
      calculation = '';
    } else {
      operator = subbedString;
      if (operator === 'plus' && nextNum === false) {
        calculation += ' + ';
        calculatorText.textContent = calculation;
        nextNum = true;
      } else if (operator === 'minus' && nextNum === false) {
        calculation += ' - ';
        calculatorText.textContent = calculation;
        nextNum = true;
      } else if (operator === 'multiply' && nextNum === false) {
        calculation += ' * ';
        calculatorText.textContent = calculation;
        nextNum = true;
      } else if (operator === 'divide' && nextNum === false) {
        calculation += ' / ';
        calculatorText.textContent = calculation;
        nextNum = true;
      }
    }
  });
}

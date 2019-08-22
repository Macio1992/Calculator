/* jshint esversion: 6 */

const calculatorContainer = document.getElementById('calculatorContainer');
const numberValue1 = calculatorContainer.querySelector('[data-calculator-value-1]');
const numberValue2 = calculatorContainer.querySelector('[data-calculator-value-2]');
const addingOperation = calculatorContainer.querySelector('[data-calculator-operation-adding]');
const substractiongOperation = calculatorContainer.querySelector('[data-calculator-operation-substraction]');
const multiplicationOperation = calculatorContainer.querySelector('[data-calculator-operation-multiplication]');
const divisionOperation = calculatorContainer.querySelector('[data-calculator-operation-division]');
const resultContainer = calculatorContainer.querySelector('[data-calculator-result-value]');
const operations = document.getElementsByClassName('calculator__calculate');

addingOperation.addEventListener('click', function () {
  /** Tu dopisać funkcjonalność dla dodawania */
});

substractiongOperation.addEventListener('click', function () {
  /** Tu dopisać funkcjonalność dla odejmowania */
});

multiplicationOperation.addEventListener('click', function () {
  /** Tu dopisać funkcjonalność dla mnożenia */
});

divisionOperation.addEventListener('click', function () {
  /** Tu dopisać funkcjonalność dla dzielenia */
});

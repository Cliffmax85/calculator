import { add } from './math-utils.js';
import { sub } from './math-utils.js';
import { div } from './math-utils.js';
import { mult } from './math-utils.js';


const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subResolt = document.getElementById('sub-result');
const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divResult = document.getElementById('div-result');
const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multResult = document.getElementById('mult-result');


addButton.addEventListener('click', () => {

    const number1 = +addInput1.value;
    const number2 = +addInput2.value;
    const result = add(number1, number2);
    addResult.textContent = result;
    console.log(result);
});


subButton.addEventListener('click', () => {
  const sub1 = +subInput1.value;
  const sub2 = +subInput2.value;
  const resultSub = sub(sub1, sub2);
  subResolt.textContent = resultSub;
});

divButton.addEventListener('click', () => {
  const div1 = +divInput1.value;
  const div2 = +divInput2.value;
  const resultDiv = div(div1, div2);
  divResult.textContent = resultDiv;
});

multButton.addEventListener('click', () => {
  const mult1 = +multInput1.value;
  const mult2 = +multInput2.value;
  const resultMult = mult(mult1, mult2);
  multResult.textContent = resultMult;
});
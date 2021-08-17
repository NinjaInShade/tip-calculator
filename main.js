// Information required to calculate total tip
let totalBill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;

// DOM Elements
const totalBillInput = document.getElementById('totalBill');

const tip5 = document.getElementById('tip5');
const tip10 = document.getElementById('tip10');
const tip15 = document.getElementById('tip15');
const tip25 = document.getElementById('tip25');
const tip50 = document.getElementById('tip50');
const tipCustom = document.getElementById('input-field-tip');

let activeTip = tip5;

const numberOfPeopleInput = document.getElementById('numberOfPeople');

const tipAmount = document.getElementById('tipAmount');
const totalPrice = document.getElementById('totalPrice');

// Adds active state to tip button pressed
function selectTip(num) {
  const pressedTip = document.getElementById(`tip${num}`);

  //   Remove previous activeTip's active class
  activeTip.classList.remove('input-tip-active');

  //   Set new active tip
  activeTip = pressedTip;

  pressedTip.classList.add('input-tip-active');
}

// Reset all inputs and outputs
function resetBill() {
  totalBillInput.value = '';
  numberOfPeopleInput.value = '';
  tipCustom.value = '';

  activeTip.classList.remove('input-tip-active');

  tipAmount.innerText = '$0.00';
  totalPrice.innerText = '$0.00';
}

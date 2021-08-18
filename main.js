// Information required to calculate total tip
let totalBill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;
let activeTip = tip5;

// DOM Elements
const totalBillContainer = document.getElementById('totalBillGroup');
const totalBillInput = document.getElementById('totalBill');
const totalBillError = document.getElementById('totalBillError');

const tipCustomContainer = document.getElementById('totalTipPercentageGroup');
const tipCustomInput = document.getElementById('totalTipPercentage');
const tipCustomError = document.getElementById('totalTipPercentageError');

const numberOfPeopleContainer = document.getElementById('numberOfPeopleGroup');
const numberOfPeopleInput = document.getElementById('numberOfPeople');
const numberOfPeopleError = document.getElementById('numberOfPeopleError');

const tipAmount = document.getElementById('tipAmount');
const totalPrice = document.getElementById('totalPrice');

function calculateBill() {
  if (totalBill === 0 || numberOfPeople === 0) {
    return (totalPrice.innerText = `$0.00`);
  }

  //   We can still calculate and display atleast total cost per person without tipping if tip % isn't defined
  if (tipPercentage === 0) {
    const totalCalculatedPrice = (totalBill / numberOfPeople).toFixed(2);

    tipAmount.innerText = `$00.00`;
    return (totalPrice.innerText = `$${totalCalculatedPrice}`);
  }

  //   Tip % is defined, we can add in the tip logic
  const tipBonus = (+totalBill / 100) * +tipPercentage;
  const totalOverallPrice = +totalBill + +tipBonus;

  const totalCalculatedPrice = (totalOverallPrice / numberOfPeople).toFixed(2);
  const totalTipAmount = (+tipBonus / numberOfPeople).toFixed(2);

  tipAmount.innerText = `$${totalTipAmount}`;
  return (totalPrice.innerText = `$${totalCalculatedPrice}`);
}

// Set total bill variable, whilst validating for a max number
function updateTotalBill(event) {
  if (event.target.value > 10000000) {
    return (totalBill = 0);
  }

  totalBill = event.target.value || 0;

  calculateBill();
}

// Set number of people variable, whilst validating for a max number
function updateNumberOfPeople(event) {
  if (event.target.value > 100) {
    return (numberOfPeople = 0);
  }

  numberOfPeople = event.target.value || 0;

  calculateBill();
}

// Adds active state to tip button pressed
function selectTip(event, num) {
  if (event.target.value) {
    if (event.target.value > 10000) {
      return (tipPercentage = 0);
    }

    activeTip.classList.remove('input-tip-active');

    tipPercentage = event.target.value;

    return calculateBill();
  }

  if (!event.target.value && !num) {
    tipPercentage = 0;

    return calculateBill();
  }

  const pressedTip = document.getElementById(`tip${num}`);

  //   Remove previous activeTip's active class
  activeTip.classList.remove('input-tip-active');

  //   Set new active tip
  activeTip = pressedTip;
  tipPercentage = +num;

  pressedTip.classList.add('input-tip-active');

  calculateBill();
}

// Reset all inputs and outputs
function resetBill() {
  totalBillInput.value = '';
  numberOfPeopleInput.value = '';
  tipCustomInput.value = '';

  totalBill = 0;
  tipPercentage = 0;
  numberOfPeople = 0;

  activeTip.classList.remove('input-tip-active');

  tipAmount.innerText = '$0.00';
  totalPrice.innerText = '$0.00';
}

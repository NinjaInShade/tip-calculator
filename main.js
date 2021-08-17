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

const numberOfPeopleInput = document.getElementById('numberOfPeople');

const tipAmount = document.getElementById('tipAmount');
const totalPrice = document.getElementById('totalPrice');

function resetBill(event) {
  event.preventDefault();
}

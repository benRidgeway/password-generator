// Assignment code here
console.dir(window.document);
//DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const yourPassword = document.getElementById('password'); 


const random = {
  lower: getLower,
  upper: getUpper,
  number: getNumber,
  symbol: getSymbol
};

// This gives a random letters using character codes to randomly select
function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
console.log(getLower());

function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
console.log(getUpper());
//Random Numbers using character codes
function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
console.log(getNumber());
//Random Symbols using predetermined symbols because CharCode is harder for these
function getSymbol() {
  const symbols = '!@#$%^&*()-_=+<>?/';
  return symbols[Math.floor(Math.random() * symbols.length)];
};
console.log(getSymbol());
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;
  resultEl.password = generatePassword(hasLower, hasUpper, hasNumbers, hasSymbols, length);
});


function generatePassword(lower, upper, number, symbol, length) {



  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol;

  console.log('typesCount', typesCount);

  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter
  (
    item => Object.values(item)[0]
  );

  console.log('typesArray: ', typesArray)

  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i+= typesCount) {
    typesArray.forEach(type => {
      const funcName = Object.keys(type)[0]
      

      generatedPassword += random[funcName]();
      console.log('funcName: ', funcName);
    });
  }
  alert(generatedPassword.slice(0, length));
  console.log(generatedPassword.slice(0, length));
};

//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector(#password);
  //var passwordText.value = password;
//};
  
  

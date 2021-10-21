var value = prompt('Introdu un numar');
var paragraphElement = document.getElementById('message');
var badInputMessage = 'Nu ai introdus un numar.';

if (value === null) {
  value = NaN;
} else {
  if (value.trim().length <= 0) {
    value = NaN;
  }
}

value = Number(value);

if (isNaN(value) === false) {
  if (value < 20) {
    paragraphElement.innerText = `Numarul este mai mic decat 20.`;
  } else if (value === 20) {
    paragraphElement.innerText = `Numarul este 20.`;
  } else {
    paragraphElement.innerText = `Numlaru este mai mare decat 20`;
  }
} else {
  paragraphElement.innerText = badInputMessage;
}

// console.warn(`Modifica exemplul astfel incat bucla sa
// numere de la 1 la 100`);

// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// console.warn(
//   `Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).`,
// );

// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 100);

// console.warn(
//   `Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).`,
// );

// var i = 1;

// do {
//   if (i > 50) {
//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 100);

// console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 52`);

// var i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 52);

// console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 51.`);

// varianta 1
// var i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 51);

// varianta 2
// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 52);

// console.warn(`Folosind keywordul break opreste bucla
// atunci cand numarul este egal cu 12 (dar afiseaza-l)`);

// var i = 1;

// do {
//   if (i > 12) {
//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 100);

// console.warn(
//   `Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.`,
// );
// var i = 8;
// do {
//   if (i < 8) {
//     continue;
//   }
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// } while (i < 32);

console.warn(`Folosind metoda prompt de trei ori cere utilizatorului
un numar, o limita inferioara si o limita superioara
apoi afiseaza toti multiplii de numar intre limita
inferioara si limita superioara introduse.
`);
var i = 1;
var downLimit = prompt('Alege limita inferioara: ');
var upLimit = prompt('Alege limita superioara:');
var anyNumber = prompt(
  'Alege un numar intre limita inferioara si cea superioara: ',
);

do {
  if (i > downLimit) {
    continue;
  }
  if (i % anyNumber === 0) {
    console.log(i);
  }

  i++;
} while (i <= upLimit);
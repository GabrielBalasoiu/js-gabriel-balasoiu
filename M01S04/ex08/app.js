// console.warn(`Modifica exemplul astfel incat bucla sa
// numere de la 1 la 100.
// `);
// var i = 1;

// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// console.warn(
//   `Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).`,
// );
// var i = 1;

// while (i < 100) {
//   console.log(i);
//   i++;
// }

// console.warn(`Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).
// `);
// var i = 1;

// while (i < 100) {
//   if (i > 50) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// console.warn(`Modifica exemplul astfel incat bucla sa
// numere de la 1 la 67.).
// `);
// var i = 1;

// while (i < 100) {
//   if (i > 67) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 66.`);
// var i = 1;

// while (i < 100) {
//   if (i > 66) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// console.warn(
//   `Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).`,
// );
// var i = 1;

// while (i < 100) {
//   if (i > 12) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// console.warn(
//   `Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv). `,
// );
// var i = 1;
// while (i <= 32) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
//   i++;
// }

console.warn(
  `Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi
  afiseaza toti multiplii de numar intre 5 si limita superioara introduse. `),

  var i = 0;
  var userNumber = prompt('Introdu un numar');
  var upperLimit = prompt('Introdu o limita superioara');
  while (i < upperLimit) {
    i = i + 1;
    if (i < 5) {
      continue;
    }
    if (i >= userNumber && i % userNumber === 0) {
      console.log(i);
    }
  }

var person = {
  firstName: 'Ionut',
  lastName: 'Ionescu',
  email: 'email@email.com',
  birthYear: 1991,
  pets: [
    { name: 'Dog', species: 'canine', age: 6 },
    { name: 'Cat', species: 'feline', age: 8 },
    { name: 'Fish', species: 'aquatic', age: 3 },
  ],
  zipCode: '1020',
};

var petName = person.pets[0];

// // console.log(person.zipCode.toString());

console.warn(`Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale.”.
Nu uita de proprietatea length a arrayului pets.`);
console.log(
  `Numele meu este: ${person.firstName} si ${person.lastName} si am ${person.pets.length} animale.`,
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);
console.log(`Am acelasi email din copilarie: ${person.email}.`);

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);
console.log(
  `Unul din cele ${person.pets.length} animale ale mele este ${person.pets[1].species} si are ${person.pets[1].age} ani.`,
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.`,
);
console.log((2021 - person.pets[2].age).toString());

console.warn(
  `Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia
  0 si afiseaza aceasta diferenta. Foloseste anul curent. `,
);
console.log((2021 - person.birthYear - person.pets[0].age).toString());

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);
console.log(
  `Intre ${person.firstName} si ${petName.name} este o diferenta de ${
    2021 - person.birthYear - petName.age
  } ani.`,
);

console.warn(`Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa”
(folosind bracket notation pe arrayul pets)
`);
console.log(
  `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceasi casa`,
);

console.warn(
  `Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 `,
);
console.log(person.pets[0].age - person.pets[2].age.toString());

console.warn(
  `Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”`,
);
console.log(
  `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}`,
);

console.warn(
  `Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea. `,
);
console.log(
  `Animalele mele s-au nascut in ${2021 - person.pets[0].age}, ${
    2021 - person.pets[1].age
  }, respectiv ${2021 - person.pets[2].age}.`.toString(),
);

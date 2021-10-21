var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 34,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.warn(`Folosind Object.keys() pe proprietatea skills, afiseaza
abilitatile persoanei daca acestea sunt true. Folosind propozitii de forma:
“person.name cunoaste: html.” “person.name cunoaste: javaScript.”
`);
Object.keys(person.skills).forEach(function (skillName) {
  var knownSkill = person.skills[skillName];

  if (knownSkill === true) {
    console.log(`${person.name} cunoaste: ${skillName}.`);
  }
});

console.warn(
  `Prin aceeasi metoda, afiseaza o lista inversata cu numele complet inversat al prietenilor. `,
);
// []
var reversedFriendsList = Object.keys(person.friends).reverse();
for (var i = 0; i < reversedFriendsList.length; i++) {
  var friendProperty = reversedFriendsList[i];
  var friend = person.friends[friendProperty];
  var { name, surname } = friend;

  console.log(`${surname} ${name}`);
}

console.warn(
  `Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.keys()`,
);
var message = 'Prietenii mei sunt ';
Object.keys(person.friends).forEach(function (
  friendProperty,
  index,
  friendKeys,
) {
  var friend = person.friends[friendProperty];
  var punctuation = ', ';
  var arrLength = friendKeys.length;

  if (index === arrLength - 1) {
    punctuation = '.';
  }

  if (index === arrLength - 2) {
    punctuation = ' si ';
  }

  message = `${message}${friend.name}`;
});
console.log(message);

console.warn(
  `Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa
  afiseze: “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…`,
);

var friendKeys = Object.keys(person.friends);
var i =0;

while (i < friendKeys.length) {
  var friendKeys = friendsKeys[i];
  var friend = person.friends[friendKeys];
  var {name, age}
}

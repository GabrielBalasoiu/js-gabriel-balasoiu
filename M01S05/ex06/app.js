const person = {
  getName: () => {
    return 'Numele Tau';
  },
  getAge: () => {
    return 42;
  },
  get email() {
    return 'dragos@pixellab.ro';
  },
  get random() {
    return Math.floor(Math.random() * 100 + 1);
  },
};

const accessor = (methodSuffix) => {
  const methodName = 'get ${methodSuffix}';

  if (person[methodName] === undefined) {
    throw new Error('Method not found');

    // console.warn('Method not found');
    // return;
  }

  return person[methodName]();
};

const fullName = accessor('Name');
const [firstName, lastName] = fullName.split(' ');
// const firstName = accessor('Name').split(' ')[0];
console.log('Eu sunt ${firstName} ${lastName}.');

console.log((new Date().getFullYear() - person.getAge()).toString());

console.log(`Ma numesc ${firstName} ${fullName}, am ${accessor('Age')}`);
console.log(pers.email);

const Car = {
  make: '',
  color: '',
  weels: 4,
  speed: 0,
  topSpeed: 10,
  ropReverseSpeed: -10,
  displaySpeed: function () {
    console.log(`Viteza curenta este ${this.speed}.`);
  },
  accelerate: function () {
    this.setSpeedt(his.speed + 1);
  },
  decelerate: function () {
    this.setSpeed(this.speed - 1);
  },
  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed();
    this.topSpeed();
  },
};

const Audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.weels = 4;
audi.speed = 0;
audi.topSpeed = 260;
audi.topReverseSpeed = -100;

console.log(audi);

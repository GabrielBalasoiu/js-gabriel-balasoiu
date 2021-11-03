class Vehicle {
  constructor(make, color, wheels, speed, topSpeed, topReverseSpeed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  accelerate() {
    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }

  decelerate() {
    if (this.speed - 1 < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    }

    this.displaySpeed();
  }
}

const bike = new Bicycle('Pegas', 'red', 8, 20);

bike.setSpeed(2);
bike.decelerate();
bike.decelerate();
bike.decelerate();

class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 3, speed, topSpeed, 0);
  }

  decelerate() {
    if (this.speed - 1 < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    }

    this.displaySpeed();
  }
}

const trike = new Tricycle('Tryke', 'red', 2, 9, -2);

console.warn(`Seteaza viteza instantei trike la 0`);
trike.setSpeed(0);
trike.decelerate();
trike.decelerate();
trike.decelerate();

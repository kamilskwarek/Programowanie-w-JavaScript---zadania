// Zadanie 1:
class Person {
    constructor(imie, nazwisko, wiek, kraj, miasto) {
      Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
    }
  
    printInfo() {
      for (const [key, value] of Object.entries(this)) {
        console.log(`${key}: ${value}`);
      }
    }
  
    addYearToAge() {
      this.wiek++;
    }
  
  }
  
  const person1 = new Person('Grigorij', 'Rasputin', 46, 'Rosja', 'Moskwa');
  const person2 = new Person('Vito', 'Corleone', 51, 'USA', 'Nowy Jork');
  
  person1.printInfo();
  person1.addYearToAge();
  person1.printInfo();
  
  // Zadanie 2:
  class Person {
    constructor(imie, nazwisko, wiek, kraj, miasto) {
      Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
    }
  
    printInfo() {
      for (const [key, value] of Object.entries(this)) {
        console.log(`${key}: ${value}`);
      }
    }
  
    addYearToAge() {
      this.wiek++;
    }
  
  }
  
  const person1 = new Person('Grigorij', 'Rasputin', 46, 'Rosja', 'Moskwa');
  const person2 = new Person('Vito', 'Corleone', 51, 'USA', 'Nowy Jork');
  
  person1.favDishes = ['Solanka', 'Kotlet Pożarskiego', 'zupa z dorsza'];
  person2.favDishes = ['spaghetti.', 'pizza', 'lasagne'];
  
  function printDishes() {
    console.log(this.favDishes);
  }
  
  function addDish(dish) {
    this.favDishes.push(dish)
  }
  
  person1.printDishes = printDishes;
  person2.printDishes = printDishes;
  person1.addDish = addDish;
  person2.addDish = addDish;
  
  person1.printDishes();
  person2.addDish('risotto');
  person2.printDishes();
  
  // Zadanie 3:
  class Calc {
    constructor() {
      this.a = 0;
      this.b = 0;
    }
  
    passNumbers(a, b) {
      this.a = a;
      this.b = b;
    }
  
    add() {
      return this.a + this.b;
    }
  
    substract(invOrder) {
      return invOrder === true
        ? this.b - this.a
        : this.a - this.b;
    }
  
    divide(invOrder) {
      if (!invOrder && this.b === 0) {
        console.error('You cannot divide by 0');
        return;
      } else if (invOrder && this.a === 0) {
        console.error('You cannot divide by 0');
        return;
      }
  
      return invOrder === true
        ? this.b / this.a
        : this.a / this.b;
    }
  
    multiply() {
      return this.a * this.b;
    }
  }
  
  const abCalc = new Calc();
  abCalc.passNumbers(3, 5);
  console.log(`add: ${abCalc.add()}`);
  console.log(`multiply: ${abCalc.multiply()}`);
  console.log(`substract: ${abCalc.substract()}`);
  console.log(`divide: ${abCalc.divide()}`);
  
  const zeroCalc = new Calc();
  abCalc.passNumbers(4, 0);
  abCalc.divide();
  
  
  // Zadanie 4:
  class LadderSim {
    constructor(steps) {
      this.steps = steps;
      this.currentStep = 0;
    }
    
    moveUp() {
      this.currentStep = this.currentStep <= 0 ? 1 : ++this.currentStep;
      if(this.currentStep > this.steps) {
        this.getOff();
      } else {
        console.log(`Idziesz stopień do góry - jesteś na stopniu nr ${this.currentStep}`);
      }
    }
    
    moveDown(){
      this.currentStep = this.currentStep >= this.steps ? this.steps : --this.currentStep;
      if(this.currentStep <= 0) {
        this.getOff();
      }  else {
        console.log(`Idziesz stopień w dół - jesteś na stopniu nr ${this.currentStep}`);
      }
    }
    
    getOff() {
      console.log('Zszedłeś z drabiny, nie możesz iść dalej');
    }
  
  }
  
  const ladder = new LadderSim(12);
  ladder.moveUp();
  ladder.moveUp();
  ladder.moveDown();
  ladder.moveDown();
  ladder.moveDown();
  ladder.moveUp();
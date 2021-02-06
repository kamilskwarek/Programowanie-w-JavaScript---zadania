// Zadanie 1:
const car = {
    color: 'black',
    turnsignal: 0,
    model: 'BMW'
}

for (const [key] of Object.entries(car)) {
    console.log(car[key]);
}

// Zadanie 2:
const car = {
    color: 'black',
    turnsignal: 0,
    model: 'BMW',
    changeName: function (newName) {
        this.name = newName;
    }
}

car.changeName('x4');
console.log(car);

// Zadanie 3:
function sumObject(arr) {
    this.sum = arr.reduce((a, b) => a + b);
}

let sumObj = new sumObject([1, 2, 3, 4]);

console.log(sumObj.sum);

// Zadanie 4:
const car = {
    color: 'black',
    turnsignal: 0,
    model: 'BMW'
}

for (const [key, value] of Object.entries(car)) {
    console.log(`${key}: ${value}`);
}

// Zadanie 5:
const car = {
    model: 'BMW',
    turnsignal: 0,
    color: 'Black',
    owner: {
      name: 'Kamil',
      age: 23
    }
}

for (const [key, value] of Object.entries(car.owner)) {
    console.log(`${key}: ${value}`);
}

// Zadanie 6:
const car = {
    model: 'BMW',
    turnsignal: 0,
    color: 'Black',
    owner: {
      name: 'Kamil',
      age: 23
    }
}

car.engine = 1.2;
car.honk = () => {
  console.log('hello');
}
car.honk();
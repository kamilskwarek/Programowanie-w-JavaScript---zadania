// Zadanie 1:
class Person {
    constructor(imie, nazwisko, wiek, kraj, miasto, jezyk) {
        // shorthand for writing multiple this.x =...
        Object.assign(this, { imie, nazwisko, wiek, kraj, miasto, jezyk })
    }

    changeName(name) {
        this.imie = name;
    }

    changeCity(city) {
        this.miasto = city;
    }
}

const person1 = new Person('Jacek', 'Kowalski', 15, 'Polska', 'Warszawa', 'polski');
const person2 = new Person('Vito', 'Scalleta', 31, 'Włochy', 'Rzym', 'włoski');
const person3 = new Person('Howard', 'McGhonary', 21, 'Stany Zjednoczone', 'Delhi', 'angielski');
const person4 = new Person('Nick', 'Bruun', 54, 'Norwegia', 'Oslo', 'norweski');
const person5 = new Person('Alex', 'Yikes', 22, 'Wielka Brytania', 'Oxford', 'angielski');

person1.changeName('Michał');
person1.changeCity('Kraków');
person2.changeName('Hank');
person2.changeCity('Neapol');
person3.changeName('Bernie');
person3.changeCity('Nowy Jork');
person4.changeName('Sven');
person4.changeCity('Drammen');
person5.changeName('Patricia');
person5.changeCity('Londyn');
console.log(person1, person2, person3, person4, person5);



// Zadanie 2:

class Calc {
    constructor(numbers) {
        this.numbers = numbers;
        this.history = [];
    }

    add(name) {
        const result = this.numbers.reduce((a, b) => a + b);
        this.saveToHistory('Adding', result);
        return result;
    }

    substract(city) {
        const result = this.numbers.reduce((a, b) => a - b);
        this.saveToHistory('Substracting', result);
        return result;
    }

    divide() {
        const result = this.numbers.reduce((a, b) => a / b);
        this.saveToHistory('Dividing', result);
        return result;
    }

    multiply() {
        const result = this.numbers.reduce((a, b) => a * b);
        this.saveToHistory('Multiplying', result);
        return result;
    }

    getHistory() {
        return this.history;
    }

    clearHistory() {
        this.history = [];
    }

    saveToHistory(actionName,result) {
        this.history.push({
            action: actionName,
            input: this.numbers,
            output: result
        })
    }
}

const calc1 = new Calc([4,5]);
calc1.multiply();
calc1.add();
calc1.divide();
console.log(calc1.getHistory());
calc1.clearHistory();
console.log(calc1.getHistory());

const calc2 = new Calc([43, -2, 0.5]);
calc2.substract();
calc2.multiply();
console.log(calc2.getHistory());

// Zadanie 3:
function RandNum() {
	this.changeNumber = () => {
		RandNum.prototype.interval = setInterval(() => {
			RandNum.prototype.num = Math.round(Math.random() * 10);
			console.log(RandNum.prototype.num);
		}, 1000);
	};
	this.isMoreThan5 = () => {
		RandNum.prototype.check = setInterval(() => {
			if (RandNum.prototype.num > 5) {
        console.log("Większa niż 5, koniec");
				clearInterval(RandNum.prototype.interval);
				clearInterval(RandNum.prototype.check);
			}
		}, 1000);
	};
}
const randNumChange = new RandNum();
const randNumCheck = new RandNum();
randNumChange.changeNumber();
randNumCheck.isMoreThan5();

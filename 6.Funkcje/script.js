// Zadanie 1:
function printMadeIt() {
    console.log('Udało się!');
}

printMadeIt();

// Zadanie 2:
function print(param) {
    console.log(param);
}

print('test param');

// Zadanie 3:
function getArray(someArray) {
    return someArray;
}

console.log(getArray([1, 2, 3]));

// Zadanie 4:
function printString(str) {
    let i = 0;
    const timer = setInterval(() => {
        if(i < 5) {
            console.log(str);
            i++;
        }
        else{
            console.log("Koniec");
            clearInterval(timer);
        } 
    }, 3000);
}


printString("Wait for it...");
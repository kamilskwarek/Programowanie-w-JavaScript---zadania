// Zadanie 1:
const arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// Zadanie 2:
const tab = ["Bartek", "ma", "długopis", 3, 5];
console.log('Pierszy i drugi element');
console.log( tab[0] ); 
console.log( tab[1] ); 

console.log('Ostatni element');
console.log(tab[tab.length - 1]);

console.log('Wszystkie elementy');
for(let i=0;i<tab.length;i++)
{
    console.log(tab[i]);
}

console.log('Co drugi element');
for(let i=0;i<tab.length;i+=2)
{
    console.log(tab[i]);
}

console.log('Wszystkie stringi');
tab.forEach(el => {
if(typeof(el) === 'string'){
    console.log(el);
}
});

console.log('Wszystkie numbery');
tab.forEach(el => {
if(typeof(el) === 'number'){
    console.log(el);
}
});


// Zadanie 3:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Suma wszystkich elementów');
console.log(arr.reduce((a, b) => a + b));
console.log('Różnica wszystkich elementów');
console.log(arr.reduce((a, b) => a - b));
console.log('Średnia wszystkich elementów');
console.log(arr.reduce((a, b) => a + b) / arr.length);
console.log('Wszystkie parzyste');
arr.filter((v, i) => v % 2 === 0).forEach((v) => {
    console.log(v);
});
console.log('Wszystkie nieparzyste');
arr.filter((v, i) => v % 2 !== 0).forEach((v) => {
    console.log(v);
});
console.log('Największy');
let biggest = 0;
arr.forEach(v => {
    if (v > biggest) {
        biggest = v;
    }
});
console.log(biggest);
console.log('Najmniejszy');
let smallest = 0;
arr.forEach(v => {
    if (v < smallest) {
        smallest = v;
    }
});
console.log(smallest);
console.log('Od tyłu');
const arrLength = arr.length - 1;
arr.forEach((v, i) => {
  console.log(arr[arrLength - i]);
});


// Zadanie 4:
function sumAndPrint(arr) {
    console.log(arr.reduce((a, b) => a + b));
}

sumAndPrint([1, 2, 3, 4]);

// Zadanie 5:
function printElementsXAvg(arr) {
    const avg = arr.reduce((a, b) => a + b) / arr.length;
    arr.forEach((v) => {
        console.log(v * avg);
    });;
}

printElementsXAvg([1, 2, 3, 4]);

// Zadanie 6:
function evenAvg(arr) {
    const evenNums = arr.filter((v, i) => v % 2 === 0);
    return evenNums.reduce((a, b) => a + b) / evenNums.length;
}

console.log(evenAvg([1, 2, 3, 4]));


// Zadanie 7:
let arr = [4, -6, 13, 45, -17, 14, 1];
function sort(array) {
    return array.sort((a, b) => a - b);
}

console.log(sort(arr));

// Zadanie 8:

function sumIndexesOfTwoArrays(arr1, arr2) {
    let arrSum = 0;
    arr1.forEach((v, i) => arrSum += i);
    arr2.forEach((v, i) => arrSum += i);
    return arrSum;
}
// 0 + 0 + 1 + 2
console.log(sumIndexesOfTwoArrays(['el'], ['el', 'el', 'el']));

// Zadanie 9:
let arr = [4, 17, 3, 2, -5, 23];
function dropFromArray(array, el) {
    return array.filter((item) => item != el);
}

console.log(dropFromArray(arr, 17));

// Zadanie 10:
let arr = [-4, -17, 3, 2, -5, 23];

function makeElsOpposite(array) {
    return array.map((v) => v * -1);
}

console.log(makeElsOpposite(arr));

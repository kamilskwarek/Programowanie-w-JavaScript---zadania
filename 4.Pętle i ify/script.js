// Zadanie 1:

let num1 = 12;
let num2 = 5;

if (num1 > num2) {
    console.log(`num1 = ${num1} jest większa`);
} else {
    console.log(`num2 = ${num2} jest większa`);
}

// Zadanie 2:

let num3 = 3;
let num4 = 4;
let num5 = 5;

if (num3 > num4 && num3 > num5) {
    console.log(`num3 = ${num3} jest największa`);
} else if (num4 > num5) {
    console.log(`num4 = ${num4} jest największa`);
} else {
    console.log(`num5 = ${num5} jest największa`);
}

// Zadanie 3:

for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}

// Zadanie 4:
let result = 0;
for (let j = 1; j < 11; j++) {
    result += j;
  console.log(result)
}


// Zadanie 5:
var n = 5;
for (let k = 0; k <= n; k++) {
    console.log(`${k} - ${k % 2 === 0 ? 'parzysta' : 'nieparzysta'}`);
}

// Zadanie 6:
for (let l = 0; l < 3; l++) {
    for (let m = 0; m < 3; m++) {
        console.log("i= " + l + ", j= " + m);
    }
}

// Zadanie 7:
for (let i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

// Zadanie 8:

// a)
let star = '*';
let space = ' ';
for (var a = 0; a < 5; a++) {
    var result = '';
    for (var b = 0; b <= a; b++) {
        result += star;
    }
    console.log(result);
}

// b)
let star = '*';
let space = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += space;
    }
    for (var e = 0; e <= c; e++) {
        result += star + space;
    }
    console.log(result);
}

// c)
let star = '*';
let space = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += space;
    }
    for (var e = 0; e <= c; e++) {
        result += star;
        result += (e < c) ? star : '';
    }
    console.log(result);
}

// d)
let star = '*';
let space = ' ';
for (var f = 0; f < 11; f++) {
    var result = '';
    for (var g = 0; g < 5; g++) {
        if (f < 5) {
            result += g <= f ? star : g;
        } else if (f > 5) {
            result = (g < f-6 ? (g-4)*-1 : star) + result;
        } else {
            result = "-----";
        }
    }
    console.log(result);
}

// e)
let star = '*';
let space = ' ';
for (var c = 0; c < 8; c++) {
    var result = '';
    for (var d = 4; d > c; d--) {
        result += space;
    }
    for (var e = 0; e <= c; e++) {
        result += star + space;
    }
    if(c>=5) {
        result = '';
        for (var f = 0; f < 4; f++) {
          result += space;
        }
        result += star;
    }
  
    console.log(result);
}

// Zadanie 1:

let i = 1;
const timer = setInterval(function () {
    if (i <= 15) {
        console.log(`Cześć po raz ${i}`);
        i++;
    }
    else clearInterval(timer);
}, 3000);



// Zadanie 2

var table=[1,2,3,4,5,6,7,8,9,10]
console.log(table);
setTimeout(()=>{
let i=0;
    var interval = setInterval(()=>{
        console.log(table[i]);
        i++
      if (i>table.length) {
          clearInterval(interval);
      }
    },3000)         
}, 2000);


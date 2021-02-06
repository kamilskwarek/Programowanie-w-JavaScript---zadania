// Zadanie 1
// 1. Rodzica elementu id="buz"
console.log(document.getElementById('buz').parentElement);

// 2. Brata elementu id="baz"
console.log(document.getElementById('buz').parentElement.querySelectorAll('*:not(#buz)'));

// 3. Dzieci elementu id="foo"
console.log(document.getElementById('foo').children);

// 4. rodzica elementu id"foo"
console.log(document.getElementById('foo').parentElement);

// 5. pierwsze dziecko elementu id="foo"
console.log(document.getElementById('foo').children[0]);

// 6. środkowe dziecko elementu id="foo"
const children = document.getElementById('foo').children;
console.log(children[Math.ceil(children.length / 2 - 1)]);

// Zadanie 2:
function printChildOnClick(el) {
    el.addEventListener('click', () => {
        console.log(el.textContent.trim());
    });
}

printChildOnClick(document.getElementById('ex2'));

// Zadanie 3
document.querySelectorAll('div#ex3 button').forEach((el) => {
    el.addEventListener('click', () => {
        let sib = el.nextElementSibling;
        console.log(sib);
        sib.style.display = sib.style.display === "none"
            ? "inline"
            : "none"
    });
});

// Zadanie 4
document.querySelectorAll('div#ex3 button').forEach((el) => {
    el.addEventListener('click', () => {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        el.parentElement.style.backgroundColor = randomColor;
    });
});

// Zadanie 5
// task to numer zadania [1-5]
document.querySelectorAll('div#ex5 div').forEach((el) => {
    const task = 1;
    let selector;
    switch (task) {
        // 1. Tylko pierwszy element listy
        case 1:
            selector = 'li:first-of-type'; break;
        // 2. tylko ostatni element listy
        case 2:
            selector = 'li:last-of-type'; break;
        // 3. Parzyste elementy listy
        case 3:
            selector = 'li:nth-child(even)'; break;
        // 4. Wszystkie elementy listy
        case 4:
            selector = 'li'; break;
        // 5. Żaden z elementów - tylko cała lista
        case 5:
            selector = '';
    }
    const items = el.parentElement.querySelectorAll(`ul ${selector}`);
    el.addEventListener('mouseover', () => {
        items.forEach((item) => {
            item.style.backgroundColor = el.style.backgroundColor;
        });
    });
});

// Zadanie 6

// 1. pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
let a  = document.querySelector('#ex6').firstElementChild.firstElementChild.firstElementChild;

// 2. pierwsze dziecko -> rodzic -> pierwsze dziecko -> pierwsze dziecko -> brat -> rodzic
let b = document.querySelector('#ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;

// 3. rodzic -> pierwsze dziecko -> rodzic -> drugie dziecko -> pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
let c = document.querySelector('#ex6').parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;
console.log({ ex6_1, ex6_2, ex6_3 });
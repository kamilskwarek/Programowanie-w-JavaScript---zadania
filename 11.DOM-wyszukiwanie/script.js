// Zadanie 1
const lists = document.getElementsByClassName('list');

// Zadanie 2
function getElByTag(tag) {
  return document.getElementsByTagName(tag);
}

const lis = getElByTag('li');
console.log(lis);

// Zadanie 3
const list = document.getElementById('list');
console.log(list);

// Zadanie 4
function elPrint(params) {
  params.forEach((param) => console.log(document.querySelectorAll(param)));
}

elPrint(['li', 'ul', 'span', 'div.list span', 'div#spans span']);


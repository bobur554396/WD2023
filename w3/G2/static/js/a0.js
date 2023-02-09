let h1 = document.getElementById('title');
h1.innerHTML = 'new value';
h1.style.color = 'red';
h1.style.fontSize = '14px';

let box = document.getElementsByClassName('box');
console.log(box);

let text = document.createElement('h3');
text.innerHTML = 'new h3 from js';
text.style.color = 'blue';

let container = document.getElementById('container');

container.appendChild(text);

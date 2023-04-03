// add a p tag with the text 'Hey I'm red!'
const body = document.querySelector('body');
const p = document.createElement('p');
p.textContent = 'Hey I\'m red!';
p.style.cssText = 'color:red';
body.appendChild(p);


//h3 with some blue text in it
const h3 = document.createElement('h3');
p1.textContent = ' I\'m a blue h3!';
p1.style.cssText = 'color:blue';
body.appendChild(p1);

//a new div with different styling
const div = document.createElement('div');
const h1 = document.createElement('h1');
const p2 = document.createElement('p');

p2.textContent = ' MEE TOO!';
h1.textContent = ' I\'m in a div ';
div.appendChild(h1);
div.appendChild(p2);
body.appendChild(div);
// add a p tag with the text 'Hey I'm red!'
const body = document.querySelector('body');
const p = document.createElement('p');
p.textContent = 'Hey I\'m red!';
p.style.cssText = 'color:red';
body.appendChild(p);


//h3 with some blue text in it
const h3 = document.createElement('h3');
p.textContent = ' I\'m a blue h3!';
p.style.cssText = 'color:blue';
body.appendChild(p);

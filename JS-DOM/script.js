// add a p tag with the text 'Hey I'm red!'
const body = document.querySelector('body');
const p = document.createElement('p');
p.textContent = 'Hey I\'m red!';
p.style.cssText = 'color:red';
body.appendChild(p);


//
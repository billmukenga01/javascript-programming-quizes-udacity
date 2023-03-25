const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                   'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const lowerCase = upperCase.map(input => input.toLowerCase());

const specialCharacters = ['!', '@','#','$','&','(',')','%','*'];

const randomNumber = Math.round(Math.random()*10);

const passwordLength = prompt('Input desired password length', 6);


console.log(upperCase);
console.log(lowerCase);
console.log(randomNumber);
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                   'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const lowerCase = upperCase.map(input => input.toLowerCase());

const specialCharacters = ['!', '@','#','$','&','(',')','%','*'];

//const randomNumber = Math.round(Math.random()*10);

const passwordLength = prompt('Input desired password length', 6);

const generatedString = [];

if (generatedString.length < passwordLength){
    
    for(i=passwordLength; i>=0; i--){
        generatedString.push(upperCase[Math.round(Math.random()*26)])
        generatedString.push(lowerCase[Math.round(Math.random()*26)])
        generatedString.push(specialCharacters[Math.round(Math.random()*9)])     
        generatedString.push(Math.round(Math.random()*10))
    }
    
}

if(generatedString.length > passwordLength){
    generatedString.splice(-(generatedString.length - passwordLength), generatedString.length - passwordLength)
}



console.log(upperCase);
console.log(lowerCase);
console.log(generatedString);
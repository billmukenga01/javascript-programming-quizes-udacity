const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                   'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const lowerCase = upperCase.map(input => input.toLowerCase());

const specialCharacters = ['!', '@','#','$','&','(',')','%','*'];

//const randomNumber = Math.round(Math.random()*10);

const passwordLength = prompt('Input desired password length', 6);

const generatedString = [];



if (generatedString.length < passwordLength){
    
    for(i=passwordLength; i>0; i--){
        generatedString.push(upperCase[Math.floor(Math.random()*26)])
        generatedString.push(lowerCase[Math.floor(Math.random()*26)])
        generatedString.push(specialCharacters[Math.floor(Math.random()*9)])     
        generatedString.push(Math.floor(Math.random()*10))
    }
    
}

if(generatedString.length > passwordLength){
    generatedString.splice(-(generatedString.length - passwordLength), generatedString.length - passwordLength)
}


function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }
function shuffle(array) {
            // Convert String to array
    let n = array.length ;              // Length of the array
    
    for(var i=0 ; i<n-1 ; ++i) {
      let j = getRandomInt(n);       // Get random of [0, n-1]
      
      let temp = array[i];             // Swap arr[i] and arr[j]
      array[i] = array[j];
      array[j] = temp;
    }
    
    password = array.join('');                // Convert Array to string
    return password;                        // Return shuffled string
}

let shuffledPassword = shuffle(generatedString);

console.log(upperCase);
console.log(lowerCase);
console.log(generatedString);
const input = '010010000101001010001010100010101010101000001010010100010100010101010100001010100010010100000001010101010000000'

let lengthOfArray = [''];

const array = Array.from(input.split('1'));


array.forEach(element => {
    if(element.length > lengthOfArray[0].length){
        lengthOfArray.pop();
        lengthOfArray.push(element);
    }

});

console.log(lengthOfArray);

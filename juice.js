/*
 * Programming Quiz: 99 Bottles of Juice
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output
 */


let num = 99;

while (num >= 1) {
    // check value of num
    if (num === 1){
        let valueOne = `${num}bottle of juice on the wall! ${num} bottle of juice! Take one down, pass it around...${num-1} bottles of juice on the wall!`;
        console.log(valueOne);
    }else if (num === 2){
        let valueThree = `${num}bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around...${num-1} bottle of juice on the wall!`;
        console.log(valueThree);
    }
    else{
        let valueTwo = `${num}bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around...${num-1} bottles of juice on the wall!`
        console.log(valueTwo);
    }
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    num --;
};
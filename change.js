/*
 * Programming Quiz: Changing the Loop
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `9`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should decrement `x` each time it executes
 * - Your code should produce the expected output
 */
 
// rewrite the while loop as a for loop
let x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}


for(let i = 9; i >= 1; i--) {
    console.log(`hello ${i}`);
};
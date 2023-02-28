/*
 * Programming Quiz: What do I Wear?
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
const shirtWidth = 23;
const shirtLength = 30;
const shirtSleeve = 8.71;

// your code goes here
const small = (18 >= shirtWidth < 20) && (20 >= shirtLength < 22) && (20 >= shirtSleeve < 22);
const medium = (20 >= shirtWidth < 22) && (20 >= shirtLength < 22) && (20 >= shirtSleeve < 22);
const large = (22 >= shirtWidth < 24) && (20 >= shirtLength < 22) && (20 >= shirtSleeve < 22);
const xLarge = (24 >= shirtWidth < 26) && (20 >= shirtLength < 22) && (20 >= shirtSleeve < 22);
const xxLarge = (26 >= shirtWidth < 28) && (20 >= shirtLength < 22) && (20 >= shirtSleeve < 22);
const xxxLarge = (28 <= shirtWidth) && (20 <= shirtLength ) && (20 <= shirtSleeve);
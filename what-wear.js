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
const small = (18 >= shirtWidth && shirtWidth < 20) && (28 >= shirtLength && shirtLength < 29) && (8.13 >= shirtSleeve && shirtSleeve< 8.38);
const medium = (20 >= shirtWidth && shirtWidth < 22) && (29 >= shirtLength && shirtLength < 30) && (8.38 >= shirtSleeve && shirtSleeve < 8.63);
const large = (22 >= shirtWidth && shirtWidth < 24) && (30 >= shirtLength && shirtLength < 31) && (8.63 >= shirtSleeve && shirtSleeve < 8.88);
const xLarge = (24 >= shirtWidth && shirtWidth < 26) && (31 >= shirtLength && shirtLength < 32) && (8.88 >= shirtSleeve && shirtSleeve < 9.63);
const xxLarge = (26 >= shirtWidth && shirtWidth < 28) && (33 >= shirtLength && shirtLength < 33) && (9.63 >= shirtSleeve && shirtSleeve < 10.13);
const xxxLarge = (28 <= shirtWidth) && (34 <= shirtLength ) && (10.13 <= shirtSleeve);

if(small){
    console.log("S");
}else if(medium){
    console.log("M");
}else if(large){
    console.log("L");
}else if(xLarge){
    console.log("XL");
}else if(xxLarge){
    console.log("2XL");
}else if(xxxLarge){
    console.log("3XL");
}else{
    console.log("N/A");
}
/*
 * Programming Quiz: Ice Cream
 *
 * Write a single if statement that logs out the message:
 * 
 * "Great choice! Your ice cream is at the next window."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "sugar cone" or "wafer cone"
 *   - topping is "sprinkles" or "peanuts"
 *
 * Otherwise log out:
 *
 * "Please check our menu and try again."
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `topping`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 
 */
 
// change the values of `flavor`, `topping`, and `vessel` to test your code
const flavor = "strawberry";
const topping = "sprinkles";
const vessel = "wafer cone";

// your code goes here

//always make sure that you place code in one line so as  to make it readable 
//you have to write code as if someone else is going to read it


//so therfore i refactored this code that each parameter might be stored individually
const Flavor = (flavor === "vanilla" || flavor === "chocolate");
const Vessel = (vessel === "sugar cone" || vessel === "wafer cone");
const Topping = (topping === "sprinkles" || topping === "peanuts");

if(Flavor && Vessel && Topping) {
    console.log("Great choice! Your ice cream is at the next window.");
}else{
    console.log("Please check our menu and try again.");
}
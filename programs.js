//Here are some programs that I tried to solve using typescript...
// --Program 01
// Write a ts program to find maximum between two numbers.
var userInput1 = prompt("Enter first Number");
console.log("First Number =", userInput1);
var userInput2 = prompt("Enter Second Number");
console.log("Second Number =", userInput2);
if (Number(userInput1) > Number(userInput2)) {
    console.log("First Number is greater than Second Number");
}
else if (Number(userInput1) < Number(userInput2)) {
    console.log("Second Number is greater than First Number");
}
else {
    console.log("Numbers are equal");
}

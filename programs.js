//Here are some programs that I tried to solve using typescript...
// --Program 01
// Write a ts program to find maximum between two numbers.
// let userInput1:string | null = prompt("Enter first Number");
// console.log("First Number =",userInput1);
// let userInput2:string | null = prompt("Enter Second Number");
// console.log("Second Number =",userInput2);
// if (Number(userInput1)>Number(userInput2)){
//     console.log("First Number is greater than Second Number");
// }
// else if (Number(userInput1)<Number(userInput2)){
//     console.log("Second Number is greater than First Number");
// }
// else {
//     console.log("Numbers are equal");
// }
// --Program 02
// Write a ts program to find maximum between three numbers?
var userInput1 = prompt("Enter first Number");
console.log("First Number =", userInput1);
var userInput2 = prompt("Enter Second Number");
console.log("Second Number =", userInput2);
var userInput3 = prompt("Enter Third Number");
console.log("Third Number =", userInput3);
if (Number(userInput1) > Number(userInput2) && Number(userInput1) > Number(userInput3)) {
    console.log("First Number is greater than Second Number and Third Number");
}
else if (Number(userInput2) > Number(userInput1) && Number(userInput2) > Number(userInput3)) {
    console.log("Second Number is greater than First Number and Third Number");
}
else if (Number(userInput3) > Number(userInput2) && Number(userInput3) > Number(userInput1)) {
    console.log("Third Number is greater than First Number and Second number");
}
else {
    console.log("Numbers are equal");
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* First Function */
function addTwo(num) {
    return num + 2;
}
addTwo(); //error - expected 1 argument
addTwo(5); //no error - number value provided
addTwo("2"); // error - expected number, providing number
/* Second Function */
function getUpper(val) {
    return val.toUpperCase();
}
getUpper(); //error - expected 1 argument
getUpper('u'); //no error - string value provided
getUpper(5); // error - expected string, providing number
/* Third Function */
function signUpUser(name, email, isPaid) { }
signUpUser(); //error - expected 3 arguments
// 1 error at a time
signUpUser(1, 2, 3);
signUpUser("Raj", 2, 3);
signUpUser("Raj", "raj@gmail.com", 3);
signUpUser("Raj", "raj@gmail.com", true); //no error - correct values given
/* Fourth Function */
// default value
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser(); //error - expected 3 arguments
loginUser("Gautam", "gautam@gmail.com"); //no error - 2 values provided, 1 by default
/* Fifth Function */
// We are still not doing functions correctly as we can still return anything, no type checking is performed while returning.
function addThree(num) {
    return "hello";
}
addThree(5);
/* Sixth Function with return data type specified.*/
function addFour(num) {
    //return "hello"; //error
    return num + 5;
}
addFour(7);

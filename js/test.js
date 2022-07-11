'use strict';


// alert("Hello");

var a = 2;
var A = 2;

{
let _a = 3;
let _A = 3;    
}


const $a = 3;
const $A = 4;

// prompt("Dude, tell me everything you know about programming", "...");

    //    var x = 30;
    //    console.log("the value of x is", x++);
  
// alert("Good morning Cats!" + a);

A = 'foo';

console.log("text", A);

console.log("0.1 + 0.2", 0.1 + 0.2);

console.log("type(a) =", typeof(a));
console.log("type(A) =", typeof(A));
console.log("type(true) =", typeof(true));

if (typeof(A) == "string") {
    console.log("a + A =", a + A);
} else {
    console.log("a/A =", a/A);
}

/*
var x = prompt("Enter x=", "...");
var y = prompt("Enter y=", "...");
var op = prompt("Enter operation", "...");

if (op == '+') {
    console.log("a + b =", x + y);
    alert(x + y);
} else if (op == '-') {
    console.log("a - b =", x - y);
    alert(x - y);
} else if (op == '*') {
    console.log("a + b =", x * y);
    alert(x * y);
} else {
    console.log("Bed operation");
    alert("Bed operation");
} 
*/

var x = parseFloat(prompt("Enter x=", "..."));
var y = parseFloat(prompt("Enter y=", "..."));
var op = prompt("Enter operation", "...");

if (op == '+') {
    console.log("x + y =", x + y);
    alert(x + y);
} else if (op == '-') {
    console.log("x - y =", x - y);
    alert(x - y);
} else if (op == '*') {
    console.log("x + y =", x * y);
    alert(x * y);
} else if (op == '/') {
    console.log("x / y =", x / y);
    alert(x / y);
} else if (op == '%') {
    console.log("x + y =", x % y);
    alert(x % y);
} else {
    console.log("Bed operation");
    alert("Bed operation");
}



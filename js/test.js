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

// Calc V1
/*
var x = parseFloat(prompt("Enter x="));
console.log("x=", x);
var y = parseFloat(prompt("Enter y="));
console.log("y=", y);
var op = prompt("Enter operation");


if (!isNaN(x)) {
    if (!isNaN(y)) {
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
            if (y == '0') {
                console.log("Division by 0!");
                alert("Devision by 0!");
            } else {
                console.log("x / y =", x / y);
                alert(x / y);
            }
        } else if (op == '%') {
            console.log("x + y =", x % y);
            alert(x % y);
        } else {
            console.log("Bed operation");
            alert("Bed operation");
        }
    }
    else {
        console.log("ERROR! Y is NaN");
        alert("ERROR! Y is NaN");
    }
} else {
    console.log("ERROR! X is NaN");
    alert("ERROR! X is NaN");
}
*/

/*
var x = prompt("Enter x=");
console.log("x=", x);
var y = prompt("Enter y=");
console.log("y=", y);

if (x != '', x != '') {
    if (!isNaN(x)) {
        if (!isNaN(y)) {
            switch (prompt("Enter operator:")) {
                case "+": alert("x + y =" + (x + y)); break;
                case "-": alert("x - y =" + (x - y)); break;
                case "*": alert("x * y =" + (x * y)); break;
                case "/":
                    if (y == '0') {
                        alert("ERROR! Division by 0!");
                    } else {
                        alert("x / y =" + (x / y));
                    } break;
                
                default: alert("Непевна операція!"); break;
            }
        }
        else {
            alert("ERROR! Y is NaN. You can't do math!");
        }
    } else {
        alert("ERROR! X is NaN. You can't do math!");
    }
}else {
    alert("ERROR! Value not enter.");
}
*/

let obj = {
    name: "My Name",
    price: 123
};

console.log(document);
console.log(typeof(document));
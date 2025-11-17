//the let variable
let str = "this is string";
//Redeclaring a variable inside a block will not redeclare the variable outside the block
{
    let str = "inside string";
    console.log("(LET) this is inside of block:" + str);
    console.log("");
}
console.log("(LET) this is outside of block:" + str);
console.log("");

//let can also be reassigned
console.log("re-assign");
let num = 1;
console.log("declared let before: " + num);
num = 2;
console.log("declared let after re-assign: " + num);
console.log("");
//the const variable
// Variables defined with const cannot be Redeclared nor Reassigned
const original = "this is original";
//original = "I substitute"; //this is error
console.log(original);

const pros = "outside str";
//Redeclaring a variable inside a block will not redeclare the variable outside the block
{
    const cons = "inside str";
    console.log("(CONST) this is inside of block : " + cons);
    console.log("");
}
console.log("(CONST) this is outside of block : " + pros);
console.log("");

//types
//The typeof operator returns the type of a variable or an expression
let a;
console.log(typeof a); //undefined
a = "10";
console.log(typeof a); //string
a = 11;
console.log(typeof a); //number
a = 1.1;
console.log(typeof a); //number
a = true;
console.log(typeof a); //boolean
a = null;
console.log(typeof a); //null
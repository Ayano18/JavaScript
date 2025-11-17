// Creating an Array
let numstr = ["one", "two", "three"];
let numint = [1,2,3];

console.log(numstr);
console.log(numint);

console.log("");

// Creating an empty Array
let emptyarr = [];
emptyarr[0] = "uno";
emptyarr[1] = "dos";
emptyarr[2] = "tres";

console.log(emptyarr);
//console.log("");

// Creating Array using new keyword
let bago = new Array(3, 2, 1);

console.log(bago);
console.log("");

// Accessing Array Elements
let color = ["white", "black", "yellow","pink"];
console.log("color: " + color.toString());
console.log(color[3]); //Access
color[3] = "cyan"; //Changing
console.log(color[3]);

//console.log(color.length); //length of an array
//color.length = 2;
//console.log(color.toString()); //index length 2 only

console.log("");
console.log("color values: " + color.toString());
color.push("light"); // add to last element
console.log("color after push: " + color.toString());
color.pop(); // remove last element
console.log("color after pop: " + color.toString());
color.shift(); // remove first element
console.log("color after shift: " + color.toString()); 
color.unshift("haha"); // add first element
console.log("color after unshift: " + color.toString()); 
console.log("");


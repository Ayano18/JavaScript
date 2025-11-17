//function invocation
function voids(a, b){
    return a + b;
}

console.log(voids(2, 2));
console.log("");

function course(bs, year, learning){
    console.log("course: "+ bs);
    console.log("year: "+ year);
    console.log("natutunan?: "+ learning);
}

course("BSIT", 3, "nganga");

console.log("");
//arrow function
let modulo = (num) => num % 2 == 0 ? "even" : "odd";

console.log(modulo(1));
console.log(modulo(2));

console.log("");


// function hoisting
console.log(hoisting("gege"));

function hoisting(str){
    return str;
}

console.log("");

// self-invoking functions
// Immediately Invoked Function Expression (IIFE)

(
    function() {
        console.log("self-invoked");
    }
)();

(function(){
    console.log(1 != 1);
})();


(
    () => console.log("arrow self-invoked")
)();

console.log("");

// check arguments and parameters
function ParamsArgu(param1, param2, param3){
    return arguments.length;
}

console.log(ParamsArgu(1, 2, 3));

console.log("");


// Setting a default value to a function parameter.

function defaultvalue(int1, int2){
    if(int2 === undefined){
        int2 = 5;
    }
    return int1 * int2;
}


console.log(defaultvalue(5));

function defaulparametertvalue(int1 ,int2 = 10){
    return int1 * int2;
}
console.log(defaulparametertvalue(10));

console.log("");

// adding all args element
let x = sumAll(123, 123, 500, 123, 40, 90);
console.log(x);
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

// using CALL() method

const names = {
    fullname: function(fname, lname){
        return this.fname + " & " + this.lname;
    }
}

const govname = {
    fname: "java",
    lname: "script"
}

const animename = {
    fname: "Naruto",
    lname: "Uchiha"
}

console.log(names.fullname.call(govname)); //call the govname
console.log(names.fullname.call(animename)); // call the animename

console.log("");

// using CALL() with parameters and arguments
const rainbow = {
    roygbiv: function(green, blue, indigo, violet){
        return this.red + this.orange + this.yellow + "(the parameters and arguments): " + green + blue + indigo + violet;
    }
}

const roycolors = {
    red: "red ",
    orange: "orange ",
    yellow: "yellow "
}

console.log(rainbow.roygbiv.call(roycolors, "green", " blue", " indigo", " violet"));


// using APPLY() with paramters and arguments

const pinas = {
    

    drinks: function(coke, sprite, dew){
        return this.water + coke + sprite + dew + this.nestea;
    }

}

console.log("");

const strdrinks = {
    water: "water",
    nestea: "nestea"
}

console.log(pinas.drinks.apply(strdrinks, [" coke"," sprite ","dew "], strdrinks));

const valorant = {
    carlsfav: function(objective, subrole){
        return this.name + ": I used to " + this.role + ", " + objective + subrole;
    }
}

const carl = {
    name: "carl",
    role: "Controller",
}
const objrole = ["Clove makes mischief for enemies in both the heat of combat and the cold of death."," Somtayms, I used to troll using duelist"];

console.log(valorant.carlsfav.apply(carl, objrole));


console.log("");


// bind

const user = {
  name: "Sam",
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

// If we try to use the method directly, 'this' is lost (usually becomes global/undefined):
setTimeout(user.greet, 100); 
// Output (Non-strict mode): "Hello, my name is ." or (Strict mode/Modules) Error

// Fix the 'this' context using bind()
const boundGreet = user.greet.bind(user);

// Now, when the bound function is executed, 'this' is correctly set to 'user'.
setTimeout(boundGreet, 100); 
// Output: "Hello, my name is Sam."
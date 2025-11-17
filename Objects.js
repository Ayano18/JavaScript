// Create Objects

// An object literal is a list of key : value pairs inside curly braces {}:
const cp = {
    // In object terms, the key : value pairs are the object properties.

    Brand: "Xioami",
    Model: "Poco X7",
    Color: "Green Mint",
    ROM: 256,
    RAM: 8,
    Chipset: "Dimensity 7300",

    launch: function(){
        return cp.Model;
    }
};

console.log(cp.Brand);
console.log(cp.launch());

console.log("");

// Create an empty object
const wifi = {};

wifi.name = "Converge";
wifi.speed = 50;
wifi.subscription = "Prepaid";

//traditional function with empty obj
wifi.all = function() {
    console.log("traditional function");
    console.log(wifi.name);
    console.log(wifi.speed);
    console.log(wifi.subscription);
}
console.log(wifi.all());

//arrow function with empty obj
wifi.arrow = () => {
    console.log("arrow function");
    console.log(wifi.name);
    console.log(wifi.speed);
    console.log(wifi.subscription);
}
console.log(wifi.arrow());

console.log("");



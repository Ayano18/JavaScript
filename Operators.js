function Arithmetic(){
        
    // Arithmetic Operators

    // +
    let add = 1 + 2 + 3;
    console.log(add);
    console.log("or");
    let a = 3;
    let b = 6;
    let c = a + b;
    console.log(c);
    console.log("");

    // -
    let minus = 1 - 2 - 3;
    console.log(minus);
    console.log("or");
    let e = 3;
    let f = 6;
    let g = e - f;
    console.log(g);
    console.log("");

    // *
    let multi = 1 * 2 * 3;
    console.log(multi);
    console.log("or");
    let h = 3;
    let i = 6;
    let j = h * i;
    console.log(j);
    console.log("");

    // /
    let divide = 10 / 2;
    console.log(divide);
    console.log("or");
    let k = 100;
    let l = 10;
    let m = k / l;
    console.log(m);
    console.log("");

    // % modulo
    let mods = 17 % 5;
    console.log(mods); //remainder 2
    console.log("");

    // ++ increment or -- decrement
    let z = 68;
    console.log("before increment: " + z);
    z++;
    console.log("after increment: " + z);
    console.log("");
    let y = 100;
    console.log("before increment: " + y);
    y--;
    console.log("after increment: " + y);
    console.log("");

    // exponentiation and Math.pow()

    let base = 5;
    let exponent = 2;
    console.log("exponentiation: " + base ** exponent);
    console.log("");
    console.log("Math.pow: " + Math.pow(base, exponent));

}
//Arithmetic();

function Assignment(){

    // Assignment Operators

    //simple assignment operator
    let num = 2;
    console.log("the value of num is: " + num);
    console.log("");

    // += and -= and *= and /= and **= and %=
    let a = 5;
    console.log("before using += " + a);
    a += 5;
    console.log("after using += " + a);
    console.log("");

    let b = 5;
    console.log("before using -= " + b);
    b -= 3;
    console.log("after using -= " + b);
    console.log("");

    let c = 5;
    console.log("before using *= " + c);
    c *= 5;
    console.log("after using *= " + c);
    console.log("");

    let d = 50;
    console.log("before using /= " + d);
    d /= 2;
    console.log("after using /= " + d);
    console.log("");

    let e = 10;
    console.log("before using **= " + e);
    e **= 2;
    console.log("after using **= " + e);
    console.log("");

    //for string
    let text = "Hello"; text += " World";
    console.log(text);
}
//Assignment();

function Comparisons(){
    // Comparisons

    // > and < and >= and <=

    console.log(1 > 2);
    console.log(1 < 2);
    console.log(2 >= 2);
    console.log(3 <= 2);
    console.log("");

    // == and === and != and !==
    console.log(1 == 1);
    console.log(1 == 2);
    console.log(1 == "1");
    console.log(1 === 1);
    console.log(1 === "1");
    console.log(1 != 2);
    console.log(1 !== 2);
    console.log(1 !== "2");
}
//Comparisons();
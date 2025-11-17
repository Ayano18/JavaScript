
// IF ELSE 

let age = 15;
let ages = 21
if(age >= 18){
    console.log("Legal age");
} else {
    console.log("Minor");
}

//nested if
let born = 2000;
if(born >= 1997){
    if(born <= 2012){
        console.log("Gen Z");
    }
}

//ternary
let ter = (ages >= 18) ? "legal" : "minor";
console.log(ter);

//switch
let now = new Date();

switch(now.getDay()){
    case 0:
        console.log("It's Sunday");
    break;
    case 1:
        console.log("It's Monday");
    break;
    case 2:
        console.log("It's Tuesday");
    break;
    case 3:
        console.log("It's Wednesday");
    break;
    case 4:
        console.log("It's Thursday");
    break;
    case 5:
        console.log("It's Friday");
    break;
    case 6:
        console.log("It's Saturday");
    break;
    default:
        console.log("haha");
}
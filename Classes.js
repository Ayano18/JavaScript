//Classes

class Cellphone{
    constructor(brand, model, year){
        // Initializes the name properties
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    call(){ //function return type
        return this.brand + " " + this.model + ", " + this.year;
    }
}

const Phone = new Cellphone("Poco", "X7", 2025);

console.log(Phone.year);
console.log(Phone.call());
console.log("");

class Parent{
    constructor(genes, wealth, status){
        this.genes = genes;
        this.wealth = wealth;
        this.status = status;
    }
    mogged(){
        return "I inherited my parent: " + this.genes;
    }
    rich(){
        return "I inherited my parent: " + this.wealth + " wealth";
    }
    current(){
        return "I am " + this.status + " (nepobaby)";
    }
    Parentall(){
        return this.mogged() + "\n" + this.rich() + "\n" + this.current();
    }

    //the difference between return keyword and console.log

    ReturnParentData(){     //using return keyword
        return this.genes + "\n" + this.wealth + "\n" + this.status;
    }
    ConsoleParentData(){    //using console as return
        console.log(this.genes);
        console.log(this.wealth);
        console.log(this.status);
    }
}
const Parents = new Parent("Handsome", "Rich", "Upper Class"); //Parent class

console.log("PARENT CLASS:");
console.log(Parents.ReturnParentData()); //since its using return you need to use console.log
Parents.ConsoleParentData(); //since its using console.log you dont need to use console.log again to call the method


console.log("");
class Child extends Parent{
    constructor(genes, wealth, status){
        super(genes, wealth, status);
    }

    ParentOrig(){
        return Parents.Parentall();
    }
}
console.log("CHILD CLASS:");
const childinstance = new Child("Attractive", "Spoiled", "Noble"); //Child class

console.log(childinstance.Parentall()); //inherit the methods from Parent class

//console.log(childinstance.ParentOrig()); //accessed parent class
console.log("");

class Adopted extends Parent{
    constructor(genes, wealth, status, out){
        super(genes, wealth, status);
        this.out = out;
    }
    added(){
        return this.Parentall() + "\n" + this.out;
    }
}
console.log("ADOPTED CLASS:");
const adoptinstance = new Adopted("Biological genes", "Frugal", "Lower Class", "Unrelated");
console.log("I am " + adoptinstance.out);
console.log(adoptinstance.added());

console.log("");
console.log("");
// Encapsulation || Setters and Getters

class Store{

    constructor(price){
        this.price = price;
    }

    get gPrices(){
        return this.price;
    }

    set sPrices(php){
        if(php >= 100){
            this.price = php;
            console.log("profitted");
        } else {
            console.log("profit loss");
        }
    }
    
}
const checkprice = new Store(69);
console.log(checkprice.gPrices); //the accessor
checkprice.sPrices = 150;
console.log(checkprice.gPrices);


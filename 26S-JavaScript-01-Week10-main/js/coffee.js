const output = document.querySelector("#output");

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee{
    // fields/variables
    size;
    isDecaf;

    // constructor
    constructor(size, isDecaf){
        this.size = size;
        this.isDecaf = isDecaf;
    }

    // functions/methods
    // add a serveIt method
    serveIt(){
        // Generate an IMG of the coffee ordered
        let cup = document.createElement("img")

        

        // Set the src path for the IMG element
        cup.setAttribute("src", "images/coffee-cup.svg"); // <img scr="images/coffee-cup.svg">
        

        // Determine caffeine status of the coffee
        if(this.isDecaf){
            cup.setAttribute("src", "images/coffee-cup-green.svg"); // <img scr="images/coffee-cup-green.svg">
        } else {
            cup.setAttribute("src", "images/coffee-cup-purple.svg"); // <img scr="images/coffee-cup-purple.svg">
        }

        // Set the size of the cup SVG image based on this.size
        switch(this.size){
            // Size the IMG in terms of its height based on above number from the switch
            case "small":
                // <img src="images/coffee-cup-color.svg" height=100>
                cup.setAttribute("height", 100);
                break;
            case "medium":
                // <img src="images/coffee-cup-color.svg" height=125>
                cup.setAttribute("height", 125);
                break;
            case "large":
                // <img src="images/coffee-cup-color.svg" height=150>
                cup.setAttribute("height", 150);
                break;
            default:
                cup.setAttribute("height", 125);
        }

        // Generate a description of the coffee and put it into the IMG title attribute
        cup.setAttribute("title", `A ${this.size} ${this.isDecaf ? "decaffinated" : "caffinated"} coffee`);

        // Insert the new IMG element into the paragraph 
        output.appendChild(cup);
    }
}

/* STEP 2: Instatiate a coffee based on the above constructor function */
let myCoffee = new Coffee("small", false);
let otherCoffee = new Coffee("medium", true);
let thatCoffee = new Coffee("large", false);

/* STEP 3: Add a method to the Coffee class called serveIt() */
/* STEP 4: Call up the serveIt() method */

// myCoffee.serveIt();
// otherCoffee.serveIt();
// thatCoffee.serveIt();

/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee{
    milkType;

    constructor(size, isDecaf, milkType){
        super(size, isDecaf);
        this.milkType = milkType;
    }

    latteDescription(){
        return `A ${this.size} sized latte, with ${this.milkType} milk, and is ${this.isDecaf ? "decaffinated" : "caffinated"}.`
    }
}

/* STEP 6: Create a new instance of the Latte object */
let myLatte = new Latte("medium", false, "regular")

/* STEP 7: Call up the latteDesc() method for the above created Latte instance */
let test = myLatte.latteDescription();

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// myLatte.serveIt();

// Lab 2 stuff:
// class extend
class HotCoco extends Coffee{
    // unique properties
    chocType;
    isTopped;

    // constructor
    constructor(size, isDecaf, chocType, isTopped){
        super(size, isDecaf)
        this.chocType = chocType;
        this.isTopped = isTopped;
    }

    cocoDescription(){
        return `An order of a ${this.size} ${this.isDecaf ? "decaffinated" : "caffinated"} ${this.chocType} chocolate ${this.isTopped ? "topped with marshmellows" : ""} hot coco!`;
    }

}

// instances of new class
myCoco = new HotCoco("small", false, "milk", false);
profsCoco = new HotCoco("large", true, "90% dark", true);

// console quick check
let test1 = myCoco.cocoDescription();
let test2 = profsCoco.cocoDescription();

// image rendering
myCoco.serveIt();
profsCoco.serveIt();

// text rendering (no idea if there is a better way(also tried with output, but it replaces the text, i dont know how to append to it))
let space = "   \n|||\n   "
desc.textContent = `${test1} ${space} ${test2}`;
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG

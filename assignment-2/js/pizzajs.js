// Variable for output pizza details
const output = document.querySelector("#order-output");
const form = document.getElementById("pizza-form");

// Find and replace Student info
const studentName = document.querySelector("#studentName");
const studentID = document.querySelector("#studentID")

studentName.textContent = "Kirill Volyk(JS)";
studentID.textContent = "200638948(JS)";

// Form event: Capture values, Validate that the form is not empty, Output details
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Capture values
    const name = document.getElementById("customerName").value;
    const size = document.getElementById("size").value;
    const crust = document.getElementById("crust").value;

    // Capture toppings(boxes)
    const toppingBoxes = document.getElementsByName("ingredients");
    let toppings = [];

    toppingBoxes.forEach(box => {
        if (box.checked) {
            toppings.push(box.value);
        }
    });

    // Validation
    if (name.trim() === "") {
        output.textContent = "Name is required";
        return;
    }

    if (size === "") {
        output.textContent = "Choose a pizza size";
        return;
    }

    if (toppings.length === 0) {
        output.textContent = "Atleast choose the required topping!";
        return;
    }

    if (crust === "") {
        output.textContent = "Choose a crust type";
        return;
    }

    // If everything is valid
    console.log("Name:", name);
    console.log("Size:", size);
    console.log("Crust:", crust);
    console.log("Toppings:", toppings);

    // Output the details
    const pizzaOrder = new Pizza(name, size, toppings, crust);
    console.log(pizzaOrder.describePizza());
    output.textContent = pizzaOrder.describePizza();
    
});

// Pizza class
class Pizza {
    // constructor
    constructor(customerName, size, toppings, crust) {
        this.customerName = customerName;
        this.size = size;
        this.toppings = toppings;
        this.crust = crust;
        
    }

    // details class
    describePizza() {
        return `${this.customerName}, your ${this.size} pizza with a ${this.crust} crust and the following toppings: ${this.toppings.join(", ")} is on its way!`;
    }
}




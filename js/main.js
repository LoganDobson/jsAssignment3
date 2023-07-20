var customerFirstName = document.getElementById("fname");
var customerLastName = document.getElementById("lname");
var pizzaSize = document.getElementById("size");
var flavour = document.getElementById("flavour");
var isCheese = document.getElementById("cheese");
var pizzaToppings = document.getElementById("toppings");
var formSubmit = document.getElementById("submitForm");
var button = document.getElementById("finalButton");
var output = document.getElementById("summary")
var output2 = document.getElementById("summary2")



button.addEventListener("click", function() {
    var studentInfo = "Logan Dobson, Student Num: 200465170"
     output.textContent = studentInfo;
    var pizza1 = new Pizza(customerFirstName.value,customerLastName.value,pizzaSize.value,flavour.value,isCheese.value,pizzaToppings.value);
    output2.textContent = pizza1.bio();
});

function Pizza(firstName, lastName, size, typeOfPizza, withCheese, toppings,) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.withCheese = withCheese;
    this.size = size;
    this.typeOfPizza = typeOfPizza;
    this.toppings = toppings;
    this.bio = function () {
        return `this pizza ordered by ${this.firstName} ${this.lastName} is a ${this.size} ${typeOfPizza} with these toppings ${this.toppings}`;
    }
}






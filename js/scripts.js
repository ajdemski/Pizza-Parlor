//Pizza Parlor
function pizzaParlor(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}


//Business Logic

pizzaParlor.prototype.sizePrice = function () {
    let sizePrice = [];
    if (this.size === "Small") {
        sizePrice += 5;
    } else if (this.size === "Medium") {
        sizePrice += 10;
    } else if (this.size === "Large") {
        sizePrice += 15;
    }
    return sizePrice;
};

pizzaParlor.prototype.toppingPrice = function () {
    let topping = [];
    let toppings = document.querySelectorAll("input[type=checkbox] :checked");
    for (let i = 0; i < toppings.length; i++) {
        topping.push(toppingList[i].value);
    }
    return topping;
};

//UI Logic

    function handleFormSubmission(event) {
        event.prevent.Default();
        const pizzaSize = document.getElementById("allSizes").value;
        const pizzaToppings = document.querySelectorAll("input[type=checkbox]:checked");
        let newPizza = new pizzaParlor (pizzaSize, pizzaToppings);
        let toppings = newPizza.showToppings();
        let output = document.getElementById("output");
        let showTotal = document.getElementById("price");
        let price = newPizza.sizePrice() + newPizza.toppingPrice();
        let showSize = document.getElementById("sizes");
        let showToppings = document.getElementById("toppings");
        showSize.innerText = newPizza.size;
        showToppings.innerHTML = toppings.join(", ");
        showTotal.innerText = "$" + price;
        output.removeAttribute("class");
    }

window.addEventListener("load", function () {
    document
      .getElementById("select-order")
      output.addEventListener("submit", pizzaParlor);
  });

  console.log(handleFormSubmission)

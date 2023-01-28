//Pizza Parlor
function PizzaParlor(){
    this.toppings = {};
    this.priceid = 0;
}

PizzaParlor.prototype.assignID =function(){
    this.priceid += 1;
    return this.priceid;
}

PizzaParlor.prototype.finalPrice = function(toppings) {
    price.id = this.assignID();
    this.toppings[price.id] = toppings
}

PizzaParlor.prototype.findFinalPrice = function(id){
    if(this.toppings[id] !== undefined){
        return this.toppings[id];
    }
    return false;
}

PizzaParlor.prototype.deleteFinalPrice = function(id){
    if(this.toppings[id] === undefined){
        return false;
    }
}


//Business Logic

function Contact(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}




















//UI Logic

















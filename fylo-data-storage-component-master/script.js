function aiGreeting(){
    console.log("whats up mike");
    console.log("whats up jack");
    console.log("whats up eva");
}
aiGreeting();


// Challenege2: Basic shopping cart

// Create a function called calculatecart
// it should accept 3 parameters-the price of 3 items
// once the function runs, print in the console: the total of your 3 items is :${total}

// step one the function
function calculateCart(price1, price2, price3){
    // simple maths- add em up
    return price1 + price2 + price3 
}

// Step Two: call/invoke the function
let total = calculateCart(6, 8, 3)
console.log(`The total of your 3 items is: $${total}`)



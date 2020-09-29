

// This is the start of the data for our store and will also be displaying it to the web when the store team member searches for the item.
// The website will look more better when angular and front end development is learned.


const express = require("express");
const { request, response } = require("express");

let app = express()



// These are the store products and the information they have in them

let Apples = {
    Sku: "4401",
    price: "1.49 per pound",
    salePrice: ".99 cents per pound",
    IsItemOnSale: "yes for this week"

}

let Pears = {
    Sku: "4802",
    price: "1.85 per pound",
    salePrice: "1.09 cents per pound",
    IsItemOnSale: "yes for this week"

}


let Lettuce = {
    Sku: "5341",
    price: "1.85 per pound",
    salePrice: "1.09 cents per pound",
    IsItemOnSale: "yes for this week"

}


let Peppers = {
    Sku: "5341",
    price: "1.85 per pound",
    salePrice: "1.09 cents per pound",
    IsItemOnSale: "yes for this week"

}



app.get("/about", (request, response) => {

    response.json(Apples);   // Displays Apples info to the web for the team member to see

});


app.listen(4000);  // This is the port we are listening on and using







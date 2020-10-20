// This is the start of the data for our store and will also be displaying it to the web when the store team member searches for the item.
// The website will look more better when angular and front end development is learned.



const express = require("express");
const { request, response } = require("express");

let app = express()



// These are the store products and the information they have in them

let Apples = {
    item: "Apples",
    Sku: "4401",
    price: "1.49 per pound",
    salePrice: ".99 cents per pound",
    IsItemOnSale: "Yes for this week"

}

let Pears = {
    item: "Pears",
    Sku: "4802",
    price: "1.85 per pound",
    salePrice: "1.09 cents per pound",
    IsItemOnSale: "Not for this week"

}


let Lettuce = {
    item: "Lettuce",
    Sku: "5341",
    price: "1.85 per pound",
    salePrice: "1.09 cents per pound",
    IsItemOnSale: "Yes for this week"

}


let Peppers = {
    item: "Peppers",
    Sku: "3325",
    price: ".79 per pound",
    salePrice: ".39 cents per pound",
    IsItemOnSale: "Yes for this week"

}

let Potatoes = {
    item: "Potatoes",
    Sku: "1129",
    price: "2.85 per bag",
    salePrice: "1.99 per bag",
    IsItemOnSale: "Not for this week"

}


let Milk = {
    item: "Milk",
    Sku: "11332265",
    price: "3.00 per carton",
    salePrice: "2.49 per carton",
    IsItemOnSale: "Yes for this week"

}


let Chips = {
    item: "Chips",
    Sku: "34509122",
    price: "2.99 per bag",
    salePrice: "1.99 per bag",
    IsItemOnSale: "Not for this week"

}

let Ham = {
    item: "Ham",
    Sku: "44611299",
    price: "1.75 per pound",
    salePrice: "1.50 per pound",
    IsItemOnSale: "Yes for this week"
    
}


let Bologna = {
    item: "Bologna",
    Sku: "44611299",
    price: "1.39 per pound",
    salePrice: ".99 per pound",
    IsItemOnSale: "Not for this week"

}



// searches for the item and their related information

app.get("/Apples", (request, response) => {

    response.json(Apples);// Displays Apples info to the web for the team member to see

});

app.get("/Pears", (request, response) => {

    response.json(Pears);   // Displays Pears info to the web for the team member to see

});


app.get("/Lettuce", (request, response) => {

    response.json(Lettuce);   // Displays Lettuce info to the web for the team member to see

});

app.get("/Peppers", (request, response) => {

    response.json(Peppers);   // Displays Peppers info to the web for the team member to see

});

app.listen(4000);  // This is the port we are listening on and using


// Name: Conner Mayfield



let express = require("express");


let port= 6061;  //This is our port that we use 

let app = express();  // This is like the entry point to our express server


let router = express.Router();


router.get("/", (req, res) =>  {

res.send("<html><body><h1>    Welcome to your store's product information inquiry searcher! Begin searching now.    </h1></body></html>");





});


app.use("/", router);


app.listen(port, function () {

    console.log("Listening on :%d" , port);

});







app.get("/Apples", (request, response) => {

    response.json(Apples);// Displays Apples info to the web for the team member to see

});

app.get("/Pears", (request, response) => {

    response.json(Pears);   // Displays Pears info to the web for the team member to see

});
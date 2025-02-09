const express= require('express')

const app= express();

//all the get , delete, post will match this one
app.use("/test", (req, res) =>{
    res.send("Hello from the test server");
});

app.get("/user", (req, res) =>{
    res.send({firstName :"Anshu", lastName:"Gupta"});
});


app.post("/user", (req, res) =>{
    res.send("Data saved successfully to the database!");

});

app.listen(7777, () =>{
console.log("Server is successfully listening on port 7777...");
});
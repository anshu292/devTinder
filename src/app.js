const express= require('express')

const app= express();

//this will only handle the GET call to /user
app.get("/user", (req, res) =>{
    res.send({firstName :"Anshu", lastName:"Gupta"});
});

//this will match all the HTTP method API calls to /test

app.use("/test", (req, res) =>{
    res.send("Hello from the test server");
});
app.listen(7777, () =>{
console.log("Server is successfully listening on port 7777...");
});
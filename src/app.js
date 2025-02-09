const express= require('express')

const app= express();

//http://localhost:7777/user/707/Akshay/testing
app.get("/user/:userId/:name/:password", (req, res) =>{
    console.log(req.params);
    res.send({ firstName :"Anshu", lastName: "Gupta"});
});
app.listen(7777, () =>{
console.log("Server is successfully listening on port 7777...");
});
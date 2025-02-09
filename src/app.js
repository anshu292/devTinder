const express= require('express')

const app= express();


app.use("/hello/7/7", (req, res) =>{
    res.send("Hello from /7/7");

});
app.use("/hello/7", (req, res)=>{
    res.send("Hello from /hello/7");

});
app.use("/hello", (req, res) =>{

    res.send("Hello from the /hello");

});
app.use("/test", (req, res) =>{
    res.send("Hello from the test server");
});

app.use("/", (req, res) =>{
    res.send("Hello from the /");
});


app.listen(7777, () =>{
console.log("Server is successfully listening on port 7777...");
});
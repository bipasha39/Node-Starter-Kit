const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello everybody!");
});

app.get("/bips", function (req, res) {
    res.send("Mm chocolate :O");
});

app.get("/node", function (req, res) {
    res.send("This is new version of node");
});
app.get("/migracode", function (req, res) {
    res.send("Hello migracode students");
}); 

app.get("/home", function (req, res) {
    let name = req.query.name;
    let age = req.query.age;
    res.send("Hello World! You searched for " + name +  age);
  });

app.listen(3000, function () {
    console.log("Server is listening on port 3000. Hello I am here!");
  });
const functions = require("./functions");
const express = require("express");
const path = require("path");
const server = express();
const port  = process.env.PORT ||3000;

server.set("view engine", "hbs")
server.use("/assets",express.static(path.join(__dirname,"./assets")));
server.use("/js",express.static(path.join(__dirname,"./js")));

server.get("/", function (req, res){
    res.render("index",{
        pageTitle: "Lekcja Node",
        title: functions.test,
        subTitle: functions.someFunction()
    })
})
server.get("/about", function (req, res){
    res.render("about")
})
server.get("/section/technology", function (req, res){
    res.send("strona technologiczna")
})

server.listen(port, (err)=>{
    if (err) {
        return console.log(`coś poszło nie tak ${err}`);
    }
    console.log(`aplikacja działa na porcie ${port}`);
    
});
const express = require("express");
const app = express();
const cors = require("cors");
const body = require("body-parser")
const port = 5000;
const bcrypt = require("bcrypt");

app.use(cors(), body.json());

//Global variable for amount of salt in bcrypt
const SALTROUNDS = 10;

//Provisional "database" TODO: real database
const users = new Map();
users.set("username", "password");
users.set("exampleUser", "examplePassword");

app.post("/authenticate", (req, res) => {
    if (req.body?.username && req.body?.password) {
        if (users.get(req.body.username) === req.body.password) {
            const passwordHash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALTROUNDS));
            res.send(passwordHash);
        } else res.send("notfound");     
    }
})

app.listen(port, () => {
    console.log("server listening on port "+port);
})
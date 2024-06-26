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

app.post("/register", (req, res) => {
    if (req.body?.username && req.body?.password) {
        if (users.get(req.body.username)) {
            res.send("existinguser");
        } else {
            users.set(req.body.username, req.body.password);
            res.send("success");
        };
    }
})

app.post("/token", (req, res) => {
    if (req.body?.username && req.body?.token) {
        if (bcrypt.compareSync(users.get(req.body.username), req.body.token)) {
            res.send("success");
        } else {
            res.send("wrongtoken");
        };
    }
})

app.listen(port, () => {
    console.log("server listening on port "+port);
})
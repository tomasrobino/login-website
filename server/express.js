const express = require("express");
const app = express();
const cors = require("cors");
const body = require("body-parser")
const port = 5000;


app.use(cors(), body.json());

app.post("/authenticate", (req, res) => {
    res.send(true);
    //res.end(req)
})

app.listen(port, () => {
    console.log("server listening on port "+port);
})
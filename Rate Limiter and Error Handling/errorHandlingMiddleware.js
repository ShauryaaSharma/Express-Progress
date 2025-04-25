const express = require("express");
const app = express();
const port = 3000;

let errorCount = 0;

app.get('/user', (req, res) => {
    throw new Error("User not found");
    res.status(200).json({
        name: "John"
    })
})

app.post('/user', (req, res) => {
    res.status(200).json({
        msg: "created dummy user"
    })
})

app.get('/errorCount', (req, res) =>{
    res.status(200).json({
        errorCount
    })
})

app.use((err, req, res, next) => {
    res.status(400).send({
        msg: "Nope"
    })
})

app.listen(port)
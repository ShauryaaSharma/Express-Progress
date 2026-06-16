const express = require("express")
const port = 3000
const app = express()
const bodyParser = require("body-parser")

// ALWAYS put this at the top
app.use(bodyParser.json());

app.post('/', (req, res) => {
    res.send(" Hello World! ")
})

app.post('/builder', (req, res) => {
    const msg = req.body.message;
    console.log(msg);

    res.json({
        name: "Shaurya",
        age: 20,
        goal: 404 
    })
})

app.listen(port, () => {
    console.log(`Example listening on port ${port}`)
})
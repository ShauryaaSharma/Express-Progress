const express = require("express");
const port = 3000;
const app = express();

console.log(`Server is listening to port ${port}`);
app.use(express.json());

function sum(n){
    let ans = 0;
    for (let i = 0; i <= n; i++) {
         ans = ans + 1;        
    }
    return ans;
}

var user = [{
    name: "John",
    kidney: [{
        healthy: false
    }]
}]

function isThereAtLeastOneUnhealthyKidney(){
    console.log("Function reached")
    const johnKidney = user[0].kidney;
    const numberOfKidney = johnKidney.length;
    let unHealthyKidneyofJohn = false;
    for (let i = 0; i < numberOfKidney; i++) {
        if (!user[0].kidney[i].healthy) {
            unHealthyKidneyofJohn = true;
        }    
    }
    return unHealthyKidneyofJohn;
}

app.get('/', (req, res) => {
    const n = parseInt(req.query.n);
    console.log("/ route has been reached");
    const answer = sum(n);
    res.send(`The sum so far is ` + answer);
})

app.get('/kidney', (req, res) => {
    console.log("/kidney route has been reached");
    const johnKidney = user[0].kidney;
    res.send(johnKidney);
})

app.get('/numberOfKidney', (req, res) => {
    console.log("/numberOfKidney route has been reached");
    const johnKidney = user[0].kidney;
    const numberOfKidney = johnKidney.length;
    res.send(`The number of kidney John has is ${numberOfKidney}`)
})

app.get('/numberOfHealthyKidney', (req, res) => {
    console.log("/numberOfHealthyKidney route has been reached");
    const johnKidney = user[0].kidney;
    const numberOfKidney = johnKidney.length;
    let numberOfHealthyKidney = 0;
    for (let i = 0; i < numberOfKidney; i++){
        if (johnKidney[i].healthy) {
            numberOfHealthyKidney += 1;
        }
    }
    res.send(`The number of healthy kidney for John ${numberOfHealthyKidney}`);
})

app.get('/overallStatus', (req, res) => {
    console.log("/overallStatus route has been reached");
    const johnKidney = user[0].kidney;
    const numberOfKidney = johnKidney.length;
    let numberOfHealthyKidney = 0;
    for (let i = 0; i < numberOfKidney; i++){
        if (johnKidney[i].healthy) {
            numberOfHealthyKidney += 1;
        }
    }
    res.json({
        numberOfKidney,
        numberOfHealthyKidney,
        johnKidney
    })
})

app.post('/input', (req, res) => {
    console.log("/input route has been reached");
    console.log(req.body);
    const isHealthy = req.body.isHealthy;
    user[0].kidney.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Kidney status Updated! "
    })
})

app.put('/operationTheatre', (req, res) => {
    console.log("/operationTheatre route has been reached");
    const johnKidney = user[0].kidney;
    const numberOfKidney = johnKidney.length;
    let numberOfHealthyKidney = 0;
    for (let i = 0; i < numberOfKidney; i++){
        if (johnKidney[i].healthy) {
            numberOfHealthyKidney += 1;
        }
    }
    for (let i = 0; i < numberOfKidney; i++) {
        user[0].kidney[i].healthy = true;
    }
    res.send("Operation Successful!");
})

app.delete('/surgery', (req, res) => {
    console.log("/surgery route has been reached");
    const johnKidney = user[0].kidney;
    const numberOfKidney = johnKidney.length;
    let numberOfHealthyKidney = 0;
    for (let i = 0; i < numberOfKidney; i++){
        if (johnKidney[i].healthy) {
            numberOfHealthyKidney += 1;
        }
    }
    if (isThereAtLeastOneUnhealthyKidney()) {
        const newKidney = [];
        for (let i = 0; i < numberOfKidney; i++) {
            if (user[0].kidney[i].healthy) {
                newKidney.push({
                    healthy: true
                })
            }        
        }
        user[0].kidney = newKidney;
        res.send("Surgery Successful! ")
    }else{
        res.status(411).json({
            msg: "You don't have any bad kidneys!"
        })
    }
    
})

app.listen({port});
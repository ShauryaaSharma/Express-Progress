const express = require('express');
const app = express();
const port = 3001;

console.log("The server is listening on " + port)
// OR
// console.log(`The server is listening on ${port}`)

function sum(n){
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans = ans + 1;        
    }
    return ans;
}

app.get('/', (req, res) => {
    const n = parseInt(req.query.n);
    console.log("/ has been reached");
    let answer = sum(n);
    res.send(`The sum so far is ${answer}`)
})



app.listen({port});
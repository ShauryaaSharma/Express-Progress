const express = require('express');
const app = express()
const port = 3000;

console.log(`Serr running on ${port}`);

function isOldMiddleware(req, res, next){
    if (age >= 14) {
        next();
    }else{
        res.json({
            msg: "Sorry you are not of age yet",
        })
    }
}

app.get('/ride1', isOldMiddleware, (req, res) => {
    res.json({
        msg: "You have successfully ridden the ride !!"
    })
})

app.listen(port)
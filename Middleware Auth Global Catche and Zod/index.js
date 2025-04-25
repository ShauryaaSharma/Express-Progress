const express = require("express");
const app = express();
const port = 3000;

app.get('/health-checkup', (req, res) => {
    const kidneyId = parseInt(req.query.kidneyId);
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "admin" || password != "admin") {
        res.status(403).json({
            msg: "User not found!"
        })
        return;
    }
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg: "Invalid input!"
        })
        return;
    }
    res.send("Your kidneys are healthy");
})

// Now this code is completely fine. But if we have to introduce another route that does kidney replacement and inputs need to be the same. Then there will be a lot of code repeated. Violating DRY. Hence the most optimized and cleanest code is middleware.

//Middleware

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "admin" || password != "admin") {
        return res.status(403).json({
            msg: "User not found!"
        });
    }

    next();
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = parseInt(req.query.kidneyId);

    if (kidneyId != 1 && kidneyId != 2) {
        return res.status(403).json({
            msg: "Invalid input!"
        });
    }

    next();
}

app.get("/health-checkup-again", userMiddleware, kidneyMiddleware, function (req, res) {
    res.send("Your kidneys are healthy");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, function (req, res) {

    const kidneyId = parseInt(req.query.kidneyId);

    if (kidneyId === 1) {
        res.send("Left kidney is functioning properly");
    } else {
        res.send("Right kidney is functioning properly");
    }

});

app.use(function (err, req, res, next) { 
    
    console.error(err); 
    
    res.status(500).json({ 
        msg: "Something went wrong on the server" 
    }); 
});


app.listen(port)
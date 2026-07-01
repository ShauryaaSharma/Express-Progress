const express = require("express");
const app = express();

app.use(express.json());

let numberOfRequestForUser = {};

setInterval(() => {
    numberOfRequestForUser = {};
}, 1000);

// Rate limiting middleware
app.use((req, res, next) => {
    const userID = req.headers["user-id"]; 

    if (!userID) {
        return res.status(400).json({ msg: "Missing user-id header" });
    }

    if (numberOfRequestForUser[userID]) {
        numberOfRequestForUser[userID] = numberOfRequestForUser[userID] + 1;

        if (numberOfRequestForUser[userID] > 5) { 
            return res.status(429).json({
                msg: "Too many requests. You have been rate limited.",
                requestCount: numberOfRequestForUser[userID]
            });
        } else {
            next();
        }
    } else {
        numberOfRequestForUser[userID] = 1;
        next();
    }
});

// ── Test Endpoints ────────────────────────────────────────────

// 1. Basic ping — cheapest way to hammer and test the limiter
app.get("/ping", (req, res) => {
    res.json({ msg: "pong" });
});

// 2. Returns how many requests this user has made in the current window
app.get("/my-count", (req, res) => {
    const userID = req.headers["user-id"];
    res.json({
        userID,
        requestCount: numberOfRequestForUser[userID] || 0,
        limit: 5,
        remaining: Math.max(0, 5 - (numberOfRequestForUser[userID] || 0))
    });
});

// 3. Simulates a "get user data" endpoint
app.get("/user", (req, res) => {
    const userID = req.headers["user-id"];
    res.json({
        userID,
        name: "John Doe",
        email: "john@example.com"
    });
});

// 4. Simulates a "post data" endpoint
app.post("/data", (req, res) => {
    res.status(201).json({
        msg: "Data received successfully",
        body: req.body
    });
});

// 5. Admin view — see the full request map (remove in production!)
app.get("/admin/requests", (req, res) => {
    res.json(numberOfRequestForUser);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
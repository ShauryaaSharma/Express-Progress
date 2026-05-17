const jwt = require("jsonwebtoken");

const value = {
    name: "shaurya",
    accountNumber: 123123123
}

const token = jwt.sign(value, "secret");
console.log(token);

const approve = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hhdXJ5YSIsImFjY291bnROdW1iZXIiOjEyMzEyMzEyMywiaWF0IjoxNzczMzc0Njc3fQ.YfETL0TaI6iydeVGfLZl2UQ8b9A7oKRFRgnGPkqkgn0", "secret");
console.log(approve);

const reject = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hhdXJ5YSIsImFjY291bnROdW1iZXIiOjEyMzEyMzEyMywiaWF0IjoxNzczMzc0Njc3fQ.YfETL0TaI6iydeVGfLZl2UQ8b9A7oKRFRgnGPkqkgn0", "123");
console.log(reject);
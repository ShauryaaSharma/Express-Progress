const jwt = require("jsonwebtoken");
function decodeJWT(token){
    const decode = jwt.decode(token);
    if (decode) {
        return true;
    } else {
        return false;
    }
}

console.log("=================================================")
console.log("Correct JWT")
console.log("=================================================")

console.log(decodeJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoYXVyeWFAZ21haWwuY29tIiwiaWF0IjoxNzczMzc4MjgyfQ.FvqS5mD2nORAbglREu0cu1IsP3BJlH95wQHTPtvjvJU"))

console.log("=================================================")
console.log("Wrong JWT")
console.log("=================================================")

console.log(decodeJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6Ik"))
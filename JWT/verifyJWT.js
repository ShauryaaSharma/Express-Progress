const jwt = require('jsonwebtoken');
const jwtPassword = "secret";

function verifyJWT(token){
    // const verified = jwt.verify(token, jwtPassword);
    // if (verified) {
    //     return true
    // } else {
    //     return false;
    // }

    let ans = true;
    try{
        jwt.verify(token, jwtPassword);
    } catch(e) {
        ans = false;
    }

    return ans
}

console.log("=================================================")
console.log("Correct")
console.log("=================================================")

const ans1 = verifyJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoYXVyeWFAZ21haWwuY29tIiwiaWF0IjoxNzczMzc4MjgyfQ.FvqS5mD2nORAbglREu0cu1IsP3BJlH95wQHTPtvjvJU");
console.log(ans1);

console.log("=================================================")
console.log("Wrong")
console.log("=================================================")

const ans2 = verifyJWT("dskjdhakjhdskajdhakj");
console.log(ans2);
console.log("=================================================")
console.log("No Error")
console.log("=================================================")

try{
    let s = [1, 2, 3, 4, 5];
    console.log(s.length);
    console.log("hi there from try");
} catch(e) {
    console.log("hi there from catch");
}

console.log("hi there")

console.log("=================================================")
console.log("Error")
console.log("=================================================")

try{
    let s;
    console.log(s.length);
    console.log("hi there from try");
} catch(e) {
    console.log("hi there from catch");
}

console.log("hi there")
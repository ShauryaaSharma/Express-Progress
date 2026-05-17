// Arrow Function

// This is a normal function
function sum(n){
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = ans + 1;
    }
    return ans;
}
//The same function can be written as

sum = (n) => {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = ans + 1;
    }
    return ans;
}

// This is an arrow function. These two types or writing functions are almost the same. There are syntactical differences and some minute difference but more or less they can be interchanges. 

// Map

// Question: Given an array, give me back a new array in which every value is multiplied by 2. 
const input = [1, 2, 3, 4, 5];

function transform(i){
    return i * 2;
}

const ans = input.map(transform);
console.log(ans);

// This same thing is usually written as:

const ans1 = input.map(function (i) {
    return i * 2;
});

// Filtering
// Question: Given an input array, give me back all the even value

const arr = [1, 2, 3, 4, 5];

const newArr = [];

function filterLogic(n){
    if (n % 2 == 0) {
        return true;
    }else{
        return false;
    }
}

const newAns = arr.filter(filterLogic);
console.log(newAns)

// This same thing can be written as:
// 1) Using arrow function
const newAns1 = arr.filter((n) => {
    if (n % 2 == 0) {
        return true;
    }else{
        return false;
    }});

// 2) Using normal function

const newAns2 = arr.filter(function (n){
    if (n % 2 == 0) {
        return true;
    }else{
        return false;
    }});
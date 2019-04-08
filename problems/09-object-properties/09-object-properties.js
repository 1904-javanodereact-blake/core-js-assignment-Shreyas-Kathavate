/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for (let arg in someObj) {
        console.log(someObj[arg]);
    }
}
let myObj = {
    name: `Shreyas`,
    age: 23,
    height: 174
}
objectProperties(myObj);
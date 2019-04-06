/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseString(str) {
    let theString = "";
    for (let i = 0; i < str.length; i++) {
        theString += str[str.length - 1 - i];
    }
    return theString;
}
console.log(reverseString("hello world"));
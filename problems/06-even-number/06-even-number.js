/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let i = someNum;
    while (i >= 0) {
        i -= 2;
        if (i === 0) {
            return true;
        }
    }
    return false;
}

console.log(isEven(218));
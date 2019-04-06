/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function palindromeLength(str) {
    let theString = "";
    for (let i = 0; i < str.length; i++) {
        theString += str[str.length - 1 - i];
    }
    return theString;
}

function isPalindrome(someStr) {
    if (someStr === palindromeLength(someStr)) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("malayalam"));
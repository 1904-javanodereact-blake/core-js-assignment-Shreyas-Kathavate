/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let temp, a = 1,
        b = 0;

    while (n > 0) {
        temp = a + b;
        a = b;
        b = temp;
        n--;
    }
    return b;
}
let n = 10;
console.log(`the nth number in the sequence is 
        ${fib(n)}`);
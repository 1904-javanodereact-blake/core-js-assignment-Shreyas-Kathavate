/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

function bubble_Sort(a) {
    let swapp;
    let n = a.length - 1;
    let x = a;
    do {
        swapp = false;
        for (let i = 0; i < n; i++) {
            if (x[i] < x[i + 1]) {
                let temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
}

console.log(bubble_Sort([5, 7, 3, 8, 1, 4, 2, 6, 9, ]));
/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index, elem) {
    newArr = []
    for (let i = 0; i < index; i++) {
        newArr.push(someArr[i]);
    }
    newArr.push(elem);
    for (i = index; i < someArr.length; i++) {
        newArr.push(someArr[i]);
    }
    return newArr;
}
console.log(spliceElement([2, 4, 6, 8, 10], 3, 9));
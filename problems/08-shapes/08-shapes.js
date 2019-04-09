/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
    if (height % 2 == 0) {
        console.log("provide an odd number");
    } else {
        switch (shape) {
            case `Square`:
                for (let i = 0; i < height; i++) {
                    let a = '';
                    for (let j = 0; j < height; j++) {
                        a += character + '';
                    }
                    console.log(a);
                }
                break;
            case 'Triangle':
                for (let i = 0; i < height; i++) {
                    let a = '';
                    for (let j = 0; j < i; j++) {
                        a += character;
                    }
                    console.log(a);
                }
                break;
            case 'Diamond':
                char = character;
                let a = '';
                let counter = 0;
                let n = Math.floor(height / 2);
                for (let i = 1; i < height; i += 2) {
                    a = '';
                    for (let j = 0; j < n; j++) {
                        a = a + ' ';
                    }
                    n--;
                    for (let j = 0; j < i; j++) {
                        a = a + char;
                    }
                    console.log(a);
                }
                for (let i = height; i > 0; i -= 2) {
                    a = '';
                    for (let j = 0; j < counter; j++) {
                        a = a + ' ';
                    }
                    counter++;
                    for (let j = 0; j < i; j++) {
                        a = a + char;
                    }
                    console.log(a);
                }
                break;
        }
    }
}
printShape('Square', 7, '%');
printShape('Triangle', 9, `$`);
printShape('Diamond', 15, '#')
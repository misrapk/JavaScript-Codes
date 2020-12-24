// var returnValue = Math.max(2, 5, 7, 8, 3, 2, 9);

// console.log(returnValue);

// var myObj = {}

// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 20, y: 19, x: 18 });
// console.log(myObj);

function sumOne(a, b) {
    return a * b;
}

var myArray = [5, 4];

// console.log(sumOne(3, 4));




function sumTwo(a, b, ...args) { //first two are parameters and rest are treated as args
    console.log(args);
    let sum = 0;
    let multi = a * b;
    for (const arg of args) {
        sum += arg;
    }
    return [sum, multi];

}




console.log(sumTwo(2, 2, 3, 4, 5, 6));
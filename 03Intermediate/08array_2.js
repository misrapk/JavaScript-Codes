function isEven(element) {
    // if (element % 2 === 0) {
    //     return true;
    // }
    // return false;
    return element % 2 === 0;
}

//TODO: arrow function
var isEven = (element) => {
    return element % 2 === 0; //if we dont put return it will give undefined
};
// console.log(isEven(2));

//TODO: callback 
var result = [2, 3, 4, 5, 6].every(isEven);

//.every traverse all element and perform the function ;
//if all is true ==> return true


// console.log(result);

//TODO: writing callback --> simple funciton having no name
var result = [2, 3, 4, 5, 6].every((e) =>
    e % 2 === 0

);
console.log(result);
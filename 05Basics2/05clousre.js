function init() {
    var firstName = "Peeyush";
    console.log("I am init");


    function sayFirstName() {
        console.log(firstName);

    }
    return sayFirstName;
}

var ele = init();

/*as soon as init run it will give the reference of "sayFirstName()",

in this after execution "sayFirstname" and "init() "will not be remove from stack*/

ele(); //TODO: this is Clousre

/*----------------------------------------------------------------------------------------------------*/

//TODO: ANother Example

function doAdd(x) {
    return function(y) {
        return x + y;
    }
}
var add5 = doAdd(4); //we will not get result here

// we need to call add5 now
console.log(add5(5));
//yaha add5() inside funciton ka reference hai.

//also another way to call;
console.log(doAdd(3)(4)); //--> this is possible because of coluser

//doAdd()()()  //curring
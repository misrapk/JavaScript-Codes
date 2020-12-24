// console.log(name);


var name = "Peeyush";


//create a dummy scope
if (true) {
    // var lastName = "Misra";   --> this will declare globally
    let lastName = "Misra";
    // -- > this will not be availabel outside this scope

}
console.log(lastName);
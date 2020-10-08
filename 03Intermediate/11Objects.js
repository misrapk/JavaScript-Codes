var user = {
    //key : value pair
    firstName: "Peeyush",
    lastName: "Misra",
    role: "admin",
    loginCount: 32,
    facebookSignedIn: true
};

//TODO: methods to access objects
// console.log(user);
console.log(user.lastName); //mostly used
console.log(user["lastName"]); //rarely used

console.table(user)
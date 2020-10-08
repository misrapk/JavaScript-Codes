// start from 2 and end 5-- > 2 is inclusive and 5 is exclusiveo

var users = ["Ram", "Rahul", "Megha", "Ajay", "Raman"];

console.log(users.slice(1, 4)); //1 is inclusive and 3 is exclusive



//TODO: splice will count till second arg and replace with the third one
users.splice(1, 2, "HI", "BYE")
console.log(users);
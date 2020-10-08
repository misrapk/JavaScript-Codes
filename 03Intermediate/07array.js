var countries = ["India", "USA", "Australia", "Russia", "France"];

var states = new Array("Uttar Pradesh", "Rajasthan", "Punjab", "Maharashtra", "Assam");

console.log(states);

console.log(states.length);

states[0] = "Delhi";
console.log(states);


var user = ["peeush", "pk@email.com", 3, 32, 3.2, true];

console.log(user)

//dump out last or first value
user.pop(); //delete the last value
console.log(user);

user.unshift("NEW VALUE"); //shift and add the vale4
// console.log(user)

user.shift();
// console.log(user)


//find the index of element in array
console.log(user.indexOf(3));

console.log(user.indexOf("new"));
//--------------------------------------------------


//make anything into array
console.log(Array.from("pkmisra100"));
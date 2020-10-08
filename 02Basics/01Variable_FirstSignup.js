const uid = "abc123";

// uid = "abcd234";   //this is not alowed

var fullName = "Peeyush kant misra";
var firstName = "Peeyush";
var lastName = "Kant Misra";
var email = "peeyush@abc.com";
var country = "India";
var state = "UP";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoogedInFromGoogle = false;
var isLoogedInFromFB = true;

//take input from user
// fullname=prompt("Enter your name");

//display
// console.log("Name is ",fullName);
// console.log(uid);
// console.log(email);
// console.log(courseCount);

//other option of displaying 
console.log(`
	With Unique ID: ${uid}
	User is: ${fullName}
	and his email is: ${email}
	he is from ${state} in ${country}
	and uses the password: ${password}
	and enrolled in ${courseCount} courses.
	`);
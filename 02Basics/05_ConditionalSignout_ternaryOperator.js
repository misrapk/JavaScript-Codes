/* Show user a signout button if he is already signedin,
else show Login/Signup*/

var authenticated = false;

if(authenticated){
	console.log("Signout Button");
} else{
	console.log("Login Button");
}


//Ternary operator
// condition ? trueValue : FalseValue
authenticated ? console.log("signout button") : console.log("Login Button");
/* if u have multiple thing to checkout and based on that 
u have to define task then "SWITCH" is better */

var user = 'admin';

switch(user){
	case "admin":
		console.log("Admin has full access");
		break;     

	case "subadmin":
		console.log("Subadmin get few acess");
		break;

	case "user":
		console.log("User has access to enroll and use the content");
		break;

	default:
		console.log("Bot User is here");

		break;

}
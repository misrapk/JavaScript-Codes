/*
Dfine a funciton that can answer the role of user.
a user can be an following roles:
admin ==> all access,
subadmin ==> delete/create course
testprep ==> create /delete test
user =>conusme all content
other => trial user.

Input: getUserRole(name, role)*/

function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break; //this is not necessary because we are useing "return"
        case "subadmin":
            return `${name} is subadmin with all create/delet course`;
            break;
        case "testprep":
            return `${name} is testprep with all create/delet test`;
            break;
        case "user":
            return `${name} is User, to can consume content`;
            break;


        default:
            return `${name} is a trail user`;
            break;
    }
};
// console.log(getUserRole("peyush", "testprep"));

var getRole = getUserRole("pk", "admin")
console.log(getRole);
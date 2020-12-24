//also known as destructuring
//whatever datatype on RHS similar should be on LHS

// const user = ["peeyush", 3, "admin"]

//to destructure
// var role = user[2];
// var name = user[0];

//also
// var [name, courseCount, role] = user; //array on RHS and also on lHS with same number of values

// console.log(role);



const myUser = {
    name: "peeyush",
    courseCount: 10,
    role: "admin",
}

console.log(myUser.courseCount);

//destrucutre the myUser
const { name, courseCount, role } = myUser;
console.log(courseCount);
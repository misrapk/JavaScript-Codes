// import User rom "./06classesJS.js"



const User = require("./06classesJS.js");

const pk = new User("peeyush", "pk@gmail.com");


console.log(pk.getInfo());
pk.enrollCourse("JS Crash Course")
pk.enrollCourse("C++ Concureency")
pk.enrollCourse("Python Course")

console.log(pk.getCourseList());


//TODO: correct way to iterate through list/array

let courses = pk.getCourseList();

courses.forEach((c) => console.log(c));
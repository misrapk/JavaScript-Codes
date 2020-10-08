//object
var user = {
    //key : value pair
    firstName: "Peeyush",
    lastName: "Misra",
    role: "admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],

    //TODO: Function to put into courseList
    buyCourse: function(courseName) {
        //refer the variable inside the same object
        this.courseList.push(courseName);
    },

    getCourseCount: function() {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },

    //function to give info
    getInfo: function() {
        return `Name: ${this.firstName} ${this.lastName}
        CourseCount: ${this.getCourseCount()}
        Login COunt: ${this.loginCount}`
    },
};


var courseList = true;

console.log(user.getCourseCount());
user.buyCourse("React JS");
user.buyCourse("MERN");
console.log(user.getCourseCount());


console.log(user.getInfo());
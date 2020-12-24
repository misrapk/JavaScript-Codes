class User {
    constructor(name, email) {
            this.name = name;
            this.email = email;
            this.courseList = [];
        }
        // courseList = [];
        //this is method or u can also call function
    getInfo() {
        return { name: this.name, email: this.email };
    }

    enrollCourse(name) {
        this.courseList.push(name);
    }

    getCourseList() {
        return this.courseList;
    }

    //TODO: static keyword is use to make the function private so it can't be inherited by child
    //static login()
    login() {
        return "Welcome to the board!"
    }
}


//INHERITENCE---> use extends keyword
class SubAdmin extends User {
    constructor(name, email) {
        super(name, email);
    }
    getAdminInfo() {
        return "I am SubAdmin"
    }
    login() {
        return "Login for admin only"
    }
}


const jerry = new SubAdmin("jerry", "jerry@jerry.com"); //creating object

console.log(jerry.getAdminInfo());
console.log(jerry.login());
console.log(jerry.getInfo());
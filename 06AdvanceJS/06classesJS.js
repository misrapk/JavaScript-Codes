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
}

//TODO: we can do this as well
// let pk = User("peeyush", "pk@123.com")

module.exports = User; //with this we can use this class into antoher code file



const spider = new User("Peter", "peter@test.com")

console.log(spider.getInfo());
spider.enrollCourse("C++ BOotmcap")

console.log(spider.getCourseList());
//TODO: "this" is another way of defining objects

var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course count is: ${this.courseCount}`);

    };
};

//TODO: "PROTO"(prototype)  --> use to update the function outside the function.
// with the help of prototype we can enject the code inside the function without changing the actual prototype of function.center

User.prototype.getFirstName = function() {
    console.log(`Your First name is : ${this.firstName}`);
}


//TODO: "new" keyword is responsible to create a new copy of object

var pk = new User("peeyush", 2);
pk.getCourseCount();
// pk.getFirstName();


// console.log(pk);


var aa = new User("aayush", 1);
aa.getCourseCount();
aa.getFirstName();
// console.log(aa);

//TODO:to call the proto functions we should check first about it's availability in actualprototyped funciton

//hasOwnProperty returns True if the  property is in the actual prototype.

if (pk.hasOwnProperty("firstName")) {
    pk.getFirstName();
}
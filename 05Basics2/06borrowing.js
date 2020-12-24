const pk = {
    firstName: "Peeyush",
    lastName: "Misra",
    role: "Admin",
    courseCount: 3,
    getInfo: function() {
        console.log(`First name is ${this.firstName}
        First name is ${this.lastName}
        His role is ${this.role}
        and he is studying  ${this.courseCount} courses`);
    },
};


//TODO: this object is same as before but the getInfo() is not there
const rk = {
    firstName: "Michel",
    lastName: "Clark",
    role: "Sub-Admin",
    courseCount: 4,
};

pk.getInfo();

// rk.getInfo(); //this will not compile//bi


//TODO: Bind --> it binds the boject, it gives mea reference back and we have to manually call it

//store the reference
var rkHere = pk.getInfo.bind(rk);

//call the stored variable
rkHere();


//TODO: Method 2 to call directly without binding
pk.getInfo.call(rk);
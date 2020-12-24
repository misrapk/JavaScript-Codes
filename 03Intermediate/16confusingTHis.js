console.log(this);



var user = {
    firstName: "Peeyush",
    courseCount: 4,
    getCourseContent: function() {
        console.log("LINE 9", this);

        //regular function
        function sayHello() {
            console.log("HELLO");
            console.log("LINE 13", this);

        }
        sayHello(); //regualr function call
    },
};

user.getCourseContent(); //this is not a regualr function call
//this is call by object

// function sayHello() {
//     console.log("HELLO");

// }

// sayHello(); //this is regular function call
var User = {
    name: "",
    getUserName: function() {
        console.log(`User name is: ${this.name}`);

    },
};

var pk = Object.create(User);

console.log(pk);

pk.name = "Peeyush ";
pk.getUserName();

var sam = Object.create(User, {
    name: { value: "pkm" },
    courseCount: { value: 3 },
});

sam.getUserName()
var name = "Peeyush"; //global context

console.log("Line 3 is ", name);

function sayName() {
    var name = "PK"
    console.log("Line 6 has ", name);
    sayName2();

    function sayName2() {
        console.log("Line nuber 9 ", name);

    }

}
sayName();
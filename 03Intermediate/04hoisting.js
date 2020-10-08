tipper(5); //this also works well

function tipper(a) {
    // var bill = a;

    var bill = parseInt(a); //convert into int
    console.log(bill + 5); // add 5 to bill

}
tipper(5);

bigtipper(10); //can alsow work well

function bigtipper(a) {
    var bill = parseInt(a);
    console.log(bill + 20);

}
bigtipper(10)



//now if we decalre a funciton lieke this--->

// bigtipperNext(12); //this will not work
/*becuase "variable decl are made undefined" */

// var bigtipperNext = function(a) {
// var bill = parseInt(a);
// console.log(bill + 20);
// 
// }
// bigtipperNext(12); //works well



//-------------------------------------------------------

// pt 2-- > varaible declaration are scanned and made undefinded
console.log(name); //using varaibel first before defining
var name = "peeyush"; //global context

function sayName() {
    var name = "Mr. PK"; //execution context;
    console.log(name);

}
sayName();
console.log(name);
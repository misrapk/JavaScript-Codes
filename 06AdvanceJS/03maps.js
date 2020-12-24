var myMap = new Map();

//maps are key, value pair
myMap.set(0, "zero")
myMap.set(1, "Ek")
myMap.set(2, "Do")
myMap.set(3, "Teen")
myMap.set(4, "Chaar")

console.log(myMap); //give all the value


//TODO: give the keys
for (let key of myMap.keys()) {
    console.log(`Key is ${key}`);
}

//TODO: give values
for (let value of myMap.values()) {
    console.log(`Key is ${value}`);
}

//TODO: give key and value both
for (let [key, value] of myMap) {
    console.log(`Key is ${key} and Value is ${value}`);

}



//TODO: for each will give the values first

myMap.forEach((v) => console.log(`${v}`))
myMap.forEach((v, k) => console.log(`${v} and key is ${k}`))
myMap.forEach((v, k) => console.log(`${v} and key is ${k}`))
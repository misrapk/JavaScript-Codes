const names = [
    "Youtube",
    "Instagram",
    "coursera",
    "Facebook",
    "Amazon",
];


//TODO: for of loop
for (const n of names) {
    console.log(n);
}

//TODO: FOR IN LOOP
const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lcd: "letscodedaily",
    fpp: "freeplacementprep.in"
}

for (const n in symbols) {
    // console.log(n);
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);

}
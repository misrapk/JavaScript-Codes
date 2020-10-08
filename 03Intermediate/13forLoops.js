// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

const myVisited = ["Delhi",
    "Punjab",
    "Chandigarh",
    "Uttar Pradesh",
    5,
    "Tamil Nadu",
    "Himachal",
    "Uttarakhand"
];

for (let i = 0; i < myVisited.length; i++) {
    if (typeof myVisited[i] !== 'string') continue;
    console.log(myVisited[i]);
}
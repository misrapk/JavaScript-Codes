var counter = document.querySelector(".counter");
var follwers = document.querySelector(".followers");

// counter.innerHTML = 10000;

let count = 1;
setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
}, 1);

setTimeout(() => {
    follwers.innerText = "Followers on Instagram!";
}, 4200)
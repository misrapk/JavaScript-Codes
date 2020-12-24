const courses = [{
        name: "Complete ML Course",
        price: "1.5"
    },
    {
        name: "Complete C++ Course",
        price: "0.0"
    },
    {
        name: "Complete Django Course",
        price: "1.8"
    },
    {
        name: "Complete Python Course",
        price: "2.8"
    },
    {
        name: "Complete CP Course",
        price: "7.3"
    }
];

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "" //reset the values after reloading
    courses.forEach(course => {

        //TODO: insert <li class="list-group-item"> JSOURSE</li>
        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name)
        li.appendChild(name)

        //TODO: <span class="float-right">$1.1</span>
        const span = document.createElement("span")
        span.classList.add("float-right")

        const price = document.createTextNode("$ " + course.price)
        span.append(price);

        li.appendChild(span);
        ul.appendChild(li);
    });


}
// generateList();

window.addEventListener("load", generateList);


//TODO:JS for sort button

const button = document.querySelector(".sort-btn")
button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateList();
});

//TODO: Code to sort high to low
const button2 = document.querySelector(".sort-btn-hl");
button2.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    generateList();
});
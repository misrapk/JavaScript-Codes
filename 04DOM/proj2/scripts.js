const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");

//TODO: get background color

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// console.log(getBGColor(pink));

// var color = getBGColor(pink);

// pink.addEventListener('dblclick', () => {
//     center.style.background = color;
// })

const randomColorPicker = (ele, color) => {
    return ele.addEventListener('mouseenter', () => {
        center.style.background = color;
    });
};

randomColorPicker(red, getBGColor(red));
randomColorPicker(cyan, getBGColor(cyan));
randomColorPicker(pink, getBGColor(pink));
randomColorPicker(violet, getBGColor(violet));
randomColorPicker(orange, getBGColor(orange));
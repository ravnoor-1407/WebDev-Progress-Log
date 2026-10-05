let btn = document.querySelector("button");
btn.addEventListener("click", changeColor);

function changeColor() {
    let heading1 = document.querySelector("h1");
    let updateColor = randomColor();
    heading1.innerText = updateColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = updateColor;
}

function randomColor() {
    let red = Math.floor(Math.random() * 225);
    let green = Math.floor(Math.random() * 225);
    let blue = Math.floor(Math.random() * 225);

    let colorCode = `rgb(${red}, ${green}, ${blue})`;
    return colorCode;
}

let editorInput = document.querySelector("#editorInput");
let editorPara = document.querySelector("#editorPara");

editorInput.addEventListener("input", inputEvent);
function inputEvent() {
    console.log(editorInput.value);
    editorPara.innerText = editorInput.value;
}
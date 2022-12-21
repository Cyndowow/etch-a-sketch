const resetButton = document.querySelector(".reset");
const gridContainer = document.querySelector(".gridContainer");

function createGrid(number) {
    gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for (let i = 0; i < number*number; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-box")
        gridContainer.appendChild(div);
    }
};

function changeColor(event) {
    event.target.style.backgroundColor = "black";
};

resetButton.addEventListener("click", function() {
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.style.backgroundColor = null});
});

function changeGrid() {
    let number = prompt("Enter a number between 0 and 100");
    if (number === undefined || number === null || number === "" || number > 100) {
        alert("Try again.");
        return;
    } else {
        gridContainer.removeChild(gridContainer.firstChild);
        createGrid(number);
        let gridBoxList = document.querySelectorAll(".grid-box");
        gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});
    }
}

let number = 16;
createGrid(number);


let gridBoxList = document.querySelectorAll(".grid-box");
gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});

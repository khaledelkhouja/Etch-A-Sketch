//initial grid 16*16
const container = document.getElementsByClassName("container");
let color="808080";
let gridSize=16;    
for (let i=0; i<256;i++) addSquare();

// button Default
let btnDefault = document.getElementById("btn1");
btnDefault.addEventListener("click", ()=>{
    color="808080";
    createGrid();
});
// button Rainbow
let btnRainbow = document.getElementById("btn2");
btnRainbow.addEventListener("click", ()=>{
    color=Math.floor(Math.random()*16777215).toString(16);
    createGrid(); 
});
// button Clear
let btnClear = document.getElementById("btn3");
btnClear.addEventListener("click", createGrid);
//input range
const value = document.querySelector("#value");
const input = document.querySelector("#size");
value.textContent = input.value + "x" + input.value;
input.addEventListener("input",(event) => {
    value.textContent=event.target.value +"x" +event.target.value;
    input.addEventListener("input", createGrid());
})


// grid Construction
function addSquare() {
    let square = document.createElement("div");
    square.classList.add("grid-square")
    container[0].appendChild(square);
    side=320/gridSize;
    square.style.width= side +"px";
    square.style.height= side +"px";
    //set event that permanently change background color on mouse enter
    square.addEventListener("mouseenter",()=> {
        if (color !== "808080"){
            color=Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor= `#${color}`
        } else square.style.backgroundColor= `#${color}`;
    });
}
// 
function createGrid() {
    //remove existing grid
    const grid = document.getElementById("container");
    grid.replaceChildren();
    // grid size
    gridSize=input.value;
    for (let i=0; i<Math.pow(gridSize,2) ;i++) addSquare();
}

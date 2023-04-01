 //initial grid 16*16
 const container = document.getElementsByClassName("container");
let gridSize=16;                               
for (let i=0; i<256;i++) addSquare();

// button set grid size
let btn = document.getElementById("btn");
btn.addEventListener("click", createGrid );

// grid Construction
function addSquare() {
    
    let square = document.createElement("div");
    square.classList.add("grid-square")
    container[0].appendChild(square);
    side=320/gridSize;
    square.style.width= side +"px";
    square.style.height= side +"px";
    //set event that permanently change background color on mouse enter
    square.addEventListener("mouseenter",()=>square.style.backgroundColor= "#1f2937");
}

// 
function createGrid() {
    //remove existing grid
    const grid = document.getElementById("container");
    grid.replaceChildren();
    //ask for grid size
    gridSize=Math.round(prompt("Set grid size","16"));
    // set grid size limit
    if (gridSize<=64 && gridSize>0){
        for (let i=0; i<Math.pow(gridSize,2) ;i++) {
            addSquare()
        }  
    } else {
        alert("Enter a number between 1 and 64");
        gridSize=16;
        for (let i=0; i<256;i++) addSquare();
    }
}

function addSquare() {
    const container = document.getElementsByClassName("container");

    var square = document.createElement("div");
    square.classList.add("grid-square")
    console.log(square);
    container[0].appendChild(square);
    square.addEventListener("mouseenter",()=>square.style.backgroundColor= "orange");
}

for (let i=0; i<256;i++) {
    addSquare()
}





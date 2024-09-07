const container = document.querySelector("#container");
const button = document.querySelector("#size");

let numSquaresSide = 16;


function drawGrid(){

    const squareSize = container.clientWidth / numSquaresSide; //calculate size

    for( i = 0; i < numSquaresSide * numSquaresSide; i++){
        const box = document.createElement("div");
        box.classList.add("gridbox");
        box.style.width = `${squareSize}px`; // Set width
        box.style.height = `${squareSize}px`; // Set height
        container.appendChild(box);

        box.addEventListener("mouseenter", function(e){
            e.target.style.backgroundColor = "blue";
        });
    }
}

button.addEventListener("click", function(){
    numSquaresSide = parseInt(prompt("Please enter how many squares per side"));
    container.replaceChildren(); 
    drawGrid(numSquaresSide);
});

drawGrid(16);
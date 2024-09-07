const container = document.querySelector("#container");
const button = document.querySelector("#size");

let numSquaresSide = 16;
let colour = "green";
let hoverEnabled = true; 



function drawGrid(){

    const squareSize = container.clientWidth / numSquaresSide; //calculate size

    for( i = 0; i < numSquaresSide * numSquaresSide; i++){
        const box = document.createElement("div");
        box.classList.add("gridbox");
        box.style.width = `${squareSize}px`; // Set width
        box.style.height = `${squareSize}px`; // Set height
        container.appendChild(box);

        box.addEventListener("mouseenter", function(e){
            if(hoverEnabled){
                e.target.style.backgroundColor = colour;
            }
        });
    }
}

function changeGridSize(){
    numSquaresSide = parseInt(prompt("Please enter how many squares per side"));

    if(numSquaresSide > 100){
       alert("Please enter a lower number");
       changeGridSize();
    }

    container.replaceChildren(); 
    drawGrid(numSquaresSide);
}


button.addEventListener("click", function(){
    changeGridSize();
});

/* for colour changing */

const button_div = document.querySelector("#buttons");
const colour_buttons = button_div.querySelectorAll("button");

colour_buttons.forEach(button => {
    button.addEventListener("click", function(){
        colour = button.id;
    });
})


/* Toggle hover effect on double click */

document.addEventListener("dblclick", function () {
    hoverEnabled = !hoverEnabled; // Toggle the flag
    console.log(`Hover effects ${hoverEnabled ? 'enabled' : 'disabled'}`);
});




drawGrid(16);



